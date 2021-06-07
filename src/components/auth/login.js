import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { login } from '../../redux/actions/auth.actions'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'


class signIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // dispatch login, ex:
        this.props.login(this.state);
    }
    render() {
        const { authError } = this.props;

        const userLocalStg = JSON.parse(localStorage.getItem('user'));

        // console.log(user)

        // if user is logged in, redirect to home
        if (userLocalStg) return <Redirect to='/' /> 

        return (
            <div className="py-5">
                <div id="login-row" className="row justify-content-center no-gutters">
                    <div id="login-column" className="col-md-4">  
                        <div id="login-box" className="col-md-12">
                            <form onSubmit={this.handleSubmit}>
                                <h1 className="mb-3">Log In</h1>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="email">Email address</label>
                                    <input type="email" id="email" class="form-control"  onChange={this.handleChange}/>
                                </div>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="password">Password</label>
                                    <input type="password" id="password" class="form-control" onChange={this.handleChange}/>
                                </div>
                                {/* <div class="row mb-4">
                                    <div class="col">
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div> */}

                                <button type="submit" class="btn btn-primary btn-block w-100 mb-4">Log in</button>
                                { authError ? <Alert variant='danger' className="text-center">{authError}</Alert> : null}
                                <div class="text-center">
                                    <p>Not a member? <a href="/register">Register</a></p>
                                </div>

                                {/* <div class="text-center">
                                    <p>Not a member? <a href="/register">Register</a></p>
                                    <p>or sign up with:</p>
                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <FontAwesomeIcon icon={faFacebook} />
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <FontAwesomeIcon icon={faGoogle} />
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <FontAwesomeIcon icon={faTwitter} />
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <FontAwesomeIcon icon={faGithub} />
                                    </button>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        user: state.auth.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(login(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(signIn)