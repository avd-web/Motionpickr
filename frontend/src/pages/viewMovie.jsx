import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'


export default function ViewMovie() {
    const {id}=useParams();
    const [movie,setMovie]=useState({});
    useEffect();
  return (
    <div>V</div>
  )
}
