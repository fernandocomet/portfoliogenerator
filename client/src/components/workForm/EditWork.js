import React, { Component } from 'react'

import Workservices from "../../services/workservices";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import FilesServices from '../../services/fileservices'
import { Link } from 'react-router-dom';

class EditWork extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            work: null
        };
        this.services = new Workservices();
    }

    componentDidMount = () => {
        this.getWorkDetail();
    };

    getWorkDetail = () => {
        this.services
            .getWorkDetail(this.props.match.params.id)
            //.then(console.log(this.props.match.params.id))
            .then(thework => this.setState({ work: thework }))
            .catch(err => console.log(err));
    };

    render() {

        return (
            <div>
                <h1>Edit work</h1>
                {/*<h2>hola {this.state.work.params.id}</h2> */}
                <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={this.props.match.params.title} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subtitle</Form.Label>
                    <Form.Control type="text" name="subtitle" value={this.props.match.params.subtitle} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={this.props.match.params.description} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image Work</Form.Label>
                    <Form.Control type="file" name="image" onChange={this.handleFileUpload} />
                    {/* <Form.Control type="text" name="image" value={this.state.work.image} onChange={this.handleChange} /> */}
                </Form.Group>

                <Button variant="dark" type="submit">Create New Work</Button>
            </Form>
            </div>
 
        )
    }
}

export default EditWork


