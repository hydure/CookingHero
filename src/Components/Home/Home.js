import React from 'react';
import './Home.css';
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import IngredientsForm from "../IngredientsForm/IngredientsForm"
import AddRecipeModal from "../AddRecipeModal/AddRecipeModal"

function Home() {
  return (
    <div className="home">
      <Navbar/>
        <body className="App-body">
          <h4 className="gimmeSpace">
            Figure out what you can eat with what you already have!
          </h4>
          <div>
            <p className="paragraph">
              Too tired to buy groceries? Have a dinner date in your dorm soon?<br/>
              Have no fear, we are here to help you! 
            </p>
            <IngredientsForm/>
          </div>

          <div>
            <p className="paragraph">Order add a new recipe here!</p>
            <AddRecipeModal/>
          </div>

          <p></p>
          <p></p>
          <Footer/>
        </body>
    </div>
  );
}

export default Home;