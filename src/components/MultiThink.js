import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const MultiThink=(props)=>{
    return(
        <Module>
            <Intro>
                <Chapter>4</Chapter>
                <Title>
                    <h1>Multi-Level Thinking</h1>
                    <p>If you know that I know that you know... what then?</p>
                </Title>
            </Intro>
            <Slider>
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Perfect_Information-mqTyGs.png?width=280"}
                    cardTitle={"Perfect Information"}
                    cardDetails={"If everyone follows the same logic, can you find out what they know?"}
                    locked="true"
                />
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors-5jioSi.png?width=280"}
                    cardTitle={"Hat Colors"}
                    cardDetails={"Can you figure out who can figure out the color of their hat?"}
                    locked="true"
                />
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors_with_More_People-96NuCs.png?width=280"}
                    cardTitle={"Hat Colors with More People"}
                    cardDetails={"What happens to hat puzzles when there are more hats and more people?"}
                    locked="true"
                />
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Red-Eyed_Dragons-v4T9FK.png?width=280"}
                    cardTitle={"Red-Eyed Dragons"}
                    cardDetails={"Exactly how much can you learn from no one knowing anything?"}
                    locked="true"
                />
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Logical_Pirates-mMDacg.png?width=280"}
                    cardTitle={"Logical Pirates"}
                    cardDetails={"Beware! Every pirate is as logical, greedy, and cutthroat as every other pirate."}
                    locked="true"
                />
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors_with_More_People-96NuCs.png?width=280"}
                    cardTitle={"Hat Colors with More People"}
                    cardDetails={"What happens to hat puzzles when there are more hats and more people?"}
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



export default MultiThink;