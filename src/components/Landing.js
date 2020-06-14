import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import icon from '../Assets/location_icon.png';
import firstH from '../Assets/firstheading.png'
import secondH from '../Assets/secondheading.png';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
      let path = `newPath`;
    // alert('Information accepted ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
    <div className="container">
        <div className="wordOne">
            <h3>Get to know your local representatives</h3>
        </div>
        <div className="wordTwo">
            <p>Jpo  We help you discover your local representatives, what their roles are, and how to contact them.</p>
        </div>
        <div className="buttonHandle">
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Enter your ZIP code" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="button" onClick={this.handleSubmit}>search</button><img src={icon} alt="Location icon"/>        
      </form>
      </div>
    </div>
    );
  }
}


export default SearchBar;