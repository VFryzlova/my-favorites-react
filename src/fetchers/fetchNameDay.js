export const fetchNameDay = async () => {
    const res = await fetch('https://svatky.adresa.info/json')
    return res.json()
}