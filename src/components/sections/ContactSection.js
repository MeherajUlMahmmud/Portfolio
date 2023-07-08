import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { person_images } from '../../constants';

function ContactSection() {
	return (
		<div className="parallax-section" id='contact'>
			<div className="parallax-content">
				<h1>Get in touch</h1>
				<div className='contact__content__portion'>
					<div className='left__portion'>
						<img src={person_images[2]} alt='profile' className='contact__img' />
					</div>
					<div className='right__portion'>
						<CustomButton
							text={'Send an e-mail'}
							bgColor={'burlywood'}
							textColor={'#000'}
							icon={'fa fa-envelope'}
							onPress={() => {
								window.location.href = 'mailto:meherajmahmmd@gmail.com';
							}}
						/>
						<CustomButton
							text={'Place a call'}
							bgColor={'burlywood'}
							textColor={'#000'}
							icon={'fa fa-phone'}
							onPress={() => {
								window.location.href = 'tel:+8801814325634';
							}}
						/>
						<CustomButton
							text={'Github'}
							bgColor={'burlywood'}
							textColor={'#000'}
							icon={'fa-brands fa-github'}
							onPress={() => {
								window.open('https://github.com/MeherajUlMahmmud', '_blank');
							}}
						/>
						<CustomButton
							text={'Facebook'}
							bgColor={'burlywood'}
							textColor={'#000'}
							icon={'fa-brands fa-facebook'}
							onPress={() => {
								window.open('https://www.facebook.com/meherajulmahmmud/', '_blank');
							}}
						/>
					</div>
				</div>
				<div className='parallax-content__footer'>
					<a href='https://www.linkedin.com/in/meherajulmahmmud/' target='_blank' rel='noopener noreferrer'>
						<i className='fa-brands fa-linkedin' title='LinkedIn'></i>
					</a>
					<a href='https://twitter.com/meheraj_007' target='_blank' rel='noopener noreferrer'>
						<i className='fa-brands fa-twitter' title='Twitter'></i>
					</a>
					<a href='https://www.instagram.com/meheraj_007/' target='_blank' rel='noopener noreferrer'>
						<i className='fa-brands fa-instagram' title='Instagram'></i>
					</a>
					<a href='https://www.facebook.com/meherajulmahmmud/' target='_blank' rel='noopener noreferrer'>
						<i className='fa-brands fa-facebook' title='Facebook'></i>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ContactSection