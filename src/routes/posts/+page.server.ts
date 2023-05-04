import type { PageServerLoad } from './$types';
import { getPosts } from '$lib/server/database/posts';

export const load: PageServerLoad = async (event) => {
	const posts = await getPosts();
	return {
		posts,
	};
};
