import React from 'react';
import './IngredientsForm.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function IngredientsForm() {
    return(
        <Form inline className="searchForm">
            <FormControl type="text" placeholder="Type Ingredients" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
    );
}


export default IngredientsForm;