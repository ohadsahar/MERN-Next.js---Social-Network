import styled from 'styled-components';

export const RegisterFormWrapper = styled.div`
    height:100vh;
`;

export const RegisterFormInfo = styled.div`
    height:100%;
    display:flex;
    align-items:flex-start;
    justify-content:start;
`;

export const FormWrapper = styled.form`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

export const FormGroup = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`;

export const FormTitle = styled.h1`
color:${props => props.theme.colors.main};
font-weight:400;
font-size:3.25rem;
letter-spacing:0.4rem;
`;

export const FormHeader = styled.div`
    display:flex;
`;
export const UserIcon = styled.i`
    color:${props => props.theme.colors.black};
    font-size:1.25rem;
`;

export const Paragraph = styled.p`
    color:${props => props.theme.colors.black};
    font-size:1.25rem;
`;

export const Input = styled.input`
    margin-bottom:1rem;
    width:100%;
    display:block;
    padding:0.4rem;
    font-size:1.2rem;
    border:1px solid #ccc;
`;

export const Button = styled.button`
 
    background-color:${props => props.theme.colors.main};
    outline:none;
    color:white;
    border:none;
    padding:0.4rem;
    width:6rem;
`;


export const FormFooter = styled.footer`
    font-size:0.8rem
    ${Paragraph} {
        font-size:0.8rem;
    }
`;

export const Span = styled.span`
color:${props => props.theme.colors.main};
`;

