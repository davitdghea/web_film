import  { createContext, useEffect } from 'react'
import axios from 'axios'
 

export const callDetailsMoves = createContext()
const sessionId = localStorage.getItem('sessionId')
const DetailsMoves = ({  idFilm, callChar }) => {
    const ApiDetail = async () =>{
try{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${idFilm}/videos`,{
      
         
            params: {
                api_key: process.env.REACT_APP_API_TOKEN,
                session_id: sessionId
            }
        
    })
    
    if (callChar){
        callChar(res.data.results);
    }
} catch (error){
    console.error('Error fetching data: ', error);
}
    }
   
    useEffect(()=>{
        ApiDetail()
    }, [idFilm]) 
     
}


export default DetailsMoves
