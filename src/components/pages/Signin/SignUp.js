import React from 'react'
import { Link } from 'react-router-dom'

import * as routes from '../../../constants/routes'


const byPropKey = (propertyName, value) => () =>
    ({
        [propertyName]: value
    })

const SignUpPage = () =>
    <div>
        <h1>Sign Up</h1>
        <SignUpForm />
    </div>


class SignUpForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            passwordOne: '',
            passwordTwo: '',
            error: null
        }
    }

    onSubmit = (event) => {

    }

    render = () => {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state

        const isInvalid = passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === ''

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={username}
                    onChange={event => this.setState(byPropKey('username', event.target.value))}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="Password"
                />
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>

                {error && <p>{error}</p>}
            </form>
        )
    }
}

const SignUpLink = () =>
    <p>
        Don't have an account? {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>


export default SignUpPage

export {
    SignUpForm,
    SignUpLink
}