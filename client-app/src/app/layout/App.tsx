import React, { useState, useEffect, Fragment } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/Activity";
import { NavBar } from "../../features/nav/NavBar";
import { ActivityDashboard } from "../../features/activities/ActivityDashboard";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);

  const handleSelectedActivity = (id:string) => {
      setSelectedActivity(activities.filter(s=>s.id === id)[0]);
  } 
  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop: '6em'}}>
        <ActivityDashboard activities={activities} selectActivity={handleSelectedActivity} selectedActivity={selectedActivity}/>
      </Container>
    </Fragment>
  );
};

export default App;
