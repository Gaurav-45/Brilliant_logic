import styled from "styled-components";
import Card from "./Card";

const Introduction=(props)=>{
    return(
        <Module>
            <Intro>
                <Chapter>1</Chapter>
                <Title>
                    <h1>Introduction</h1>
                    <p>Put your logic to the test with these warmups!</p>
                </Title>
            </Intro>
            <Slider>
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280"}
                    cardTitle={"Warmup Puzzle"}
                    cardDetails={"Get started with some logic warmups."}
                />
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth-Seeking-c83EPA.png?width=280"}
                    cardTitle={"Truth-Seeking"}
                    cardDetails={"Who or what is telling the truth?"}
                />
                <Card
                    img={"https://ds055uzetaobb.cloudfront.net/brioche/chapter/Machine_Logic_and_Strategy-jrTuIK-2FIeRk.png?width=280"}
                    cardTitle={"Strategic Deductions"}
                    cardDetails={"Stretch the information you're given as far as it can go!"}
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
    ${'' /* width: 1200px; */}
    margin-left: 11%;
    margin-right: 11%;
    margin-top: 70px;
    margin-bottom: 70px;
`;

const Slider=styled.div`
    display: flex;
    flex-flow: row;
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



export default Introduction;