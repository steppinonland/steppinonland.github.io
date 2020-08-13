import React from "react";
import Card from "../Card";

const Portfolio = () => (
    <div>
        <Card 
        image={require("./pwgenerator.png")}
        name="Password Generator"
        description="In this project, I used Javascript to help a user generate a password based on their chosen criteria. Users can choose the length of their password."
        app="https://github.com/steppinonland/Password_Generator"
        />
        <Card 
        image={require("./perfectpark.png")}
        name="Perfect Park"
        description="Craving adventure? This app, called Pefect Park, leverages the National Park Service's API, along with weather and Google Maps, to provide comprehensive National Park information, across all 50 states and territories."
        app="https://perfectpark1.github.io/PerfectPark/"
        />
        <Card 
        image={require("./quiz.png")}
        name="Javascript Code Quiz"
        description="In this project, a user can test their Javascript skills! Be careful - if you choose the wrong answer, you'll have less time to complete the quiz!"
        app="https://steppinonland.github.io/JavaScript_Game/r"
        />
        <Card 
        image={require("./weather.png")}
        name="The Landgraf Weather Service"
        description="Hey, what's the weather up to? Head on over to the Landgraf Weather Service to obtain comprehensive weather information for any major city around the world!"
        app="https://github.com/steppinonland/LandgrafWeatherService"
        />
        <Card 
        image={require("./workday.png")}
        name="Workday Scheduler"
        description="Are you working from home and need help planning out your workday? My website can help you stay on track, with interactive color-coding features. The user can save their information into their browser's local storage."
        app="https://steppinonland.github.io/Workday_Scheduler/"
        />
        <Card 
        image={require("./orchard.png")}
        name="Orchard"
        description="Taking up gardening as your new hobby? With Orchard, you can manage your inventory of all the fruits, vegetables, and plants that you'd like to sell in your community. Put your best fruit forward with Orchard."
        app="https://orchard-application.herokuapp.com/"
        />
        <Card 
        image={require("./notetaking.png")}
        name="Password Generator"
        description="In this project, I used Javascript to help a user generate a password based on their chosen criteria. Users can choose the length of their password."
        app="https://ground-breaker-note-taker.herokuapp.com/"
        />
    </div>
);

export default Portfolio;