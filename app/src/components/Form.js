import React from 'react'
import { Button, Checkbox, Form, Grid, Image } from 'semantic-ui-react'

const FormExampleForm = ({ player }) => (
  <Grid className="middle fit_to_parent_height" verticalAlign="middle" columns={4} centered>
    <Grid.Row>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
        <Form>
          <Form.Field>
            { player }
            <label htmlFor="player_teammate">Player&#39;s Teammate</label>
            <input className="player_input" placeholder="Full Player Name" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default FormExampleForm
