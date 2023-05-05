import type { IArticleMetaTagProperties } from './article-meta-tag.interface';
import type { IOpenGraphMetaTagProperties } from './opengraph-meta-tag.interface';
import type { ITwitterMetaTagProperties } from './twitter-meta-tag.interface';

export interface IMetaTagProperties {
	title: string;
	description: string;
	keywords: string[];
	image: string | any;
	url: string;
	logoUrl: string;
	searchUrl: string;
	sitemapUrl: string;

	atom: string;

	twitter: Partial<ITwitterMetaTagProperties>;

	openGraph: Partial<IOpenGraphMetaTagProperties>;

	article: Partial<IArticleMetaTagProperties>;

	robots: string;
}
