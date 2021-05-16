import React, { Component } from 'react';
import Result from './Result';

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  6: {
    id: 1,
    name: 'Planet Earth 1',
  },
  7: {
    id: 2,
    name: 'Selma',
  },
  8: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  9: {
    id: 4,
    name: 'Forrest Gump',
  },
  10: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends Component {

  constructor(props){
    super(props);
    this.movieFans={};

    profiles.forEach(profile=>{
      let movieId = profile.favoriteMovieID;
      if(this.movieFans[movieId]){
         //check first if current movie has fans then add the user to the list
        this.movieFans[movieId].push(profile.userID);
      }else{
        // else add the user to the new list
        this.movieFans[movieId] = [profile.userID];
      }
    });
  }

  render() {
    return (
      <div>
        <Result users={users} movies={movies} movieFans={this.movieFans}/>
      </div>
    );
  }
}

export default App;
