import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1; 
  background-color: ${ ( { theme })=> theme.colors.background_secundary};
 `;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
  position: absolute;

`;
export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 6}px;
`;
export const Content =styled.ScrollView.attrs({
  contentContainerStyle:{
    padding: 24,
    alignItems: "center"
  },
  showsVerticalScrollIndicator: false,
})``;
export const Details =styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top:  38px;;
`;
export const Description =styled.View`
`;
export const Brand =styled.Text`
  font-family: ${({theme})=> theme.fonts.secudary_archivo_400};
  color: ${({ theme})=> theme.colors.text_datail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase ;
`;
export const Name =styled.Text`
  font-family: ${({theme})=> theme.fonts.secudary_archivo_400};
  color: ${({ theme})=> theme.colors.title};
  font-size: ${RFValue(25)}px;
`;
export const Rent =styled.View`
  font-family: ${({theme})=> theme.fonts.secudary_archivo_400};
  color: ${({ theme})=> theme.colors.title};
  font-size: ${RFValue(25)}px;
`;
export const Period =styled.Text`
  font-family: ${({theme})=> theme.fonts.secudary_archivo_400};
  color: ${({ theme})=> theme.colors.text_datail};
  font-size: ${RFValue(10)}px;
`;
export const Price =styled.Text`
  font-family: ${({theme})=> theme.fonts.secudary_archivo_400};
  color: ${({ theme})=> theme.colors.main};
  font-size: ${RFValue(25)}px;
`;
export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${( { theme })=> theme.colors.line};
  padding-bottom: 16px;

  margin-top:40px;
`;
export const CalendarIcon = styled.View`
  width: 48px;
  height: 48px;

  background-color: ${({theme })=> theme.colors.main} ;

  align-items: center;
  justify-content: center;
`;
export const DateInfo = styled.View`

`;
export const DateTitle = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_inter_500};
  color: ${({ theme})=> theme.colors.text_datail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;
export const DateValue = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_inter_500};
  color: ${({ theme})=> theme.colors.text_datail};
  font-size: ${RFValue(15)}px;
`;
export const RentalPrice  = styled.View`
  width: 100%;

  margin-top: 16px;
`;
export const  RentalPriceLabel  = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_inter_500};
  color: ${({ theme})=> theme.colors.text_datail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;
export const RentalPriceDetails  = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const  RentalPriceQuota  = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_inter_500};
  color: ${({ theme})=> theme.colors.title};
  font-size: ${RFValue(15)}px;
`;
export const RentalPriceTotal  = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_inter_500};
  color: ${({ theme})=> theme.colors.sucess};
  font-size: ${RFValue(24)}px;
`;
export const Acessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  align-items: center;

  margin-top: 16px;

`;
export const Footer = styled.View`
  width: 100%;
  background-color: ${({theme})=> theme.colors.background_secundary};

  padding: 24px 24px;
  padding-bottom: ${getBottomSpace() + 24}px;
`;

