import React from "react";
import ReactDOM from "react-dom";
import "../style.css";

function Register(props) {
  return (
    <div className="register">
      {props.isRegister ? (
        <h2>Sign in to your account</h2>
      ) : (
        <h2>Create an account</h2>
      )}
      <form>
        <input type="text" placeholder="Enter your email" />
        <input type="password" placeholder="Password" />
        {props.isRegister ? (
          true
        ) : (
          <input type="password" placeholder="Confirm Password" />
        )}
        <button type="submit">{props.isRegister ? "Login" : "Sign Up"}</button>
        {props.isRegister ? (
          true
        ) : (
          <p>By signing up you agree to our Privacy Policy and Terms</p>
        )}
        <hr />
        <p>Or</p>
        <button>LOGIN WITH GOOGLE</button>
        <button>LOGIN WITH FACEBOOK</button>
        {props.isRegister ? (
          false
        ) : (
          <p>
            Not a member? <a href="#">Sign Up</a>
          </p>
        )}
      </form>
    </div>
  );
}

export default Register;
