import React, { FunctionComponent } from 'react';

// Icon helper function imported
import  getIcon  from '../../helperFunctions/getIcon';

// Material UI and bootstrap Components import
import { Icon, Typography } from '@material-ui/core';
import { Card, CardGroup } from 'react-bootstrap';

export const CardComponent:FunctionComponent<{
  icon: string;
  title: string;
  description: string;
}> = ({icon, title, description}) => {
  return (
    <CardGroup>
      <Card>
      <div className="service">                    
        <Icon className="service_icon" style={{margin:'12px', paddingBottom:"50px"}}>
          {getIcon(icon)}
        </Icon>
        <Card.Body>
          <Card.Title>
            <Typography className="service_title" variant='h6'>
              {title}
            </Typography>
          </Card.Title>
          <Card.Text>
          <Typography className="service_description" variant='body2'>
            {description}
          </Typography>
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
    </CardGroup>  
  )
}

