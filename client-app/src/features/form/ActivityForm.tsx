import React, { FormEvent, Fragment, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../app/models/Activity";
import {v4 as uuid} from 'uuid';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity | null;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
}
export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initalFormState,
  createActivity,
  editActivity,
}) => {
  const initializeForm = () => {
    if (initalFormState) {
      return initalFormState;
    } else {
      return {
        id: "",
        title: "",
        description: "",
        date: "",
        category: "",
        city: "",
        venue: "",
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);

  const handleSubmit = () => {
    if (activity.id.length === 0) {
      let newActivity = { ...activity, id: uuid() };
      createActivity(newActivity);
    } else {
      editActivity(activity);
    }
  };

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment clearing>
      <h3>Activity Add/Edit Form</h3>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Input
          placeholder="title"
          onChange={handleInputChange}
          name="title"
          value={activity.title}
        />
        <Form.TextArea
          rows={2}
          placeholder="Description"
          onChange={handleInputChange}
          name="description"
          value={activity.description}
        />
        <Form.Input
          type="datetime-local"
          placeholder="Date"
          onChange={handleInputChange}
          name="date"
          value={activity.date}
        />
        <Form.Input
          placeholder="Category"
          onChange={handleInputChange}
          name="category"
          value={activity.category}
        />
        <Form.Input
          placeholder="City"
          onChange={handleInputChange}
          name="city"
          value={activity.city}
        />
        <Form.Input
          placeholder="Venue"
          onChange={handleInputChange}
          name="venue"
          value={activity.venue}
        />
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
