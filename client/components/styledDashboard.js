import styled from 'styled-components';


export const DashboardWrapper = styled.div`

>h1 {
    color: ${props => props.theme.colors.main};
    font-size:1.25rem;
    letter-spacing:0.15rem;
}
`;

export const LinkWrapper = styled.div`
    display:flex;
    align-items:center;
`;
