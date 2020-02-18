import React, { Component } from 'react';
import FormInput from '../contact-form-component/form-input-component/form-input.component';

import './feedback-form.styles.css';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        comments: '',
        errorStyle: { borderBottom: '1px solid red' },
        nameError: false,
        emailError: false
    }


    postData = async () => {
        const name = this.state.name;
        const email = this.state.email;
        const comments = this.state.comments;
        // Default options are marked with *
        const response = await fetch('https://stiptvervoer.com/feedback', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({ name, email, comments}) // body data type must match "Content-Type" header
        });
        console.log(response);
        return await response.json();
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();
        if (this.state.name === '') {
            this.setState({ nameError: true });
        }
        else {
            this.setState({ nameError: false });
        }
        if (this.state.email === '') {
            this.setState({ emailError: true });
        }
        else {
            this.setState({ emailError: false })
        }

        if (this.state.name !== '' && this.state.email !== '') {
            this.postData().then(() => {
                this.setState({ name: '', comments: '', email: '' })
            })
        }
    }

    render() {
        return (
            <div className="form-container">
                <div className="overlay" style={{ height: "150vh" }}>
                    <form onSubmit={this.handleSubmit} style={{ width: "50%" }}>
                        <FormInput name="name" type="text" text="naam*" handleChange={this.handleChange} value={this.state.name} style={this.state.nameError ? this.state.errorStyle : null} />
                        <FormInput name="email" type="email" text="email*" handleChange={this.handleChange} value={this.state.email} style={this.state.emailError ? this.state.errorStyle : null} />
                        <div className="text-control">
                            <label htmlFor="comments">Wat vond u van onze service?</label>
                            <textarea name="comments" type="text" onChange={this.handleChange} value={this.state.comments}></textarea>
                        </div>
                        <div className="button-control">
                            <button>verzenden</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactForm;