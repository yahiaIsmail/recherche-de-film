import React, {Component} from 'react';
import axios from 'axios';
import MoviesResults from "../movies-results/MoviesResults";
import SearchBar from 'material-ui-search-bar'
import ApiUrl from '../../config.dev.json';


class Home extends Component {

    state = {
        searchText: '',
        apiUrl: ApiUrl.ApiUrl,
        movies: []
    };

    onTextChange = e => {

        const val = e;
        this.setState({searchText: val}, () => {
            if (val === '') {
                this.setState({movies: []});
            } else {
                axios
                    .get(
                        `${this.state.apiUrl}?q=${
                            this.state.searchText
                        }`,
                    )
                    .then(res => this.setState({movies: res.data}))
                    .catch(err => console.log(err));
            }
        });
    };


    render() {


        return (

            <div>
                <br/>
                <SearchBar
                    name="searchText"
                    value={this.state.searchText}
                    hintText={"Rechercher un film .."}
                    onChange={(e) => this.onTextChange(e)}
                    onRequestSearch={() => console.log('onRequestSearch')}
                    style={{
                        margin: '0 auto',
                        maxWidth: 800
                    }}
                />
                <br/>
                <hr/>
                <br/>


                {this.state.movies.length > 0 ? (
                    <MoviesResults movies={this.state.movies}/>
                ) : null}

            </div>
        );
    }

}

export default Home;


