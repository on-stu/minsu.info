import type { Prisma } from '@prisma/client';
import { prismaClient } from './prismaClient';

export async function createPost(data: Prisma.PostCreateInput) {
	const post = await prismaClient.post.create({ data });
	return post;
}

export async function getPost(id: number) {
	const post = await prismaClient.post.findUnique({ where: { id } });
	return post;
}

export async function getPosts() {
	const posts = await prismaClient.post.findMany({ orderBy: { createdAt: 'desc' } });
	return posts;
}

export async function searchPosts(query: string) {
	const posts = await prismaClient.post.findMany({
		where: {
			OR: [{ title: { contains: query } }, { content: { contains: query } }],
		},
	});
	return posts;
}
