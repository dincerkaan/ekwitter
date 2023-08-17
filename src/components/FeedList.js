import React from 'react';
import FeedItem from './FeedItem';

const FeedList = ({ ekweets }) => {
	return (
		<div>
			{ekweets.map((ekweet, index) => (
				<FeedItem {...ekweet} key={index} />
			))}
		</div>
	);
};

export default FeedList;
