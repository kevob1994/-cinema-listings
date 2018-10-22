import React, {Component} from 'react';
import axios from 'axios';
import OutstandingMovie from '../components/OutstandingMovie';
import PremiereMovie from '../components/PremiereMovie';
import styled from 'styled-components'

const key_api = "7e5c84462531e19a20a94129dacf0d36"

const TitleSection = styled.h1`
    background: #525875;
    color: white;
    margin: 0;
    padding-left: 10px;
`
export default class HomePage extends Component{
    constructor(){
        super();
        this.state = {
            movies: [],
            featuredMovie: '',
            upcoming_movies: []
        }
    }
    componentDidMount(){
        this.getData()
        this.upcomingMovies()
    }
    upcomingMovies = async () => {
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key_api}&language=es`

        try {
            const result = await axios.get(url)

            this.setState({
                upcoming_movies: result.data.results
            })
            
        } catch (error) {
            console.log(error);
        }
    }

    getData = async () => {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key_api}&language=es`

        try {
            const result = await axios.get(url)

            this.setMovieOutstanding(result.data.results)

            this.setState({
                movies: result.data.results
            })
            
        } catch (error) {
            console.log(error);
        } 
    }

    setMovieOutstanding(movies){
        const featuredMovie = movies[Math.floor(Math.random()*movies.length)]
        this.setState({
            featuredMovie: featuredMovie
        })
    }

    render () {
        const {movies, featuredMovie,upcoming_movies} =this.state
        return (
            <div>
                <OutstandingMovie featuredMovie= {featuredMovie}/>
                <TitleSection> Estrenos:</TitleSection>
                <PremiereMovie movies= {movies}/>
                <TitleSection> Proximamente:</TitleSection>
                <PremiereMovie movies= {upcoming_movies}/>
            </div>
        )
    }
}