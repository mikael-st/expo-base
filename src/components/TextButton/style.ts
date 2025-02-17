import styled from "styled-components/native";
import { Palette } from "../../../assets/palette";

export const Button = styled.TouchableOpacity`
  padding: 12px;

  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background-color: ${Palette.blue};

  margin: 16px;
`;

export const Label = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-weight: 500;
  font-size: 16px;
  color: ${Palette.white};
`;