import React, {Component} from 'react';
import axios from 'axios';
import OutstandingMovie from '../components/OutstandingMovie';
import PremiereMovie from '../components/PremiereMovie';


const key_api = "7e5c84462531e19a20a94129dacf0d36"
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key_api}&language=es`

export default class HomePage extends Component{
    constructor(){
        super();
        this.state = {
            movies: []
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData = async () => {
        try {
            const result = await axios.get(url)
            this.setState({
                movies: result.data.results
            })
            console.log(this.state) 
        } catch (error) {
            console.log(error);
        }
        
    }
    render () {
        const {movies} =this.state
        return (
            <div>
                <OutstandingMovie />
                <PremiereMovie movies= {movies}/>
            </div>
        )
    }
}