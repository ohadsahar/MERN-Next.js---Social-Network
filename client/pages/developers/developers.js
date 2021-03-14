import React from "react";
import {
  ProfilesWrapper,
  ProfileWrapper,
  Skills,
  UserInfo,
} from "../../components/styledProfile";
import Link from "next/link";
const Developers = () => {
  return (
    <ProfilesWrapper>
      <h1>Developers</h1>
      <p>Browse and connect with developers</p>
      <ProfileWrapper>
        <img
          src="//www.gravatar.com/avatar/6c85cc9d4f646f8e9cd581a470e803eb?s=200&r=pg&d=mm"
          alt="profile-image"
        ></img>
        <UserInfo>
          <h2>Ohad Sahar</h2>
          <p>Developer At AnyApp</p>
          <p>Beer Sheva, Israel</p>
          <Link href="profile/profile">View Profile</Link>
        </UserInfo>
        <Skills>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              HTML
            </li>
            <li>
              <i className="fas fa-check"></i>
              CSS
            </li>
            <li>
              <i className="fas fa-check"></i>
              Javascript
            </li>
          </ul>
        </Skills>
      </ProfileWrapper>

      <ProfileWrapper>
        <img
          src="//www.gravatar.com/avatar/6c85cc9d4f646f8e9cd581a470e803eb?s=200&r=pg&d=mm"
          alt="profile-image"
        ></img>
        <UserInfo>
          <h2>Ohad Sahar</h2>
          <p>Developer At AnyApp</p>
          <p>Beer Sheva, Israel</p>
          <Link href="profile/profile">View Profile</Link>
        </UserInfo>
        <Skills>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              HTML
            </li>
            <li>
              <i className="fas fa-check"></i>
              CSS
            </li>
            <li>
              <i className="fas fa-check"></i>
              Javascript
            </li>
          </ul>
        </Skills>
      </ProfileWrapper>
    </ProfilesWrapper>
  );
};

export default Developers;
