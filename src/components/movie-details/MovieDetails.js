import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class MovieDetails extends Component {

    state = {
        expanded: null
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false
        });
    };

    createMarkup(e) {
        return {__html: e};
    }

    getAllDays(daysArray) {
        let alldaysInString = "";
        if (daysArray.length > 0) {
            daysArray.forEach(d => {
                alldaysInString += d + " | ";
            });
            return alldaysInString;
        }

    }


    render() {
        const {expanded} = this.state;
        const selectedMovie = this.props.location.movie
        return (

            <div>
                <br/>
                <Container>
                    <Link to={{
                        pathname: '/',

                    }}>
                        <Button variant="contained" color="primary">
                            Accueil
                        </Button></Link>
                </Container>
                <br/>
                <hr/>
                {selectedMovie ? (
                    <Container>
                        <h2> {selectedMovie.show.name}</h2>
                        <GridList cols={12} spacing={4}>

                            <GridTile cols={4} rows={3}>


                                {selectedMovie.show.image ? (
                                    <img src={selectedMovie.show.image.original} alt=""/>
                                ) : <img src="/no-image-icon-5.jpg" alt=""/>}
                            </GridTile>
                            <GridTile cols={1}/>
                            <GridTile cols={7} rows={4}>
                                <h2>Details</h2>
                                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                        <Typography>Description génerale</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        {selectedMovie.show.summary ? (<span
                                                dangerouslySetInnerHTML={this.createMarkup(selectedMovie.show.summary)}/>) :
                                            "-"}
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                        <Typography>Informations du film</Typography>

                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            <b>Network :</b> <span>{selectedMovie.show.network ? (
                                                selectedMovie.show.network.name) :
                                            "-"}</span><br/>
                                            <b>Created By :</b> <span>{selectedMovie.show.webChannel ? (
                                                selectedMovie.show.webChannel) :
                                            "-"}</span><br/>
                                            <b>Language :</b> <span>{selectedMovie.show.language ? (
                                                selectedMovie.show.language) :
                                            "-"}</span><br/>
                                            <b>Official website :</b> <span>{selectedMovie.show.url ? (
                                                selectedMovie.show.url) :
                                            "-"}</span><br/>
                                            <b>Schedule :</b> <span>{selectedMovie.show.schedule ? (
                                                "à " + selectedMovie.show.schedule.time + " tous les jours :" +
                                                this.getAllDays(selectedMovie.show.schedule.days)
                                            ) :
                                            "-"}</span><br/>
                                            <b>Status :</b> <span>{selectedMovie.show.status ? (
                                                selectedMovie.show.status) :
                                            "-"}</span><br/>
                                            <b>Type :</b> <span>{selectedMovie.show.type ? (
                                                selectedMovie.show.type) :
                                            "-"}</span><br/>
                                            <b>Schedule :</b> <span>{selectedMovie.show.genres ? (
                                                this.getAllDays(selectedMovie.show.genres)
                                            ) :
                                            "-"}</span><br/>

                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                        <Typography>Score et Code Film sur</Typography>
                                        <Typography>Imdb et Tvrage et Thetvdb</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            <b>TV RAGE :</b> <span>{selectedMovie.show.externals ? (
                                                selectedMovie.show.externals.tvrage) :
                                            "-"}</span><br/>
                                            <b>THE TV DB :</b> <span>{selectedMovie.show.network ? (
                                                selectedMovie.show.network.thetvdb) :
                                            "-"}</span><br/>
                                            <b>IMDB :</b> <span>{selectedMovie.show.network ? (
                                                selectedMovie.show.network.imdb) :
                                            "-"}</span><br/>
                                            <b>Score :</b> <span>{selectedMovie.score ? (
                                                selectedMovie.score.toFixed(2)) :
                                            "-"}</span><br/>
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>


                            </GridTile>
                        </GridList>
                    </Container>
                ) : <Container><h2>Lancer une nouvelle recherche ..</h2></Container>}


            </div>
        );
    }
}

export default MovieDetails;