import React, { useState } from "react";
import {
  Paragraph,
  RegisterFormWrapper,
  RegisterFormInfo,
  FormWrapper,
  FormHeader,
  UserIcon,
  Input,
  Button,
  FormFooter,
  Span,
  FormGroup,
  FormTitle,
} from "../../components/styledLogin";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Meta from "../../components/Meta/Meta";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/register.actions";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.register.isAuth);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  if (isAuth) {

    router.replace("/dashboard/dashboard");
  }

  return (
    <div>
      <Meta title="Login" />
      <RegisterFormWrapper>
        <RegisterFormInfo>
          <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>Login</FormTitle>
            <FormHeader>
              <UserIcon>
                <i className="fas fa-user"></i>
              </UserIcon>
              <Paragraph>Sign into your account</Paragraph>
            </FormHeader>
            <FormGroup>
              <Input
                ref={register({ required: true })}
                name="email"
                placeholder="email"
              ></Input>
              {errors.email && errors.email.type === "required" && (
                <span>This is required</span>
              )}
              <Input
                type="password"
                ref={register({ required: true })}
                name="password"
                placeholder="password"
              ></Input>
              {errors.password && errors.password.type === "required" && (
                <span>This is required</span>
              )}
            </FormGroup>

            <Button>Login</Button>
            <FormFooter>
              <Paragraph>
                Don׳t have an account ?
                <Link href="/auth/register">
                  <Span>Login</Span>
                </Link>
              </Paragraph>
            </FormFooter>
          </FormWrapper>
        </RegisterFormInfo>
      </RegisterFormWrapper>
    </div>
  );
};

export default Login;
