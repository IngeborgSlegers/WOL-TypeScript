import * as React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faRunning, faStickyNote, faStopwatch } from '@fortawesome/free-solid-svg-icons'


export interface WorkoutTableProps {
  workout: any;
}

const WorkoutTable: React.SFC<WorkoutTableProps> = (props) => {

  let convertDate: Date = new Date(props.workout.date);

  return (
    <Card>
      <CardBody>
        <CardTitle>
          <FontAwesomeIcon icon={faCalendarDay} />
          {Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
          }).format(convertDate)}
        </CardTitle>
        <CardSubtitle>
          <FontAwesomeIcon icon={faRunning} />
          {props.workout.activity}
        </CardSubtitle>
        <CardText>
        <FontAwesomeIcon icon={faStopwatch} />
          {props.workout.duration}
        </CardText>
        <CardText>
        <FontAwesomeIcon icon={faStickyNote} />
          {props.workout.notes}
        </CardText>
      </CardBody>
    </Card>
  );
}

export default WorkoutTable;