import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';

class Header extends React.Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Recherche de film
                    </Typography>
                    <div/>

                </Toolbar>
            </AppBar>
        );
    }
}


export default Header;