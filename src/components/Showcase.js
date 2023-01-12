import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';

const ShowcaseSection = styled.div`
    color: #fff;
    height: 90vh;
    max-height: 1100px;
    position: relative;
    display: flex;
`;

const ShowcaseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const ShowcaseSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const ShowcaseSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 90vh;
        bottom: 0;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)
    }
`;

const ShowcaseImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 90vh;
    object-fit: cover;
`;

const ShowcaseContent = styled.div`
    position: relative;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;
    z-index: 10;

    h1{
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 900;
        letter-spacing: 3px;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p {
        font-size: 28px;
        color: #333;
        color: #efecdd;
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 0px 20px rgba(0,0,0,0.5)
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    background: #000d1a;
    padding: 10px;
    margin-right: 1rem;
    border-radius: 50px;
    cursor: pointer;
    user-select: none;
    transition: 0.3s;

    &:hover{
        background: #cd853f;
        transform: scale(1.05);
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;

const Showcase = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 9000)

        return function () {
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    }, [current, length]);

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }

        setCurrent(current === length - 1 ? 0 : current + 1)

        // console.log(current);
    }

    const prevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        
        setCurrent(current === 0 ? length - 1 : current - 1)

        // console.log(current);
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

  return (
    <ShowcaseSection>
        <ShowcaseWrapper>
            {slides.map((slide, index) => {
                return (
                    <ShowcaseSlide key={index} >
                        {index === current && (
                            <ShowcaseSlider>
                                <ShowcaseImage src={ slide.image } alt={ slide.alt } />
                                <ShowcaseContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button to={slide.path} primary='true' onCompositionStart={`
                                        max-width: 160px;`} >
                                        { slide.label }
                                        <Arrow /> 
                                    </Button>
                                </ShowcaseContent>
                            </ShowcaseSlider>
                        )}
                    </ShowcaseSlide>
                )
            })}
            <SliderButtons>
                <PrevArrow onClick={prevSlide}/>
                <NextArrow onClick={nextSlide}/>
            </SliderButtons>
        </ShowcaseWrapper>
    </ShowcaseSection>
  )
}

export default Showcase;