import styled from "styled-components";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {useState} from "react";

const Logic=(props)=>{

    const [isReadMore,setReadMore]=useState(false);

    function handleClick(){
        setReadMore(true);
    };
    return(
        <Container>
            <Back>
                <p><ArrowBackIosIcon style={{ fontSize:"13px" }}></ArrowBackIosIcon> Back to all courses</p>
            </Back>
            <LogicSection>
                <Content>
                    <h1>Logic</h1>
                    <h2>Stretch your analytic muscles with knights, knaves, logic gates, and more!</h2>
                    <p>The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.</p>
                    <p>You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges!  { !isReadMore ? <a onClick={handleClick}  style={{textDecoration: "underline"}}>Read more</a>: null}</p> 

                    <ReadMoreCont style={ isReadMore ? { display:'block'} : {display : 'none'} } >
                        <p>By the end of this course, you'll be able to spot logical fallacies, navigate some strategic game theory, understand machine logic, and use the symbolic languages of logic to understand fun riddles.</p>
                        
                        <h3 style={{marginBottom: 0}}>Topics covered</h3>
                        <Topics>
                            
                            <Options>
                                <ul>
                                    <li>Binary</li>
                                    <li>Truth Tables</li>
                                    <li>Logic Gates</li>
                                    <li>Venn and Euler Diagrams</li>
                                    <li>Propositional Logic</li>
                                    <li>The Square of Opposition</li>
                                </ul>
                            </Options>
                            <Options>
                                <ul>
                                    <li>De Morgan's Laws</li>
                                    <li>Inclusive and Exclusive OR</li>
                                    <li>Combinatorics</li>
                                    <li>Knight and Knave Puzzles</li>
                                    <li>Combinatorial Game Algorithms</li>
                                </ul>
                            </Options>
                        </Topics>
                    </ReadMoreCont>
                    <a href="">View prerequisites and next steps</a>
                </Content>
                <Card>
                    <StartCourse>
                        <Img>
                            <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254" alt="" />
                        </Img>
                        <Detail>
                            <Quizzes>
                                <h2>37</h2>
                                <h3>Interactive quizzes</h3>
                            </Quizzes>
                            <Concepts>
                                <h2>265+</h2>
                                <h3>Concepts and exercises</h3>
                            </Concepts>
                        </Detail>
                        <Button>
                            <span>Start Course</span>
                        </Button>
                    </StartCourse>
                </Card>
            </LogicSection>
        </Container> 
    )
}

const Container=styled.div`
    margin-top:60px;
    background-color: #f8f9f8;
    z-index: -1;
    padding-top: 35px;
    padding-bottom: 50px;

    a{
        &:hover{
            color: black;
            cursor: pointer;
        }
    }
`;

const Content=styled.div`
    max-width: 630px;
    margin-right: 50px;
    h1{
        font-size: 60px;
        font-weight: 600;
        line-height: 68px;
        margin-bottom: 10px;
        margin-top: 0px;
    }

    h2{
        font-size: 24px;
        font-weight: 400;
        opacity: 0.8;
        margin-bottom: 30px;
    }
    p{
        color: rgba(0,0,0,0.5);
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 34px;
    }

    a{
        color:rgba(0,0,0,0.5);
        font-size: 16px;
        line-height: 24px;
    }
`;

const Back=styled.div`
    display: flex; 
    font-size: 13px;
    margin-left: 11%;
    color: rgba(0,0,0,0.5);
    margin-bottom: 30px;
    p{
        font-size: 16px;
    };

    &:hover{
        color: black;
    };
`;

const StartCourse=styled.div`
    padding: 44px 40px;
    display: flex;
    flex-flow: column; 
    max-width: 390px;
    width: 100%;
    background-color: #ffff;
    border: 2px solid rgba(0,0,0,0.2);
`;

const LogicSection=styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 11%;
    margin-right: auto;
    ${'' /* justify-content: center; */}
    max-width: 1200px;
    width: 100%;

`;

const Img=styled.div`
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    img{
        display: inline-block;
        width: 100%; 
    }
`;

const Detail=styled.div`
    display: flex;
    flex-flow: row;
`;

const Quizzes=styled.div`
    margin-bottom: 10px;
    h2{
        font-size: 30px;
        line-height: 24px;
    }

    h3{
        font-size: 16px;
        font-weight: normal;
        line-height: 20px;
        opacity: 0.5;
    }
`;

const Concepts=styled(Quizzes)`
    margin-left: auto;
    margin-right:0;
`;

const Button=styled.button`
    background-color: rgb(0,0,0);
    color: #ffff;
    text-align: center;
    border-radius: 4px;
    justify-content: center;
    width: 100%;
    height: 48px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        background-color: rgba(0,0,0,0.8); 
    }
`;

const Card=styled.div`
    width: 50%;
`;

const Topics=styled.div`
    color: black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 30px;
`;

const Options=styled.div`
    font-size: 18px;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.5);
    ul{
        list-style-type: none;
        padding:0;
    }
    
`;

const ReadMoreCont=styled.div`
    
`;

export default Logic;

