import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10 col-sm-7 col-md-5 col-lg-4">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placehoder="noreply@musiclist.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placehoder="password"
              />
            </FormGroup>
            <Button>Log In</Button>
          </Form>
        </div>
      </div>
    );
  }
}
