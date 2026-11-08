import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router";

import type { BlogArticle } from "../../redux/interfaces/BlogArticleInterface";
import ArticleTemplateRenderer from "../../templates/Article/ArticleTemplateRenderer";
import BlogDetail from "./BlogDetail";

const BlogDetailResolver = () => {
  const { id } = useParams<{ id: string }>();

  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLegacy, setIsLegacy] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const resolveArticle = async () => {
      if (!id) {
        setError("Article ID is missing.");
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.get<BlogArticle>(`/api/articles/${id}/`);

        if (!cancelled) {
          setArticle(data);
        }
      } catch (error) {
        if (cancelled) return;

        if (axios.isAxiosError(error) && error.response?.status === 404) {
          setIsLegacy(true);
        } else {
          setError("Unable to load this article.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    resolveArticle();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="section pb_45 pt_45">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="section pb_45 pt_45">
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  if (isLegacy) {
    return <BlogDetail />;
  }

  if (article) {
    return <ArticleTemplateRenderer article={article} />;
  }

  return null;
};

export default BlogDetailResolver;
