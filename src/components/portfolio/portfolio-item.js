import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class PortfolioItem extends Component { // functional component mostly for display only, no logic // props is an object of properties passed in
    constructor(props) {
        super();

        this.state = {
            portfolioItemClass: ""
        };
    }

    handleMouseEnter() {
        this.setState({portfolioItemClass: 'img-blur'});
    }

    handleMouseLeave() {
        this.setState({portfolioItemClass: ''});
    }

    render() {
        const { id, description, thumb_image_url, logo_url } = this.props.item;
        return ( // functional components do not need a render(), only a return
            <div className="portfolio-item-wrapper"
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
            >
                <div
                    className={"portfolio-img-background " + this.state.portfolioItemClass}
                    style={{//two currly brackets
                        backgroundImage: "url(" + thumb_image_url + ")"
                    }}
                />

                <div className="img-text-wrapper">
                    <div className="logo-wrapper">
                        <img src={logo_url} />
                    </div>
                <div className="subtitle">{description}</div>
                </div>

                <Link to={`/portfolio/${id}`}>Link</Link>
            </div>
        )
    }
}