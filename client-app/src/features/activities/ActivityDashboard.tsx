import React from "react";
import { Grid} from "semantic-ui-react";
import { IActivity } from "../../app/models/Activity";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityList } from "./ActivityList";

interface IProps {
    activities: IActivity[]
}
export const ActivityDashboard: React.FC<IProps> = ({activities}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
          <ActivityList activities={activities}/>
      </Grid.Column>
      <Grid.Column width={6}>
          <ActivityDetails />
      </Grid.Column>
    </Grid>
  );
};
