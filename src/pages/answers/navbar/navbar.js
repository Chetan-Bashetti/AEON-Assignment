import React from 'react';

import './navbar.css';

const Links = ({ links }) => {
	return (
		<div className='links'>
			{links.map((eachLink) => (
				<a href='/' key={eachLink} className='each-link'>
					{eachLink}
				</a>
			))}
		</div>
	);
};

const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	const navLinks = [
		'Showcase',
		'Docs',
		'Blog',
		'Analysis',
		'Templates',
		'Enterprise'
	];

	return (
		<div className='navbar-wrapper'>
			<>
				<div className='navbar-xl'>
					<div className='navbar-content'>
						<div className='logo'>AEON</div>
						<Links links={navLinks} />
					</div>
					<div>
						<input
							className='search-input'
							placeholder='Search Documentation...'
						/>
					</div>
				</div>
			</>
			<div className='navbar-sm'>
				<div className='navbar-content'>
					<div className='logo'>AEON</div>
					<div className='md-icons'>
						<div className='icon'> &#128269;</div>
						{isOpen ? (
							<div
								className='icon'
								onClick={() => {
									setIsOpen(!isOpen);
								}}
							>
								&#120;
							</div>
						) : (
							<div
								className='icon'
								onClick={() => {
									setIsOpen(!isOpen);
								}}
							>
								&#8801;
							</div>
						)}
					</div>
				</div>
				<div className={isOpen ? 'navbar-md show' : 'navbar-md hide'}>
					<Links links={navLinks} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
