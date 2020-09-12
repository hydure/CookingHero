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
                    <Form>
                        <Form.Group>
                            <Form.Label>Recipe Name</Form.Label>
                            <Form.Control placeholder="Enter Recipe Name" />
                            <Form.Text className="text-muted">
                                We bet it's tasty!
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Recipe Ingredients</Form.Label>
                            <Form.Control placeholder="Enter Ingredients" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Optional Ingredients</Form.Label>
                            <Form.Control placeholder="Enter Ingredients" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Website Link</Form.Label>
                            <Form.Control placeholder="Optional" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Add Recipe</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddRecipeModal;