import React from "react";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

function AboutPage() {
  return (
    <div className="about">
        <Navbar/>
        <div class="container">
            <div class="row align-items-center my-5">
                <div class="col-lg-5">
                    <h1 class="font-weight-light">About</h1>
                    <p>
                    Colin and Sam are brothers both with interests in CS and FOOD.  
                    Growing up, meals were relatively simple and without much 
                    nutrition&#8212;think mac n' cheese and ramen, with some veggies 
                    seldom sprinkled in.  Long since, the two of them have taken an 
                    interest in the culinary arts and the wonders of computer science: 
                    This site is the fruit of their efforts to help others make delicious, 
                    nutritious meals on a budget.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default AboutPage;