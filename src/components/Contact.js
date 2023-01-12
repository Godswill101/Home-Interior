import React from 'react'
import styled from 'styled-components'

const ContactSec = styled.div`
    background: linear-gradient(250deg, #f8eade, #f5deb3);
    padding: 50px;
    position: relative;

    .heading {
        color: #f5deb3;
        padding: 1rem;
        -webkit-text-stroke: 1px #0bb6fc;

        span{
            -webkit-text-stroke: 1px #0bb600;
        }
    }
`;

const Container = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    gap: 3rem;
    position: relative;

    .contact-form {
        -webkit-box-flex: 1;
            -ms-flex: 1 1 41rem;
                flex: 1 1 41rem;
        padding: 1rem;
        background: #d8d7d7;
        border-radius: 10px;
        box-shadow: 10px 20px 10px rgba(0, 0, 0, 0.9);
    }

    iframe {
        -webkit-box-flex: 1;
            -ms-flex: 1 1 41rem;
                flex: 1 1 41rem;
        width: 100%;

        filter: invert(100%);
        border-radius: 10px;
    }
`;

const ConForm = styled.div`
    position: relative;
    height: 430px;
    width: 450px;
    padding: 40px;
    z-index: 1;
    justify-self: flex-start;

    form {
        display: block;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 50px;
        padding-bottom: 15px;
    }

    .form-control {
        margin: 25px 0;
    }

    input[type='text'],
    input[type='email'],
    textarea {
        border: 0;
        border-bottom: 2px solid #b4becb;
        width: 100%;
        padding: 20px;
        font-size: 16px;
        border-radius: 10px;
    }

    input:focus {
        outline: none;
    }

    form textarea{
        width: 100%;
        padding: 0.7rem;
        border-radius: 20px;
        background: #eee;
    }

    small {
        color: #333;
        font-size: 18px;
        padding: 0.5rem;
    }

    form .btn{
        width: 100%;
        margin: 0;
        font-family: monospace;
    }
`;

const Contact = () => {
  return (
    <ContactSec id="contact" class="contact">
        <h1 className="heading"> Contact <span>Us</span>  </h1>
        <Container className="row">

            <ConForm className="contact-form card">
                <small>Fill Out The Form To Keep In Touch With Us</small>
                <form name="contact" netlify-honeypot="bot-field" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </p>
                    
                    <div className="form-control">
                        <input type="text" name="name" placeholder="write your name" required />
                    </div>

                    <div className="form-control">
                        <input type="email" name="email" placeholder="enter your email" required />
                    </div>

                    <div className="form-control">
                        <textarea name="" id="" placeholder="write your message here" required ></textarea>
                    </div>
                    
                    <input type="submit" value="Submit" className="btn" />
                </form>
            </ConForm>

            <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=St. Philip's Anglican Church, Gwarinpa&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </Container>
    </ContactSec>
  )
}

export default Contact;