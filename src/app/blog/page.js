import { BlogPage } from './BlogPage';

export async function getPosts() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`, { next: { revalidate: 600 }}
	);
	const posts = await response.json();
	return posts;
}

export default BlogPage;
