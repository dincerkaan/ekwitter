import React, { useEffect, useState } from 'react';
import { PopulerIcon } from '../icons/icon';
import EkweetBox from '../components/EkweetBox';
import Divider from '../components/Divider';
import FeedList from '../components/FeedList';
import db from '../firebase';

const Content = () => {
	const [ekweets, setEkweets] = useState([]);
	useEffect(() => {
		db.collection('feed')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setEkweets(snapshot.docs.map((doc) => doc.data()))
			);
	}, []);

	return (
		<main className='flex-1 flex flex-col border-r border-l border-gray-extraLight'>
			<header className='sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white'>
				<span className='font-bold text-xl text-gray-900'>Home</span>
				<PopulerIcon className='w-6 h-6 text-primary-base' />
			</header>
			<div className='flex space-x-4 px-4 py-3'>
				<img
					src='https://avatars.githubusercontent.com/u/80959458?s=400&u=125d70486ab296fe615ea59c6024f3e8a4eb03ef&v=4'
					alt='Profile'
					className='w-11 h-11 rounded-full'
				/>
				<EkweetBox />
			</div>
			<Divider />

			{/* Feed */}
			<FeedList ekweets={ekweets} />
		</main>
	);
};

export default Content;
