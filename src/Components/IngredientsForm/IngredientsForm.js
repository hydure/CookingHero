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
        var cleanedRequestedIngredientsArray = [];
        requestedIngredientsArray.forEach( function (ingredient, index){
            cleanedRequestedIngredientsArray.push(ingredient.trim().toLowerCase());
        });

        // Retrieve and clean up recipes - prepping ingredients for analysis.
        var listOfIngredientsForEachRecipe = []
        var recipeIngredients = [];
        var cleanedRecipeIngredients = []
        for (var i = 0; i < recipes.length; i++){
            recipeIngredients = recipes[i].Recipe_Ingredients.trim().split(",");
            recipeIngredients.forEach( function (ingredient, index){
                cleanedRecipeIngredients.push(ingredient.trim().toLowerCase());
            });

            listOfIngredientsForEachRecipe.push([recipes[i].Recipe_Name,cleanedRecipeIngredients]);
            cleanedRecipeIngredients = [];
        }

        //console.log(listOfIngredientsForEachRecipe);
        //console.log(cleanedRequestedIngredientsArray);

        // Only return recipes with at least one main ingredient that the user entered.
        var recipesToReturn = []
        listOfIngredientsForEachRecipe.forEach( function (listOfIngredients, index){
            for (var i = 0; i < cleanedRequestedIngredientsArray.length; i++){
                if (listOfIngredients[1].indexOf(cleanedRequestedIngredientsArray[i]) > -1){
                    recipesToReturn.push(recipes[index]);
                    break;
                }
            }
        });
        //console.log(recipesToReturn)
        return recipesToReturn;
    }

    const findRecipes = function(event){
        event.preventDefault();
        handleShow();

        axios.get('http://localhost:4000/recipes/')
            .then(response => {
                recipes = response.data;
                //console.log(recipes);
                //console.log("Ingredients Chosen:" + ingredients);
                var filteredRecipes = []
                filteredRecipes = filterRecipes(recipes, ingredients);

                for (var i = 0; i < filteredRecipes.length; i++){
                    var node = document.createElement("div");
                    var recipeData = '<p>Recipe: ' + filteredRecipes[i].Recipe_Name + '<br/>';
                    recipeData    += 'Ingredients: ' + filteredRecipes[i].Recipe_Ingredients + '<br/>';
                    if (filteredRecipes[i].Optional_Ingredients !== ""){
                        recipeData    += 'Opt Ingredients: ' + filteredRecipes[i].Optional_Ingredients + '<br/>';
                    }
                    if (filteredRecipes[i].Website_Link !== ""){
                        recipeData    += 'Website: ' + filteredRecipes[i].Website_Link;
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