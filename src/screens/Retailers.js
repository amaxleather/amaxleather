import React from "react";
import "../css/main.css";
import _ from "lodash";

class Retailers extends React.Component {
  state = {
    page: 0,
    country: "unselected",
    state: "unselected",
    data: []
  };
  componentDidMount() {
    this.setState({
      data: this.props.data
    })
  }
  nextpage = () => {
    this.setState({
      page: this.state.page + 1
    });
  };
  prevpage = () => {
    this.setState({
      page: this.state.page - 1
    });
  };
  renderCountries = retailers => {
    const countryArray = retailers.map(elem => elem.country);
    const uniqCountries = _.uniq(countryArray);
    return uniqCountries.map(country => (
      <div key={country} className="country">
        <h2
          onClick={() => {
            this.selectCountry(country);
          }}
        >
          {country}
        </h2>
      </div>
    ));
  };

  renderStates = retailers => {
    const country = retailers.filter(data => data.country === this.state.country);
    const stateArray = country.map(elem => elem.state);
    const uniqStates = _.uniq(stateArray);
    return uniqStates.sort().map(state => (
      <div className="state" key={state}>
        <p
          className="stateName"
          onClick={() => {
            this.selectState(state);
          }}
        >
          {state}
        </p>
      </div>
    ));
  };
  selectState = state => {
    this.setState({
      page: this.state.page + 1,
      state: state
    });
  };
  selectCountry = country => {
    this.setState({
      page: this.state.page + 1,
      country: country
    });
  };
  renderLocations = data => {
    return data
      .filter(obj =>obj.state === this.state.state)
      .map(obj => (
        <li key={obj.id}>
          <p>
            <b>{obj.title}</b> - {obj.address}
            {" | "}
            {obj.phone_number}
          </p>
        </li>
      ));
  };

  render() {
    let position = {
      marginLeft: this.state.page * -100 + "%"
    };
    return (
      <div
        id="retailerswindow"
        className={this.props.open ? "retailers" : "retailers inactive"}
      >
        <div className="container" id="retailercontainer" style={position}>
          <div id="countries">
            {this.renderCountries(this.state.data)}
            {/* <div id="usa" className="country">
              <h2 onClick={this.nextpage}>UNITED STATES</h2>
            </div>
            <div id="canada" className="country">
              <h2>CANADA</h2>
            </div> */}
          </div>
          <div id="state">
            <div className="name">
              <div className="back" onClick={this.prevpage} />
              <h2>{this.state.country}</h2>
            </div>
            <div className="list">{this.renderStates(this.state.data)}</div>
          </div>
          <div id="location">
            <div className="name">
              <div className="back" onClick={this.prevpage} />
              <h2 id="selected-state">{this.state.state}</h2>
            </div>
            <ul className="list">
              {this.renderLocations(this.state.data)}
              {/* <li>
                <p>
                  <b>Furniture and Mattress Warehouse</b> - 2250 E Alessandro
                  Blvd Riverside, CA 92508 (951) 656-7068
                </p>
              </li>
              <li>
                <p>
                  <b>Joel Jones Furniture</b> - 11010 E Foothill Blvd Rancho
                  Cucamonga, CA 91730 (909) 941-8393
                </p>
              </li>
              <li>
                <p>
                  <b>Ontario Furniture</b> - 735 N Milliken Ave Ontario, CA
                  91764 (909) 948-8881
                </p>
              </li>
              <li>
                <p>
                  <b>JEM Furniture Liquidators</b> - 2236 S Vineyard Avenue
                  Ontario, CA 91761 (909) 923-7474
                </p>
              </li> */}
            </ul>
          </div>
        </div>
        <div id="close-retailer" onClick={this.props.retailers} />
      </div>
    );
  }
}

export default Retailers;
