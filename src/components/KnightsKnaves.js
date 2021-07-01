import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const KnightsKnaves=(props)=>{
    return(
        <Module>
            <Intro>
                <Chapter>7</Chapter>
                <Title>
                    <h1>Advanced Knights and Knaves</h1>
                    <p>Uncover liars on this island of logic!</p>
                </Title>
            </Intro>
            <Slider>
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Indirection-PZKKoF.png?width=280"}
                    cardTitle={"Indirection"}
                    cardDetails={"Can you trick a liar into telling you the truth?"}
                    locked="true"
                />
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Knights_and_Knaves_En_Masse-7DRnSV.png?width=280"}
                    cardTitle={"Knights and Knaves En Masse"}
                    cardDetails={"What happens when you try to do logic at a big island party?"}
                    locked="true"
                />
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Jokers-wSQW6c.png?width=280"}
                    cardTitle={"Jokers"}
                    cardDetails={"Solve tricky variants of knights and knaves puzzles where some residents can behave like either."}
                    locked="true"
                />
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Oher_Variations-PnIvJz.png?width=280"}
                    cardTitle={"Other Variations"}
                    cardDetails={"Twist your mind around these unusual variants."}
                    locked="true"
                />
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Humans_and_Vampires-zhcWOo.png?width=280"}
                    cardTitle={"Humans and Vampires"}
                    cardDetails={"Now there are four types of island resident: can you still work out the truth?"}
                    locked="true"
                />
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Challenges-o42cgt.png?width=280"}
                    cardTitle={"Challenges"}
                    cardDetails={"Challenge yourself with our hardest selection of logic puzzles."}
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



export default KnightsKnaves;