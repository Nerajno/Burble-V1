import React, {useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/BurbleLogo.png';
import ThemeSetter from '../../context/ThemeSetter';


const headerNav = [
    { 
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    }, 
    {
        display: 'TV Series',
        path: '/tv'
    }
]

const Header = () =>{
    const {pathname} = useLocation();
    const headerRef = useRef(null);
    const active  = headerNav.findIndex( e => e.path === pathname);

    useEffect(()=>{
        const shrinkHeader = () => {
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
                headerRef.current.classList.add('shrink');
            }else{
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
        <div className="header__wrap container">
            <div className="logo">
                <img src={logo} alt=""/>
                <Link to="/">Burble</Link> 
            </div>
            <ul className="header__nav">
                {
                    headerNav.map((e, i) => (
                        <li key={i} className={`${i === active ? 'active' : ''}`}>
                            <Link to={e.path}>
                                {e.display}
                            </Link>
                        </li>
                    ))
                }
            <li className="themeSetter">
                <ThemeSetter />
            </li>
            </ul>
        </div>
        </div>
    );
}

export default Header;

// create a cypress test for the header component that test the file above
// and make sure it passes  (you can use the test file above as a guide)

// describe('Header Component', () => {
//     beforeEach(() => {
//         cy.visit('/');
//     });

//     it('displays all expected links', () => {
//         const headerNav = [
//             { 
//                 display: 'Home',
//                 path: '/'
//             },
//             {
//                 display: 'Movies',
//                 path: '/movie'
//             }, 
//             {
//                 display: 'TV Series',
//                 path: '/tv'
//             }
//         ];

//         cy.get('.header__nav')
//             .find('li')
//             .each(($el, index) => {
//                 cy.wrap($el)
//                     .should('contain', headerNav[index].display)
//                     .find('a')
//                     .should('have.attr', 'href', headerNav[index].path);
//             });
//     });

//     it('links are real links with <a> tags', () => {
//         cy.get('.header__nav')
//             .find('li')
//             .each(($el) => {
//                 cy.wrap($el)
//                     .find('a')
//                     .should('have.attr', 'href');
//             });
//     });

//     it('should have a logo image with alt text', () => {
//         cy.get('.logo')
//             .find('img')
//             .should('have.attr', 'alt');
//     });
// }