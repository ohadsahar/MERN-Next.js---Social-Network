import styled from 'styled-components';


export const ProfileWrapper = styled.div`
display:grid;
grid-template-areas:.5fr;
grid-gap:1rem;
    padding:60px 1.5rem;
 
`;

export const ProfilesWrapper = styled.div`

`;

export const UserInfo = styled.div`

`;
export const ProfileInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:${props => props.theme.colors.main};
    padding:1.5rem;

    >img {
    width: 300px;
    margin: auto;
    padding-top:1rem;
    border-radius: 50%;
    display: block;
    }
    > h1,p {
        color:${props => props.theme.colors.white};
        margin-top:0.5rem;
    }

    >p {
        font-weight:400;
    }
    >h1 {
        letter-spacing:0.25rem;
        font-weight:700;
    }
`;

export const SocialIcons = styled.section`
display:flex;

`;

export const SocialLink = styled.div`
display:flex;
align-items:center;
i > {
    color:white;
    font-size:1.25rem;
}
`;

export const About = styled.section`
margin-left:1.25rem;
margin-top:1.25rem;

>h2 {
    color:${props => props.theme.colors.main};
    font-weight:100;
}
>p {
    font-size:0.9rem;
}

`;

export const Line = styled.div`
    height: 0.2rem;
    background-color: ${props => props.theme.colors.main};
    width: 95%;
    width: 95%;
    height: 300px;
    margin: auto;
    height: 0.1rem;
    margin-top:0.5rem;
    margin-bottom:0.5rem;
`;

export const Skills = styled.section`
display:flex;
align-items:center;
justify-content:center;
text-align:center;

`;

export const Skill = styled.div`
display:flex;
align-items:center;
line-height:2.5;

>i {
    margin-right:0.5rem;
}
`;

export const ExperienceInfo = styled.div`

`;

export const GithubRepos = styled.section`
display:flex;
flex-direction:column; 
`;

export const GithubHeader = styled.div`
    display:flex;
    align-items:center;

    >h2 {
        color:${props => props.theme.colors.main};
        font-size:1.25rem;
        font-weight:100;
    }
    >i {
        color:${props => props.theme.colors.main};
        margin-right:0.5rem;
    }
`;

export const GithubInfo = styled.div`

`;