import axios from 'axios'

const url = 'https://api.the-odds-api.com/v3/odds/?sport=baseball_mlb&region=us&apiKey=460ffe30273e29401411c460e9ba6d62'
export const ApiData = async () => {
    try{
        const oddsData = await axios.get(url)
        console.log(oddsData) 
        return oddsData.data
    } catch (error){
        console.log(error)
    }  
}

