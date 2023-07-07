import React from 'react'
import './Loader.scss'

function Loader() {
	return (
		<div className='loader'>
			<p className='loader__text'>
				Meheraj
			</p>
			<div className='loader__spinner'>
				<div className='loader__spinner__circle'></div>
			</div>
		</div>
	)
}

export default Loader