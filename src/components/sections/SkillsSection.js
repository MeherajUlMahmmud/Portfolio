import React, { useState } from 'react'
import CustomButton from '../CustomButton/CustomButton';

function SkillsSection() {
	const [isCodingSkills, setIsCodingSkills] = useState(true);
	const [isSoftSkills, setIsSoftSkills] = useState(false);

	return (
		<div className="parallax-section" id='skills'>
			<div className="parallax-content">
				<div className='skill__content__portion'>
					<div className='top__portion'>
						<CustomButton
							text={'Coding Skills'}
							bgColor={isCodingSkills ? '#000' : '#fff'}
							textColor={isCodingSkills ? '#fff' : '#000'}
							onPress={() => {
								setIsCodingSkills(true);
								setIsSoftSkills(false);
							}}
						/>
						<CustomButton
							text={'Soft Skills'}
							bgColor={isSoftSkills ? '#000' : '#fff'}
							textColor={isSoftSkills ? '#fff' : '#000'}
							onPress={() => {
								setIsCodingSkills(false);
								setIsSoftSkills(true);
							}}
						/>
					</div>
					<div className='bottom__portion'>
						{
							isCodingSkills &&

							<>
								<SkillItem
									icon={'fa fa-arrow-pointer'}
									title={'Frontend Development'}
									details={'React.js, Next.js, Redux, Bootstrap, Material UI, Tailwind CSS, SASS, Styled Components'}
								/>
								<SkillItem
									icon={'fa fa-code'}
									title={'Backend Development'}
									details={'Node.js, Express.js, Django, Spring Boot, REST API, GraphQL'}
								/>
								<SkillItem
									icon={'fa fa-mobile'}
									title={'Mobile App Dev'}
									details={'React Native, Flutter, Android, iOS, Expo, Redux, Firebase'}
								/>
								<SkillItem
									icon={'fa fa-database'}
									title={'Database Systems'}
									details={'SQL, PostgreSQL, MySQL, MongoDB, Firebase'}
								/>
								<SkillItem
									icon={'fa fa-microchip'}
									title={'ML & AI'}
									details={'Python, Tensorflow, Keras, PyTorch, Scikit-Learn, Numpy, Pandas, Matplotlib, Seaborn, Plotly, OpenCV'}
								/>
								<SkillItem
									icon={'fa fa-server'}
									title={'Deployment & Hosting'}
									details={'AWS, GCP, Heroku, Netlify, Vercel, Git, GitHub, Bitbucket'}
								/>
							</>
						}
						{
							isSoftSkills &&

							<>
								<SkillItem
									icon={'fa fa-comments'}
									title={'Communication'}
									details={'Effective exchange of information, active listening, and ability to understand and interpret others\' needs'}
								/>
								<SkillItem
									icon={'fa fa-users'}
									title={'Collaboration'}
									details={'Working with others to achieve a common goal, ability to work in a team, and ability to compromise'}
								/>
								<SkillItem
									icon={'fa fa-exchange-alt'}
									title={'Adaptibility'}
									details={'Ability to adapt to new environments, learn new skills, and work with new people'}
								/>
								<SkillItem
									icon={'fa fa-clock'}
									title={'Time Management'}
									details={'Ability to manage time effectively, prioritize tasks, and meet deadlines'}
								/>
								<SkillItem
									icon={'fa fa-puzzle-piece'}
									title={'Problem Solving'}
									details={'Ability to identify problems, determine possible solutions, and implement the best one'}
								/>
								<SkillItem
									icon={'fa fa-lightbulb'}
									title={'Creativity'}
									details={'Ability to think outside the box, come up with new ideas, and find unique solutions to problems'}
								/>
							</>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

const SkillItem = ({ icon, title, details }) => {
	return (
		<div className='skill__item'>
			<div className='skill__item__icon'>
				<i className={icon}></i>
			</div>
			<div className='skill__item__details'>
				<div className='skill__item__title'>
					{title}
				</div>
				{details}
			</div>
		</div>
	)
}

export default SkillsSection
