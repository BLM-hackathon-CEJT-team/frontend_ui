import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import icon from './location_icon.png';

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

ReactDOM.render(
  <SearchBar />,
  document.getElementById('root')
);

export default SearchBar;