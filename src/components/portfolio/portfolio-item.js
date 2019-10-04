import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) { // functional component mostly for display only, no logic // props is an object of properties passed in
    // logo - logo_url
    // description - description
    // id - id
    //background - thumb_image_url
    const { id, description, thumb_image_url, logo } = props.item;
    return ( // functional components do not need a render(), only a return
        <div className="portfolio-item-wrapper">
            <div
                className="portfolio-img-background"
                style={{//two currly brackets
                    backgroundImage: "url(" + thumb_image_url + ")"
                }}
            />

            <img src={logo} />
            <div>{description}</div>

            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    )
}