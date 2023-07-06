import React, { useEffect } from 'react';
import './Parallax.scss'; // Import your CSS styles
import { images } from './constants';
import CustomButton from './components/CustomButton/CustomButton';

const Parallax = () => {
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const parallaxElements = document.querySelectorAll('.parallax-section');

			parallaxElements.forEach((element, index) => {
				const speed = element.dataset.speed;

				element.style.backgroundPositionY = `${currentScrollY * speed}px`;
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			{/* Parallax section 1 */}
			<div className="parallax-section" style={{ backgroundImage: `url(${images[0]})` }}>
				<div className="parallax-content">
					<div className='home__content__portion'>
						<p>Hello, I'm</p>
						<h1>Meheraj</h1>
						<p>I deliver exceptional user experiences and bring innovative ideas to life, resulting in increased user engagement, customer satisfaction, and business success</p>
					</div>
				</div>
			</div>

			{/* Parallax section 2 */}
			<div className="parallax-section" style={{ backgroundImage: `url(${images[0]})` }}>
				<div className="parallax-content">
					<div className='profile__content__portion'>
						<div className='left__portion'>
							<p>Hello, I'm</p>
						</div>
						<div className='right__portion'>
							<p>I am a passionate and skilled Software Developer specializing in **Mobile and Web development** with a strong dedication to quality and **attention to detail**. I am constantly seeking new challenges and opportunities to improve my craft. I stay updated with the latest industry trends and best practices by **attending conferences**, **taking online courses**, and **experimenting with new technologies**. I build **functional, beautiful and user-friendly designs**. My commitment to innovation ensures that clients receive cutting-edge and effective solutions.</p>
							<div className='profile__content__portion__details'>
								<CustomButton text={'Download Resume'} bgColor={'#fff'} textColor={'#000'} />
								<CustomButton text={'Contact Me'} bgColor={'#000'} textColor={'#fff'} />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Parallax section 3 */}
			<div className="parallax-section" style={{ backgroundImage: `url(${images[2]})` }}>
				<div className="parallax-content">
					<h1>Section 3</h1>
					<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
		</div>
	);
};

export default Parallax;
