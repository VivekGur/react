import React, { useState } from 'react'

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [usererr, setUsererr] = useState(false);
    const [passerr, setPasserr] = useState(false);

    function loginHandle(e) {

        if (user.length < 3 || password.length < 3) {
            alert("type correct value")
        } else {
            alert("All Good :)")
        }
        e.preventDefault()
    }
    function userHandler(e) {
        let item = e.target.value

        if (item.length < 3) {
            setUsererr(true);
        }
        else {
            setUsererr(false);
        }
        setUser(item)

    }
    function passHandler(e) {
        let item = e.target.value

        if (item.length < 3) {
            setPasserr(true);
        }
        else {
            setPasserr(false);
        }
        setPassword(item)

    }

    return (
        <div>
            <form onSubmit={loginHandle}>
                <h1>Login</h1>
                <input type="text" placeholder='Enter user id' onChange={userHandler} />{usererr ? <span>User Not Valid</span> : ""}
                <br /><br />
                <input type="password" placeholder='Enter user password' onChange={passHandler} />{passerr ? <span>Password Not Valid</span> : ""}
                <br /><br />
                <button type='submit' >Login</button>
            </form>
        </div>
    )
}

export default Login;