import styled,{css} from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({theme}) => css`
    width:60%;
    background-color: ${theme.colors.backgroundWater};
    justify-content: center ;
    align-items: center ;
    height:50px ;
    margin-top:30px ;
    border-radius: 10px;
  `}  
`; 

export const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-size:24px;
  ${({theme}) => css`
    color:${theme.colors.background} ;
  `}
`;