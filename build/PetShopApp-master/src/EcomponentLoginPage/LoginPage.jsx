import React from "react";
import { Link } from "react-router-dom";

const LoginContainer = () =>{
    return(
        <div class="wrapper">
            <div class="login-3-row">
                <div class="login-3-row-earntpoints">
                    <h3 class="login-3-row-earntpoints-h3">Earn points for purchases</h3>
                    <div class="login-3-row-earntpoints-img"><img src="https://cdn.shopify.com/s/files/1/0812/3573/files/Asset_1_copy_522x.png?v=1654270439" alt=""/></div>
                        <div class="login-3-row-earntpoints-2-button">
                            <div class="login-3-row-earntpoints-2-button-1">
                                <p class="login-3-row-earntpoints-2-button-1-p">Already a Neighbor's Club member?</p>
                                <a href="" class="login-3-row-earntpoints-2-button-1-a">Sign In</a>
                            </div>
                            <div class="login-3-row-earntpoints-2-button-2">
                                <p class="login-3-row-earntpoints-2-button-1-p">Join Today. It's Free &amp; Easy!</p>
                                <a href="" class="login-3-row-earntpoints-2-button-2-a">Join Neighbor's Club</a>
                            </div>
                        </div>
                    <p class="login-3-row-earntpoints-p">Neighbor's Club is powered by Tractor Supply and is a separate log-in from Petsense.com</p>
                </div>

                <div class="login-3-row-login-register">
                    <div class="login-3-row-login">
                        <h5 class="login-3-row-login-h5">Login to your account</h5>
                        <div class="login-3-row-login-email">
                            <label for="" class="login-3-row-login-email-label">Email Address</label>
                            <input type="text" class="login-3-row-login-email-input" id="Email-login"/>
                        </div>
                        <div class="login-3-row-login-password">
                            <label for="" class="login-3-row-login-email-label">Password</label>
                            <input type="password" class="login-3-row-login-email-input" id="Password-login"/>
                            <a href="" class="login-3-row-login-password-a">Forgot password?</a>
                        </div>
                        <div class="login-3-row-login-signin">
                            <a href="" class="footer-1-button" onclick="login()">Sign In</a>
                            <p class="login-3-row-login-signin-p">or</p>
                            <Link to="/" class="login-3-row-login-signin-a">return to store</Link>
                        </div>
                    </div>

                    <div class="login-3-row-register">
                        <h5 class="login-3-row-login-h5">Register Today</h5>
                        <ul type="disc">
                            <li class="login-3-row-register-li">Receive promotional news</li>
                            <li class="login-3-row-register-li">Access a faster checkout process</li>
                            <li class="login-3-row-register-li">View order history</li>
                            <li class="login-3-row-register-li">Book appointments for pet grooming with ease</li>
                        </ul>
                        <Link to="/regist" class="footer-1-button css">Register Today</Link>
                        <p class="white-text">ddd</p>
                        <p class="white-text">ddd</p>
                        <p class="white-text">ddd</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
    
export default LoginContainer;