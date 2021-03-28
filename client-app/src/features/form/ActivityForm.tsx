import React, { Fragment, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../app/models/Activity";

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity | null;
}
export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initalFormState,
}) => {
  const initializeForm = () => {
    if (initalFormState) {
      return initalFormState;
    } else {
      return {
          id: '',
        title: '',
        description: '',
        date: '',
        category: '',
        city: '',
        venue: '',
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);
  return (
    <Segment clearing>
      <h3>Activity Add/Edit Form</h3>
      <hr />
      <Form>
        <Form.Input placeholder="title" value={activity.title}/>
        <Form.TextArea rows={2} placeholder="Description" value={activity.description}/>
        <Form.Input type="date" placeholder="Date" value={activity.date}/>
        <Form.Input placeholder="Category" value={activity.category}/>
        <Form.Input placeholder="City" value={activity.city}/>
        <Form.Input placeholder="Venue" value={activity.venue}/>
        <Button type="submit" positive floated="right">
          Submit
        </Button>
        <Button
          onClick={() => setEditMode(false)}
          type="button"
          floated="right"
        >
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};
