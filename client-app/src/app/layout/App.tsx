import React, { useState, useEffect } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/Activity";
import { NavBar } from "../../features/nav/NavBar";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <List>
        {activities.map((activity) => (
          <List.Item key={activity.id}> {activity.title}</List.Item>
        ))}
      </List>
      <ul></ul>
    </div>
  );
};

export default App;
