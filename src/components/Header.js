import styled from "styled-components";

const Header=(props)=>{
    return(
        <Navbar>
            <Nav>
                <Logo>Brilliant</Logo>
                <NavMenu>
                    <a>
                        Today
                    </a>
                    <a >
                        Courses
                    </a>
                </NavMenu>
                <LogIn>
                    <span>Log in</span>
                </LogIn>
                <SignUp>
                    <span>Sign up</span>
                </SignUp>
            </Nav>
        </Navbar>
    )
}

const Navbar=styled.header`
    height: 60px;
    position: fixed;
    display: flex;
    justify-content: center;
    top:0;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
    z-index: 1;
    background-color: #ffff;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const Nav=styled.nav`
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items:center;
    min-height: 50px;
    width: 100%;
    z-index: 3;
    max-width: 1200px;
    margin-top: 5px;
    ${'' /* background-color: #ffff; */}
`;

const NavMenu=styled.nav`
    align-items: center;
    disply: flex;
    flex-flow: row nowrap;
    height:100%;
    justify-content:flex-end;
    margin:0px;
    position: relative;
    margin-right:auto;
    font-size: 14px;
    text-transform:uppercase;

    a{ 
        align-items: center;
        padding: 0px 12px;
        margin-top: 9px;
        margin-right: 32px;
        line-height: 24px;
        letter-spacing: 4px;
        font-size: 14px;
        cursor: pointer;
        color: #5D7E8E;


        &:hover{
            color: black;
        };

        &:active{
            color: black;
            font-weight: bold;
        }

    }

    
`;


const Logo=styled.a`
    text-transform:uppercase;
    padding:0;
    max-height: 42px;
    font-size: 35px;
    display: inline-block;
    margin-right: 50px;
    overflow: hidden;
    cursor: pointer;
    z-index:2;
`;


const LogIn=styled.a`
    position: relative;  
    display: inline-block;
    color: #039BE5;
    font-size: 15px;
    text-align: center;
    border: 1px solid #039BE5;
    border-radius: 4px;
    padding: 6px 16px;
    width: 130px;
    font-weight: 540;
    margin-right: 20px;
    font-family: "Soleil", Arial, sans-serif;
    &:hover{
        box-shadow: 0 0 5px rgba(0,0,0,.2);
    }
`;

const SignUp=styled.a`
    position: relative;  
    display: inline-block;
    color: white;
    background-color: #039BE5;
    font-size: 15px;
    text-align: center;
    border: 1px solid #039BE5;
    border-radius: 4px;
    padding: 6px 16px;
    width: 130px;
    font-weight: 500;
    margin-right: 2.5%;

    &:hover{
        box-shadow: 0 0 5px rgba(0,0,0,.2);
        background-color: #3781E1;
    }
`;
export default Header;


