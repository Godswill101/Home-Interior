import React from 'react';
import styled from 'styled-components';
import { IoBasketballOutline, IoHomeOutline } from 'react-icons/io5';
import { IoMdTrophy } from 'react-icons/io';

const ServicesContainer = styled.section`
    padding: 70px 0;
    width: 100%;
    text-align: center;
    
    h1{
        letter-spacing: 5px;
        font-size: 2.2rem;
        font-family: monospace;
    }

    h2{
        letter-spacing: 9px;
        font-family: cursive;
        font-size: 25px;
        padding-bottom: 30px;
    }
`;

const Container = styled.div`
    padding: 3rem;
`;

const ContentItems = styled.div`
`;

const ContentItem = styled.div`
    display: flex;

    div{
        padding: 2rem;
        margin: 1rem;
        border: 1px solid #333;
        border-radius: 33% 67% 70% 30% / 30% 30% 40% 50%;
        transition: 0.9s ease;

        &:hover{
            background: linear-gradient(to right bottom, #130f40, #130f40ff);
            color: #eee;
            border: 5px solid #af6565;
            border-radius: .5rem;
            box-shadow: 10px 20px 10px rgba(0, 0, 0, 0.9);
            transition: 0.9s ease;
        }

        .fa{
            font-size: 3rem;
            color: #e67e22;
        }
        
    }

    h3{
        padding: 15px 0;
        letter-spacing: 2px;
    }

    @media(max-width: 768px){
        display: block;
        padding: 1rem;
    }
`;

const Services = ({ title, heading, contentOne, contentTwo, contentThree, contentParagraph }) => {
  return (
    <ServicesContainer id='services'>
        <h1>{title}</h1>
        <h2>{heading}</h2>

        <Container>
            <ContentItems>
                <ContentItem>
                    <div>
                        <IoBasketballOutline className='fa' />
                        <h3>{contentOne}</h3>
                        <p>{contentParagraph}</p>
                    </div>
                    <div>
                        <IoHomeOutline className='fa'/>
                        <h3>{contentThree}</h3>
                        <p>{contentParagraph}</p>
                    </div>
                    <div>
                        <IoMdTrophy className='fa' />
                        <h3>{contentTwo}</h3>
                        <p>{contentParagraph}</p>
                    </div>
                    
                </ContentItem>
            </ContentItems>
        </Container>
    </ServicesContainer>
  )
}

export default Services;