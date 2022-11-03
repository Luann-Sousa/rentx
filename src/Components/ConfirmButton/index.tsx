import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { 
  Container,
  TextButton
} from './styles';

interface Props extends TouchableOpacityProps{
  title: string;
}
export function ConfirmButton({ title, ...rest }: Props){
  return(
    <Container {...rest}>
      <TextButton> { title } </TextButton>
    </Container>
  )
}