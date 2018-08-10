import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { auth } from '../../../firebase'
import * as routes from '../../../constants/routes'


const byPropKey = (propertyName, value) => () =>
    ({
        [propertyName]: value
    })

const SignUpPage = ({history}) =>
    <div>
        <h1>Sign Up</h1>
        <SignUpForm history={history} />
    </div>


class SignUpForm extends React.Component {

    defaultState = {
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null
    }

    constructor(props) {
        super(props)

        this.state = { ...this.defaultState }
    }

    onSubmit = (event) => {
        const {
            username, email, passwordOne
        } = this.state

        auth.createUser(email, passwordOne)
            .then(user => {
                console.log('created user ', user)
                this.setState({...this.defaultState})

                this.props.history.push(routes.HOME)
            })
            .catch(error => {
                this.setState(byPropKey('error', error))
            })

        event.preventDefault()
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

                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

const SignUpLink = () =>
    <p>
        Don't have an account? {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>


export default withRouter(SignUpPage)

export {
    SignUpForm,
    SignUpLink
}