import {React,useEffect,useState }from 'react'
import axios from "axios";

export default function Friends() {
    const [friends,setFriends]=useState([]);

    const fetchFriendsList=()=>{}

    useEffect(()=>fetchFriendsList)
  return (
    <div>Friends</div>
  )
}
