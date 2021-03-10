import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from "../images/ARM.png";
import styled from "styled-components"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
      width: "90%",
      display: "flex",
      justifyContent: "space-between",
      alignSelf: "center",
    },
  }));

function Navbar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="fixed" style={{ background: 'white'}}>
          <Toolbar className={classes.toolbar}>
          <img src={logo} alt="logo" />
          <TextContainer>
            <Span>Need help? Call +234 813 2348 901</Span>
            <Span>From 9am - 5pm Mon - Fri</Span>
          </TextContainer>
          </Toolbar>
        </AppBar>
      </div>
    )
}

const Span = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  text-align: right;
  letter-spacing: 1px;
  color: #172B4D;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default Navbar
