import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { postcodeValidation } from "../helpers/api"

function Home() {
    const navigate  = useNavigate()
    const [query, setQuery] = useState<string>('')
    const [error, setError] = useState<string>('')

    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        const search = query.trim().split(" ").join("")
        if(search.length < 1){
            setError('Enter a Postcode!')
        }else{
            const data =  await postcodeValidation(search)
            if(data.result){
                navigate(`/${search}`)
            }else{
                setError('Invalid Postcode!')
            }
        }
    }
    
    return <section className="flex items-center h-screen">
        <form onSubmit={submit} className="flex flex-col space-y-2 w-[760px] mx-auto px-4 ">
            <div className="flex flex-col space-y-2">
                <label htmlFor="search" className="text-gray-500 text-lg">Search for a postcode</label>
                <input name="postcode" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter a postcode" className="border border-gray-300 w-full p-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
            </div>
        <p className="capitalize text-red-500">{error}</p>
            <button type="submit" className="bg-blue-600 text-white p-4 sm:w-max rounded-md">Submit</button>
        </form>

    </section>
} 

export default Home