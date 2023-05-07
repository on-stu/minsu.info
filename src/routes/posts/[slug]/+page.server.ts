import { compile } from 'mdsvex';
import type { PageServerLoad } from './$types';
import { getPost } from '$lib/server/database/posts';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const post = await getPost(Number(event.params.slug));
	if (!post) throw error(404, 'Post not found');
	const compiledResponse = await compile(post.content);
	if (!compiledResponse?.code) throw error(500, 'Failed to compile post');
	return {
		...post,
		content: compiledResponse.code
			.replace(/>{@html `<code class="language-/g, '><code class="language-')
			.replace(/<\/code>`}<\/pre>/g, '</code></pre>'),
	};
};
