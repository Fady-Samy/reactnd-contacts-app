import React, { Component } from 'react';

class Movie extends Component {
    render() {

        const {users, movieFans, movieInfo} = this.props;
        let thisMovieFans = movieFans[movieInfo.id];
        return (
            <li key={movieInfo.id}>
                <h2>{movieInfo.name}</h2>
                {!thisMovieFans || thisMovieFans.length===0 
                ? (<p>None of the current users liked this movie</p>) 
                : (
                    <div>
                        <h3>Liked By:</h3>
                        <ul>
                            {thisMovieFans && thisMovieFans.map(userId=>{
                              
                                return(
                                    <li key={userId}><p>{users[userId].name}</p></li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </li>
        );
    }
}

export default Movie;