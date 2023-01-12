import React from 'react';
import styled from 'styled-components';
import './Index.css';

const InfoContainer = styled.div`
    padding: 40px 2rem;
    width: 100%;
    color: #eee;
    
    h2{
        font-size: 30px;
        font-family: monospace;
        letter-spacing: 3px;
        padding-bottom: 3rem;
        align-items: center;
        text-align: center;
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

const Content = styled.div`
    flex: 1;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    .box-container{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        cursor: pointer;

        @media(max-width: 1200px){
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            padding: 1rem;
        }

        div{
            padding: 30px;
            margin: 30px;
        
        }

        h3{
            padding-bottom: 10px;
            font-size: 20px;
            letter-spacing: 3px;
        }
    }
`;

const Info = ({ heading, paragraph }) => {
  return (
    <InfoContainer className='bg'>
        <Container>
            <ContentItems>
                <Content>
                    <h2>{heading}</h2>
                    <p>{paragraph}</p>

                    <div className="box-container">
                        <div>
                            <h3>12+</h3>
                            <p>years of experience</p>
                        </div>

                        <div>
                            <h3>1500+</h3>
                            <p>project completed</p>
                        </div>

                        <div>
                            <h3>1489+</h3>
                            <p>satiesfied clients</p>
                        </div>
                    </div>
                </Content>
            </ContentItems>
        </Container>
    </InfoContainer>
  )
}

export default Info;