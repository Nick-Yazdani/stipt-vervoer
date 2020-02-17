import React, { Component } from 'react';
import FormInput from './form-input-component/form-input.component';

import './contact-form.component.styles.css';

class ContactForm extends Component {
    state = {
        naam: '',
        bedrijf: '',
        email: '',
        vervoer: '',
        wensen: '',
        errorStyle: { borderBottom: '1px solid red' },
        nameError: false,
        emailError: false
    }


    postData = async () => {
        const naam = this.state.naam;
        const email = this.state.email;
        const bedrijf = this.state.bedrijf;
        const vervoer = this.state.vervoer;
        const wensen = this.state.wensen;
        // Default options are marked with *
        const response = await fetch('http://stiptvervoer.com/contact', {
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
            body: JSON.stringify({ naam, email, bedrijf, vervoer, wensen }) // body data type must match "Content-Type" header
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
                this.setState({ naam: '', bedrijf: '', email: '', vervoer: '' })
            })
        }
    }

    render() {
        return (
            <div className="form-container">
                <div className="overlay" style={{ height: "120vh" }}>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput name="naam" type="text" text="uw naam (verplicht)" handleChange={this.handleChange} value={this.state.naam} style={this.state.nameError ? this.state.errorStyle : null} />
                        <FormInput name="bedrijf" type="text" text="uw bedrijf (optioneel)" handleChange={this.handleChange} value={this.state.bedrijf} />
                        <FormInput name="email" type="email" text="uw email (verplicht)" handleChange={this.handleChange} value={this.state.email} style={this.state.emailError ? this.state.errorStyle : null} />
                        <FormInput name="vervoer" type="text" text="welk vervoer wenst u?" handleChange={this.handleChange} value={this.state.vervoer} />
                        <div className="text-control">
                            <label htmlFor="wensen">OMSCHRIJF UW WENSEN EN IDEEËN (B.V. CATERING AAN BOORD)</label>
                            <textarea name="wensen" type="text" onChange={this.handleChange} value={this.state.wensen}></textarea>
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