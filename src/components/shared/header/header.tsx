import {Link} from 'react-router-dom';
import * as React from 'react';

export default function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/business">Business</Link></li>
                <li><Link to="/economics">Economics</Link></li>
            </ul>
        </header>
    )
}