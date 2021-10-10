import React from "react";
import { blogs } from "../../constants/constants";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxImage, BoxTitle, BoxDescription } from "./BlogsStyles";

const Blogs = () => (
  <Section id="blogs">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Blogs</SectionTitle>
    <Boxes>
      {blogs.map((card, index) => (
        <a href={card.source} target="_blank">
          <Box key={index}>
            <BoxImage
              src={card.image}
              alt={card.title}
            />
            <BoxTitle>{card.title.substring(0, 28)}...</BoxTitle>
            <hr
              style={{
                width: "100%",
                height: "2px",
                marginTop: "5px",
                marginBottom: "5px",
                backgroundColor: "black",
                border: "none",
              }}
            />
            <BoxDescription>
              {card.description.substring(0, 45)}...
            </BoxDescription>
          </Box>
        </a>
      ))}
    </Boxes>
  </Section>
);

export default Blogs;
