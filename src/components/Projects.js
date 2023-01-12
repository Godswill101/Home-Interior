import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import styled from 'styled-components';

const ProjectsCon = styled.section`
    padding: 150px 0 70px 0;
    width: 100%;
    text-align: center;
    
    h1{
        font-family: monospace;
        font-size: 2.2rem;
        letter-spacing: 5px;
    }

    h2{
        letter-spacing: 9px;
        font-family: cursive;
        font-size: 25px;
        padding-bottom: 40px;
    }
`;

const ProjectsFeat = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 20px;

    @media(max-width: 768px){
        justify-content: center;
    }
`;

const ProjectsPro = styled.div`
    position: relative;
    width: 23%;
    min-width: 280px;
    padding: 10px 12px;
    margin: 15px 0;
    border: 1px solid #cce7d0;
    border-radius: 5px;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
    cursor: pointer;
    transition: 0.2s ease;

    &:hover{
        box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
        transition: 0.2s ease;
    }

    img{
        width: 100%;
        border-radius: 5px;
    }

    .description{
        padding: 10px 0;
        text-align: start;
    }

    .description span{
        color: #0bb6fc;
        color: rgb(11, 182, 252, 0.65);
        font-size: 16px;
    }

    .description h5{
        padding-top: 7px;
        font-size: 16px;
        color: #1a1a1a;
        font-weight: 700;
    }

    .description .rating{
        padding: 0.7rem 0;
        font-size: 14px;
        color: #0bb6;
        color: rgba(0, 187, 187, 0.45);
    }

    .cart{
        width: 35px;
        height: 35px;
        
        padding: .20rem .45rem;

        line-height: 35px;
        border-radius: 50px;
        background-color: #e8f6ea;
        font-weight: 500;
        color: #088178;
        border: 1px solid #cce7d0;
        position: absolute;
        bottom: 10px;
        right: 10px;

        &:hover{
            color: transparent;
            color: orange;
            animation: animate 1.5s linear infinite;
        }


        @keyframes animate {
            100% {
                filter: hue-rotate(360deg);
            }
        }
    }

    @media(max-width: 768px){
        min-width: 360px;
        margin: 1rem;
    }
`;

const Projects = ({ title, heading, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight}) => {
  return (
    <ProjectsCon id='projects'>
        <h1>{title}</h1>
        <h2>{heading}</h2>

        <ProjectsFeat>
            <ProjectsPro>
                <img src={imageOne} alt=""/>
                <div className='description'>
                    <span><FaHeart/> New </span>
                    <h5>Waiting Lobby</h5>
                    <div  className='rating'>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaRegHeart/>
                    </div>
                </div>
                <div className='cart'>
                    <FaRegHeart/>
                </div>
            </ProjectsPro>
            <ProjectsPro>
                <img src={imageTwo} alt=""/>
                <div className='description'>
                    <span><FaHeart/> New </span>
                    <h5>Walunt U-Shaped White Wardrobe </h5>
                    <div className='rating'>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaRegHeart/>
                    </div>
                </div>
                <div className='cart'>
                    <FaRegHeart/>
                </div>
            </ProjectsPro>
            <ProjectsPro>
                <img src={imageThree} alt=""/>
                <div className='description'>
                    <span><FaHeart/> New </span>
                    <h5>Public Corridor</h5>
                    <div className='rating'>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaRegHeart/>
                    </div>
                </div>
                <div className='cart'>
                    <FaRegHeart/>
                </div>
            </ProjectsPro>
            <ProjectsPro>
                <img src={imageFour} alt=""/>
                <div className='description'>
                    <span><FaHeart/> New </span>
                    <h5>Navy-Blue Wall Decoration</h5>
                    <div className='rating'>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaRegHeart/>
                    </div>
                </div>
                <div className='cart'>
                    <FaRegHeart/>
                </div>
            </ProjectsPro>
            <ProjectsPro>
                <img src={imageFive} alt=""/>
                <div className='description'>
                    <span><FaHeart/> New </span>
                    <h5>Luxury Dinning</h5>
                    <div className='rating'>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaRegHeart/>
                    </div>
                </div>
                <div className='cart light'>
                    <FaRegHeart/>
                </div>
            </ProjectsPro>
            <ProjectsPro>
                <img src={imageSix} alt=""/>
                <div className='description'>
                    <span><FaHeart/> New </span>
                    <h5>White U-Kitchen Interior</h5>
                    <div className='rating'>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaRegHeart/>
                    </div>
                </div>
                <div className='cart'>
                    <FaRegHeart/>
                </div>
            </ProjectsPro>
            <ProjectsPro>
                <img src={imageSeven} alt=""/>
                <div className='description'>
                    <span><FaHeart/> New </span>
                    <h5>Executive Lounge</h5>
                    <div className='rating'>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaRegHeart/>
                    </div>
                </div>
                <div className='cart'>
                    <FaRegHeart/>
                </div>
            </ProjectsPro>
            <ProjectsPro>
                <img src={imageEight} alt=""/>
                <div className='description'>
                    <span><FaHeart/> New </span>
                    <h5>Modern Multi-Restroom</h5>
                    <div className='rating'>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaHeart/>
                        <FaRegHeart/>
                    </div>
                </div>
                <div className='cart'>
                    <FaRegHeart/>
                </div>
            </ProjectsPro>

        </ProjectsFeat>
    </ProjectsCon>
  )
}

export default Projects;