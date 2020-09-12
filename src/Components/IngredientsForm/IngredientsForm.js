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

    const findRecipes = function(event){
        event.preventDefault();
        handleShow();

        axios.get('http://localhost:4000/recipes/')
            .then(response => {
                recipes = response.data;
                console.log(recipes);
                ReactDOM.render
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
                <FormControl type="text" placeholder="Type Ingredients" className="mr-sm-2" />
                <Button variant="primary" type="submit">Search</Button>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Here are some recipes we found...</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal>
        </div>
    );
}


export default IngredientsForm;