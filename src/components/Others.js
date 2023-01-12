import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    padding: 70px 0;
    overflow: hidden;

    @media (max-width: 768px){
        display: none;
    }
`;

const ButtonBox = styled.div`
    display: flex;
    border-bottom: 1px solid #ccc;

    .bloc-tabs {
        display: flex;
    }

    .tabs {
        padding: 10px;
        text-align: center;
        width: 50%;
        background: rgba(128, 128, 128, 0.075);
        background: #041e42;
        cursor: pointer;
        border-bottom: 1px solid rgba(0, 0, 0, 0.274);
        box-sizing: content-box;
        position: relative;
        outline: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 15px;
    }

    .active-tabs  {
        color: #088178;
        background: white;
        border-bottom: 1px solid transparent;
    }

    .active-tabs::before {
        content: "";
        display: block;
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% + 2px);
        height: 5px;
        background: rgb(88, 147, 241);
        background: #088178;
    }

    button {
        border: none;
        border-radius: 5rem;
        font-size: 1.3rem;
        font-weight: 800;
        font-family: cursive;
        font-family: monospace;
        -webkit-text-stroke: 1px #fff;
    }
`;

const ContentContainer = styled.div`
    .content-tabs {
        flex-grow : 1;
        position: relative;
        padding-top: 20px;
    }

    .content {
        background: white;
        padding: 20px;
        width: 100%;
        height: 100%;
        display: none;
        margin: 20px 50px auto 50px;
    }

    .content img{
        width: 30%;
        padding: 1rem;
        border-radius: 1.5rem;
    }

    .active-content {
        display: inline-block;
    }    
`;

const Content = styled.div``;

const Others = ({ imageK, imageJ, imageI, imageH, imageG, imageF, imageE, imageD, imageC, imageB, imageA, image }) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
  return (
    <Container>
        <ButtonBox className='bloc-tabs'>
            <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
                >
                All Interior
            </button>
            <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
                >
                Morden 
            </button>
            <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
                >
                Exclusive
            </button>
            <button
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
                >
                Executive
            </button>
        </ButtonBox>

        <ContentContainer className='content-tabs'>
            <div className={toggleState === 1 ? "content  active-content" : "content"}>
                
                <Content id=''>
                    <div className=''>
                        <img src={imageJ} alt='' />
                        <img src={imageG} alt='' />
                        <img src={imageE} alt='' />
                        <img src={image} alt='' />
                        <img src={imageK} alt='' />
                        <img src={imageF} alt='' />
                    </div>
                </Content>
            </div>

            <div className={toggleState === 2 ? "content  active-content" : "content"}>
                
                <Content>
                    <img src={imageG} alt='' />
                    <img src={imageB} alt='' />
                    <img src={imageD} alt='' />
                    <img src={image} alt='' />
                    <img src={imageI} alt='' />
                    <img src={imageH} alt='' />
                </Content>
            </div>

            <div className={toggleState === 3 ? "content  active-content" : "content"}>
                
                <Content>
                    <img src={imageD} alt='' />
                    <img src={imageA} alt='' />
                    <img src={imageF} alt='' />
                    <img src={imageJ} alt='' />
                    <img src={imageC} alt='' />
                    <img src={imageB} alt='' />
                </Content>
            </div>

            <div className={toggleState === 4 ? "content  active-content" : "content"}>
                
                <Content>
                    <img src={imageI} alt='' />
                    <img src={imageK} alt='' />
                    <img src={imageH} alt='' />
                    <img src={imageA} alt='' />
                    <img src={imageC} alt='' />
                    <img src={imageE} alt='' />
                </Content>
            </div>

        </ContentContainer>
    </Container>
  )
}

export default Others;