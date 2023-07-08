import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import Resume from './../../assets/files/image-1.jpg'
import { person_images } from '../../constants';

function ProfileSection() {
	const downloadResume = () => {
		const downloadLink = document.createElement('a');
		downloadLink.href = Resume;
		downloadLink.download = 'Meheraj Resume';
		downloadLink.click();
	};

	return (
		<div className="parallax-section" id='profile'>
			<div className="parallax-content">
				<div className='profile__content__portion'>
					<div className='left__portion'>
						<img src={person_images[1]} alt='profile' className='profile__img' />
					</div>
					<div className='right__portion'>
						<p>I am a passionate and skilled Software Developer specializing in **Mobile and Web development** with a strong dedication to quality and **attention to detail**. I am constantly seeking new challenges and opportunities to improve my craft. I stay updated with the latest industry trends and best practices by **attending conferences**, **taking online courses**, and **experimenting with new technologies**. I build **functional, beautiful and user-friendly designs**. My commitment to innovation ensures that clients receive cutting-edge and effective solutions.</p>
						<div className='profile__content__portion__details'>
							<CustomButton
								text={'Download Resume'}
								bgColor={'#fff'}
								textColor={'#000'}
								icon={'fa fa-download'}
								onPress={downloadResume}
							/>
							<CustomButton
								text={'Contact Me'}
								bgColor={'burlywood'}
								textColor={'#000'}
								icon={'fas fa-handshake'}
								iconColor={'#000'}
								onPress={() => {
									window.location.href = '#contact'
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileSection