import { data } from "autoprefixer"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export default function UserList() {

    const [users, setUsers ] = useState(null)

    useEffect (() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=> setUsers(res,data))
        .catch ((err)=> console.error('Erro ao buscar usuários', err))
        
    },[])
    return(
        <div className="">
            {
                users && users.map((user, id)=> {
                    return <div className="" key= {id}>
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                })
            }

        </div>
    )
}