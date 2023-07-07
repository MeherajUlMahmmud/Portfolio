import React from 'react'
import './CustomButton.scss'

function CustomButton({ text, bgColor, textColor, icon = null, onPress = () => { } }) {
	return (
		<div className='custom__button' style={{ backgroundColor: bgColor, color: textColor }} onClick={onPress}>
			<span>
				{
					icon &&
					<span className='custom__button__icon'>
						<i className={icon}></i>
					</span>
				}
				{text}
			</span>
		</div>
	)
}

export default CustomButton