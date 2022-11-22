import React from 'react';
import { ReactDOM } from 'react';
import Register from './Register';

let userIsRegister=false;

function App() {
    return( <div>
    <Register isRegister={userIsRegister} />
    </div> )
}


export default App;