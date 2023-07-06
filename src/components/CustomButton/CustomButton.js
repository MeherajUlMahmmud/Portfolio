import React from 'react'
import './CustomButton.scss'

function CustomButton({ text, bgColor, textColor }) {
	return (
		<div className='custom__button' style={{ backgroundColor: bgColor, color: textColor }}>
			<span>
				{text}
			</span>
		</div>
	)
}

export default CustomButton