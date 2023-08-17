import React, { useState } from 'react';
import {
	EmojiIcon,
	GIFIcon,
	ImageIcon,
	PollIcon,
	ScheduleIcon,
} from '../icons/icon';
import db from '../firebase';
import firebase from 'firebase';

const EkweetBox = () => {
	const [content, setContent] = useState('');
	const sendEkweet = () => {
		if (content !== '') {
			db.collection('feed').add({
				displayName: 'Dinçer Kaan Turanlı',
				username: '@khang',
				content,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				image:
					'https://64.media.tumblr.com/5c7c8ebc41853be00b6a2c57042c5d57/ece3616e9c34cb68-a3/s540x810/f2042c4e308cbf4bad07c45d05fe4a404f443727.gifv',
				avatar:
					'https://avatars.githubusercontent.com/u/80959458?s=400&u=125d70486ab296fe615ea59c6024f3e8a4eb03ef&v=4',
			});

			setContent('');
		}
	};
	return (
		<div className='flex flex-col flex-1 mt-2 px-2'>
			<textarea
				className='w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent'
				placeholder="What's happening?"
				onChange={(e) => setContent(e.target.value)}
				value={content}
			/>
			<div className='flex items-center justify-between'>
				<div className='flex -ml-3'>
					<div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
						<ImageIcon className='w-6 h-6 text-primary-base' />
					</div>
					<div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
						<GIFIcon className='w-6 h-6 text-primary-base' />
					</div>
					<div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
						<PollIcon className='w-6 h-6 text-primary-base' />
					</div>
					<div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
						<EmojiIcon className='w-6 h-6 text-primary-base' />
					</div>
					<div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
						<ScheduleIcon className='w-6 h-6 text-primary-base' />
					</div>
				</div>
				<button
					className='bg-primary-base text-white rounded-full px-4 py-2 font-medium'
					onClick={sendEkweet}
				>
					Ekweet
				</button>
			</div>
		</div>
	);
};

export default EkweetBox;
