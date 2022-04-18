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
                <AnimateImage>
                    <img className="profile__pic" src="assets/profile_s.png" alt=""></img>
                </AnimateImage>
                <AnimateGreeting>
                    <div className="greet">
                        <h1>Hey!</h1>
                    </div>
                </AnimateGreeting>
                <h2 className="me">I'm Austin Vuong</h2>
                <h2 className="uni">Software Engineering Graduate (UNSW)</h2>
                {/* <h2 className="intro">An aspiring  software engineer.
                When I’m not stuck in Visual Studio Code, I enjoy music and photography.</h2> */}
                <div className="body">
                <h2 className="heading">What am I busy with now?</h2>
                <div className="text__body">
                    <h2>I'm currently working at Commonwealth Bank as a Software Engineering Graduate.</h2>
                    <h2>I've also just started bouldering in my free time!</h2>
                </div>
                <h2 className="heading">What languages do you spea... I mean code in?</h2>
                <div className="text__body">
                    <h2>Loving React and Javascript currently.</h2>
                    <h2>Java is great.</h2>
                    <h2>Python and C too.</h2>
                    <h2>I've worked with Perl and Shell Script</h2>
                    <h2>And Spring Boot too!</h2>
                    <h2>I have a positive relation(ship) with PostgreSQL.</h2>
                    <h2>I'm planning on trying out Electron and Swift too!</h2>
                    <h2>And of course, I'm always keen to keep learning new technologies!</h2>
                </div> 
                <h2 className="heading">My <a href="http://github.com/austv99">github</a>!</h2> 
                <div className="text__body">
                    <h2>I’m an eager individual who seeks to learn and, once I know what I’m doing, pass it on and teach!</h2>
                    <h2>I love the challenges that come with new technologies and immerse myself with new opportunities every chance I get.</h2>
                </div>
                <h2 className="heading">Contact me!</h2>
                <div className="text__body">
                    <h2>Check out my <a href="http://www.linkedin.com/in/austin-vuong">linkedin</a>! Feel free to connect and start up a convo!</h2>
                    <h2>Or if you’re more traditional, reach out to me through email at <a href="mailto:austin.vuong00@gmail.com">austin.vuong00@gmail.com</a></h2>
                </div>
           </div>
        </div>
    );
}

export default MainContainer;