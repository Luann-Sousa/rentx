import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
export const Container = styled.View`
  flex: 1;
  
  align-items: center;

  background-color: ${({theme})=> theme.colors.background_primary};
`;
export const Header = styled.View`
  width: 100%;
  height: 350px;
  justify-content: center;
  padding: 34px 10px 0 24px;

  background-color: ${ ({ theme })=> theme.colors.header};

`;
export const Title = styled.Text`
  font-family: ${ ({ theme })=> theme.fonts.secudary_archivo_500};
  font-size: ${RFValue(30)}px;
  color: ${ ({ theme })=> theme.colors.shape};

  margin-top: 24px;
`;
export const SubTitle = styled.Text`
  font-family: ${ ({ theme })=> theme.fonts.secudary_archivo_400};
  font-size: ${RFValue(15)}px;
  color: ${ ({ theme })=> theme.colors.shape};

  margin-top: 24px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;

  padding: 0 16px;
`;
export const Appointments = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px 0;
`;
export const AppointmentsTitle = styled.Text`
  font-family: ${ ({ theme })=> theme.fonts.primary_inter_400};
  font-size: ${RFValue(15)}px;
  color: ${ ({ theme })=> theme.colors.text};
`;
export const AppointmentsQuantity = styled.Text`
  font-family: ${ ({ theme })=> theme.fonts.primary_inter_400};
  font-size: ${RFValue(15)}px;
  color: ${ ({ theme })=> theme.colors.title};
`;


export const CarWrapper = styled.View`
  margin-bottom: 16px;
`;
export const CarFooter = styled.View`
  width: 100%;
  padding: 12px;

  margin-top: -10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${ ({ theme })=> theme.colors.background_secundary};
`;
export const CarFooterTitle = styled.Text`
  font-family: ${ ({ theme })=> theme.fonts.secudary_archivo_500};
  font-size: ${RFValue(10)}px;
  color: ${ ({ theme })=> theme.colors.text_datail};
`;
export const CarFootePeriod = styled.View`
 flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const CarFooterDate = styled.Text`
  font-family: ${ ({ theme })=> theme.fonts.primary_inter_400};
  font-size: ${RFValue(13)}px;
  color: ${ ({ theme })=> theme.colors.title};
`;