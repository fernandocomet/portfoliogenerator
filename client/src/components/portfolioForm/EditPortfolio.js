import React, { Component } from 'react'

import Portfolioservices from '../../services/portfolioservices'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import FilesServices from '../../services/fileservices'
import { Link } from 'react-router-dom';

class EditPortfolio extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            portfolio: null
        };
        this.services = new Portfolioservices();

    }

    componentDidMount = () => {
        this.getPortfolioDetail();
    };

    getPortfolioDetail = () => {
        this.services
            .getPortfolioDetail(this.props.match.params.id)
            .then(theportfolio => this.setState({ portfolio: theportfolio }))
            .catch(err => console.log(err));
    };

    render() {

        return (
            <div>
                {/* <h1>hola {this.state.portfolio.title}</h1> */}
            </div>
 
        )
    }
}

export default EditPortfolio


//{this.state.portfolio}
       /*
            <Form onSubmit={this.handleSubmit}>
                <h1>EditPortfolio</h1> 
                
                 <Form.Group>
                    <Form.Label>Alias</Form.Label>
                    <Form.Control type="text" name="alias" value={this.state.portfolio.alias} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" name="title" value={this.state.portfolio.title} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subtitle</Form.Label>
                    <Form.Control type="text" name="subtitle" value={this.state.portfolio.subtitle} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image Cover</Form.Label>
                    <Form.Control type="file" name="imagecover" onChange={this.handleFileUpload} />
                    <Form.Control type="text" name="imagecover" value={this.state.portfolio.imagecover} onChange={this.handleChange} /> 
                </Form.Group> 

                <Button variant="dark" type="submit">Create New Portfolio</Button>
            </Form>
        */