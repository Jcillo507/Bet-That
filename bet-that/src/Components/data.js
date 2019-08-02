import axios from 'axios'

const apiKey = process.env.REACT_APP_API_TOKEN
const url = `https://api.the-odds-api.com/v3/odds/?sport=baseball_mlb&region=us&apiKey=${apiKey}`
export const ApiData = async () => {
  try{
    const oddsData = await axios.get(url) 
    console.log(oddsData, "data8")
    return oddsData.data
  } catch (error){
    console.log(error)
  }  
}

