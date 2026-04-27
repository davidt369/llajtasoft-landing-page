import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../shared/constants/site';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE.TITLE,
		description: SITE.DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}
