import React, { Component } from "react"; // use curley braces when importing a non-default
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    //constructor can only be used inside a class component
    super(); // because we are extending from Component we need a super() call to reference back properly

    // console.log("Portfolio has rendered");
    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false, //will be set true if data is not returned from api yet
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this); //must bind a function in order to call it later
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else {
      this.getPortfolioItems(filter);
    }
  }

  getPortfolioItems(filter = null) {
    axios
      .get("https://daniel.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter(item => {
            return item.category === filter;
            })
          });
        } else {
          this.setState({
            data: response.data.portfolio_items
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />; //{item.name} url={item.url} slug={item.id}/>; //title sets props in item
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    // class based components always need a render function
    if (this.state.isLoading) {
      //normally checking an api for if data has arrived yet
      return <div>Loading...</div>;
    }
    return (
      // class based components have more ability to perform logic, essential for state or lifecycle hooks based components
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button
            className="btn"
            onClick={() => this.handleFilter("games")}
          >
            Games
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("boardgames")}
          >
            Boardgame
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("exercise")}
          >
            Exercise
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            Clear
          </button>
        </div>
        <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
      </div>
    );
  }
}
