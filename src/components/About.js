import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { IoMdHome, IoMdTrophy, IoMdBasketball } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa';

const AboutContainer = styled.section`
    padding: 70px 0;
    width: 100%;
    text-align: center;

    h1{
        font-size: 2.2rem;
        font-family: monospace;
        letter-spacing: 5px;
    }

    h2{
        font-size: 25px;
        font-family: cursive;
        letter-spacing: 9px;
        padding-bottom: 30px;
    }
`;

const Container = styled.div``;

const ContentItems = styled.div`
    display: flex;
    padding: 3rem;

    @media(max-width: 768px){
        display: block;
        padding: 1rem;
    }
`;

const Ball = styled(IoMdBasketball)`
    margin-right: 0.9rem;
    width: 40%;
    height: 60px;
    font-size: 30px;
    border-radius: 10px;
    color: #1c1c1c;
    border: 1px solid #1c1c1c;
`;

const Home = styled(IoMdHome)`
    margin-right: 0.9rem;
    width: 40%;
    height: 60px;
    font-size: 30px;
    border-radius: 10px;
    color: #1c1c1c;
    border: 1px solid #1c1c1c;
`;

const Trophy = styled(IoMdTrophy)`
    margin-right: 0.9rem;
    width: 40%;
    height: 60px;
    font-size: 30px;
    border-radius: 10px;
    color: #1c1c1c;
    border: 1px solid #1c1c1c;
`;

const ContentLeft = styled.div`
    flex: 1;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    h2{
        padding-bottom: 1rem;
    }

    div{
        text-align: left;
        padding: 10px 30px;
        margin: 10px 30px;
    }

    h3{
        padding-bottom: 10px;
        font-size: 20px;
    }

    p{text-align: initial; display: flex;}
`;

const ContentRight = styled.div`
    flex: 1;
    padding: 1rem;

    img{
        width: 100%;
        border-radius: 5px;
    }
`;

const About = ({ title, heading, headingTwo, paragraphOne, paragraphTwo, contentOne, contentTwo, contentThree, contentParagraph, buttonLabel, image }) => {
  return (
    <AboutContainer id='about'>
        <Container>
            <h1>{title}</h1>
            <h2>{heading}</h2>
            <ContentItems>
                <ContentLeft>
                    <h2>{headingTwo}</h2>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>

                    <div>
                        <h3>{contentOne}</h3>
                        <p><Ball />{contentParagraph}</p>
                    </div>
                    <div>
                        <h3>{contentTwo}</h3>
                        <p><Home />{contentParagraph}</p>
                    </div>
                    <div>
                        <h3>{contentThree}</h3>
                        <p><Trophy /> {contentParagraph}</p>
                    </div>

                    <Button className='btn' to='' primary='true'>{buttonLabel} <FaArrowRight /> </Button>
                </ContentLeft>
                
                <ContentRight>
                    <img src={image} alt='' />
                </ContentRight>
            </ContentItems>
        </Container>
    </AboutContainer>
  )
}

export default About;