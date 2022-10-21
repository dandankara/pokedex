import styled, {css} from "styled-components/native";

import {Dimensions} from 'react-native'

const widthDimensionsDevice = Dimensions.get('window').width

export const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    background-color: ${theme.colors.background}; 
    `}
`;

export const Header = styled.ImageBackground`
${({theme}) => css`
    height:220px;
    width: ${widthDimensionsDevice}px ;
    background-color: ${theme.colors.background};
    margin-left: -20px ;
  `}
`;

export const TitleHeader = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.textGrayTitle};
    font-size: 28px;
    text-align: center;
    line-height:32px ;
  `}
`;