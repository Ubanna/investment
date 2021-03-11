import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import styled from "styled-components";
import EntryImg from "../images/image.png";
import { useHistory } from 'react-router-dom';


const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: "50%",
    margin: "20px auto",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    marginTop: 75,
  };
  const btnstyle = { margin: "8px 0", backgroundColor: "#1B365D" };

  const history = useHistory();

  const handleClick = () => {
    history.push("/dashboard");
}
  
  return (
    <Wrapper>
      <Left>
        <div className="image">
          <img
            src={EntryImg}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="text">
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
              fermentum tincidunt vivamus tellus velit quis mauris proin cursus.
              Duis aenean convallis lectus nibh
            </P>
          </div>
        </div>
      </Left>

      <Right>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <div style={{ textAlign: "left" }}>
              <Welcome>Hello, Welcome back.</Welcome>
              <br />
              <Subtext>
                Kindly fill in your details to sign into your account
              </Subtext>
              </div>
            </Grid>
            <TextField
              label="First name"
              placeholder="Enter first name"
              fullWidth
              value="William"
              // required
            />
            <TextField
              label="User ID"
              placeholder="Enter user id"
            //   type="password"
              fullWidth
              value="101"
              // required
            />
            <div>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
              onClick={handleClick}
            >
              Proceed
            </Button>
            <InnerText >
              {" "}
              I cant remember my password.<Link href="#">{" "}Reset password</Link>
            </InnerText>
            </div>
          </Paper>
        </Grid>
      </Right>
      <hr className="vline" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;
  .vline {
    position: fixed;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 50%;
    /* bottom:0;  */
    margin: 0;
    border: none;
    border-right: 0.5px solid #c1c7d0;
    z-index: 10;
    height: 70%;
  }
`;

const Left = styled.section`
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  left: 0;
  display: flex;
  flex-direction: column;
  .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .text {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
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
  padding-top: 7rem;
  .other {
    width: 80%;
    max-width: 80%;
    height: 100%;
    /* padding-top: 7rem; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: right;
  }
`;

const P = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #959595;
`;

const Welcome = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 45px;
  color: #1b365d;
  text-align: left;
`;
const Subtext = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 1px;
  color: #172b4d;
  text-align: left;
`;
const InnerText = styled.span`
  font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
color: #6B778C;
`

export default Login;
