import styled from "styled-components";
import "../App.css";
import LockIcon from '@material-ui/icons/Lock';
import { useState } from "react";


const Cards=(props)=>{

    const[isHover,setHover]=useState(true);

    function handleOver(){
        setHover(!isHover);
    }

    return(
        <Card className={props.locked ? "locked": null}>
            <Content>
                {props.locked ? 
                <LockedArea className="lock-icon">
                    <LockIcon/>
                </LockedArea>: null}


                <LockedText className="hide">
                    <p>Includued with <br/>Brilliant Premium</p>
                </LockedText>
                
                <Img>
                    <img src={props.img} alt="" />
                </Img>
                <MetaData>
                    <h4>{props.cardTitle}</h4>
                    <p>{props.cardDetails}</p>
                </MetaData>
                <Progress></Progress>
            </Content>
        </Card>
    )
};


const Card=styled.div`
    display: flex;
    flex-flow: row;
    margin-right: 30px;
    margin-bottom: 10px;    
    max-width: 328px;
    ${'' /* display: grid;
    grid-template-columns: repeat(3, 1fr); */}
    z-index:0;

    &:hover{
        box-shadow: 0 0 7px rgba(33,33,33,.2);
    }
`;


const Img=styled.div``;

const MetaData=styled.div`
    h4{
        margin-bottom: 4px;
        font-size: 18px;
        font-weight: normal;
        line-height: 24px;
        color: #000000;
    }

    p{
        font-size: 14px;
        line-height: 19px;
        color: #000000;
        opacity: 0.5;
    }
`;

const Progress=styled.div`
    flex: none;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 4px;
    background: rgba(0, 0, 0, 0.06);
`;


const Locked=styled.div`
    backgroung-color: black;
    opacity: 0.5;
    max-width: 328px;
    height: 328px;
`;


const LockedArea=styled.div`
    color: #ffff;
    position: absolute;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index:1;
    left: 45%;
    top:25%;

    &:hover{
        display: none;
    }
`;

const LockedText=styled.div`
    color: #ffff;    
    position: absolute;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index:1;
    left: 32%;
    top:20%;
    ${'' /* display: hidden; */}

    ${'' /* &:hover{
        display: default;
    } */}
`;

const Content=styled.div`
    padding: 24px;
    position: relative;

    ${'' /* &:hover ${LockedText}{
        display: hidden;
    } */}
`;


export default Cards;