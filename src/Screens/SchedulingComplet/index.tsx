import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import LogoSVG from '../../Assets/logo_background_gray.svg';
import DoneSVG from '../../Assets/done.svg';

import { ConfirmButton } from '../../Components/ConfirmButton';
import { 
  Container,
  Content,
  Title,
  Mensager,
  Footer
} from './styles';

//TIPAGENS ROTAS
import { RootStackParamList } from '../../Routes/stack.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type homeScrenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function SchedulingComplet(){
  const { width  } = useWindowDimensions();
  const navigation = useNavigation<homeScrenProp>();

  function handleConfirm(){
        navigation.navigate('Home');
  };
  return(
    <Container>
      <LogoSVG 
        width={width}
      />

      <Content>
        <DoneSVG 
          width={80}
          height={80}
        />
        <Title> Carro alugado !</Title>
        <Mensager>
          Agora você so precisa ir {'\n'}
          até a concessionária da REXTX {'\n'}
          pegar o seu automóvel.

        </Mensager>
      </Content>

      <Footer>
        <ConfirmButton 
          title='OK'
          onPress={()=> handleConfirm()}
        />
      </Footer>

    </Container>
  )
}