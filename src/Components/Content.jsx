import React,{useState,useEffect} from 'react';
import List from './List';

const Content = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // const [note, setNote] = useState({
    //     title:"",
    //     content:""
    // });
    const [notes, setNotes] = useState([]);

    function handleTitle(event){
        setTitle(event.target.value);
    }

    function handleContent(event){
        setContent(event.target.value);
    }

    // function handleNote(){
    //     setNote({title:title,content:content});
    // }

    function handleClick(){

        const note = {title,content}

        fetch("http://localhost:8080/note",{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(note)
        }).then(()=>{
            console.log("new note added")
        })


        setNotes(pre =>{
            return([...pre,{title,content}])
        })
        setTitle("")
        setContent("")
    }

    function deleteNote(id){
        setNotes((pre) => {
            return pre.filter((note,index)=>{
                return index !== id
            })
        })
    }

    useEffect(()=>{
        fetch('http://localhost:8080/notes')
        .then((res)=>res.json())
        .then((result)=>{
            setNotes(result);
        })
    },[])

  return (
    <div>
    <div className="container mt-5 content">
        <div className='row'>
            <input type="text" onChange={handleTitle} name="title" placeholder='Title....' value={title}></input>
        </div>
        <div className='row'>
            <textarea rows="6" onChange={handleContent} placeholder='Make a note....' value={content}></textarea>
        </div>
    </div>
    <div className='button'>
        <button className='btn btn-success' onClick={handleClick}>Add</button> 
    </div>
    <div className="container mt-5">
        <div className='row'>
            {notes.map((note,index)=>{return <List item={note} id={index} onChecked={deleteNote}></List>})}
        </div>
    </div>
    </div>
  )
}
export default Content;