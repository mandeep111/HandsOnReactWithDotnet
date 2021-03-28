import React from "react";
import { Grid} from "semantic-ui-react";
import { IActivity } from "../../app/models/Activity";
import { ActivityList } from "./ActivityList";

interface IProps {
    activities: IActivity[]
}
export const ActivityDashboard: React.FC<IProps> = ({activities}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
          <ActivityList activities={activities}/>
        {/* <List>
          {activities.map((activity) => (
            <List.Item key={activity.id}> {activity.title}</List.Item>
          ))}
        </List> */}
      </Grid.Column>
    </Grid>
  );
};
