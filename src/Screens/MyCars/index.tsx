import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { CarDTO } from '../../dtos/CarDTO';
import { Loading } from '../../Components/Load';
import { BackButton } from '../../Components/BackButton';
import { useTheme } from 'styled-components';
import { 
  Container,
  Title,
  Header,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFootePeriod,
  CarFooterDate,
  
} from './styles';
import { api } from '../../Services/api';
import { Car } from '../../Components/Car';

interface CarProps {
  id: string;
  user_id: string;
  startDate: string;
  endDate: string;
  car: CarDTO;
}

export function MyCars(){
  const theme = useTheme();
  const navigation = useNavigation();
  const [ cars, setCars ] = useState<CarProps[]>([]);
  const [ isloading, setIsloading ] = useState( true );

  function handleBack(){
    navigation.goBack();
  };

  useEffect( ()=> {
    async function fetchCars(){
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data)
      } catch (error) {
        console.log(error)
      }finally{
        setIsloading(false);
      }
    }
    fetchCars();
  }, [])
  return(
    <Container>
        <Header>
        <StatusBar 
          barStyle='light-content'
          translucent
          backgroundColor='transparent'
        />
            <BackButton 
              onPress={ ()=> handleBack()}
              color={theme.colors.shape}
            /> 
            <Title>
                Escolha uma {'\n'}
                data de inicio e {'\n'}
                fim do aluguel {'\n'}
            </Title>   
            <SubTitle>Conforto, segurança e praticidade.</SubTitle>
           
      </Header>
      { isloading ? < Loading /> : 
      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>

        </Appointments>


        <FlatList 
          data={ cars }
          keyExtractor={ item => item.id }
          showsVerticalScrollIndicator={ false }
          renderItem={ ( { item } )=> (
           <CarWrapper>
              <Car 
              data={ item.car }
              /> 
              <CarFooter>
                <CarFooterTitle>Periodo</CarFooterTitle>
                <CarFootePeriod>
                  <CarFooterDate>{ item.startDate }</CarFooterDate>
                  <AntDesign name="arrowright" size={20} color={ theme.colors.title} style={{ marginHorizontal: 10}}/>
                  <CarFooterDate>{ item.endDate }</CarFooterDate>
                </CarFootePeriod>
              </CarFooter>
           </CarWrapper>

          )}
        />
      </Content>
      }
    </Container>
  )
}