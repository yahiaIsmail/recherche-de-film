import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';

class MoviesResults extends Component {

    render() {
        let moviesListContent;
        const {movies} = this.props;

        if (movies) {
            moviesListContent = (

                <GridList cols={5}>

                    {movies.map(mov => (
                        <Link to={{
                            pathname: '/film/' + mov.show.id,
                            movie: mov
                        }}
                              key={mov.show.id}>
                            <GridTile
                                title={mov.show.name}
                                key={mov.show.id}

                                actionIcon={
                                    <IconButton>
                                        <InfoIcon color="white">

                                        </InfoIcon>
                                    </IconButton>
                                }
                            >


                                {mov.show.image ? (
                                    <img src={mov.show.image.medium} alt=""/>
                                ) : <img src="/no-image-icon-5.jpg" alt=""/>}
                            </GridTile>
                        </Link>
                    ))}
                </GridList>
            );
        } else {
            moviesListContent = null;
        }


        return (
            <Container>

                <h1>Liste des films</h1>
                <hr/>
                {moviesListContent}

            </Container>
        );
    }
}

MoviesResults.propTypes = {
    movies: PropTypes.array.isRequired
};
export default MoviesResults;