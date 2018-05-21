import React, { Component } from 'react';
import './loginpage.css';

class SignUpPage extends Component {
    render() {
        return(
            <div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col mt-2">
                            back
                        </div>
                        <div className="col mt-2 text-right">
                            <h2>WyFy</h2>
                        </div>
                    </div>
                </div>

                <div className="p-5 mx-auto my-5 mb-4">
                    <div className="col text-center">
                        <input className="m-2 inputStyle text-center" type="text" placeholder="*First Name"/>
                        <input className="m-2 inputStyle text-center" type="text" placeholder="*Last Name"/>
                        <input className="m-2 inputStyle text-center" type="text" placeholder="*Username"/>
                        <input className="m-2 inputStyle text-center" type="text" placeholder="*Password"/>
                        <div className="row my-3 align-items-center">
                            <input className="mr-2" type="checkbox"/>I have read and agree to the <a href="#"> terms of service</a> .
                        </div>
                        <div className="col">
                            <button className="btn btn-success m-2">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpPage;