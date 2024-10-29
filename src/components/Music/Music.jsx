import cindrella from '../../assets/Audio/BGM.mp3'
import useSound from 'use-sound'
import React from 'react'
import HeadsetIcon from '@mui/icons-material/Headset';
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff';
import  IconButton  from "@mui/material/IconButton";
import {useState , useEffect} from 'react'
import "./Music.css"


export default function Music(){

    const [music , setMusic] = useState(false);
    const [play , {stop , pause} ] = useSound(cindrella);
    React.useEffect(()=>music ? play() : pause(),[music,play,pause])
    function togglemusic(){
        setMusic(p=>!p)
    }
    return (
        <div className="music-button" >
        <IconButton onClick={togglemusic} sx={{marginRight:"auto"}}>{music ? <HeadsetIcon sx={{color:"white" , fontSize:"25px"}}/> :<HeadsetOffIcon sx={{color:"white" , fontSize:"27px"}} /> }</IconButton>
        </div>

    )
}