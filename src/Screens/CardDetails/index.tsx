import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BackButton } from "../../Components/BackButton";
import { Accessory } from "../../Components/Accessory";
import { Button } from "../../Components/Button";
import { ImageSlider } from "../../Components/ImageSlider";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import {
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Content,
  About,
  Accessories,
  Footer,
} from "./styles";

import { CarDTO } from "../../dtos/CarDTO";
//TIPAGENS ROTAS
import { RootStackParamList } from "../../Routes/stack.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type schedulingScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Scheduling"
>;

interface Params {
  car: CarDTO;
}
export function CarDetails() {
  const navigation = useNavigation<schedulingScreenProp>();
  const route = useRoute();
  const { car } = route.params as Params;
  function handleConfirmRental() {
    navigation.navigate("Scheduling", {
      car,
    });
  }
  function handleConfirmCallback() {
    navigation.goBack();
  }
  return (
    <Container>
      <Header>
        <BackButton onPressIn={() => handleConfirmCallback()} color="red" />
      </Header>
      <CarImages>
        <ImageSlider imageUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={() => handleConfirmRental()}
        />
      </Footer>
    </Container>
  );
}
