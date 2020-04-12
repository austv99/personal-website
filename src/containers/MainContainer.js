import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce, swing, shake, rollIn } from 'react-animations';

const MainContainer = (props) => {
    const aniList = [swing, shake, rollIn]
    const randomAnimation = keyframes `${aniList[Math.floor(Math.random()*aniList.length)]}`;
    const AnimateImage = styled.div `animation: 2s ${randomAnimation};`;
    const greetingAnimation = keyframes `${bounce}`; 
    const AnimateGreeting = styled.div `animation: 2s ${greetingAnimation};`;
    return (
        <div className="wrapper">
            {/* <div className="socials">
                <a href="http://github.com/austv99"><img src="assets/github.svg" alt="" /></a>
                <a href="http://www.linkedin.com/in/austin-vuong"><img src="assets/linkedin.svg" alt=""/></a>
            </div> */}
                <AnimateImage>
                    <img className="profile__pic" src="assets/profile_s.png" alt=""></img>
                </AnimateImage>
                <h2 className="quote">coffee, code and 808s</h2>
                <AnimateGreeting>
                    <div className="greet">
                        <h1>Hey!</h1>
                    </div>
                </AnimateGreeting>
                <h2 className="me">I'm Austin Vuong</h2>
                <h2 className="uni">Penultimate Software Engineering @ UNSW</h2>
                <h2 className="intro">An aspiring full stack engineer.
                When I’m not stuck in Visual Studio Code, I enjoy music and photography.</h2>
                <div className="body">
                <h2 className="heading">What am I busy with now?</h2>
                <div className="text__body">
                    <h2>I’m working on a startup with some smart people. It's called <a href="http://papercutreceipts.com">Papercut Receipts!</a> Get a sneak peek <a href="https://bit.ly/prprototype">here</a>! </h2>
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