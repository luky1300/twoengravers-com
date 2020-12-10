import React from 'react';
import Link from 'gatsby-link';

const Menu = () => {
    return (
        <div style={{
            background: '#f4f4f4',
            paddingTop: '10px'
        }}>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-evenly',
            }}>
                <li><Link to="/" style={{textDecoration: 'none', color: 'black'}}>About</Link></li>
                <li><Link to="/services" style={{textDecoration: 'none', color: 'black'}}>Services</Link></li>
                <li><Link to="/products" style={{textDecoration: 'none', color: 'black'}}>Products</Link></li>
            </ul>
        </div>
    )
}

export default Menu;
