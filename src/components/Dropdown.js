import React from 'react';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const DropdownContainer = styled.div`
    position: fixed;
    background: #F7C08Aa9;
    color: #333;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    top: ${({isOpen}) => (isOpen ? '0' : '100%')};;
    left: 0;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    z-index: 999;
    display: grid;
    transition: .9s ease;
`;

const Icon = styled.div`
    position: absolute;
    top: 1.8rem;
    right: 12%;
    background: transparent;
    font-size: 2rem;
    outline: none;
    cursor: pointer;
    transition: .9s ease;
`;

const CloseIcon = styled(FaTimes)`
    color: #000;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media (max-width: 768px){
        grid-template-rows: repeat(4, 60px);
    }
`;

const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 25px;
    text-decoration: none;
    transition 0.3s ease-in-out;

    &:hover {
        color: #000;
        transition 0.3s ease-in-out;
    }
`;
const BtnWrap = styled.div`
    align-items: center;
    justify-content: center:
    display: flex;
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <DropdownWrapper>
            <DropdownMenu>
                {menuData.map((item, index) => (
                    <DropdownLink to={item.link} key={index}>{item.title}</DropdownLink>
                ))}
            </DropdownMenu>
            <BtnWrap>
                <Button primary="true" round="true" to="/contact">Contact Us</Button>
            </BtnWrap>

        </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown;