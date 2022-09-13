import { useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../Assets/arrow-left.svg'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function NotePage({history}) {

    let [notes, setNotes] = useState([null])
    let params = useParams()
    // let note = notes.find(note => note.id ==`${params.id}`)
    
    useEffect(() =>{
      getNote()
    }, [params.id])

    let getNote = async() =>{
        if(params.id === 'new') return
        let response = await fetch(`https://json-server1131.herokuapp.com/notes/${params.id}`)
        let data = await response.json()
    
        setNotes(data)
      }