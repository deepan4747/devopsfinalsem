import React from "react";
import { Link } from "react-router-dom";

const RegistContainer = () =>{
    return(
        <div class="wrapper">
            <div class="register">
            <h2 class="register-h2">REGISTER</h2>
            <div class="login-3-row-login-email">
                <label for="" class="login-3-row-login-email-label">First name *</label>
                <input type="text" class="login-3-row-login-email-input"/>
            </div>
            <div class="login-3-row-login-email">
                <label for="" class="login-3-row-login-email-label">Last name *</label>
                <input type="text" class="login-3-row-login-email-input"/>
            </div>
            <div class="login-3-row-login-email">
                <label for="" class="login-3-row-login-email-label">Email address *</label>
                <input type="text" class="login-3-row-login-email-input" id="Email"/>
            </div>
            <div class="login-3-row-login-email">
                <label for="" class="login-3-row-login-email-label">Phone number *</label>
                <input type="text" class="login-3-row-login-email-input"/>
            </div>
            <div class="login-3-row-login-email">
                <label for="" class="login-3-row-login-email-label">Password *</label>
                <input type="password" class="login-3-row-login-email-input" id="Password"/>
            </div>

            <div class="register-2-button">
                <Link to="/" class="footer-1-button">Cancel</Link>
                {/* <a class="footer-1-button" style="margin-left: 20px;" onclick="register()">Create account</a> */}
                <a class="footer-1-button" onclick="register()">Create account</a>
            </div>
        </div>
        </div>
    );
};
    
export default RegistContainer;