import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

function ContactSection() {
	return (
		<div className="parallax-section" id='contact'>
			<div className="parallax-content">
				<h1>Get in touch</h1>
				<div className='contact__content__portion'>
					<div className='left__portion'>
						<img src='https://unsplash.it/500/500' alt='profile' className='contact__img' />
					</div>
					<div className='right__portion'>
						<div className='contact__content__portion__details'>
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
				</div>
			</div>
		</div>
	)
}

export default ContactSection