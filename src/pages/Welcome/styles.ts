import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundWater} ;
    `}
    `;
export const Content = styled.View`
  height:70% ;
  `;

export const Footer = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.background}
    height:30%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    font-size: 24px;
    color: ${theme.colors.textGrayTitle}
  `}
`;

export const SubTitle = styled.Text`
 ${({theme}) => css`
    color: ${theme.colors.textGrayTitle}
    font-size: 20px;
    text-align: center;
    margin-top:5px ;
  `}
`;
