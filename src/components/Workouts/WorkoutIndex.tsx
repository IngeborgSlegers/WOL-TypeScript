import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import WorkoutCreate from './WorkoutCreate';
import WorkoutTable from './WorkoutTable';

interface IWorkoutIndex {
  workouts: Array<any>;
  updateActive: boolean;
  workoutToUpdate: Object;
}

interface IProps {
  token: string;
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
    fetch(`http://localhost:4000/log`, {
      method: 'GET',
      headers: requestHeaders
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData.logs);
        this.setState({ workouts: logData.logs })
      })
  };

  componentDidMount(): void {
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
          <Col md="9">
            {this.state.workouts.length > 0 ? 
                this.state.workouts.map(workout => {
                  return <WorkoutTable key={workout.id} workout={workout} />
                }) 
              : <h1>Please log an activity!</h1>
            }
          </Col>
        </Row>
      </Container>
    )
  }
}