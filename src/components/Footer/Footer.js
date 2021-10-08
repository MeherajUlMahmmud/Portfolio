import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
      <FooterWrapper id="contact">
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:+8801814325624">+880 1814 325624</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:meherajmahmmd@gmail.com">
              meherajmahmmd@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>If you can dream it, you can do it.</Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons
              href="https://github.com/MeherajUlMahmmud"
              target="_blank"
            >
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons
              href="https://www.linkedin.com/in/meherajulmahmmud/"
              target="_blank"
            >
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons
              href="https://www.facebook.com/meherajulmahmmud/"
              target="_blank"
            >
              <AiFillFacebook size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
  );
};

export default Footer;
