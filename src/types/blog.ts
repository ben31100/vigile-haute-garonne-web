
export interface BlogAuthor {
  id: string;
  name: string;
  avatar?: string;
  role?: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number; // en minutes
  coverImage: string;
  author: BlogAuthor;
  tags?: BlogTag[];
  relatedArticles?: string[]; // IDs des articles liés
}

export type BlogArticlePreview = Omit<BlogArticle, 'content' | 'relatedArticles'>;
