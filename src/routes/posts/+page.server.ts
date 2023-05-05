import type { PageServerLoad } from './$types';
import { getPosts, searchPosts } from '$lib/server/database/posts';

export const load: PageServerLoad = async (event) => {
	const searchQuery = event.url.searchParams.get('q');
	if (searchQuery) {
		const posts = await searchPosts(searchQuery);
		return {
			posts,
		};
	}
	const posts = await getPosts();
	return {
		posts,
	};
};
