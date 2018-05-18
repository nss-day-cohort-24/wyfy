import React, { Component } from 'react';
import './loginpage.css';

class LogInPage extends Component {
    render() {
        return (
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
                        <h2>LOG IN</h2>
                        <input className="m-2 inputStyle text-center" type="text" placeholder="Username"/>
                        <input className="m-2 inputStyle text-center" type="text" placeholder="Password"/>
                        <div className="col">
                            <button className="btn btn-success m-2">Sign In</button>
                            <p className="my-2"><a href="#">Forgot your Password?</a></p>
                        </div>
                    </div>
                </div>

                
                <div className="container footer">
                    <div className="py-3 text-center">
                        Don't have an account? <a href="#">Create One</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogInPage;