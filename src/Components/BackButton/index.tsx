import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';


interface Props extends TouchableOpacityProps {
  color?: string;
};

export function BackButton({ color, ...rest }: Props){
  const theme = useTheme();
return(
      <Container
        {...rest}
      >
         <MaterialIcons 
          name="chevron-left"
          size={ 24 }
          color={ color ? color : theme.colors.text }

         />
      </Container>
)
}