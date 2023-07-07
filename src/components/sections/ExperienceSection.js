import React from 'react'

function ExperienceSection() {
	return (

		<div className="parallax-section" id='experience'>
			<div className="parallax-content">
				<div className='experience__content__portion'>
					<div className='left__portion'>
						<div className='experience__content__portion__details'>
							<ExperienceItem
								position={'Senior Office'}
								company={'Dutch-Bangla Bank Ltd.'}
								duration={'June 2023 - Present'}
								description={'Technologies: Python, OpenCV, Tensorflow, Keras, PyTorch, Scikit-learn, Pandas, Numpy, Matplotlib, AWS, Java, Spring Boot, Oracle'}
							/>
							<ExperienceItem
								position={'Junior Software Engineer'}
								company={'Mirailit Ltd.'}
								duration={'Feb 2023 - May 2023'}
								description={"Technologies: Django, Django REST API, Flutter, PostgreSQL, AWS"}
							/>
							<ExperienceItem
								position={'Junior Software Engineer'}
								company={'iShqool'}
								duration={'Jan 2022 - Jan 2023'}
								description={'Technologies: Node.js, Express.js, React.js, React Native, PostgreSQL, Heroku, AWS'}
							/>
						</div>
					</div>
					<div className='right__portion'>
						<img src='https://unsplash.it/500/500' alt='profile' className='experience__img' />
					</div>
				</div>
			</div>
		</div>
	)
}

const ExperienceItem = ({ position, company, duration, description }) => {
	return (
		<div className='experience__item'>
			<div className='experience__item__header'>
				<p className='position'>{position}</p>
				<p className='company'>{company}</p>
				<p className='duration'>{duration}</p>
			</div>
			<div className='experience__item__body'>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default ExperienceSection