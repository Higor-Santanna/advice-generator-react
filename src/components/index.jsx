import { useState, useEffect } from "react"
import { Main, Id, Advice, Divider, Button } from "./style"
import Dividers from "../assets/patternDividerDesktop.svg"
import ImgButton from "../assets/iconDice.svg"

const base = 'https://api.adviceslip.com/advice'

const Home = () => {

    const [advices, setAdvices] = useState("load...")

    const getAdvices = async () => {
        const generator = await fetch(base)
        const results = await generator.json()
        const advice = await results.slip

        setAdvices(advice)
    }

    // const getAdvices = async () => {
    //     setAdvices(getAdvice)
    // }

    useEffect(() => {
        getAdvices()
    }, [])
    return (
        <>
            <Main>
                <div>
                    <Id>ADVICE #{advices.id}</Id>
                    <Advice>{advices.advice}</Advice>
                    <Divider src={Dividers} alt="divider"></Divider>
                </div>
                <Button onClick={getAdvices}>
                    <img src={ImgButton} alt="" />
                </Button>
            </Main>
        </>
    )
}

export { Home }