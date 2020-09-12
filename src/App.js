import React from 'react';
import './App.css';
import IngredientsForm from './Components/IngredientsForm/IngredientsForm';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AddRecipeModal from './Components/AddRecipeModal/AddRecipeModal';
import axios from 'axios';

function App() {
  return (
    <div className="App">
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

export default App;
