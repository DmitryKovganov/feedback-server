import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
    { name: 'title', label: 'Survey Title' },
    { name: 'subject', label: 'Subject Line' },
    { name: 'body', label: 'Email Body' },
    { name: 'email', label: 'Recipient List' }
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ name, label }) => {
            return <Field key={name} type="text" component={SurveyField} name={name} label={label}/>
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
};

export default reduxForm({
    'form': 'surveyForm'
})(SurveyForm);