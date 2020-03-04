import * as React from 'react';

interface WorkoutEditProps {
  
}
 
interface WorkoutEditState {
  workout: string[]
}
 
class WorkoutEdit extends React.Component<WorkoutEditProps, WorkoutEditState> {
  state: WorkoutEditState = { 
    workout : []  
  
  }
  render() { 
    return ( 
      <div>
        <h1>WorkoutEdit is connected!</h1>
      </div>
     );
  }
}
 
export default WorkoutEdit;