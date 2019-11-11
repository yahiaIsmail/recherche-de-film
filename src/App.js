import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/shared/Header";
import Home from "./components/home";
import Footer from "./components/shared/Footer";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MovieDetails from "./components/movie-details/MovieDetails";



function App() {
    return (
        <MuiThemeProvider>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/film/:id" component={MovieDetails} />

                </Switch>
                <Footer/>
            </BrowserRouter>
        </MuiThemeProvider>

    );
}

export default App;
