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
        I am a Software Engineer with a passion for <span style={{ color: "#00adb5" }}>Machine Learning</span> and <span style={{ color: "#00adb5" }}>Web Development</span>.
        <br />
        I have a skillset of <span style={{ color: "#00adb5" }}>Frontend Frameworks</span>, <span style={{ color: "#00adb5" }}>Backend Frameworks</span>, <span style={{ color: "#00adb5" }}>Mobile App Frameworks</span>, <span style={{ color: "#00adb5" }}>Artificial Intelligence</span>, <span style={{ color: "#00adb5" }}>Machine Learning</span>, <span style={{ color: "#00adb5" }}>Deep Learning</span>, <span style={{ color: "#00adb5" }}>Computer Vision</span>, and <span style={{ color: "#00adb5" }}>Natural Language Processing</span>
      </SectionText>
      {/* <Button onClick={() => window.location = "https://google.com"}>Leran More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
