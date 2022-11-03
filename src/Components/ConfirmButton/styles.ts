import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  background-color: ${({theme})=> theme.colors.shape_dark};
  width: 80px;
  height: 56px;

  align-items: center;
  justify-content: center;

`
export const TextButton = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_inter_500};
  color: ${({theme})=> theme.colors.shape};
  font-size: ${RFValue(15)}px;
`