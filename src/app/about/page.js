export const dynamicParams = true;

 

async function getSinglePage(pageId) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages/${pageId}`, { next: { revalidate: 3600 }}
	);
	const page = await response.json();
	return page;
}

const page = async ({ params }) => {
	const page = await getSinglePage(6919);

	if (!page) {
		return <div>Loading...</div>;
	}

	return (
		<div className="single-blog-page">
			<h2>{page.title.rendered}</h2>
			<div className="blog-post">
				<p dangerouslySetInnerHTML={{ __html: page.content.rendered }}></p>
			</div>
		</div>
	);
};

export default page;
