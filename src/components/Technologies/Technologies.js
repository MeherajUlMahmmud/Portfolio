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
					<ListTitle>ML/AI Technologies</ListTitle>
					<ListParagraph>
						TensorFlow, Keras, PyTorch, OpenCV, NLTK, NumPy, Pandas, Matplotlib, Scikit-Learn, Selenium, Beautiful Soup, Streamlit
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Frontend Technologies</ListTitle>
					<ListParagraph>
						React.js, Next.js,Bootstrap, Tailwind CSS, Material UI, Styled Components, REST API, GraphQL, WebSockets
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Backend Technologies</ListTitle>
					<ListParagraph>
						Django, Django REST Framework, Flask, FastAPI, Node.js, Express.js, Spring Boot, Microservices, GraphQL, WebSockets
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
						Git, GitHub, Heroku, AWS, GCP, LaTeX, Oracle Apex
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
