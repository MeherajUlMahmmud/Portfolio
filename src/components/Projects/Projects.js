import React from "react";
import { projects } from "../../constants/constants";
import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Img,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
} from "./ProjectsStyles";

const Projects = () => (
	<Section nopadding id="projects">
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{projects.map((project, index) => (
				<BlogCard key={index}>
					{
						project?.image && (
							<Img src={project?.image} alt={project.title} />
						)
					}

					<TitleContent>
						<HeaderThree title>{project.title}</HeaderThree>
						<Hr />
					</TitleContent>
					<CardInfo className="card-info">
						{project.description}
					</CardInfo>
					<CardInfo className="card-info">
						{project?.credentials && (
							<>
								<p>Login Credentials</p>
								<p>{project.credentials.username}</p>
								<p>{project.credentials.password}</p>
							</>
						)}
					</CardInfo>
					<br />
					<div>
						<TitleContent>Stack</TitleContent>
						<TagList>
							{project.tags.map((tag, index) => (
								<Tag key={index}>{tag}</Tag>
							))}
						</TagList>
					</div>
					<UtilityList>
						{
							project?.source && (
								<ExternalLinks href={project.source} target="_blank">
									Source Code
								</ExternalLinks>
							)
						}
						{
							project?.visit && (
								<ExternalLinks href={project.visit} target="_blank">
									Visit
								</ExternalLinks>
							)
						}
					</UtilityList>
				</BlogCard>
			))}
		</GridContainer>
	</Section>
);

export default Projects;
