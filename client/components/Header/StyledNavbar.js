import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
    background-color:${props => props.theme.colors.black};
    display:flex;
    align-items:center;
    justify-content:flex-end;
    position:fixed;
    padding:0.7rem 2rem;
    z-index:1;
    width:100%;
    border-bottom:1px solid ${props => props.theme.colors.main};
    opacity:0.9;
`;

export const MenuWrapper = styled.ul`
    margin-right:0.95rem;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const HomeLogo = styled.a`
    color:white;
    font-size:1.25rem;
    font-weight:400;
    cursor: pointer;
`;

export const Logo = styled.i`
    color:${props => props.theme.colors.white};
    font-size:1.25rem;
    margin-right:0.35rem;
`;

export const NavbarLinkWrapper = styled.ul`
    display:flex;
`;
export const NavbarLink = styled.li`
    color:${props => props.theme.colors.white};
    margin-left:0.95rem;

    &:hover {
        color:${props => props.theme.colors.main};
    }
`;

