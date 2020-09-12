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

    const findRecipes = function(event){
        event.preventDefault();
        handleShow();

        axios.get('http://localhost:4000/recipes/')
            .then(response => {
                recipes = response.data;
                console.log(recipes);
                
                for (var i = 0; i < recipes.length; i++){
                    var recipeData = '<p>Recipe: ' + recipes[i].Recipe_Name + '<br/>';
                    recipeData    += 'Ingredients: ' + recipes[i].Recipe_Ingredients + '<br/>';
                    if (recipes[i].Optional_Ingredients != null){
                        recipeData    += 'Opt Ingredients: ' + recipes[i].Optional_Ingredients + '<br/>';
                    }
                    if (recipes[i].Website_Link != null){
                        recipeData    += 'Website: ' + recipes[i].Website_Link;
                    }
                    recipeData    +='</p>';
                    var recipeElem = document.getElementById("recipe" + (i+1).toString());
                    recipeElem.innerHTML = recipeData;
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
                <FormControl required type="text" placeholder="Type Ingredients" className="mr-sm-2" />
                <Button variant="primary" type="submit">Search</Button>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Here are some recipes we found...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="recipe1"></div>
                    <div id="recipe2"></div>
                    <div id="recipe3"></div>
                </Modal.Body>
            </Modal>
        </div>
    );
}


export default IngredientsForm;