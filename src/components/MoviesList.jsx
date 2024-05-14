import React, { useState, Component } from 'react';
// import MovieDetails from './MovieDetails'


export class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            director: 'Steven Spielberg',
            title1: 'Jurassic Park',
            title2: 'Saving Private Ryan',
            title3: 'Catch Me if you can',
            movie1Details: 'Dinosaurs are back.',
            movie2Details: 'World War 2 was pretty crazy.',
            movie3Details: 'Fake Pilot rides along.',

        }
        this.changeMovie= this.changeMovie.bind(this);
    };


    changeMovie = () => {
        this.setState({director: 'Quentin Tarantino'});
        this.setState({title1: 'Django Unchained'});
        this.setState({title2: 'Inglorious Bastards'});
        this.setState({title3: 'Pulp Fiction'})
    }

    movieDetails = (movie) => {
        let movieDetails = '';
        if (movie === 'title1') {
            movieDetails = 'Slavery sucked.';
            this.setState({ movie1Details: movieDetails })
        } else if (movie === 'title2'){
            movieDetails = 'World War 2 was way crazier.'
            this.setState({movie2Details: movieDetails });
        } else if (movie === 'title3'){
            movieDetails = 'Being in a gang kinda sucks.'
        this.setState({movie3Details: movieDetails });
        }
    };



    render() {
        return (
            <div>
                <h3>3 of {this.state.director}'s most popular movies</h3>
                <ul>
                    <li onClick={() => this.movieDetails('title1')}>
                        {this.state.title1}
                        <ul><li>{this.state.movie1Details}</li></ul>
                    </li>
                    <li onClick={() => this.movieDetails('title2')}>
                        {this.state.title2}
                        <ul><li>{this.state.movie2Details}</li></ul>
                    </li>

                    <li onClick={ () => this.movieDetails('title3')}>
                        {this.state.title3}
                        <ul><li>{this.state.movie3Details}</li></ul>
                    </li>
                </ul>
                <button onClick={this.changeMovie}>Change Movie</button>
            </div>
        );
    }
}

export default MovieList
