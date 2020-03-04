import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import WorkoutCreate from './WorkoutCreate';

interface IWorkoutIndex {
  workouts: Array<any>;
  updateActive: boolean;
  workoutToUpdate: Object;
}

interface IProps {
  token?: string;
}

export default class WorkoutIndex extends React.Component<IProps, IWorkoutIndex> {
  state: IWorkoutIndex = {
    workouts: [],
    updateActive: false,
    workoutToUpdate: {}
  }

  fetchWorkouts = (): void => {
    let requestHeaders: any = {
      'Content-Type': 'application/json',
      'Authorization': this.props.token
    }
    fetch(`http://localhost:3000/log`, {
      method: 'GET',
      headers: requestHeaders
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData.logs);
        this.setState({ workouts: logData.logs })
      })
  };

  componentWillMount(): void {
    this.fetchWorkouts();
  }

  editUpdateWorkout = (workout: any): void => {
    console.log(workout);
    this.setState({ workoutToUpdate: workout })
  };

  updateToggle = (): void => {
    this.setState({ updateActive: !this.state.updateActive })
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="3">
            <WorkoutCreate fetchWorkouts={this.fetchWorkouts} token={this.props.token} />
          </Col>
        </Row>
      </Container>
    )
  }
}