import React from 'react';
import Link from 'gatsby-link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEtsy, faFacebook, faPinterestSquare } from "@fortawesome/free-brands-svg-icons"

const SocialMedia = () => {
    return (
        <div 
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '10px',
                width: '200px',
                alignSelf: 'flex-end'

            }}
        >
            <Link 
                to="https://www.facebook.com/two-engravers">
                <FontAwesomeIcon icon={faFacebook} style={{color: 'blue'}} />
            </Link>

            <Link to="https://www.pinterest.com/twoengravers/" >
                <FontAwesomeIcon icon={faPinterestSquare} style={{
                    color: 'red',
                    }}/>
            </Link>
                <Link 
                to="https://www.etsy.com/shop/twoengravers">
                    <FontAwesomeIcon icon={faEtsy} style={{
                    color: 'white',
                    backgroundColor: '#eb6d20',
                    padding: '1px',
                }}/>
                </Link>
                <Link to="https://www.etsy.com/shop/TwoEngraversArt"
                    style={{textDecoration: 'none', color: 'black'}}
                >
                    <FontAwesomeIcon icon={faEtsy} style={{
                    color: 'white',
                    backgroundColor: '#eb6d20',
                    padding: '1px',
                }}/>
                -art
                </Link>
        </div>
    )
};

export default SocialMedia;
