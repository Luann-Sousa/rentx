import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secundary};
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
export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})``;
export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 38px; ;
`;
export const Description = styled.View``;
export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secudary_archivo_400};
  color: ${({ theme }) => theme.colors.text_datail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secudary_archivo_400};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(25)}px;
`;
export const Rent = styled.View`
  font-family: ${({ theme }) => theme.fonts.secudary_archivo_400};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(25)}px;
`;
export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secudary_archivo_400};
  color: ${({ theme }) => theme.colors.text_datail};
  font-size: ${RFValue(10)}px;
`;
export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secudary_archivo_400};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(25)}px;
`;
export const About = styled.Text`
  text-align: justify;
  font-family: ${({ theme }) => theme.fonts.primary_inter_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;

  margin-top: 23px;
`;
export const Accessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`;
export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secundary};

  padding: 24px 24px;
  padding-bottom: ${getBottomSpace() + 24}px;
`;
