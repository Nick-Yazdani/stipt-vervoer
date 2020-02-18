import React, { Component } from 'react';
import FormInput from './form-input-component/form-input.component';

import './contact-form.component.styles.css';

class ContactForm extends Component {
    state = {
        bedrijfsnaam: '',
        naam: '',
        adres: '',
        postcode: '',
        plaats: '',
        telefoon: '',
        fax: '',
        email: '',
        bericht: '',
        errorStyle: { borderBottom: '1px solid red' },
        textareaErrorStyle: {border: '1px solid red'},
        nameError: false,
        emailError: false,
        berichtError: false
    }


    postData = async () => {
        const naam = this.state.naam;
        const email = this.state.email;
        const bedrijfsnaam = this.state.bedrijfsnaam;
        const adres = this.state.adres;
        const postcode = this.state.postcode;
        const plaats = this.state.plaats;
        const telefoon = this.state.telefoon;
        const fax = this.state.fax;
        const bericht = this.state.bericht;
        // Default options are marked with *
        const response = await fetch('https://stiptvervoer.com/contact', {
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
            body: JSON.stringify({ naam, email, bedrijfsnaam, adres, postcode, plaats, telefoon, fax, bericht }) // body data type must match "Content-Type" header
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
        if (this.state.bericht === '') {
            this.setState({ berichtError: true });
        }
        else {
            this.setState({ berichtError: false })
        }

        if (this.state.name !== '' && this.state.email !== '' && this.state.bericht !== '') {
            this.postData().then(() => {
                this.setState({ naam: '', bedrijfsnaam: '', email: '', adres: '', postcode: '', plaats: '', telefoon: '', fax: '', bericht: ''  })
            })
        }
    }

    render() {
        return (
            <div className="form-container">
                <div className="overlay" style={{ height: "120vh" }}>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput name="bedrijfsnaam" type="text" text="uw bedrijf (optioneel)" handleChange={this.handleChange} value={this.state.bedrijfsnaam} />
                        <FormInput name="naam" type="text" text="naam*" handleChange={this.handleChange} value={this.state.naam} style={this.state.nameError ? this.state.errorStyle : null} />
                        <FormInput name="adres" type="text" text="adres" handleChange={this.handleChange} value={this.state.adres} />
                        <FormInput name="postcode" type="text" text="postcode" handleChange={this.handleChange} value={this.state.postcode} />
                        <FormInput name="plaats" type="text" text="plaats" handleChange={this.handleChange} value={this.state.plaats} />
                        <FormInput name="telefoon" type="text" text="telefoon" handleChange={this.handleChange} value={this.state.telefoon} />
                        <FormInput name="fax" type="text" text="fax" handleChange={this.handleChange} value={this.state.fax} />
                        <FormInput name="email" type="email" text="email*" handleChange={this.handleChange} value={this.state.email} style={this.state.emailError ? this.state.errorStyle : null} />
                        <div className="text-control">
                            <label htmlFor="bericht">BERICHT*</label>
                            <textarea name="bericht" type="text" onChange={this.handleChange} value={this.state.bericht} style={this.state.berichtError ? this.state.textareaErrorStyle : null}></textarea>
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