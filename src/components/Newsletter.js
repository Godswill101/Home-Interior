import React from 'react';
import styled from 'styled-components';
import './Index.css';

const Newsletters = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 50vh;
  justify-content: space-around;
  align-items: center;
  background-color: #041e42;
  color: #eee;

  h4{
    font-size: 22px;
    font-weight: 700;
    color: #fff;
  }

  p{
    font-size: 18px;
    font-weight: 600;
    color: #818ea0;
  }

  p span{
    color: #ffbd27;
  }

  input{
    height: 4.125rem;
    padding: 0 1.25rem;
    font-size: 14px;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 0 4px 4px 0;
    outline: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button.normal{
    font-size: 18px;
    font-weight: 600;
    padding: 15px 30px;
    color: #fff;
    background: #af0303;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.2s;
  }

  button{
    background: #088178;
    color: #eee;
    white-space: nowrap;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form{
    display: flex;
    width: 40%;
  }

  @media(max-width: 768px){
    padding: 40px 20px;
    
    .form{
      width: 100%;
    }
  }
`;

const Newsletter = () => {
  return (
    <Newsletters className='bg'>
      <div className="">
        <h4>Sign Up For Newsletter</h4>
        <p>Get E-mail updates about our latest shop and <span>special offers. </span></p>
      </div>

      <div className="form">
        <input type="text" placeholder="write your email address" required />
        <button type="button" class="normal">Sign Up</button>
      </div>
    </Newsletters>
  )
}

export default Newsletter;