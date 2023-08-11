import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: hsl(218, 23%, 16%);

    div{
        width: 470px;
        height: 260px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px;
        border-radius: 5px;
        background-color: hsl(217, 19%, 24%);

        @media(max-width: 414px){
            width: 350px;
        }
            
        @media(max-width: 320px){
            width: 290px;
        }
    }
` 
export const Id = styled.p`
    color: hsl(150, 100%, 66%);
    font-size: 11px;
    font-weight: 600;
    padding: 15px 0;
    letter-spacing: 4px;

    @media(max-width: 320px){
        font-size: 9px;
    }
`

export const Advice = styled.p`
    font-size: 21px;
    text-align: center;
    font-weight: 800;
    color: hsl(193, 38%, 86%);
    padding: 15px 8px;

    @media(max-width: 320px){
        font-size: 17px;
    }
`

export const Divider = styled.img`
    width: 400px;
    padding: 25px 0;

    @media(max-width: 414px){
        width: 300px;
    }
    
    @media(max-width: 320px){
        width: 210px;
    } 
`

export const Button = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(150, 100%, 66%);
    transform: translateY(-45%);
`
