import React from 'react'
import { Button, Checkbox, Form, Grid, Image } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Grid className="middle temp" verticalAlign='middle' columns={4} centered>
    <Grid.Row>
      <Grid.Column>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
        <br />
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default FormExampleForm
