import React from 'react';
import { FaArrowRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { Button } from './Button';

const NewItemCon = styled.section`
    padding: 70px 0 150px 0;
    width: 100%;
`;

const ItemCon = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media(max-width: 768px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        padding: 1rem;
        margin-left: auto;
    }
`;

const ContentItem = styled.div`
    h1{
        color: #fff;
        font-size: 3rem;
        border-bottom: 1px solid #333;
        -webkit-text-stroke: #041e42 1px;
    }

    p{
        padding-top: 1.5rem;
    }

    .btn{
        margin-top: 25px;
        text-align: center;
    }
`;

const ContentImg = styled.div`
    position: relative;

    img{
        width: 100%;
        margin-left: .1rem;
        border-radius: 10px;
    }
`;

const NewItem = ({ title, paragraph, buttonLabel, imageOne, imageTwo, imageThree }) => {
  return (
    <NewItemCon>
        <ItemCon>
            <ContentItem>
                <h1>{title}</h1>
                <p>{paragraph}</p>
                <Button className='btn' to='' primary='true'>{buttonLabel} <FaArrowRight ></FaArrowRight></Button>
            </ContentItem>
            
            <ContentImg className='grid'>  
                <img src={imageOne} alt='' />
                <div className='icons'>
                    <h3>Kitchen</h3>
                    <span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </span>
                </div>
            </ContentImg>
            <ContentImg className='grid'>
                <img src={imageTwo} alt='' />
                <div className='icons'>
                    <h3>Luxury</h3>
                    <span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </span>
                </div>
            </ContentImg>
            <ContentImg className='grid'>    
                <img src={imageThree} alt='' />
                <div className='icons'>
                    <h3>Sit-Out</h3>
                    <span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </span>
                </div>
            </ContentImg>
        </ItemCon>
    </NewItemCon>
  )
}

export default NewItem;