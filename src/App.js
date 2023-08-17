import React from 'react';
import Container from './layout/Container';
import Content from './layout/Content';
import Widget from './layout/Widget';
import Sidebar from './layout/Sidebar';
const App = () => {
	return (
		<Container>
			<Sidebar />
			<Content />
			<Widget />
		</Container>
	);
};

export default App;
