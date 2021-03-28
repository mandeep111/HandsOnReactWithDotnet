import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import { IActivity } from '../../app/models/Activity'

interface IProps {
    activity: IActivity;
}
export const ActivityDetails: React.FC<IProps> = ({activity}) => {
    return (
        <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>
            <span>{activity.date}</span>
          </Card.Meta>
          <Card.Description>
            {activity.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths={2}>
              <Button basic content='Edit' color='green'></Button>
              <Button content='Cancel' color='grey'></Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
}
