import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
	return (
		<Layout pageTitle='Home Page'>
			<p>I'm making a blog</p>
			<StaticImage
				alt='A brickwall with several posters aligned on 2 rows showing the mailchimp logo'
				src='../images/mailchimpPoster.avif'
			/>
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
