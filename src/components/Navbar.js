import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars, FaHatCowboy, FaTwitter } from 'react-icons/fa';

const Nav = styled.nav`
    display: flex;
    background: #eee;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 2rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    box-shadow: 0 0.5rem 1.5rem rgba(255, 255, 250, 0.5);

    &.active{
        background: linear-gradient(90deg, #fdfdfd, #fefefe);
        transition: 0.5s ease-in-out;

        .btnn{
            background: cdfe1d;
        }
    }
`;

const NavLink = css`
    margin: 0.9rem;
    padding: 1rem;
    color: #F7C08A;
    color: #041e42;
    font-size: 20px;
    font-weight: 100;
    align-items: center;
    text-decoration: none;
    letter-spacing: 3px;

    &:hover{
        color: #0bb6fc;
    }
`;

const Logo = styled(Link)`
    color: #F7C08A;
    font-size: 23px;
    font-weight: 700;
    text-decoration: none;

    span{
        color: #044240;
    }
`;

const MenuBars = styled(FaBars)`
    display: none;

    @media (max-width: 768px){
        display: block;
        color: ##F7C08A;
        height: 40px;
        width: 40px;
        font-size: 30px;
        cursor: pointer;
        transition: .9s ease;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    margin: -48px;

    @media (max-width: 768px){
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    
    @media (max-width: 768px){
        display: none
    }
`;

const Icons =styled.div`
    color: #a0a0a0;
    font-size: 22px;
    cursor: pointer;

    div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding: 5px;
        margin: 5px;
    }

    a {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: relative;
        animation: slideInFromRight 1.2s ease-in;
        animation-fill-mode: backwards;
    }

    .like {
        background: #fff0ee;
        color: #0bb6fc;
    }

    a span {
        display: flex;
        color: #000;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 0.9rem;
        font-weight: 500;

        position: absolute;
        top: -7px;
        right: -7px;
        width: 20px;
        height: 20px;
    }

    .like span {
        background: #ff6c57;
    }
`;

const Navbar = ({toggle }) => {
    
  return (
    <Nav>
        <Logo><FaHatCowboy />Home<span>Interior</span></Logo>
        <Icons>
            <div>
                <a href='#review' className='like'><FaTwitter /><span>4</span></a>
            </div>
        </Icons>
        <MenuBars onClick={toggle}/>
        
        <NavMenu>
            {menuData.map((item, index) => (
                <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>
            ))}
        </NavMenu>
        
        <NavBtn className='btnn'>
            <Button to="/contact" primary='true'> 
                Contact Us
            </Button>
        </NavBtn>
    </Nav>
  )
}

export default Navbar;