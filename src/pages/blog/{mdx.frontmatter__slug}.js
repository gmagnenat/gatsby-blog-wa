import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from '../../components/seo';

const BlogPost = ({ data, children }) => {
	const image = getImage(data.mdx.frontmatter.hero_image);

	return (
		<>
			<p>Posted: {data.mdx.frontmatter.date}</p>
			<GatsbyImage
				image={image}
				alt={data.mdx.frontmatter.hero_image_alt}
			></GatsbyImage>
			<p>
				Photo Credit:{' '}
				<a
					href={data.mdx.frontmatter.hero_image_credit_link}
					target='_blank'
					rel='noopener noreferrer'
				>
					{data.mdx.frontmatter.hero_image_credit_text}
				</a>
			</p>
			{children}
		</>
	);
};

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			id
			frontmatter {
				title
				date(formatString: "MMMM D, YYYY")
				hero_image_alt
				hero_image_credit_link
				hero_image_credit_text
				hero_image {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
