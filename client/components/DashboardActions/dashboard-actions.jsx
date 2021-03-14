import React from "react";
import { DashboardActionsWrapper, LinkWrapper } from "./styledDashboardActions";
import Link from "next/link";

const DashboardActions = () => {
  return (
    <DashboardActionsWrapper>
      <LinkWrapper>
        <Link href="/dashboard/profile/edit-profile">Edit Profile</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="/add-experience">Add Experiance</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="/add-education">Add Education</Link>
      </LinkWrapper>
    </DashboardActionsWrapper>
  );
};

export default DashboardActions;
