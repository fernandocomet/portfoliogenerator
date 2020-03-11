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
            //.then(console.log(this.props.match.params.id))
            .then(theportfolio => this.setState({ portfolio: theportfolio }))
            .catch(err => console.log(err));
    };

    render() {

        return (
            <div>
                <h1>Edit portfolio</h1>
                {/*<h2>hola {this.state.portfolio.params.id}</h2> */}
                <Form onSubmit={this.handleSubmit}>
                
                 <Form.Group>
                    <Form.Label>Alias</Form.Label>
                    <Form.Control type="text" name="alias" value={this.props.match.params.alias} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" name="title" value={this.props.match.params.title} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subtitle</Form.Label>
                    <Form.Control type="text" name="subtitle" value={this.props.match.params.subtitle} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image Cover</Form.Label>
                    <Form.Control type="file" name="imagecover" onChange={this.handleFileUpload} />
                    <Form.Control type="text" name="imagecover" value={this.props.match.params.imagecover} onChange={this.handleChange} /> 
                </Form.Group> 

                <Button variant="dark" type="submit">Save Portfolio</Button>
            </Form>
            </div>
 
        )
    }
}

export default EditPortfolio


