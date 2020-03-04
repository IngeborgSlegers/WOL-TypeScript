import * as React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export interface WorkoutCreateProps {
  token? : string;
  fetchWorkouts? : any;
}

export interface WorkoutCreateState {
  date: string;
  activity: string;
  duration: string;
  notes: string;

}

class WorkoutCreate extends React.Component<WorkoutCreateProps, WorkoutCreateState> {
  state: WorkoutCreateState = {
    date: ' ',
    activity: ' ',
    duration: ' ',
    notes: ' '

  }

  handleSubmit = (event: React.FormEvent): void => {
    console.log(event)
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Log a Workout</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="date" />
            <Input onChange={this.handleChange} type="date" name="date" value={this.state.date} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="activity" />
            <Input onChange={this.handleChange} type="select" name="activity" value={this.state.activity}>
              <option>Select an activity</option>
              <option value="Gardening">Gardening</option>
              <option value="Horse Riding">Horse Riding</option>
              <option value="Swimming">Swimming</option>
              <option value="Walk">Walk</option>
              <option value="Yoga">Yoga</option>
              <option value="Other">Other</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="duration" />
            <Input onChange={this.handleChange} type="text" name="duration" placeholder="Time spent in hours or min." value={this.state.duration} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="notes" />
            <Input onChange={this.handleChange} type="textarea" name="notes" placeholder="Notes" value={this.state.notes} />
          </FormGroup>
          <Button type="submit">Click to Submit</Button>
        </Form>
      </div>
    );
  }
}

export default WorkoutCreate;