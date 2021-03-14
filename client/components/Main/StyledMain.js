import styled from 'styled-components';

export const LandingWrapper = styled.div`
position:relative;
background:url('static/showcase.jpg') no-repeat center center/cover;
height:100vh;
`;

export const DarkOverlay = styled.div`
    height:100%;
    width:100%;
    background-color:rgba(0,0,0,0.7);
    position:absolute;
    top:0;
    left:0;
`;

export const LandingInner = styled.div`
    height:100%;
    width:80%;
    color:${props => props.theme.colors.white};
    display:flex;
    flex-direction:column;
    margin:auto;
    align-items:center;
    justify-content:center;
    text-align:center;
`;

export const LandingTitle = styled.h1`
font-size:3rem;
line-height:1;
margin-bottom:1rem;
`;

export const LandingSubtitle = styled.p`
    font-size:1rem;
    margin-bottom:1rem;
`;

export const ButtonsWrapper = styled.div`
`;

export const Button = styled.button`
display:inline-block;
outline:none;
border:none;
cursor: pointer;
margin-right:0.9rem;
padding:0.4rem 1.3rem;
font-size:1rem;
background-color: ${props => props.current ? props.theme.colors.white : props.theme.colors.main};
color:${props => props.current ? props.theme.colors.black : props.theme.colors.white};
transition:all 0.2s ease-out;

    &:hover {
        transform:scale(1.1);
    }
`;