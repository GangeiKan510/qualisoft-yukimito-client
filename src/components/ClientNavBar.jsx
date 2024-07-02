import React from 'react';
import NavBar from '../components/partials/NavBar';

import { Link } from 'react-router-dom';

const navItems = [
    { name: 'Home', path: '/PetOwnerHome' },
    { name: 'Reviews', path: '/PetOwnerReview' },
    { name: 'Contact', path: '/PetOwnerContact' },
    { name: 'Size Chart', path: '/PetOwnerSizeChart' },
    { name: 'Rates', path: '/PetOwnerRates' },
    { name: 'Photos', path: '/PetOwnerPhotos' },
    { name: 'Requirements', path: '/PetOwnerRequirements' },
];

const ClientNavBar = () => {
    return (
        <>
            <NavBar 
                navItems={navItems.map((route, index) => (
                    <div key={index}>
                        <Link className='navbar-color' to={route.path}>{route.name}</Link>
                    </div>
                ))}
            />
        </>
    );
};

export default ClientNavBar;
