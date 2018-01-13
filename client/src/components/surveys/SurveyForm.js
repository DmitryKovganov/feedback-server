import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    { name: 'title', label: 'Survey Title' },
    { name: 'subject', label: 'Subject Line' },
    { name: 'body', label: 'Email Body' },
    { name: 'emails', label: 'Recipient List' }
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ name, label }) => {
            return <Field
                key={name}
                type="text"
                component={SurveyField}
                name={name}
                label={label}
            />
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
};

function validate(values) {
    const errors = {};

    errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({ name }) => {
       if (!values[name]) {
           errors[name] = 'You must provide a value';
       }
    });

    return errors;
};

export default reduxForm({
    validate,
    'form': 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);