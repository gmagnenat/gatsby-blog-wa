import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
	return (
		<Layout pageTitle='About page'>
			<p>Hi there! I'm a web developer looking for a way out of the box.</p>
		</Layout>
	);
};

export const Head = () => (
	<>
		<title>About Me</title>
		<meta name='description' content='Your description' />
	</>
);

export default AboutPage;
