import { createPost } from '$lib/server/database/posts';
import { fail, type Actions, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		const thumbnailImageUrl = data.get('thumbnailImageUrl') as string;
		const content = data.get('content') as string;

		const post = await createPost({ title, thumbnailImageUrl, content });
		if (!post) {
			return fail(500);
		}

		throw redirect(303, `/posts/${post.id}`);
	},
} satisfies Actions;
