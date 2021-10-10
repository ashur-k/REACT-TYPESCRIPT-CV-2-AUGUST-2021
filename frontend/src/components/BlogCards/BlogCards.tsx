import React, { FunctionComponent } from 'react';

// Material UI and bootstrap Components import
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'

// css imports
import './BlogCards.css';

export const BlogCard:FunctionComponent<{
  blogId: number;
  blogTitle: string;
  blogOverview: string;
  blogImagePath: string;
}> = ({blogId, blogTitle, blogOverview, blogImagePath}) => {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={blogImagePath} />
        <Card.Body>
          <Card.Title>{blogTitle}</Card.Title>
          <Card.Text>
            {blogOverview}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/blog-detail/${blogId}`}>
            <Button variant="primary">Read more ...</Button>
          </Link>          
        </Card.Footer>
      </Card>  
</CardGroup>
  )
}

