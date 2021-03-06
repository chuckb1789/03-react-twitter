import React, { Component } from 'react';
import Navigation from './Navigation';
import './Profile/Account.css'

class Account extends React.Component {

  submitButton = () => {
    alert('Updates Submitted!')
  }

  render() {
    return (
    <div className="account">
      <h1>Account</h1>
      <hr/>
      <div className="changeInput">
      <label className="title">Edit Username</label>
      <input className="input" placeholder="bruceWayne"></input> <br/>
      <label className="title">Edit Email</label>
      <input className="input" placeholder="bruceWayne@batcave.com"></input> <br/>
      <button onClick={this.submitButton} className="btn">Save changes</button>
      </div>
    </div>
    )
}
}
export default Account;
