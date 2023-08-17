import React, { useState } from 'react';
import ekwitterLogo from '../images/ekwitter.svg';
import {
	HomeIcon,
	ExploreIcon,
	NotificationsIcon,
	MessagesIcon,
	BookmarksIcon,
	ListsIcon,
	ProfileIcon,
	MoreIcon,
} from '../icons/icon';
import SideLink from '../components/SideLink';
import UserBox from '../components/UserBox';

const sideLinks = [
	{
		name: 'Home',
		icon: HomeIcon,
	},
	{
		name: 'Explore',
		icon: ExploreIcon,
	},
	{
		name: 'Notifications',
		icon: NotificationsIcon,
	},
	{
		name: 'Messages',
		icon: MessagesIcon,
	},
	{
		name: 'Bookmarks',
		icon: BookmarksIcon,
	},
	{
		name: 'Lists',
		icon: ListsIcon,
	},
	{
		name: 'Profile',
		icon: ProfileIcon,
	},
	{
		name: 'More',
		icon: MoreIcon,
	},
];

const Sidebar = () => {
	const [active, setActive] = useState('Home');
	const handleMenuItemClick = (name) => {
		setActive(name);
	};
	return (
		<div className='h-screen sticky top-0 flex flex-col justify-between w-72 px-2'>
			<div>
				<div className='mt-1 mb-4 ml-1 relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transform transition-colors duration-200 group'>
					<img src={ekwitterLogo} alt='Ekwitter Logo' className='w-12 h-12' />
					<div className='absolute top-0 left-0 w-full h-full bg-primary-base opacity-0 rounded-full shadow-lg transform scale-0 transition-all duration-300 group-hover:opacity-40 group-hover:scale-150'></div>
				</div>

				<nav className='mb-4'>
					<ul>
						{sideLinks.map(({ name, icon }) => (
							<SideLink
								key={name}
								name={name}
								Icon={icon}
								active={active}
								onMenuItemClick={handleMenuItemClick}
							/>
						))}
					</ul>
				</nav>
				<button className='bg-primary-base text-white shadow-lg hover:bg-primary-dark rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200'>
					Ekweet
				</button>
			</div>
			<UserBox />
		</div>
	);
};

export default Sidebar;
