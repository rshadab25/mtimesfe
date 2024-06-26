import Link from 'next/link';
import { getPosts } from './page';

export const BlogPage = async () => {
	const posts = await getPosts();

	return (
		<div className="blog-page">
			<h2>All Blog Posts</h2>
			<p>All blog posts are fetched from WordPress via the WP REST API.</p>
			<div className="posts">
				{posts.map((post) => {
					return (
						<Link href={`/blog/${post.id}`} className="post" key={post.id}>
							<h3>{post.title.rendered}</h3>
							<p
								dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
							></p>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
