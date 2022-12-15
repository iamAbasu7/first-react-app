import React from 'react'
import Card from './components/Card'
import List from './components/List'
import Data from './data.json'

//nested list

const users = [
    {
        fullName:"Antar Bose",
        age:24,
        phones:[
            {home:"123456"},
            {office:"987654"},
        ]
    },
    {
        fullName:"Ram Das",
        age:21,
        phones:[
            {home:"764568"},
            {office:"234723"},
        ]
    }
]

export default function App() {
    // let items = [];
    // for(let i=0;i<Data.length;i++){
    //     items.push(<Card titleText={Data[i].title} descText={Data[i].desc}/>)
    // }
    
    return (
        
        <div>
            <h1 className="headingStyle">ToDo App</h1>
            {Data.map((item,index)=><Card key={index} titleText={item.title} descText={item.desc}/>)}

            <h1>Mapping with unique id</h1>
            <List/>
            <h1>Nested Mapping</h1>
            {users.map((user,index)=>(
                <div key={index}>
                    <h3>{user.fullName}</h3>
                    <h3>{user.age}</h3>
                    {
                        user.phones.map((phone,index)=>{
                            return(
                                <div key={index}>
                                    <p>{phone.home}</p>
                                    <p>{phone.office}</p>
                                </div>
                            )
                        })
                    }
                </div>
            ))}
        </div>
        
    );
}
