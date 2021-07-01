import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Competetive=(props)=>{
    return(
        <Module>
            <Intro>
                <Chapter>5</Chapter>
                <Title>
                    <h1>Competitive Games</h1>
                    <p>What will your opponent do? Logic it out!</p>
                </Title>
            </Intro>
            <Slider>
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Poisoned_Chocolate-2hzzdS.png?width=280"}
                    cardTitle={"Poisoned Chocolate"}
                    cardDetails={"Don't take the last chocolate!"}
                    locked="true"
                />
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Luk_Tsut_Ki-YkvdnC.png?width=280"}
                    cardTitle={"Luk Tsut K'i"}
                    cardDetails={"Find the complete solution to a classic game."}
                    locked="true"
                />
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Puppies_and_Kittens-MyD5W8.png?width=280"}
                    cardTitle={"Puppies and Kittens"}
                    cardDetails={"Solve a fuzzier, livelier variant of the poisoned chocolate game."}
                    locked="true"
                />
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Poisoned_Chocolate_II-jCwMSc.png?width=280"}
                    cardTitle={"Poisoned Chocolate II"}
                    cardDetails={"What happens when the chocolate comes in rectangles?"}
                    locked="true"
                />
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Game_Search_Algorithms-8CTK46.png?width=280"}
                    cardTitle={"Game Search Algorithms"}
                    cardDetails={"Learn how simple AI systems approach game strategy."}
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



export default Competetive;