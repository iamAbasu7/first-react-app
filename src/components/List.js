import React from 'react'

import {v4 as uuidv4} from 'uuid'

const todos = [
    {
        id:uuidv4(),
        title:"todo1",
        desc:"todo1 desc1"
    },
    {
        id:uuidv4(),
        title:"todo2",
        desc:"todo2 desc2"
    },
    {
        id:uuidv4(),
        title:"todo3",
        desc:"todo3 desc3"
    },
]



export default function List() {
    console.log(uuidv4());
    return (
        <div>
            {todos.map((todo)=>{
                const {id,title,desc} = todo;
                return (
                    <div key={id}>
                        <h4>{id}</h4>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                )
            })}
        </div>
    )
}
