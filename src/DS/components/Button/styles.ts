import styled from "styled-components";
import { DS_Colors } from "../../colors";

export const Container = styled.button`
  min-width: 120px;
  height: 48px;
  gap: 8px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${DS_Colors.primary[900]};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${DS_Colors.primary[700]};
  }
`;
