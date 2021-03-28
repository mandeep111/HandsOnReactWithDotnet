import React, { Fragment } from 'react'
import { Form } from 'semantic-ui-react'

export const ActivityForm = () => {
    return (
        <Fragment>
            <h3>Activity Edit Form</h3><hr/>
            <Form>
                <Form.Input placeholder='title' />
                <Form.TextArea rows={2} placeholder='Description' />
                <Form.Input type='date' placeholder='Date' />
                <Form.Input placeholder='Category' />
                <Form.Input placeholder='City' />
                <Form.Input placeholder='Venue' />
            </Form>
        </Fragment>
    )
}
