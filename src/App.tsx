import * as React from 'react';

import Auth from './components/Auth/Auth';
import WorkoutIndex from './components/Workouts/WorkoutIndex';
import Sitebar from './components/Home/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

interface SessionToken {
  token: string;
}

export class App extends React.Component<any, SessionToken> {
  state: SessionToken = {
    token: ' '
  }

  clearToken = (): void => {
    localStorage.clear();
    this.setState(
      { token: ' ' }
    );
    alert(`You have successfully logged out!`)
  }

  updateToken = (newToken: string): void => {
    localStorage.setItem('token', newToken);
    this.setState({ token: newToken });
  }

  protectedViews = (): any => {
    return (this.state.token === localStorage.getItem('token') ? <WorkoutIndex token={this.state.token} /> : <Auth updateToken={this.updateToken} />)
  }

  render() {
    return (
      <div>
        <Sitebar clearToken={this.clearToken} />
        {this.protectedViews()}
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
      </div>
    )
  }
}