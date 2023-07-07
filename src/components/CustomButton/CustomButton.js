import React from 'react'
import './CustomButton.scss'

function CustomButton({ text, bgColor, textColor, icon = null, iconColor = '#000', onPress = () => { } }) {
	return (
		<div className='custom__button' style={{ backgroundColor: bgColor, color: textColor }} onClick={onPress}>
			<span>
				{
					icon &&
					<span className='custom__button__icon'>
						<i className={icon} style={{
							color: iconColor
						}}
						></i>
					</span>
				}
				{text}
			</span>
		</div>
	)
}

export default CustomButton