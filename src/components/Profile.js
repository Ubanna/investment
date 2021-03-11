import React from "react";
import styled from "styled-components";
import ProfileImg from "../images/object.png";
import Empty from "../images/empty.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    // padding: 12,
    background: "#fff",
    color: "#172B4D",
    borderRadius: 3,
    width: "40%",
    textAlign: "center",
    fontSize: 13,
  },
});

function Profile() {
  const classes = useStyles();
  var name = "William";
  return (
    <Wrapper>
      <Left>
        <div className="image">
          <img
            src={ProfileImg}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div>
        <div className="text">
          <Span>Aggressive Growth</Span>
          <H2>Very High Risk Taker</H2>
          <P>
            {name}, based on the current investment solutions you are holding,
            we deduce that you are a very high risk taker. Kindly click on the button
            to try our risk assesment tool, you can skip the process.
          </P>
        </div>
        <ButtonWrapper style={{ marginLeft: "15%" }} >
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Take Risk Profiling
            </Button>
          </ButtonWrapper>
        </div>
      </Left>

      <Right>
        <div className="other">
            {/* <div  > */}
            <Link to="/" style={{ marginBottom: 30, display: "flex", flexDirection: "row", alignSelf: "flex-end", textDecoration: "none", color: "#1B365D"}}>
            <Skip>Skip</Skip>
            {/* <ArrowRightAltIcon style={{ padding: 0, margin: 0 }} /> */}
            </Link>
            {/* </div> */}
          <img src={Empty} alt="logo" />
          <div style={{ marginTop: 50 }}>
          <H2 style={{ color: "#172B4D" }}>
              Investment Solution recommendations 
              based on your risk profile
              </H2>
              <br />
          <P style={{ color: "#172B4D" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla laoreet tincidunt urna, diam parturient commodo 
              lectus. Duis nunc, enim pellentesque ipsum consectetur 
              laoreet nullam. Enim lorem adipiscing proin pellentesque 
              lectus augue. Egestas elementum aliquet pharetra, et porta.
              </P>
          <ButtonWrapper>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              style={{width: "50%", color: "#fff", backgroundColor: "#1B365D" }}
            >
              Give me recommendations
            </Button>
          </ButtonWrapper>
          </div>
        </div>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`;
const Left = styled.section`
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  left: 0;
  background-color: #0840aa;
  display: flex;
  flex-direction: column;
  .image {
    width: 100%;
    max-width: 100%;
    height: 40%;
    padding-top: 7rem;
  }
  .text {
    width: 70%;
    height: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: left;
    margin-top: 1.5rem;
  }
`;

const Span = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const H2 = styled.span`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 45px;
  color: #ffffff;
`;
const P = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: #ffffff;
`;

const Right = styled.section`
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  right: 0;
  background-color: #e5e5e5;
  .other {
    width: 80%;
    max-width: 80%;
    height: 100%;
    /* padding-top: 7rem; */
    margin: 0 auto;
    display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  }
`;
const ButtonWrapper = styled.div`
  /* align-self: center; */
  /* text-align: center; */
  margin-top: 2rem;
`;

const Skip = styled.span`
font-size: 14px;
`

export default Profile;
