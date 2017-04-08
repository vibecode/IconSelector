import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Icon from 'react-fa';

class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
      lastClickedTimeoutId: null
    };
    this.labelClicked = this.labelClicked.bind(this);
    this.labelClicked2SecondsAgo = this.labelClicked2SecondsAgo.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.label !== this.state.label) {
      clearTimeout(this.state.lastClickedTimeoutId);
      this.setState({ label: newProps.label, lastClickedTimeoutId: null });
    }
  }

  labelClicked() {
    const curLabel = this.state.label;
    const curLabelIndex = this.props.labels.indexOf(curLabel);
    let nextLabelIndex;

    if (curLabelIndex !== 0 && !this.state.lastClickedTimeoutId) {
      nextLabelIndex = 0;
    } else {
      nextLabelIndex = (curLabelIndex + 1) % this.props.labels.length;
    }

    const nextLabel = this.props.labels[nextLabelIndex];

    clearTimeout(this.state.lastClickedTimeoutId);
    const timeoutId = setTimeout(this.labelClicked2SecondsAgo, 2000);

    this.setState({
      label: nextLabel,
      lastClickedTimeoutId: timeoutId
    });
  }

  labelClicked2SecondsAgo() {
    this.setState({ lastClickedTimeoutId: null });

    if (this.props.onChange) {
      this.props.onChange(this.state.label);
    }
  }

  render() {
    return (
        <Button bsSize="large" bsStyle="link" onClick={this.labelClicked}>
          <Icon name={this.state.label} />
        </Button>
    )
  }
}

Star.defaultProps = {
  labels: [
    'star-o',
    'star',
    'star-half-empty',
    'exclamation-circle',
    'check',
    'question-circle',
    'exclamation-triangle',
    'plane',
    'soccer-ball-o'
  ],
  label: 'star-o'
};

export default Star;
