import React from "react";
import ReactDOM from "react-dom/client";

function Register(props) {
  return (
    <div>
      {props.isRegister ? (
        <h2>Sign in to your account</h2>
      ) : (
        <h2>Create an account</h2>
      )}
      <from>
        <input type="text" placeholder="Enter your email" />
        <input type="text" placeholder="Password" />
        {props.isRegister ? (
          true
        ) : (
          <input type="text" placeholder="Confirm Password" />
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
            Not a member ? <a>Sign Up</a>
          </p>
        )}
      </from>
    </div>
  );
}

export default Register;
