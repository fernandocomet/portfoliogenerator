import React, { Component } from 'react'

import Portfolioservices from '../../services/portfolioservices'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import FilesServices from '../../services/fileservices'

class CreatePortfolio extends Component {

    constructor(props) {
        super(props)
        this.portfolioServices = new Portfolioservices()
        this.filesServices = new FilesServices()
        this.state = {
            portfolio: {
                alias: '',
                title: '',
                subtitle: '',
                imagecover: ''
            }
        }
        //this.services = new Portfolioservices();  ////?
    }

    finishAction = () => {
        //this.props.closeModal()
        this.props.refreshList()
    }

    createPortfolioPost = () => {   
        this.portfolioServices.createPortfolioPost(this.state.portfolio)
            .then(() => this.finishAction())
            .catch(err => console.log(err))
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            portfolio: { ...this.state.portfolio, [name]: value }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.createPortfolioPost() 
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imagecover", e.target.files[0])
        this.filesServices.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.secure_url) //ESTA URL Dudas me genera
                this.setState({
                    portfolio: { ...this.state.portfolio, imagecover: response.secure_url }
                })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
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
                    {/* <Form.Control type="text" name="imagecover" value={this.state.portfolio.imagecover} onChange={this.handleChange} /> */}
                </Form.Group>

                <Button variant="dark" type="submit">Create New Portfolio</Button>
            </Form>
        )
    }
}

export default CreatePortfolio