import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    <Field type="text" name="surveyTitle" component={SurveyField} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
};

export default reduxForm({
    'form': 'surveyForm'
})(SurveyForm);