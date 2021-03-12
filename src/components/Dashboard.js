import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import discovery from "../images/discovery.png";
import equity from "../images/equities.png";
import retirement from "../images/retirement.png";
import treasury from "../images/treasury.png";
import orange from "../images/orangeicon.png";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useHistory } from "react-router-dom";
import axios from "axios";

function shuffle(arra1) {
  var ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    margin: 10,
  },
  button: {
    padding: 12,
    background: "#1B365D",
    color: "#fff",
    borderRadius: 3,
    width: "100%",
    textAlign: "center",
  },
  image: {
    width: "100%",
    objectFit: "cover",
    height: "100%",
  },
});

const Dashboard = () => {
  var name = "William";
  const classes = useStyles();
  const history = useHistory();

  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleClick = () => {
    setLoading(true);
    axios
      .post(
        "https://investment-app7.herokuapp.com/api/user_risk_profile",
        {
          assets: list,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response.data.profile);
        setLoading(false);
        history.push({
          pathname: "/profile",
          state: {
            profile: response.data.profile,
          },
        });
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await axios(
        `https://investment-app7.herokuapp.com/api/temp_user`
      );
      var random = Math.floor(Math.random() * 6) + 1;
      setData(result.data.user);
      var arr = shuffle(result.data.user);
      var newlist = arr.filter((item, idx) => idx < random);
      setList(newlist);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const mountArray = shuffle(data);
    var newlist = mountArray.filter((item, idx) => idx < 6);
    setList(newlist);
  }, []);

  function handleShuffle() {
    const changes = shuffle([...data]);
    var random = Math.floor(Math.random() * 6) + 1;
    var newlist = changes.filter((item, idx) => idx < random);
    setList(newlist);
  }

  return (
    <Container>
      {loading ? (
        <div className="loading">
          <h2>Loading....</h2>
        </div>
      ) : (
        <Wrapper>
          <TextWrapper>
            <H2>Hello {name}, all subsidairies are added Successfully.</H2>
            <Span>
              Here are your investment solutions from the subsidairies you added
            </Span>
          </TextWrapper>
          <CardWrapper>
            {list
              ? list.map((item, index) => {
                  return (
                    <Card key={item.asset + index} className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          className={classes.image}
                          alt="Contemplative Reptile"
                          // height="140"
                          image={
                            item.asset === "Ethical Fund"
                              ? retirement
                              : item.asset === "Discovery Fund"
                              ? discovery
                              : item.asset === "Euro-bond Fund"
                              ? equity
                              : treasury
                          }
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                            }}
                          >
                            <img src={orange} alt="logo" />
                            <div style={{ marginLeft: 20 }}>
                              <AssetName>{item.asset} </AssetName>
                              <TagContainer>
                                <Tag
                                  style={{
                                    color: "#36B37E",
                                    alignItems: "center",
                                    alignContent: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <ArrowDropUpIcon
                                    style={{ padding: 0, margin: 0 }}
                                    fontSize="8px"
                                  />{" "}
                                  27%
                                </Tag>
                                <Tag
                                  style={{
                                    color: "#3077FF",
                                    background: "#EAF1FF",
                                    marginLeft: 7,
                                  }}
                                >
                                  low risk
                                </Tag>
                              </TagContainer>
                            </div>
                          </div>
                          <br />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              }}
                            >
                              <ManagementText>1.50%</ManagementText>
                              <ManagementFeeText>
                                Management Fee
                              </ManagementFeeText>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              }}
                            >
                              <Amount>&#8358;{item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Amount>
                              <ManagementFeeText>
                                Amount Invested
                              </ManagementFeeText>
                            </div>
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  );
                })
              : null}
          </CardWrapper>

        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
        <ButtonWrapper>
            <Button
              onClick={handleClick}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Continue
            </Button>
          </ButtonWrapper>

          <ButtonWrapper>
            <Button
              onClick={handleShuffle}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Shuffle
            </Button>
          </ButtonWrapper>
        </div>
        </Wrapper>
      )}
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  background: #e5e5e5;
  height: 100vh;
  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;
const Wrapper = styled.section`
  width: 70%;
  margin: 0 auto;
  padding: 5rem 0rem;
`;

const CardWrapper = styled.section`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1rem;
`;
const H2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #1b365d;
`;
const Span = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 1px;
  color: #172b4d;
`;
const TextWrapper = styled.div`
  align-self: center;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  align-self: center;
  text-align: center;
  margin-top: 2rem;
`;
const Tag = styled.div`
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  background: rgba(54, 179, 126, 0.101836);
  padding: 1.76258px 8px;
  text-align: center;
  display: block;
  font-weight: 400;
  height: 12.34px;
  border-radius: 1.76258px;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  /* line-height: 8px; */
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  text-transform: uppercase;
  z-index: 10;
  @media screen and (max-width: 768px) {
    font-size: 8px;
    padding: 0px 7px;
  }
`;
const AssetName = styled.span`
  color: #1b365d;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 16px;
`;
const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;
const ManagementText = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 19px;
  color: #172b4d;
`;

const ManagementFeeText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 11px;
  color: #6b778c;
  margin-top: 10px;
`;
const Amount = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 19px;
  color: #36b37e;
  text-align: right;
`;

export default Dashboard;
