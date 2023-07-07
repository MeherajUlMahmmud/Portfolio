import React from 'react'
import './Navbar.scss'

function Navbar() {

	const closeMenu = () => {
		document.querySelector('.navbar__mobile__menu__items').classList.remove('active')
		document.querySelector('.navbar__menu__icon').classList.remove('fa-close')
		document.querySelector('.navbar__menu__icon').classList.add('fa-bars')
	}
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
					<a href='#projects'>
						<i className='fa fa-laptop-file'></i>
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

			<div className='navbar__mobile'>
				<h1>Meheraj</h1>

				<div className='navbar__mobile__menu'
					onClick={() => {
						const menu_icon = document.querySelector('.navbar__menu__icon')
						if (menu_icon.classList.contains('fa-close')) {
							closeMenu()
						} else if (menu_icon.classList.contains('fa-bars')) {
							document.querySelector('.navbar__mobile__menu__items').classList.add('active')
							menu_icon.classList.remove('fa-bars')
							menu_icon.classList.add('fa-close')
						}
					}}
				>
					<i className='fa fa-bars navbar__menu__icon'></i>
				</div>

				<div className='navbar__mobile__menu__items'>
					<li>
						<a href='#home' onClick={closeMenu}>
							<i className='fa fa-home'></i> Home
						</a>
					</li>
					<li>
						<a href='#profile' onClick={closeMenu}>
							<i className='fa fa-user'></i> Profile
						</a>
					</li>
					<li>
						<a href='#skills' onClick={closeMenu}>
							<i className='fa fa-lightbulb'></i> Skills
						</a>
					</li>
					<li>
						<a href='#projects' onClick={closeMenu}>
							<i className='fa fa-laptop-file'></i> Projects
						</a>
					</li>
					<li>
						<a href='#experience' onClick={closeMenu}>
							<i className='fa fa-briefcase'></i> Experience
						</a>
					</li>
					<li>
						<a href='#contact' onClick={closeMenu}>
							<i className='fa fa-envelope'></i> Contact
						</a>
					</li>
				</div>
			</div>
		</div>
	)
}

export default Navbar