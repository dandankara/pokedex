import styled,{css} from "styled-components/native";

interface PokemonCardTypeColorsProps{
  species: string
}

export const ContainerCard = styled.TouchableOpacity<PokemonCardTypeColorsProps>`
${({theme, species}) => css`
    background-color: ${theme.colors.backgroundCard[species]};
    border-radius:10px;
    margin-top:30px;
    flex-direction:row;
    padding:20px ;
    `}
    `;

export const LeftSide = styled.View`
  width:50%;
  position:relative;
`;

export const ImageBgCard = styled.Image`
  position:absolute;
  width:74px;
  left:90px;
  height:32px;
  top:-10px
`;


export const PokemonId = styled.Text`
  ${({theme}) => css`
    font-weight:bold;
    font-size:12px;
    line-height:14px;
    color:${theme.colors.textGrayTitle} ;
  `}
`;

export const PokemonName = styled.Text`
  ${({theme}) => css`
    font-size: 26px;
    font-weight: bold;
    line-height: 31px;
    margin-top: 5px;
    text-transform:capitalize ;
    color: ${theme.colors.background};
  `}
`;


export const PokemonTypeContent = styled.View`
  flex-direction:row;
  `

export const PokemonType = styled.View<PokemonCardTypeColorsProps>`
  ${({theme, species}) => css`
  background-color: ${theme.colors.boxType[species]};
  padding:5px;
  width:65px;
  height:25px;
  border-radius:4px;
  margin: 10px 10px 0px 0px ;
  margin-top:5px;
  justify-content: center;
  align-items: center ;
  `}
`

export const PokemonTypeText = styled.Text`
  ${({theme}) => css`
    font-weight:500;
    font-size:14px;
    line-height:14px;
    color: ${theme.colors.background};
    text-transform:capitalize ;
    `}
    `;


export const RightSide = styled.View`
  justify-content: center;
  align-items: center;
  width:50%;
  position: relative ;
`;

export const PokemonImage = styled.Image`
  margin-top:-40px;
  width: 130px;
  height: 130px ;
`;

export const PokeBallDetail = styled.Image`
  position: absolute;
  right:-20px ;
`;
