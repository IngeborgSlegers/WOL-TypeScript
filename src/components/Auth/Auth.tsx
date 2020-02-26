import * as React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Login from './Login';
import Signup from './Signup';

type Props = {
  updateToken: any;
};

function Auth( {updateToken} : Props ) : any {
  return(
    <Container className="auth-container">
    <Row>
      <Col md="6">
        <Signup 
          updateToken={updateToken} 
        />
      </Col>
      <Col md="6">
        <Login 
          updateToken={updateToken} 
        />
      </Col>
    </Row>
  </Container>
  );
};

export default Auth;