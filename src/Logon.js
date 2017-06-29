import React, { Component } from 'react';

class Logon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    alert(`this name was submitted ${this.state.name}, and the email was ${this.state.email}`);
    event.preventDefault();
    this.setState({name: '', email: ''})

    // this is where you make an ajax call to the node server
/*
    $.ajax({
      url: 'api/person',
      data
    
    });
*/
  }

// https://html5hive.org/how-to-submit-forms-and-save-data-with-react-js-and-node-js/

/*
  handleDonationSubmit: function(donation) {
    //this is just an example of how you would submit a form
    //you would have to implement something separately on the server
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: donation,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
*/


  render() {
    return (
      <div>
        <p>yo</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' value={this.state.name} name='name' onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type='text' value={this.state.email} name='email' onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit form here' />
        </form>
      </div>
    );
  }
}

export default Logon;

