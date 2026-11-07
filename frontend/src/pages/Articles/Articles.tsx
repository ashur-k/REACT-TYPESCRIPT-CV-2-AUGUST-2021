import { useEffect } from "react";
import { Alert, Spinner, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router";

import { useAppDispatch, useAppSelector } from "../../hooks/useActions";
import { blogArticles } from "../../redux/actions/blogArticleActions";

import "./Articles.css";

const Articles = () => {
  const dispatch = useAppDispatch();

  const { articles, loading, error } = useAppSelector((state) => state.blogArticle);

  useEffect(() => {
    dispatch(blogArticles());
    document.title = "Ash's Technical Articles";
  }, [dispatch]);

  return (
    <div className="section pb_45 pt_45">
      <div className="section_title mb_20">
        <span></span>
        <h6 className="section_title_text">Technical Articles</h6>
      </div>

      {loading ? (
        <Row className="justify-content-center">
          <Spinner animation="border" variant="danger" />
        </Row>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : articles.length === 0 ? (
        <p>No articles available.</p>
      ) : (
        <Row className="g-3">
          {articles.map((article) => (
            <Col key={article.id} xs={12} md={6}>
              <Card className="article-card h-100">
                {article.banner_image_path && (
                  <Card.Img
                    variant="top"
                    src={article.banner_image_path}
                    alt={article.article_title}
                  />
                )}

                <Card.Body>
                  <Card.Title>{article.article_title}</Card.Title>
                  <Card.Text>{article.article_overview}</Card.Text>
                </Card.Body>

                <Card.Footer>
                  <Link to={`/articles/${article.id}`}>Read article</Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Articles;
