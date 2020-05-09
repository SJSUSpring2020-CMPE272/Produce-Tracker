import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { MuiThemeProvider, makeStyles } from "@material-ui/core/styles";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

const useStyles = makeStyles(() => ({
    typographyStyles: { position: "absolute", right: "20px" },
}));

const TopBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography style={{ fontSize: 20 }}>
                    Produce Tracker
                </Typography>
                <BusinessCenterIcon
                    className={classes.typographyStyles}
                    style={{ fontSize: 30, flex: 1 }}
                />
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
