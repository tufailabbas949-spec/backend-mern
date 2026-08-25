import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";


const Feed = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        const data_fetch = async () => {
            try {
                const res = await axios.get("http://localhost:3030/fetch-info")
                console.log(res.data)
                setInfo(res.data.datauser)
                console.log(info)
            } catch (err) {
                console.error(err)
            }
        }
        data_fetch()
    }, [])

    return (
        <div className='w-full h-full  flex justify-center flex-col gap-3 text-center items-centerp-4 '>
            {

                info.map((data) => (
                    <div className='bg-red-300 h-full w-100' key={data._id}>
                        <h1>Name: {data.name}</h1>
                        <h1>Password: {data.password}</h1>
                    </div>
                ))
            }

        </div>
    )
}

export default Feed