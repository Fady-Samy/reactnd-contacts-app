import React, { Component } from 'react';
import Movie from './Movie';

class Result extends Component {
    render() {

        const {users, movies, movieFans } = this.props;
        const movie = Object.keys(movies).map(id=>(
            <Movie key={id} users={users} movieFans={movieFans} movieInfo={movies[id]}/>
        ));
        return (
           <ul> {movie} </ul>
        );
    }
}

export default Result;