import React, { useEffect, useState } from 'react';
import './Parallax.scss'; // Import your CSS styles
import HomeSection from './components/sections/HomeSection';
import ProfileSection from './components/sections/ProfileSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';

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
			<HomeSection />
			<ProfileSection />
			<SkillsSection />
			<ExperienceSection />
			<ContactSection />
		</div>
	);
};

export default Parallax;
