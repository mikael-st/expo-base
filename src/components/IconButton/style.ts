import styled from "styled-components/native";
import { Palette } from "../../../assets/palette";

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 8px;
  border: 1px solid ${Palette.gray};

  padding: 12px;

  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const Label = styled.Text`
  font-family: 'Poppins_600SemiBold';
  color: ${Palette.red};
`;