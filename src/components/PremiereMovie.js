import React, {Component} from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
    >ul{
        background:rgba(66,165,245,1);
        padding-left: 0;
        overflow: scroll;
        display:flex;
        align-items:strech
    }
`

const  ItemMovie = styled.li`
    list-style:none;
    display:inline-block;
    min-width: 200px;
    margin:5px;
    height: 300px;
    font-family:'Amatic SC', cursive;
    color: yellow;
`

export default class PremiereMovie extends Component{
    render () {
        const {movies} = this.props
        return (
            <Contenedor>
                <ul>
                    {
                        movies.map(movie => (
                            <ItemMovie key={movie.id}>{movie.title}</ItemMovie>
                        ))
                    }
                </ul>
            </Contenedor>
        )
    }
}