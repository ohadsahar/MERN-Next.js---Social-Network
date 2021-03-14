import React, { Fragment, useEffect } from "react";
import { getCurrentProfile } from "../../store/actions/profile.actions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { DashboardWrapper, LinkWrapper } from "../../components/styledDashboard";
import Link from "next/link";
import DashboardActions from "../../components/DashboardActions/dashboard-actions";

const Dashboard = () => {
  const profileState = useSelector((state) => state.profile);
  const profile = profileState.profile;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  return profileState.loading && profileState.profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <DashboardWrapper>
        <h1>Dashboard</h1>
      </DashboardWrapper>
      {profileState.profile === null ? (
        <Fragment>
          <p>You have not setup a profile, please add some info</p>
          <Link href="/dashboard/profile/create-profile">Create Profile</Link>
        </Fragment>
      ) : (
        <DashboardWrapper>
          <p>Welcome {profile?.user && profile?.user?.name}</p>
          <DashboardActions/>
        </DashboardWrapper>
      )}
    </Fragment>
  );
};

export default Dashboard;
