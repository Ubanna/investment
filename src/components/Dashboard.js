import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components"
import discovery from "../images/discovery.png"
import equity from "../images/equities.png"
import retirement from "../images/retirement.png"
import treasury from "../images/treasury.png"
import orange from "../images/orangeicon.png"
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

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
      width: "30%",
      textAlign: "center",
    },
    image: {
      width: '100%',
      objectFit: 'cover',
      height: "100%",
    }
  });

function Dashboard() {
  var name = "William";
  const classes = useStyles();

  return (
    <Container>
      <Wrapper>
      <TextWrapper>
        <H2>Hello {name}, all subsidairies are added Successfully.</H2>
        <Span>
          Here are your investment solutions from the subsidairies you added
        </Span>
      </TextWrapper>

      <CardWrapper>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.image}
            alt="Contemplative Reptile"
            // height="140"
            image={treasury}
            title="Contemplative Reptile"
          />
          <CardContent>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-start'}} >
            <img src={orange} alt="logo" />
              <div style={{ marginLeft: 20 }}>
                <AssetName>Equities</AssetName>
                <TagContainer>
                <Tag style={{ color: "#36B37E", alignItems: "center", alignContent: "center", justifyContent: "center" }}><ArrowDropUpIcon style={{ padding: 0, margin: 0 }} fontSize="8px" /> 27%</Tag>
                <Tag style={{ color: "#3077FF", background: "#EAF1FF", marginLeft: 7}} >low risk</Tag> 
                </TagContainer>
              </div>

            </div>
            <br />
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>

              <div style={{ display: "flex", flexDirection: 'column', justifyContent: "center" }} >
                <ManagementText>1.50%</ManagementText>
                <ManagementFeeText>Management Fee</ManagementFeeText>
              </div>

              <div style={{ display: "flex", flexDirection: 'column', justifyContent: "center" }}>
                <Amount>&#8358;50,000</Amount>
                <ManagementFeeText>Minimum Investment</ManagementFeeText>
              </div>

            </div>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={discovery}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={retirement}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={equity}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </CardWrapper>
      
      <ButtonWrapper>
      <Button 
      variant="contained" 
      color="primary" 
      className={classes.button}>
        Continue
      </Button>
      </ButtonWrapper>
    </Wrapper>
    </Container>
  );
}

const Container = styled.section`
    width: 100%;
    background: #E5E5E5;
    height: 100vh;
`
const Wrapper = styled.section`
    width: 70%;
    margin: 0 auto;
    padding: 5rem 0rem;
`

const CardWrapper = styled.section`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1rem;
`
const H2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #1B365D;
`
const Span = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 1px;
  color: #172B4D;
`
const TextWrapper = styled.div`
  align-self: center;
  text-align: center;
`

const ButtonWrapper = styled.div`
  align-self: center;
  text-align: center;
  margin-top: 2rem;
`
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
`
const AssetName = styled.span`
  color: #1B365D;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 16px;
`
const TagContainer = styled.div`
  display: flex;
 flex-direction: row;
 justify-content: space-between;
 margin-top: 5px;
`
const ManagementText = styled.span`
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 19px;
color: #172B4D;
`

const ManagementFeeText = styled.span`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 11px;
color: #6B778C;
margin-top: 10px;
`
const Amount = styled.span`
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 19px;
color: #36B37E;
text-align: right;
`

export default Dashboard;
