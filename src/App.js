import React, { Component } from 'react';
import Star from './Star';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Icon from 'react-fa';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [
        { id: 0, subject: "Big names using React.js today", label: "star-o", lastUpdated: new Date() },
        { id: 1, subject: "Lost in JavaScript and React tooling", label: "star-o", lastUpdated: new Date() },
        { id: 2, subject: "From Ruby to mobile through React.js?", label: "star-o", lastUpdated: new Date() },
        { id: 3, subject: "Browser Animations - icing on the cake", label: "star-o", lastUpdated: new Date() },
        {
          id: 4,
          subject: "Ryanair Travel Itinerary - Don't Forget You Must Check-in Online and Print Off your Boarding Pass",
          label: "plane",
          lastUpdated: new Date()
        },
        { id: 5, subject: "Fifa admits scandal deters new sponsors", label: "soccer-ball-o", lastUpdated: new Date() },
      ]
    };

    this.onLabelChange = this.onLabelChange.bind(this);
    this.onRandomLabelAssign = this.onRandomLabelAssign.bind(this);
  }

  onLabelChange(id, newLabel) {
    const { emails } = this.state;

    this.setState({
      emails: emails.map(email => {
        if (email.id !== id) {
          return email;
        }

        return Object.assign({}, email, { label: newLabel, lastUpdated: new Date() });
      })
    });
  }

  onRandomLabelAssign(id) {
    const { emails } = this.state;
    const newLabel = ['check', 'question-circle', 'exclamation-triangle'][Date.now() % 3];

    this.setState({
      emails: emails.map(email => {
        if (email.id !== id) {
          return email;
        }

        return Object.assign({}, email, {
          label: newLabel,
          lastUpdated: new Date()
        });
      })
    });
  }

  render() {
    return (
        <Grid>
          {this.state.emails.map(email =>
              <Row key={"row-" + email.id}>
                <Col md={1}>
                  <Star label={email.label} onChange={this.onLabelChange.bind(null, email.id)} />
                </Col>
                <Col md={10}>
                  {email.subject}

                  <div className="timestamp">
                    {email.lastUpdated.toGMTString()}
                  </div>
                </Col>
                <Col md={1}>
                  <Button bsSize="large" bsStyle='link' onClick={this.onRandomLabelAssign.bind(null, email.id)}>
                    <Icon name="random" />
                  </Button>
                </Col>
              </Row>
          )}
        </Grid>
    )
  }
}

export default App;