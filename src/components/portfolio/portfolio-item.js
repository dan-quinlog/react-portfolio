import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) { // functional component mostly for display only, no logic // props is an object of properties passed in
    return ( // functional components do not need a render(), only a return
        <div>
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>

            <Link to={`/portfolio/${props.slug}`}>Link</Link>
        </div>
    )
}