import Link from "next/link";
import React from "react";
import {
  MenuWrapper,
  NavbarLink,
  NavbarWrapper,
  NavbarLinkWrapper,
  HomeLogo,
  Logo,
} from "./StyledNavbar";
import { useSelector, useDispatch } from "react-redux";
import { disconnect } from "../../store/actions/register.actions";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.register);

  const logout = () => {
    dispatch(disconnect());
    router.replace("/");
  };

  return (
    <NavbarWrapper>
      <MenuWrapper>
        <HomeLogo>
          <Link href="/">
            <Logo>
              <i className="fas fa-code"></i>
            </Logo>
          </Link>
          Dev Connector
        </HomeLogo>
        {!registerState.loading && registerState.isAuth ? (
          <NavbarLinkWrapper>
            <NavbarLink>
              <Link href="/dashboard/dashboard">Dashboard</Link>
            </NavbarLink>
            <NavbarLink onClick={logout}>
              <p>Logout</p>
            </NavbarLink>
          </NavbarLinkWrapper>
        ) : (
          <NavbarLinkWrapper>
            <NavbarLink>
              <Link href="/developers/developers">Developers</Link>
            </NavbarLink>
            <NavbarLink>
              <Link href="/auth/register">Register</Link>
            </NavbarLink>
            <NavbarLink>
              <Link href="/auth/login">Login</Link>
            </NavbarLink>
          </NavbarLinkWrapper>
        )}
      </MenuWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
