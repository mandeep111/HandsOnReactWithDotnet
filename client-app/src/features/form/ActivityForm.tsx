import React, { Fragment } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

interface IProps {
    setEditMode: (editMode: boolean) => void;
}
export const ActivityForm: React.FC<IProps> = ({setEditMode}) => {
    return (
        <Segment clearing>
            <h3>Activity Add/Edit Form</h3><hr/>
            <Form>
                <Form.Input placeholder='title' />
                <Form.TextArea rows={2} placeholder='Description' />
                <Form.Input type='date' placeholder='Date' />
                <Form.Input placeholder='Category' />
                <Form.Input placeholder='City' />
                <Form.Input placeholder='Venue' />
                <Button type='submit' positive floated='right'>Submit</Button>
                <Button onClick={() => setEditMode(false)} type='button' floated='right'>Cancel</Button>
            </Form>
        </Segment>
    )
}
