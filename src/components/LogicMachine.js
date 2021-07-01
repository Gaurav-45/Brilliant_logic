import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const LogicMachine=(props)=>{
    return(
        <Module>
            <Intro>
                <Chapter>6</Chapter>
                <Title>
                    <h1>The Rational Detective</h1>
                    <p>Eliminate the impossible and uncover the truth!</p>
                </Title>
            </Intro>
            <Slider>
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth_Tables-fQehm6.png?width=280"}
                    cardTitle={"Truth Tables"}
                    cardDetails={"Diagram out the meanings of each logical operator."}
                    locked="true"
                />
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Basic_Logic_Gates-SuCIgu.png?width=280"}
                    cardTitle={"Basic Logic Gates"}
                    cardDetails={"How do AND, OR, and NOT gates work?"}
                    locked="true"
                />
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Combinations-wp6DqR.png?width=280"}
                    cardTitle={"Combinations"}
                    cardDetails={"Combine gates together to make complex circuits."}
                    locked="true"
                />
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Fredkin_Gates-B8FBqg.png?width=280"}
                    cardTitle={"Fredkin Gates"}
                    cardDetails={"Take a peek at a gate used in biological and quantum computing."}
                    locked="true"
                />
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Binary_Numbers_and_Addition-bJFOa8.png?width=280"}
                    cardTitle={"Binary Numbers and Addition"}
                    cardDetails={"How does computer arithmetic work?"}
                    locked="true"
                />
                <Card 
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Creating_a_Mechanical_Adder-yTzxMV.png?width=280"}
                    cardTitle={"Creating a Mechanical Adder"}
                    cardDetails={"Use what you've learned about logic gates to create a circuit that adds numbers."}
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



export default LogicMachine;