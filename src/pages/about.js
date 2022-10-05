import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
	return (
		<Layout pageTitle='About page'>
			<p>Hi there! I'm a web developer looking for a way out of the box.</p>
		</Layout>
	);
};

export const Head = () => <Seo title='About page' />;

export default AboutPage;
