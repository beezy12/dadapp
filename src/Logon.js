import React, { Component } from 'react';

class Logon extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert(`this name was submitted ${this.state.value}`);
    event.preventDefault();
    // this is where you make an ajax call to the node server
  }


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
            <input type='text' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit form here' />
        </form>
      </div>
    );
  }
}

export default Logon;

