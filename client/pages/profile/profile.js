import React from "react";
import {
  ProfileWrapper,
  ProfileInfo,
  SocialIcons,
  SocialLink,
  About,
  Line,
  Skills,
  Skill,
  ExperienceInfo,
  GithubRepos,
  GithubInfo,
  GithubHeader,
} from "../../components/styledProfile";
import Link from "next/link";

const Profile = () => {
  return (
    <ProfileWrapper>
      <Link href="/developers/developers">Back to Profiles</Link>
      <ProfileInfo>
        <img src="//www.gravatar.com/avatar/6c85cc9d4f646f8e9cd581a470e803eb?s=200&r=pg&d=mm"></img>
        <h1>Ohad Sahar</h1>
        <p>Developer At Any App</p>
        <p> Beer Sheva, Israel</p>
        <SocialIcons>
          <SocialLink>
            <Link href="!#">
              <i className="fas fa-globe fa-2x"></i>
            </Link>
          </SocialLink>
          <SocialLink>
            <Link href="!#">
              <i className="fab fa-twitter fa-2x"></i>
            </Link>
          </SocialLink>
          <SocialLink>
            <Link href="!#">
              <i className="fab fa-facebook fa-2x"></i>
            </Link>
          </SocialLink>
          <SocialLink>
            <Link href="!#">
              <i className="fab fa-linkedin fa-2x"></i>
            </Link>
          </SocialLink>
          <SocialLink>
            <Link href="!#">
              <i className="fab fa-instagram fa-2x"></i>
            </Link>
          </SocialLink>
        </SocialIcons>
      </ProfileInfo>

      <About>
        <h2>Ohad Bio׳s</h2>
        <p>
          Lorem Ipsum dolerLorem Ipsum dolerLorem Ipsum dolerLorem Ipsum
          dolerLorem Ipsum dolerLorem Ipsum doler Lorem Ipsum doler Lorem Ipsum
          dolerLorem Ipsum doler
        </p>
        <Line></Line>
        <h2>Skill Set</h2>
        <Skills>
          <Skill>
            <i className="fas fa-check"></i>Html
          </Skill>
          <Skill>
            <i className="fas fa-check"></i>Css
          </Skill>
          <Skill>
            <i className="fas fa-check"></i>Javascript
          </Skill>
          <Skill>
            <i className="fas fa-check"></i>Python
          </Skill>
        </Skills>

        <Line></Line>
        <h2>Experience</h2>
        <ExperienceInfo>
          <h3>Microsoft</h3>
          <p>October 2019-2020</p>
          <p>
            Position:<strong>Fullstack Developer</strong>
          </p>
          <p>
            Description:<strong>Lorem Ipsum</strong>
          </p>
        </ExperienceInfo>
        <Line></Line>
        <h2>Education</h2>
        <ExperienceInfo>
          <h3>SCE</h3>
          <p>October 2019-2020</p>
          <p>
            Degree:<strong>Fullstack Developer</strong>
          </p>
          <p>
            Field of study:<strong>Lorem Ipsum</strong>
          </p>
        </ExperienceInfo>
        <Line></Line>
        <GithubRepos>
          <GithubHeader>
            <i className="fab fa-github"></i>
            <h2>Github Repos</h2>
          </GithubHeader>

          <GithubInfo>
            <ul>
              <li>Stars: 64</li>
              <li>Watchers: 38</li>
              <li>Forks: 25</li>
            </ul>
          </GithubInfo>
        </GithubRepos>
      </About>
    </ProfileWrapper>
  );
};

export default Profile;
