import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme})=> theme.colors.header};
`;
export const  Content  = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding-bottom: 80px;
`;
export const Title  = styled.Text`
  font-family: ${ ({ theme })=> theme.fonts.secudary_archivo_600};
  font-size: ${RFValue(30)}px;
  color: ${ ({ theme })=> theme.colors.shape};

  margin-top: 40px;

`;
export const  Mensager  = styled.Text`
  font-family: ${ ({ theme })=> theme.fonts.secudary_archivo_400};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  color: ${ ({ theme })=> theme.colors.text_datail};

  text-align: center;

  margin-top: 16px;
`;
export const Footer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
`;