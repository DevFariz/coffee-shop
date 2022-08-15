import { Component } from "react";
import "./CoffeeFilter.css";

class CoffeeFilter extends Component {
  state = {
    text: ""
  }

  onInputChange = (e) => {
    const text = e.target.value;
    this.setState({
      text,
    });
    this.props.onUpdateSearch(text);
  };

  render() {
    const buttonsData = [
      {name: "all", label: "All"},
      {name: "brazil", label: "Brazil"},
      {name: "kenya", label: "Kenya"},
      {name: "columbia", label: "Columbia"},
    ]

    const btns = buttonsData.map(({name, label}) => {
      const isActive = this.props.filter === name;
      return (
        <button key={name} className={isActive ? "active" : null} onClick={() => this.props.onFilterTab(name)}>{label}</button>
      )
    })

    return (
      <section className="coffee-filter">
        <div className="container">
          <div className="coffee-filter-container">
            <div className="coffee-filter-left">
              <label htmlFor="coffee-filter-search">Lookiing for</label>
              <input
                type="text"
                id="coffee-filter-search"
                placeholder="start typing here..."
                value={this.state.text}
                onChange={this.onInputChange}
              />
            </div>
            <div className="coffee-filter-right">
              <span>Or filter</span>
              {btns}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CoffeeFilter;
