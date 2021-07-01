import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const PuzzleRiddles=(props)=>{
    return(
        <Module>
            <Intro>
                <Chapter>3</Chapter>
                <Title>
                    <h1>Puzzles and Riddles</h1>
                    <p>Even trickier puzzles and the tools you need to solve them.</p>
                </Title>
            </Intro>
            <Slider>
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Werewolves-Jd2lIq.png?width=280"}
                    cardTitle={"Werewolves"}
                    cardDetails={"Who's a werewolf?"}
                    locked="true"
                />
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Logical_Language-6tn9sJ.png?width=280"}
                    cardTitle={"Logical Language"}
                    cardDetails={"Explore the logical use of the words \"and\", \"or\", and \"not\"."}
                    locked="true"
                />
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/If_A_then_B.-vl28Kf.png?width=280"}
                    cardTitle={"If A, then B."}
                    cardDetails={"If you do this quiz, you will learn about sentences like this one."}
                    locked="true"
                />
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Elimination_Grids-bpMmxt.png?width=280"}
                    cardTitle={"Elimination Grids"}
                    cardDetails={"Solve classic logic elimination puzzles."}
                    locked="true"
                />
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Jigsaw_Map-qFUgaS.png?width=280"}
                    cardTitle={"Jigsaw Map"}
                    cardDetails={"Where do the pieces go on the map?"}
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



export default PuzzleRiddles;