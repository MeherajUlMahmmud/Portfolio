import React from 'react'
import './Navbar.scss'

function Navbar() {
	return (
		<div className='navbar'>
			<div className='navbar__items'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#'>About</a>
				</li>
				<li>
					<a href='#'>Projects</a>
				</li>
				<li>
					<a href='#'>Contact</a>
				</li>
			</div>
		</div>
	)
}

export default Navbar