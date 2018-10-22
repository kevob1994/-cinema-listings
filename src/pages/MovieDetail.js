import React,{Component}  from 'react';
import axios from 'axios';
import styled from 'styled-components'
import OutstandingMovie from '../components/OutstandingMovie';
const key_api = "7e5c84462531e19a20a94129dacf0d36";


export default class MovieDetail extends Component {
    constructor(){
        super();
        this.state = {
            movie_detail: ''
        }
    }
    componentDidMount(){
        // console.log(this.props.match.params)
        const { peliculaid } = this.props.match.params;
        this.getMovieDetail(peliculaid)
    }
    getMovieDetail = async (movieid) => {
        const url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${key_api}&language=es`
        try {
            const result = await axios.get(url);
            // console.log(result.data)
            this.setState({
                movie_detail: result.data
            })
        } catch (error) {
            
        }
    }
    render () {
        return (
            <div>
            <OutstandingMovie featuredMovie= {this.state.movie_detail}/>
            </div>
        )
    }
}