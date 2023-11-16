import React from 'react';
import { Card, Image, Grid, Button, GridColumn } from 'semantic-ui-react'  

export default function Home() {
  return (
    <>
      <Grid>
        <Grid.Row columns='1'>
          <Grid.Column>
            <h1>Home</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns='4'>
          <Grid.Column width='8'>
            <Card fluid>
              <Image src='/penguin.jpeg' alt="Penguins" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Floral Haven</Card.Header>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <p>This is placeholder text so we can see what content will look like.</p>
            <Button color="blue" basic>Info</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}
