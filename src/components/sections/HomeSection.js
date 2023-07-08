import React from 'react'
import { person_images } from '../../constants'

function HomeSection() {
	return (
		<div className="parallax-section" id='home'>
			<div className="parallax-content">
				<div className='home__content__portion'>
					<img src={person_images[0]} alt='profile' className='home__img' />
					<p>Hello, I'm</p>
					<h1>Meheraj</h1>
					<p>I deliver exceptional user experiences and bring innovative ideas to life, resulting in increased user engagement, customer satisfaction, and business success</p>
				</div>
			</div>
		</div>
	)
}

export default HomeSection