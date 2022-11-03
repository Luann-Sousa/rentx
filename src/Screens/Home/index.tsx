import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { CarDTO } from '../../dtos/CarDTO';
import { Car } from '../../Components/Car';
import { Loading } from '../../Components/Load';
import { api } from '../../Services/api';
import LogoSVG from '../../Assets/logo.svg';
import { 
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  MyCarsButton,
  } from './styles';

  //TIPAGENS ROTAS
import { RootStackParamList } from '../../Routes/stack.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';
type homeScrenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;



export function Home(){
  const theme = useTheme();
  const [ cars, setCars] = useState<CarDTO[]>([]);
  const [ loading, setLoading ] = useState(true);

  const navigation = useNavigation<homeScrenProp>();
  
  function handleCarDetails(car: CarDTO){
    navigation.navigate('CarDetails', { car });
  };

  function handleNavigationMyCars(){
    navigation.navigate('MyCars');
  };

  useEffect( ()=> {
    async function fetchCars(){
      try {
        const response: any = await api.get('/cars')
        console.log("kc")
        console.log(response)
        setCars(response.data);
      
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    }

    fetchCars();
  }, []);

  return(
  <Container>
      <StatusBar 
        style='light' 
        backgroundColor='transparent'
      />
      <HeaderContent>
        <Header>
          <LogoSVG 
            width={ RFValue(108)}
            height={ RFValue(12)}
          />
          <TotalCars>Total {cars.length} Carros</TotalCars>
        </Header>
      </HeaderContent>
      {
          loading ? <Loading/> :
          <CarList 
          data={cars}
          keyExtractor={ item => item.id}
          renderItem={ ({item})=>  <Car data={ item }
          onPress={ ()=> handleCarDetails(item)}
          />}
        />
      }

      <MyCarsButton onPress={ ()=> navigation.navigate('MyCars')}>
        <Ionicons 
          name="ios-car-sport"
          size={32} 
          color={theme.colors.shape}
        />
      </MyCarsButton>

  </Container>
  )
}
