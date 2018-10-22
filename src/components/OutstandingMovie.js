import React from 'react';
import styled from 'styled-components';

const urlImgBase = 'https://image.tmdb.org/t/p/w780'

const Inicio = styled.div`
    background: url(${props => urlImgBase+props.movie.backdrop_path}) no-repeat;
    background-size: cover;
    height:700px;
    color: white;
    font-size: 22px;
    font-family: 'Anton', sans-serif;
`
const MovieInfo = styled.div`
    position: relative;
    color:rgba(205,220,57,1);
`
const MovieInfoContent = styled.div`
    position: absolute;
    top:150px;
    left: 50px;
    background: rgba(38,50,56,0.5);
    padding: 10px;
`
const MovieInfoTitle = styled.h1`
    color: rgba(255,179,0,1);
    font-family: 'Rock Salt', cursive;
`
const MovieInfoOverView = styled.p`
    font-size:14px;
    max-width: 360px;
`
const VoteProm = styled.span`
    color:rgba(100,221,23,1);
    font-family: 'Cinzel',serif;
`
const Download = styled.div`
    text-align: center;
    font-size:22px; 
`
export default ({featuredMovie}) => {
    if(featuredMovie){
        return (
            <div>
                <Inicio movie = {featuredMovie}>
                    <MovieInfo>
                        <MovieInfoContent>
                            <MovieInfoTitle>{featuredMovie.title}</MovieInfoTitle>
                            <MovieInfoOverView>{featuredMovie.overview}</MovieInfoOverView>
                            <VoteProm>{featuredMovie.vote_average}/10</VoteProm>
                        </MovieInfoContent>
                    </MovieInfo>
                </Inicio>
            </div>
            
        )
    }else{
        return (
            <Download>Cargando ...</Download>
        )
    }
    
}