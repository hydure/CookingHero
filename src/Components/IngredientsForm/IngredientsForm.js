import React from 'react';
import './IngredientsForm.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function IngredientsForm() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var recipes;

    var ingredients = "";

    const onChangeIngredients = function(event){
        ingredients = event.target.value;
    }

    const filterRecipes = function(recipes, ingredients){
        // Get and clean the user-input ingredients.
        var requestedIngredientsArray = ingredients.trim().split(/[\s,]+/);
        requestedIngredientsArray.forEach( function (ingredient, index){
            ingredient = ingredient.trim();
        });

        // Retrieve and clean up recipes - prepping ingredients for analysis.
        var listOfIngredientsForEachRecipe = []
        var recipeIngredients = [];
        for (var i = 0; i < recipes.length; i++){
            recipeIngredients = recipes[i].Recipe_Ingredients.trim().split(",");
            recipeIngredients.forEach( function (ingredient, index){
                ingredient = ingredient.trim();
            });
            listOfIngredientsForEachRecipe.push([recipes[i].Recipe_Name,recipeIngredients]);
        }
        //console.log(listOfIngredientsForEachRecipe);
        //console.log(requestedIngredientsArray);
        
        // Only return recipes with at least one main ingredient that the user entered.
        var recipesToReturn = []
        listOfIngredientsForEachRecipe.forEach( function (listOfIngredients, index){
            for (var i = 0; i < requestedIngredientsArray.length; i++){
                console.log(listOfIngredients[1]);
                console.log(requestedIngredientsArray[i]);
                console.log(listOfIngredients[1].indexOf(requestedIngredientsArray[i]) !== -1);
                if (listOfIngredients[1].indexOf(requestedIngredientsArray[i]) !== -1){
                    recipesToReturn.push(listOfIngredients)
                    break;
                }
            }
        });

        return recipesToReturn;
    }

    const findRecipes = function(event){
        event.preventDefault();
        handleShow();

        axios.get('http://localhost:4000/recipes/')
            .then(response => {
                recipes = response.data;
                console.log(recipes);
                console.log("Ingredients Chosen:" + ingredients);
                recipes = filterRecipes(recipes, ingredients);
                
                for (var i = 0; i < recipes.length; i++){
                    var node = document.createElement("div");
                    var recipeData = '<p>Recipe: ' + recipes[i].Recipe_Name + '<br/>';
                    recipeData    += 'Ingredients: ' + recipes[i].Recipe_Ingredients + '<br/>';
                    if (recipes[i].Optional_Ingredients !== ""){
                        recipeData    += 'Opt Ingredients: ' + recipes[i].Optional_Ingredients + '<br/>';
                    }
                    if (recipes[i].Website_Link !== ""){
                        recipeData    += 'Website: ' + recipes[i].Website_Link;
                    }
                    recipeData    +='</p>';
                    node.innerHTML = recipeData
                    var recipeElem = document.getElementById("recipes");
                    recipeElem.appendChild(node);
                }
                
            })
            .catch(function (error){
                console.error(error);
            })
        
    }

    return(
        <div className="recipeModal" 
            style = {{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center"
            }}>
            <Form inline className="searchForm" onSubmit={findRecipes}>
                <FormControl required type="text" placeholder="Type Ingredients" className="mr-sm-2" 
                    onChange={onChangeIngredients.bind(this)}/>
                <Button variant="primary" type="submit">Search</Button>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Here are some recipes we found...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="recipes"></div>
                </Modal.Body>
            </Modal>
        </div>
    );
}


export default IngredientsForm;