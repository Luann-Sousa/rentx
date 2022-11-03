import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';


export const Container = styled.View`
  flex: 1;
  background-color: ${( { theme })=> theme.colors.background_primary};
`;
export const HeaderContent = styled.View`
  width: 100%;
  height: 130px;
  background-color: ${( { theme })=> theme.colors.header};

  justify-content: flex-end;

`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 32px 24px;
`;
export const TotalCars = styled.Text`
  font-family: ${ ({ theme })=> theme.fonts.primary_inter_400};
  font-size: 15px;

  color:  ${ ({ theme })=> theme.colors.text};
`;
export const CarList = styled(FlatList as new ()=> FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding:  24,
  },
  showsVerticalScrollIndicator: false
})`
`;
export const MyCarsButton = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;

  justify-content: center;
  align-items: center;

  background-color:  ${ ({ theme })=> theme.colors.main};
  border-radius: 30px;

  position: absolute;
  bottom: 13px;
  right: 22px;

`;


