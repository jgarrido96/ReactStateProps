import React, { Component } from 'react';

export class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            director: 'Steven Spielberg',
            movies: [
                { title: 'Jurassic Park', details: 'A new amusement park brings back Dinosaurs, at a price.', showDetails: false },
                { title: 'Saving Private Ryan', details: 'A band of soldiers venture through enemy lines during World War 2.', showDetails: false },
                { title: 'Catch Me if you can', details: 'A young man impersonates flight personell and lives large.', showDetails: false }

            ],
        };
        this.changeMovie = this.changeMovie.bind(this);
    }

    changeMovie = () => {
        this.setState({
            director: 'Quentin Tarantino',
            movies: [
                {title: 'Django Unchained', details: 'A former slave becomes a bounty hunter with a German Dentist.', showDetals: false},
                {title: 'Inglorious Bastards', details: 'American Jewish soldiers penetrate Nazi Germany.', showDetals: false},
                {title: 'Pulp Fiction', details: 'A series of events unfold in LA in the 90s.', showDetals: false}
            ]
        });
    }

    handleDelete (index) {
        console.log('before deletion:', this.state.movies);
        const updatedMovies = [...this.state.movies];
        updatedMovies.splice(index, 1);
        this.setState({ movies: updatedMovies });
        console.log('After deletion:', updatedMovies);
        this.state.movies = this.state.updatedMovies
    }

    movieDetails = (index) => {
        // const updatedMovies = [...this.state.movies];
        const updatedMovies = this.state.movies;

        updatedMovies[index].showDetails = !updatedMovies[index].showDetails;
        this.setState({ movies: updatedMovies });
    };

    render() {
        console.log("component re-rendered");
        return (
            <div>
                <h3>3 of {this.state.director}'s most popular movies</h3>
                <ul>
                    {this.state.movies.map((movie, index) => (
                        <li key={index} onClick={() => this.movieDetails(index)}>
                            {movie.title}
                            {movie.showDetails && (
                                <ul>
                                    <li>{movie.details}</li>
                                </ul>
                            )}
                            <button onClick={() => this.handleDelete(index)}>Remove</button>
                            
                        </li>
                    ))}
                </ul>
                <button onClick={this.changeMovie}>Change Movie</button>
            </div>
        );
    }
}

export default MovieDetails;


// import React, { Component } from 'react';

// export class MovieDetails extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             director: 'Steven Spielberg',
//             movies: [
//                 { title: 'Jurassic Park', details: 'Dinosaurs are back.', showDetails: false },
//                 { title: 'Saving Private Ryan', details: 'World War 2 was pretty crazy.', showDetails: false },
//                 { title: 'Catch Me if you can', details: 'Fake Pilot rides along.', showDetails: false }
//             ],
//         };
//         this.changeMovie = this.changeMovie.bind(this);
//     }

//     changeMovie = () => {
//         this.setState({
//             director: 'Quentin Tarantino',
//             movies: [
//                 { title: 'Django Unchained', details: 'Slavery sucked', showDetails: false },
//                 { title: 'Inglorious Bastards', details: 'WW2 sucked', showDetails: false },
//                 { title: 'Pulp Fiction', details: 'gang movie', showDetails: false }
//             ]
//         });
//     };

//     handleDelete = (index) => {
//         const updatedMovies = [...this.state.movies];
//         updatedMovies.splice(index, 1); // Remove the movie at the specified index
//         this.setState({ movies: updatedMovies });
//     };

//     movieDetails = (index) => {
//         const updatedMovies = [...this.state.movies];
//         updatedMovies[index].showDetails = !updatedMovies[index].showDetails;
//         this.setState({ movies: updatedMovies });
//     };

//     render() {
//         return (
//             <div>
//                 <h3>3 of {this.state.director}'s most popular movies</h3>
//                 <ul>
//                     {this.state.movies.map((movie, index) => (
//                         <li key={index} onClick={() => this.movieDetails(index)}>
//                             {movie.title}
//                             {movie.showDetails && (
//                                 <ul>
//                                     <li>{movie.details}</li>
//                                 </ul>
//                             )}
//                             <button onClick={() => this.handleDelete(index)}>Remove</button>
//                         </li>
//                     ))}
//                 </ul>
//                 <button onClick={this.changeMovie}>Change Movie</button>
//             </div>
//         );
//     }
// }

// export default MovieDetails;