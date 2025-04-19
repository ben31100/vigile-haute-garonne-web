
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { BlogArticle, BlogArticlePreview } from '@/types/blog';
import { articles } from './articles';

export const formatBlogDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'dd MMMM yyyy', { locale: fr });
};

export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getRelatedArticles = (articleId: string): BlogArticlePreview[] => {
  const article = articles.find(a => a.id === articleId);
  
  if (!article || !article.relatedArticles) {
    return [];
  }
  
  return article.relatedArticles
    .map(id => articles.find(a => a.id === id))
    .filter((a): a is BlogArticle => !!a)
    .map(({ content, relatedArticles, ...rest }) => rest);
};
