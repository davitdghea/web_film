import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DetailsMoves = () => {
    const [detail,setDetail] = useState([])
    const ApiDetail = async () =>{
try{
    const res = await axios.get('https://api.themoviedb.org/3/movie/280180',{
        params :{
            language: 'en-US'
        },
        headers: {
            Authorization: `Bearer cb587e39dae15bd689288cb58e0d16e4`
        }
    })
    setDetail( res.data.results);
} catch (error){
    console.error('Error fetching data: ', error);
}
    }
    useEffect(()=>{
        ApiDetail(detail)
    },[])
    console.log()
  
}

export default DetailsMoves