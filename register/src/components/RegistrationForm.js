import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {
    send,get
} from '../actions/RegistrationFormActions'
import { bindActionCreators } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import registerApp from "../reducers/index"

import TextField from 'material-ui/TextField';


let store = createStore(registerApp, applyMiddleware(thunk,logger))

class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        this.handleChange = this.handleChange.bind(this);
        // this.send = this.send.bind(this);
        this.get = this.get.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = this.state;
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        //fetch("https://httpbin.org/post", {
        console.log('AAA')
        console.log(JSON.stringify((formData)))
        fetch("http://127.0.0.1:8000/movie/restapi/RegistrationForm/", {
            method: 'POST',
            headers: {
                'Authorization': 'Basic '+btoa('admin:12345678.'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then(function (response) {
            console.log(formData)


        });
        store.dispatch(send(this.state.agency_name,this.state.ap_first_name,this.state.ap_last_name,this.state.ap_mail,this.state.ap_phone_country_code,this.state.ap_phone_number,this.state.ap_title,
            this.state.company_address,this.state.company_city,this.state.company_district,this.state.company_mail,this.state.company_name,this.state.company_web_site,this.state.country_code,this.state.first_name,
            this.state.gross_revenue,this.state.gross_revenue_currency,this.state.last_name,this.state.phone_country_code,this.state.phone_number,this.state.tax_number,this.state.tax_office,this.state.zip_code))

       // console.log('-->', formData);
    }

    // send() {
    //           // store.dispatch(send(this.state.name,this.state.surname))
    //
    //
    //     fetch("https://httpbin.org/post", {
    //         method: 'POST',
    //         body: JSON.stringify(this.state)
    //     }).then(function (response) {
    //
    //     });
    //
    //     console.log(this.state)
    // }

    get(event){
        store.dispatch(get())
        this.setState({
            name: "aaa",
            surname: "bbb",
        })
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }




    render() {
        var test={margin:"10px"}
        return(<Provider store={store}><div>

            <p>Reg form test</p>
            <hr />

            <form onSubmit={this.handleSubmit}>


                <TextField
                    name="first_name"
                    type="text"
                    maxLength="80"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                    floatingLabelText="First Name"


                /><br />



                {/*<div style={test}>*/}
                    {/*<label>*/}
                        {/*First Name:*/}
                        {/*<input name="first_name" type="text" maxLength="80"  value={this.state.first_name} onChange={this.handleChange} required/>*/}
                    {/*</label>*/}
                {/*</div>*/}
                <div style={test}>
                    <label>
                        Last Name:
                        <input name="last_name" type="text"  maxLength="80" value={this.state.last_name} onChange={this.handleChange} required/>
                    </label>
                </div>
                <div style={test}>
                    <label>
                    Company Name:
                    <input name="company_name" type="text" maxLength="254" value={this.state.company_name} onChange={this.handleChange} required/>
                    </label>
                </div>
                <div style={test}>
                    <label>
                    Country Code:
                        <input name="country_code" type="text" maxLength="254" value={this.state.country_code} onChange={this.handleChange} required/>
                    </label>
                </div>
                <div style={test}>
                <label>
                    Company Address:
                    <input name="company_address" type="text" maxLength="254" value={this.state.company_address} onChange={this.handleChange} required/>
                    District:
                    <input name="company_district" type="text" maxLength="64" value={this.state.company_district} onChange={this.handleChange} required/>
                    City:
                    <input name="company_city" type="text" maxLength="64" value={this.state.company_city} onChange={this.handleChange} required/>
                    Zip Code:
                    <input name="zip_code" type="text" maxLength="8" value={this.state.zip_code} onChange={this.handleChange} required/>
                </label>
                </div>
                <div style={test}>
                <label>
                    Phone Number:
                    <input name="phone_country_code" type="text" maxLength="5" value={this.state.phone_country_code} onChange={this.handleChange} required/>
                    <input name="phone_number" type="text" maxLength="15" value={this.state.phone_number} onChange={this.handleChange} required/>
                </label>
                </div>
                <div style={test}>
                <label>
                    Tax Office:
                    <input name="tax_office" type="text" maxLength="50" value={this.state.tax_office} onChange={this.handleChange} required/>
                </label>
                </div>
                <div style={test}>
                <label>
                    Tax Number:
                    <input name="tax_number" type="text" maxLength="15" value={this.state.tax_number} onChange={this.handleChange} required/>
                </label>
                </div>
                <div style={test}>
                <label>
                    Company Mail:
                    <input name="company_mail" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$" maxLength="254" value={this.state.company_mail} onChange={this.handleChange} required/>
                </label>
                </div>
                <div style={test}>
                <label>
                    Company Web Site:
                    <input name="company_web_site" type="url" pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)" maxLength="200" value={this.state.company_web_site} onChange={this.handleChange} required/>
                </label>
                </div>
                <div style={test}>
                <label>
                    Agency Name:
                    <input name="agency_name" type="text" maxLength="200" value={this.state.agency_name} onChange={this.handleChange} required/>
                </label>
                </div>
                <div style={test}>
                <label>
                    Authorized Title:
                    <input name="ap_title" type="text" maxLength="80" value={this.state.ap_title} onChange={this.handleChange} required/>
                </label>
                </div>
                <div style={test}>
                <label>
                    Authorized First Name:
                    <input name="ap_first_name" type="text" maxLength="80" value={this.state.ap_first_name} onChange={this.handleChange} required/>
                </label>
                </div>
                <div style={test}>
                <label>
                    Authorized Last Name:
                    <input name="ap_last_name" type="text" maxLength="80" value={this.state.ap_last_name} onChange={this.handleChange} required/>
                </label>
                </div>
                <div style={test}>
                <label>
                    Authorized Phone:
                    <input name="ap_phone_country_code" type="text" maxLength="5" value={this.state.ap_phone_country_code} onChange={this.handleChange} required/>
                    <input name="ap_phone_number" type="text" maxLength="15" value={this.state.ap_phone_number} onChange={this.handleChange} required/>
                </label>
                </div>
                <div style={test}>
                <label>
                    Authorized Person Mail:
                    <input name="ap_mail" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$" maxLength="254" value={this.state.ap_mail} onChange={this.handleChange} required/>
                </label>
                </div>
                <div style={test}>
                <label>
                    Gross Revenue § Currency:
                    <input name="gross_revenue" type="text" maxLength="15" value={this.state.gross_revenue} onChange={this.handleChange} required/>
                    <input name="gross_revenue_currency" type="text" maxLength="15" value={this.state.gross_revenue_currency} onChange={this.handleChange} required/>
                </label>
                </div>


                    <label>
                        Name:
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                    </label>
                <hr />
                <label>
                    Surname:
                    <input name="surname" type="text" value={this.state.surname} onChange={this.handleChange}/>
                </label>

                <input type="submit" value="Submit" />
                <button

                    onClick={this.send}>send</button>
                <button
                    type="button"
                    onClick={this.get}>get</button>
            </form>
            <hr />

            <p>x</p>

            <hr /><br />








        </div></Provider>);
    }
}


export default RegistrationForm;
