import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<br />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I have worked with a wide variety of technologies.
		</SectionText>
		<List>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Programming Language</ListTitle>
					<ListParagraph>
						C, C++, Python, Java, Dart, JavaScript
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Front-end Technologies</ListTitle>
					<ListParagraph>
						HTML, CSS, Bootstrap, React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Back-end Technologies</ListTitle>
					<ListParagraph>
						Django, Django REST Framework, Node.js, Express.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Mobile App Development</ListTitle>
					<ListParagraph>
						Native Android, Flutter, React Native
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Database</ListTitle>
					<ListParagraph>
						MySQL, SQLite, PostgreSQL, MongoDB, Firebase, Oracle
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Misc</ListTitle>
					<ListParagraph>
						Adobe XD, Git, GitHub, Heroku, LaTeX, Oracle Apex
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
