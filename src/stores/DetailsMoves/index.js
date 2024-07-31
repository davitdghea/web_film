import  { createContext, useEffect, useState } from 'react'
import axios from 'axios'


export const callDetailsMoves = createContext()
const DetailsMoves = ({ idFilm, callChar }) => {
   
    const [detail,setDetail] = useState([])
    const ApiDetail = async () =>{
try{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${idFilm}/videos`,{
        params :{
            language: 'en-US'
        },
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDQyMTEyNC43MDEwOTUsInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i7dn_Ytdv55IaSclbifUAYz2jIRIxQZDDCN0Yxc2gPY`
        }
    })
    setDetail( res.data);
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
