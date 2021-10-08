import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopaadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Meheraj's Portfolio
      </SectionTitle>
      <SectionText style={{ alignItems: "flex-end" }}>
        I am a Backend Developer with a passion for building web applications
        and learning new technologies.
        <br />
        I have a strong background in Backend Development and Cross
        Platform Mobile App Development.
        <br />
        I have worked with a wide range of technologies. Currently I am
        looking for a position in the web development industry.
      </SectionText>
      {/* <Button onClick={() => window.location = "https://google.com"}>Leran More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
