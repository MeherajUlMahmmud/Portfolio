import React from 'react'

function ExperienceSection() {
	return (
		<div className="parallax-section" id='experience'>
			<div className="parallax-content">
				<h1>Experiences</h1>
				<div className='experience__content__portion'>
					<div className='left__portion'>
						<div className='experience__content__portion__details'>
							<ExperienceItem
								position={'Senior Officer'}
								company={'Dutch-Bangla Bank Ltd.'}
								companyUrl={'https://www.dutchbanglabank.com/'}
								duration={'June 2023 - Present'}
								description={'Technologies: Python, OpenCV, Tensorflow, Keras, PyTorch, Scikit-learn, Pandas, Numpy, Matplotlib, AWS, Java, Spring Boot, Oracle'}
							/>
							<ExperienceItem
								position={'Junior Software Engineer'}
								company={'Mirailit Ltd.'}
								companyUrl={'https://mirailit.com/'}
								duration={'Feb 2023 - May 2023'}
								description={"Technologies: Django, Django REST API, Flutter, PostgreSQL, AWS"}
							/>
							<ExperienceItem
								position={'Junior Software Engineer'}
								company={'IshQool'}
								companyUrl={'https://www.ishqool.com/'}
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

const ExperienceItem = ({ position, company, companyUrl = null, duration, description }) => {
	return (
		<div className='experience__item'>
			<div className='left__side'>
				<i className='fa fa-user icon'></i>
			</div>
			<div className='right__side'>
				<div className='experience__item__header'>
					<p className='position'>{position}</p>
					{
						companyUrl ?
							<a href={companyUrl} className='company' target='_blank' rel='noopener noreferrer'>
								{company}{" "}
								<i className='fa fa-external-link-alt'></i>
							</a>
							:
							<p className='company'>{company}</p>
					}
					<p className='duration'>{duration}</p>
				</div>
				<div className='experience__item__body'>
					<p>{description}</p>
				</div>
			</div>

		</div>
	)
}

export default ExperienceSection