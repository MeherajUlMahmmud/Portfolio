import Link from "next/link";
import React from "react";
import { blogs } from "../../constants/constants";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxTitle, BoxDescription } from "./BlogsStyles";

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
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "5px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              }}
            />
            <BoxTitle>{card.title.substring(0, 30)}...</BoxTitle>
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
              {card.description.substring(0, 40)}...
            </BoxDescription>
          </Box>
        </a>
      ))}
    </Boxes>
  </Section>
);

export default Blogs;
