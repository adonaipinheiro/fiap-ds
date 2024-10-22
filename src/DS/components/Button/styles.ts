import styled, { css } from "styled-components";
import { DS_Spacing } from "../../spacing";
import { DS_Colors } from "../../colors";
import { DS_ButtonProps } from ".";

export const Container = styled.button<DS_ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  height: 48px;

  gap: ${DS_Spacing.s2};
  padding: ${DS_Spacing.s3};
  border-radius: ${DS_Spacing.s2};
  transition: background-color 0.2s ease;

  ${props => props.state === "default" && css`
    background-color: ${DS_Colors.primary[900]};
    &:hover {
      background-color: ${DS_Colors.primary[700]};
    }
  `}

  ${props => props.state === "outline" && css`
    background-color: ${DS_Colors.primary[700]};
    border: ${DS_Spacing.s1} solid ${DS_Colors.primary[900]};
    &:hover {
      background-color: ${DS_Colors.primary[600]};
    }
  `}
`;

