import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";
import './fonts.css';

import React from 'react';
import { Form, FormGroup, TextInput, FormHelperText } from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';

class InvalidForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Five',
      validated: 'error'
    };
    this.handleTextInputChange = value => {
      this.setState({ value, validated: value === '' ? 'noval' : /^\d+$/.test(value) ? 'success' : 'error' });
    };
  }

  render() {
    const { value, validated } = this.state;

    return (
      <Form>
        <FormGroup
          label="Age"
          type="number"
          helperText={
            <FormHelperText icon={<ExclamationCircleIcon />} isHidden={validated !== 'noval'}>
              Please enter your age
            </FormHelperText>
          }
          helperTextInvalid="Age has to be a number"
          helperTextInvalidIcon={<ExclamationCircleIcon />}
          fieldId="age-1"
          validated={validated}
        >
          <TextInput
            validated={validated}
            value={value}
            id="age-1"
            aria-describedby="age-1-helper"
            onChange={this.handleTextInputChange}
          />
        </FormGroup>
      </Form>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<InvalidForm />, rootElement);