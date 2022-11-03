import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Text } from 'react-native';



interface DateValueProps{
  selected: boolean;
};
export const Container = styled.View`
  flex: 1;
  background-color: ${ ({ theme })=> theme.colors.background_secundary};
`;
export const Header = styled.View`
  width: 100%;
  height: 350px;
  justify-content: center;
  padding: 34px 10px 0 24px;

  background-color: ${ ({ theme })=> theme.colors.header};

  /* padding-top: ${getStatusBarHeight() +30}px; */

`;
export const Title = styled.Text`
  font-family: ${ ({ theme })=> theme.fonts.secudary_archivo_500};
  font-size: ${RFValue(34)}px;
  color: ${ ({ theme })=> theme.colors.shape};

  margin-top: 24px;
`;
export const  RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`;
export const  DateInfo = styled.View`
  width: 30%;
`;
export const  DateTitle = styled.Text`
  font-family: ${ ({ theme })=> theme.fonts.secudary_archivo_500};
  font-size: ${RFValue(10)}px;
  color: ${ ({ theme })=> theme.colors.text};
`;  
export const DateValue = styled(Text)<DateValueProps>`
 font-family: ${ ({ theme })=> theme.fonts.primary_inter_500};
  font-size: ${RFValue(15)}px;
  color: ${ ({ theme })=> theme.colors.shape};
  
  ${( { selected , theme })=> !selected && css`
    border-bottom-width: 1px;
    border-bottom-color: ${ ({ theme })=> theme.colors.text};
    padding-bottom: 5px;
  `}
`; 
export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false,
})``
export const Footer = styled.View`
  padding: 24px;
`;
