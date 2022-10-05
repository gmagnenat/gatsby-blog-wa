import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
	return (
		<Layout pageTitle='Home Page'>
			<p>I'm making a blog</p>
		</Layout>
	);
};

export const Head = () => (
	<>
		<title>Home Page</title>
		<meta name='description' content='homepage description' />
	</>
);

export default IndexPage;
