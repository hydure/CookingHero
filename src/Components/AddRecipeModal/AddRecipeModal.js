import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddRecipeModal() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="recipeModal">
            <Button variant="primary" onClick={handleShow} className="modalButton">
                Add Recipe
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Add the recipe you want to save.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Add Recipe</Button>
                </Modal.Footer>
            </Modal>

            style = {{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        </div>
    );
}

export default AddRecipeModal;