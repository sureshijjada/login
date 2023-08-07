// Write your code here
import {Component} from 'react'
import './index.css'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogin: false}

  onClick = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    // const text = isLogin ? 'Please Login' : 'Welcome User'
    // const buttonText = isLogin ? 'Login' : 'Logout'

    return (
      <div className="container">
        <div className="card">
          {/* <h1 className="heading"> {text}</h1>
        <button type="button" onClick={this.onClick}>
          {buttonText}
        </button> */}
          <Message isLogin={isLogin} />
          <button className="button" type="button" onClick={this.onClick}>
            {isLogin ? <Login /> : <Logout />}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
