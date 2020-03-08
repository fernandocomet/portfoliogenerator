
import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:4000/api/',
            withCredentials: true
        })
    }

    //User
    getAllUsers = () => this.service.get('/allusers').then(response => response.data)
    getUserDetail = () => this.service.get('/user/:id').then(response => response.data)
    getPortfoliosFromUser = () => this.service.get('/userportfolios').then(response => response.data)
    getWorksFromUser = () => this.service.get('/userworks').then(response => response.data)

    //Portfolio
    getAllPortfolios = () => this.service.get('/allportfolios').then(response => response.data)
    getPortfolioDetail = () => this.service.get('/portfolio/:id').then(response => response.data)
    getPortfolioWorks = () => this.service.get('/portfolio/:id/works').then(response => response.data)
    deletePortfolio = () => this.service.delete('/portfolio/delete/:id').then(response => response.data)
    createPortfolioGet = () => this.service.get('/newportfolio').then(response => response.data)
    createPortfolioPost = () => this.service.post('/newportfolio').then(response => response.data)
    editPortfolioToGet = () => this.service.get('/portfolio/:id').then(response => response.data)
    editPortfolioToPost = () => this.service.post('/editportfolio/:id').then(response => response.data)
    editPortfolioCover = () => this.service.post('/editportfoliocover/:id').then(response => response.data)

    //Work
    getAllWorks = () => this.service.get('/allworks').then(response => response.data)
    getWorkDetail = () => this.service.get('/work/:id').then(response => response.data)
    deleteWork = () => this.service.delete('/work/delete/:id').then(response => response.data)
    createWorkGet = () => this.service.get('/newwork').then(response => response.data)
    createWorkPost = () => this.service.post('/newwork').then(response => response.data)
    editWorkToGet = () => this.service.get('/editwork/:id').then(response => response.data)
    editWorkToPost = () => this.service.post('/editwork/:id').then(response => response.data)

    //Image
    deleteWorkImage = () => this.service.delete('/deleteImageWork/:id').then(response => response.data)
    createImageWork = () => this.service.post('/uploadImageWork/:id').then(response => response.data)
}

