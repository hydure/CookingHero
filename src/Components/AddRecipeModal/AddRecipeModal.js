import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function AddRecipeModal() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var recipeName = "";
    var ingredients = ""
    var optIngredients = "";
    var websiteLink = "";

    const submitRecipe = function(event){
        event.preventDefault();
        console.log("Recipe Submitted!")
        console.log("Recipe Name:" + recipeName)
        console.log("Ingredients:" + ingredients)
        console.log("Opt Ingredients:" + optIngredients)
        console.log("Website Link:" + websiteLink)

        const newRecipe = {
            Recipe_Name: recipeName,
            Recipe_Ingredients: ingredients,
            Optional_Ingredients: optIngredients,
            Website_Link: websiteLink
        }

        axios.post("http://localhost:4000/recipes/add", newRecipe)
            .then(res => console.log(res.data));

        handleClose();
        recipeName = "";
        ingredients = ""
        optIngredients = "";
        websiteLink = "";
    }

    const onChangeRecipeName = function(event){
        recipeName = event.target.value;
    }

    const onChangeIngredients = function(event){
        ingredients = event.target.value;
    }

    const onChangeOptIngredients = function(event){
        optIngredients = event.target.value;
    }

    const onChangeWebsiteLink = function(event){
        websiteLink = event.target.value;
    }

    return (
        <div className="recipeModal" 
            style = {{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center"
            }}>
            <Button variant="primary" onClick={handleShow} className="modalButton">
                Add Recipe
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Add the recipe you want to save.</p>
                    <Form onSubmit={submitRecipe}>
                        <Form.Group>
                            <Form.Label>Recipe Name</Form.Label>
                            <Form.Control
                                required
                                placeholder="Enter Recipe Name"
                                type="text"
                                onChange={onChangeRecipeName.bind(this)}
                            />
                            <Form.Text className="text-muted">
                                We bet it's tasty!
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Recipe Ingredients</Form.Label>
                            <Form.Control
                                required
                                placeholder="Enter Ingredients in the format 'apples, cheese, ...'"
                                type="text"
                                onChange={onChangeIngredients.bind(this)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Optional Ingredients</Form.Label>
                            <Form.Control
                                placeholder="Enter Ingredients in the format 'apples, cheese, ...'"
                                type="text"
                                onChange={onChangeOptIngredients.bind(this)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Website Link</Form.Label>
                            <Form.Control
                                placeholder="Optional"
                                type="text"
                                onChange={onChangeWebsiteLink.bind(this)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" type="submit">Add Recipe</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}


export default AddRecipeModal;