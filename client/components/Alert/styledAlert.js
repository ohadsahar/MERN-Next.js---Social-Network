import styled from 'styled-components';

export const AlertParagraph = styled.p`
    background-color: ${props => props.danger ? 'red' : 'green'};
    color: ${props => props.theme.colors.white};
    margin: 0.5rem .5rem;
    border-radius: .4rem;
    padding: .5rem;
`;