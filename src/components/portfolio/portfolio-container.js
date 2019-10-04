import React, { Component } from "react"; // use curley braces when importing a non-default 
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() { //constructor can only be used inside a class component
        super(); // because we are extending from Component we need a super() call to reference back properly

        // console.log("Portfolio has rendered");
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false, //will be set true if data is not returned from api yet
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);//must bind a function in order to call it later
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.wholedata.filter(item => {
                return item.catagory === filter;
            })
        })
    }

    getPortfolioItems() {
        axios
        .get("https://daniel.devcamp.space/portfolio/portfolio_items")
        .then(response => {
          this.setState({
              data: response.data.portfolio_items
          })
          console.log(response);
    
        })
        .catch(error => {
          console.log(error);
        });
    }
    
    portfolioItems() {
        // Data that we'll need
        // background image
        // logo - logo_url
        // description - description
        // id - id
        // ["id", "name", "description", "url", "category", "position", "thumb_image_url", "banner_image_url", "logo_url", "column_names_merged_with_images"]

        return this.state.data.map(item => {
            return <PortfolioItem key={item.id} item={item} />;//{item.name} url={item.url} slug={item.id}/>; //title sets props in item
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() { // class based components always need a render function
        if (this.state.isLoading) { //normally checking an api for if data has arrived yet
            return <div>Loading...</div>;
        }
        return ( // class based components have more ability to perform logic, essential for state or lifecycle hooks based components
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

                <div className="portfolio-items-wrapper">
                    {this.portfolioItems()}
                </div>
            </div>
        )
    }
}