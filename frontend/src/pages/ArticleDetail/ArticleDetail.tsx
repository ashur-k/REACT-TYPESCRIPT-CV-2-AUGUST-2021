import { useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router";

import { useAppDispatch, useAppSelector } from "../../hooks/useActions";
import { blogArticle } from "../../redux/actions/blogArticleActions";
import ArticleTemplateRenderer from "../../templates/Article/ArticleTemplateRenderer";

import "./ArticleDetail.css";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const { article, loading, error } = useAppSelector((state) => state.blogArticle);

  useEffect(() => {
    if (id) {
      dispatch(blogArticle(Number(id)));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (article) {
      document.title = article.article_title;
    }

    return () => {
      document.title = "Portfolio";
    };
  }, [article]);

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

  if (!article) {
    return null;
  }

  return <ArticleTemplateRenderer article={article} />;
};

export default ArticleDetail;
