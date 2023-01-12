import React from 'react';
import styled from 'styled-components';
import './Index.css';
import { FaEnvelopeOpenText, FaFacebook, FaGithub, FaHatCowboy, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaPinterest, FaRegClock, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const FooterSec = styled.div`
    padding: 70px 0;
    width: 100%;
    color: #eee;   

    .copyright {
        text-align: center;

        strong{
            color: #F7C08A;

            span{
                color: #0bb6fc;
            }
        }

        a{
            color: #eee;
            text-decoration: none;
        }
    }
`;

const FooterContainer = styled.section`
    margin-bottom: 10px;
`;

const FooterItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media(max-width: 768px){
        display: block;
        padding: 1rem;
    }
`;

const FooterItem = styled.div`
   
    div{
        padding-top: 20px;

        h5{
            padding: 0.55rem 0;
        }
    }

    .flex{
        display: flex;
        color: #eee;
        font-size: 20px;
        
        transition: 1s;

        p{
            padding: .45rem;
            margin: 0.55rem;
            height: 35px;
            width: 35px;
            border: 1px solid #fff;
            border-radius: 50%;
            transition: 1s;

            &:hover{
                color: #0bb6fc;
            }
        }
    }

    .install p{
        font-size: 16px;
        text-transform: capitalize; 
    }

    .row .col{
        display: flex;
        justify-content: space-around;
    }

    .row img{
        border: 3px solid yellow;
        border-radius: 8px;
        width: 50%;
    }

    .install img{
        margin: 10px 20px 10px 0px;
        cursor: pointer;
    }

    @media(max-width: 768px){
        display: block;
        padding: 1rem;
    }    
`;

const Footer = ({ headingOne, headingTwo, headingThree, contentOne, contentTwo, contentThree, contentFour, openOne, openTwo, linkOne, linkTwo, linkThree, linkFour, imageOne, imageTwo, imageThree}) => {
  return (
    <FooterSec className='bg'>
        <FooterContainer>
            <FooterItems>
                <FooterItem>
                    <h2>{headingOne}</h2>
                    <div>
                        <h5><FaEnvelopeOpenText /> {contentOne}</h5>
                        <h5><FaPhoneAlt /> {contentTwo}</h5>
                        <h5><FaWhatsapp /> {contentThree}</h5>
                        <h5><FaMapMarkerAlt /> {contentFour}</h5>
                    </div>
                </FooterItem>

                <FooterItem>
                    <h2>{headingTwo}</h2>
                    <div>
                        <h5><FaRegClock /> {openOne}</h5>
                        <h5><FaRegClock /> {openTwo}</h5>
                        <div className='flex'>
                            <p><FaTwitter/> </p>
                            <p><FaInstagram/> </p>
                            <p><FaFacebook/> </p>
                            <p><FaPinterest/> </p>
                        </div>
                    </div>
                </FooterItem>

                <FooterItem>
                    <h2>{headingThree}</h2>
                    <div>
                        <h5>{linkOne}</h5>
                        <h5>{linkTwo}</h5>
                        <h5>{linkThree}</h5>
                        <h5>{linkFour}</h5>
                    </div>
                </FooterItem>
                
                <FooterItem className=''>
                    <h2>Install</h2>
                    <div className='install'>
                        <p>from app store or google play store</p>
                        <div className="row">
                            <div className='col'>
                            <img src={imageOne} alt="pay" />
                            <img src={imageTwo} alt="pay" />
                            </div>
                        </div>

                        <p>secured payment gateway</p>
                        <img src={imageThree} alt=""/>
                    </div>
                </FooterItem>
            </FooterItems>
        </FooterContainer>
        <div className="copyright">
            <p> Copyright &copy;  <strong className=""><FaHatCowboy /> Home<span>Interior</span> </strong> 2022, All Rights Reserved <a href="https://github.com/Godswill101"> <FaGithub /></a> <a href='https://www.linkedin.com/in/chukwudi-godswill-68b35b214/'><FaLinkedin /> Dev. By Godswill101 </a></p>
        </div>
    </FooterSec>
  )
}

export default Footer;