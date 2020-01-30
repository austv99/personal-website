import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rollIn } from 'react-animations';

const MainContainer = (props) => {
    const bounceAnimation = keyframes `${rollIn}`;
    const BouncyDiv = styled.div `animation: 3s ${bounceAnimation};`;
    return (
       <div className="wrapper">
           <div className="body">
                <BouncyDiv>
                    <img className="profile__pic" src={require(process.env.PUBLIC_URL + "assets/profile.png")} alt=""></img>
                </BouncyDiv>
                <h2 className="quote">coffee, code and 808s</h2>
                <div className="greet">
                    <h1>Hey!</h1>
                </div>
                <h2 className="me">I'm Austin Vuong</h2>
                <h2 className="uni">Penultimate Software Engineering @ UNSW</h2>
                <h2 className="intro">An aspiring full stack engineer with a focus on front-end development currently.
                When I’m not stuck in Visual Studio Code, I enjoy music and photography.</h2>
                <h2 className="heading">What am I busy with now?</h2>
                <div className="text__body">
                    <h2>I’m working on a startup with some smart people. It's called <a href="http://papercutreceipts.com">Papercut Receipts!</a> </h2>
                    <h2>Other than that, I’m in my penultimate year for Software Engineering @ UNSW with a Distinction average.</h2>
                    <h2>I also volunteer with KodeSkool where we strive to educate high school students with employable skills through our love for code.</h2>
                    <h2>Oh, and I dabble in photography. Still learning but we all start somewhere right?</h2>
                </div>
                <h2 className="heading">What languages do you spea... I mean code in?</h2>
                <div className="text__body">
                    <h2>Loving React and Typescript currently.</h2>
                    <h2>Java is great.</h2>
                    <h2>Python and C too. Firebase is great!</h2>
                    <h2>I have a positive relation(ship) with PostgreSQL.</h2>
                </div> 
                <div className="cheeky">
                    <h2>*yep I’ll show myself out after that one <span role="img" aria-labelledby="Door">🚪</span>*</h2>
                    <h2>ps. I speak English and a bit of Vietnamese.</h2>
                </div>
                <h2 className="heading">My <a href="http://github.com/austv99">github</a>!</h2> 
                <div className="text__body">
                    <h2>I’m an eager individual who seeks to learn and, once I know what I’m doing, pass it on and teach!</h2>
                    <h2>I love the challenges that come with new technologies and immerse myself with new opportunities every chance I get.</h2>
                </div>
                <h2 className="heading">Contact me!</h2>
                <div className="text__body">
                    <h2>Check out my <a href="http://www.linkedin.com/in/austin-vuong">linkedin</a>! Feel free to connect and start up a convo!</h2>
                    <h2>Or if you’re after a more casual convo, I’m <a href="http://instagram.com/austv99">austv99</a> on most socials</h2>
                    <h2>Or if you’re more traditional, reach out to me through email at <a href="mailto:austin.vuong00@gmail.com">austin.vuong00@gmail.com</a></h2>
                </div>
           </div>
        </div>
    


    );
}

export default MainContainer;