import React, { Component } from 'react'

import Workservices from '../../services/workservices'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import FilesServices from '../../services/fileservices'

class CreateWork extends Component {

    constructor(props) {
        super(props)
        this.workServices = new Workservices()
        this.filesServices = new FilesServices()
        this.state = {
            work: {
                title: '',
                subtitle: '',
                description: '',
                image: ''
            }
        }
        //this.services = new Workservices();  ////?
    }

    finishAction = () => {
        //this.props.closeModal()
        this.props.refreshList()
    }

    createWorkPost = () => {   
        this.workServices
            .createWorkPost(this.state.portfolio)
            .then(() => this.finishAction())
            .catch(err => console.log(err))
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            work: { ...this.state.work, [name]: value }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.createWorkPost() 
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("image", e.target.files[0])
        this.filesServices.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.secure_url) //ESTA URL Dudas me genera
                this.setState({
                    work: { ...this.state.work, image: response.secure_url }
                })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={this.state.work.title} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subtitle</Form.Label>
                    <Form.Control type="text" name="subtitle" value={this.state.work.subtitle} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.work.description} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image Work</Form.Label>
                    <Form.Control type="file" name="image" onChange={this.handleFileUpload} />
                    {/* <Form.Control type="text" name="image" value={this.state.work.image} onChange={this.handleChange} /> */}
                </Form.Group>

                <Button variant="dark" type="submit">Create New Work</Button>
            </Form>
        )
    }
}

export default CreateWork