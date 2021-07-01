import { ContactsSharp } from "@material-ui/icons";
import styled from "styled-components";

const NextSteps=(props)=>{
    return(
        <Footer>
            <h5>Next Steps</h5>
            <Courses>
                <Math>
                    <Img>
                        <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png?width=92" alt="" />
                    </Img>
                    <MetaData>
                        <h4>Mathematical Fundamentals</h4>   
                        <p>The essential tools for mastering algebra, logic, and number theory!</p>
                    </MetaData>
                </Math>
                <ComputerSci>
                    <Img>
                        <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png?width=92" alt="" />
                    </Img>
                    <MetaData>
                        <h4>Computer Science Fundamentals</h4>   
                        <p>Wrap your mind around computational thinking, from everyday tasks to algorithms.</p>
                    </MetaData>
                </ComputerSci>
            </Courses>
        </Footer>
    )
}

const Footer=styled.div`
    justify-content: center;
    ${'' /* align-items: center; */}
    display: flex;
    flex-flow: column;
    margin-left: auto;
    margin-right: auto;
    width: 680px;
    h5{
        padding-bottom: 12px;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: normal;
        line-height: 17px;
        letter-spacing: 0.005em;
        text-transform: uppercase;
        border-bottom: 1px solid rgba(194, 196, 207, 0.4);
        color: rgba(0, 0, 0, 0.5);
    }
`;

const Courses=styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-flow: row;
    margin-bottom: 8%;
`;
const Math=styled.a`
    display: flex;
    flex-flow: row;
    position: relative;
    max-width: 325px;
    width: 100%;
    margin-right: 36px;
    letter-spacing: 0.005em;
    line-height:1.5px;
    cursor: pointer;
`;

const Img=styled.div`
    ${'' /* position: absolute; */}
    top: 4px;
    right: 4px;
    bottom: 4px;
    left: 4px;
    width: auto;
    height: auto;
    margin-right: 24px;
`;

const MetaData=styled.div`
    h4{
        margin-bottom: 4px;
        color: #1F1F1F;
        font-size: 20px;
        font-weight: 600;
        line-height: 26px;
        margin-top:0;   
    }
    p{
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.005em;
        color: #000000;
        opacity: 0.4;
    }
`;

const ComputerSci=styled(Math)`

`;

export default NextSteps;