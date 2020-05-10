import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import '../App.css';

class Projects extends Component {
    render() {
      return (
        <Collapsible trigger="Projects">
            <div id="lookbook-project">
                <h2> Lookbook (Personal) </h2>
                <h3> In Progress </h3>
            </div>
            <div id="says-project">
                <h2> Says (Contract) </h2>
                <h3> In Progress </h3>
            </div>
            <div id="sipp-project">
                <h2> Sipp (Start Up) </h2>
                <h3> 2017 -> 2017 </h3>
                <p> Sipp was a startup that was formed my senior year of college. This was apart of a small buisness / start up course we took for a entrepenuership certificate. The problem we chose to solve was buying beer at a crowded bar. There has to be an easier way we thought! So the first pass at this was to make a mobile ordering platfrom similar to a Uber Eats, Grub Hub .. ETC. You would place your order via your phone then when it was ready you would be able to pick it up at a designated part of the bar. So the original design for Sipp was for a duel application for P2P. The first part of the application was the Bar / Bartender features. They would have a specific flow of being able to receive orders process them then be able to notify a user (Drink Buyer) that the item was ready to be picked up. The second flow was for the user (Drink Buyer) they would be able to pick from a menu and order and pay for a drink. This then would let the user (Drink Buyer) avoid having to flag down a bar tender and avoid cash transfer. This gives the user more time with friends and zero worries. </p>
                <p> Well there are flaws to that plan. One legality and safety. We are putting the company / app on the realibility of a college bar tender and bouncer.  We are confirming that no funny buisness with under age and no issues with somone intercepting a drink in between. We had to come up with a pivot to the app.</p>
                <p> While we brainstormed a new idea we realized how much goes into going out for a night in college. You would end up using 4 or 5 apps from the time your left your apt / house and got to a friends to have drinks and then eventually to a bar. We wanted to be the one place solution for that. We started to build the social media platform for a night out. We integrated the Facebook SDK with using Core Location into the app so a user would be able to see where there friends are at if they were in one of the partnered bars. We also took time to link up the Uber and Lyft SDK to give a one button push to take you to a bar. </p>
                <p> The main interface of the app was a map with different pop overs to give a user information on a bar whart we would have on the application. The most important and value we saw in this app was to give the bars the ability to provide special deals through the app. With the push of a button they could send out a drink deal to all the users who were in the area. This would be great to get a flood of customers to the bar and get drinks because they would also see all of their Facebook freinds there.</p>
                <p> We cared the project to a MVP state while I was the sole developer working on it. It was probably my first large scale application I had ever written. I had the frontend as just and iOS application written in swift and the backend I wrote in PHP which i have thoughts on but thats for another time. We entered the project in a couple compititions. We did really well and won our schools <a href="https://news.uwlax.edu/big-win-for-big-idea/">Big Idea</a> compitition. We then took it to the state level where we didn't win but we still saw a vision inwhat we had. </p>
                <p> The summer came and we continued to work and try and network this into a real production quality application. While doing so I was interviewing around and landed my <a href="">first engineering job</a>. I decided to drop off from the project to focus on growing my skills. </p>
                <p> All in all i wouldn't trade this expereicne for anything.  I learned a ton and grew great skills with building MVP's that I carry with my on every idea I have crossed my mind in the coming years.</p>
            </div>
            <div id="swaze-project">
                <h2> Bruush (Personal) </h2>
                <h3> 2014 -> 2015 </h3>
                <p> This was my second iOS application. I suppose I was trying to solve the proplem of being bored while brushing your teeth. This was my first attempt at learning swift after a semester of CS. It was a simple falling objects tapping game. While the objects fall it would prompt you to switch brushing positions. </p>
            </div>
            <div id="swaze-project">
                <h2> Swaze (Personal) </h2>
                <h3> 2013 -> 2015 </h3>
                <p> This was my first iOS application. A swipe based maze game with a single level design. The app was written in Objective C. Swaze is the reason I am where i am at now! </p>
            </div>
        </Collapsible>
      );
    }
  }

export default Projects;
