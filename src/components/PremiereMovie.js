import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const urlImgBase = 'https://image.tmdb.org/t/p/w342';

const Contenedor = styled.div`
    >ul{
        background:rgba(66,165,245,1);
        padding-left: 0;
        overflow: scroll;
        display:flex;
        align-items:strech;
        margin: 0;
    }
`

const  ItemMovie = styled(Link)`
    list-style:none;
    display:inline-block;
    background:url(${props => urlImgBase+props.movie.poster_path}) no-repeat;
    background-size:cover;
    min-width: 250px;
    margin:5px;
    height: 400px;
    font-family:'Amatic SC', cursive;
    color: rgba(240, 165, 25, 0.885) !important;
    font-size: 25px;
    font-weight: 900;
    text-shadow:2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    >span{
        display:none
        background: rgba(255,255,255,0.5);
    }
    &:hover{
        >span{
            display:block
        } 
    }
`


export default class PremiereMovie extends Component{
    render () {
        const {movies} = this.props
        return (
            <Contenedor>
                <ul>
                    {
                        movies.map(movie => (
                            <ItemMovie to={`/detail/${movie.id}`} key={movie.id} movie={movie}>
                                <span>{movie.title}</span>
                            </ItemMovie>
                        ))
                    }
                </ul>
            </Contenedor>
        )
    }
}