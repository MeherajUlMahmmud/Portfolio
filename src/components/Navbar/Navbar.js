import React from 'react'
import './Navbar.scss'

function Navbar() {
	return (
		<div className='navbar'>
			<div className='navbar__items'>
				<li>
					<a href='#home'>
						<i className='fa fa-home'></i>
					</a>
				</li>
				<li>
					<a href='#profile' className=''>
						<i className='fa fa-user'></i>
					</a>
				</li>
				<li>
					<a href='#skills'>
						<i className='fa fa-lightbulb'></i>
					</a>
				</li>
				<li>
					<a href='#experience'>
						<i className='fa fa-briefcase'></i>
					</a>
				</li>
				<li>
					<a href='#contact'>
						<i className='fa fa-envelope'></i>
					</a>
				</li>
			</div>
		</div>
	)
}

export default Navbar