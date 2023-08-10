const base = 'https://api.adviceslip.com/advice'

async function getAdvice(){
    const generator = await fetch(base)
    const results = await generator.json()
    const m = await results.slip
}

export { getAdvice }