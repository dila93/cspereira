import styled from 'styled-components';
export const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: orangered;
`;

export const CouchsurfingLogoContainer = styled.img`
    width: ${(props) => props.width ? props.width : 300} px;
    height: ${({height}) => height ? height : 300} px;
`;