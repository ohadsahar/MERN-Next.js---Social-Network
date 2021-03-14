import React, { Fragment } from "react";
import Meta from "../../components/Meta/Meta";
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
} from "../../components/styledRegister";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { DarkOverlay } from "../../components/Main/StyledMain";
import { useDispatch, useSelector } from "react-redux";
import { registerSuccess } from "../../store/actions/register.actions";
import { useRouter } from "next/router";

const Register = () => {
  const isAuth = useSelector((state) => state.register.isAuth);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (data) => {
    dispatch(registerSuccess(data));
  };

  if (isAuth) {
    router.replace("/dashboard/dashboard");
  }
  
  return (
    <Fragment>
      <Meta title="Register" />
      <RegisterFormWrapper>
        <DarkOverlay>
          <RegisterFormInfo>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
              <FormTitle>Sign Up</FormTitle>
              <FormHeader>
                <UserIcon>
                  <i className="fas fa-user"></i>
                </UserIcon>
                <Paragraph>Create Your Account</Paragraph>
              </FormHeader>
              <FormGroup>
                <Input
                  ref={register({ required: true })}
                  name="name"
                  placeholder="Full Name"
                ></Input>
                {errors.fullName && errors.fullName.type === "required" && (
                  <span>This is required</span>
                )}
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

              <Button>Submit</Button>
              <FormFooter>
                <p> Already have an account ?</p>
                <Link href="/auth/login">
                  <Span>Login</Span>
                </Link>
              </FormFooter>
            </FormWrapper>
          </RegisterFormInfo>
        </DarkOverlay>
      </RegisterFormWrapper>
    </Fragment>
  );
};

export default Register;
