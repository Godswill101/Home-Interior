import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

const ReviewSec = styled.section`
    padding: 70px 0;

    .title{
        text-align: center;
        padding: 3rem 0;

        h1{
            font-size: 2.2rem;
            font-family: monospace;
            letter-spacing: 5px;
        }
        h2{
            font-size: 25px;
            font-family: cursive;
            letter-spacing: 9px;
            padding-bottom: 40px;
        }
    }
`
const Container = styled.div`
    width: 96%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    cursor: pointer;
`;
const Content = styled.div`
    flex-basis: 24%;
    padding: 20px;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 20px 3px rgba(0,0,0,0.55);
    cursor: pointer;
    transition: transform 0.5s;

    &:hover{
        transform: translateY(-10px);
    }

    p {
        font-size: 1.1rem;
    }

    @media (max-width: 768px){
        flex-basis: 100%;
    }
`;
const User = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;

    h4{
        color: #0bb6ff;
    }

    img{
        width: 25%;
        margin-right: 20px;
        border-radius: 5px;
    }
`;

const Reviews = ({title, heading, paragraph, imageOne, imageTwo, imageThree, imageFour}) => {
  return (
    
    <ReviewSec id='review'>
        <div className="title">
            <h1>{title}</h1>
            <h2>{heading}</h2>
        </div>
        <Container>
            <Content>
                <User>
                    <img src={imageOne} alt=''/>
                    <div class="user-info">
                        <h4>Juliet Michael <FaTwitter /> </h4>
                        <small>@julimike</small>
                    </div>
                </User>
                <p>{paragraph}</p>
            </Content>
            <Content>
                <User>
                    <img src={imageTwo} alt=''/>
                    <div class="user-info">
                        <h4>Mich Henderson <FaTwitter /> </h4>
                        <small>@mhenson</small>
                    </div>
                </User>
                <p>{paragraph}</p>
            </Content>
            <Content>
                <User>
                    <img src={imageThree} alt=''/>
                    <div class="user-info">
                        <h4>Juliet Robertson <FaTwitter /> </h4>
                        <small>@julerobert</small>
                    </div>
                </User>
                <p>{paragraph}</p>
            </Content>
            <Content>
                <User>
                    <img src={imageFour} alt=''/>
                    <div class="user-info">
                        <h4>Yun Hu <FaTwitter /> </h4>
                        <small>@yonhun</small>
                    </div>
                </User>
                <div> </div>
                <p>{paragraph}</p>
            </Content>
        </Container>
    </ReviewSec>
    
  )
}

export default Reviews;