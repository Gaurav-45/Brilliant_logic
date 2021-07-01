import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const RationalDetective=(props)=>{

    const[collapse,setCollapse]=useState(true);

    function handleClick(){
        setCollapse(!collapse);
    }

    return(
        <Module>
            <Intro>
                <Chapter>2</Chapter>
                <Title>
                    <h1>The Rational Detective</h1>
                    <p>Eliminate the impossible and uncover the truth!</p>
                </Title>
            </Intro>
            <Slider className={collapse ? "collapsed":"no-collapsed"}>
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Riddles_of_Order-uVO6uP.png?width=280"}
                    cardTitle={"Riddles of Order"}
                    cardDetails={"What order do these racers finish in?"}
                    locked="true"
                />
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Crafty_Counting-MyeNyB.png?width=280"}
                    cardTitle={"Crafty Counting"}
                    cardDetails={"Learn strategies for counting that go far beyond just counting."}
                    locked="true"
                />
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Mystery_Containers-jce39Z.png?width=280"}
                    cardTitle={"Mystery Containers"}
                    cardDetails={"What's in each of these mystery boxes?"}
                    locked="true"
                />
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Futoshiki-bNVmO9.png?width=280"}
                    cardTitle={"Futoshiki"}
                    cardDetails={"Arrange the numbers to match the inequalities."}
                    locked="true"
                />
                    <Card
                        img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Shuffles-GgH8Ox.png?width=280"}
                        cardTitle={"Shuffles"}
                        cardDetails={"Where did everything get shuffled to?"}
                        locked="true"
                    />
                    <Card
                        img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/False_Information-WRykiD.png?width=280"}
                        cardTitle={"False Information"}
                        cardDetails={"Solve problems where the people giving you hints might be lying."}
                        locked="true"
                    />
            </Slider>
        </Module>
    )
}
const Chapter=styled.div`
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 7px;
    background: #E4E8FF;
    text-align: center;
    font-size: 20px;
    margin-right: 30px;
    color: rgb(117, 139, 255);
`;

const Module=styled.div`
    max-width: 1250px;
    width: 100%;
    margin-left: 11%;
    margin-right: 11%;
    margin-top: 70px;
    margin-bottom: 70px;
    padding-left: 2px;
`;

const Slider=styled.div`
    ${'' /* display: flex;
    flex-flow: row;
    min-width: 500px; */}
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
`;

const Intro=styled.div`
    display: flex;
    flex-flow: row;
`;
const Title=styled.div`
    h1{
        font-size: 24px;
        font-weight: 600;
        line-height: 30px;
        margin-bottom: 4px;
        margin-top:0;
    };

    p{
        font-size: 16px;
        line-height: 22px;
        color: rgba(0, 0, 0, 0.5);
        margin-top:0;
    }

`;
export default RationalDetective;