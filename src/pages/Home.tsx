function Home() {
    return <section className="flex items-center h-screen">
        <form className="flex flex-col space-y-2 w-[760px] mx-auto px-4 ">
            <div className="flex flex-col space-y-2">
                <label htmlFor="search" className="text-gray-500 text-lg">Search for a postcode</label>
                <input type="text" placeholder="Postcode Search" className="border border-gray-300 w-full p-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
            </div>
            <button type="submit" className="bg-blue-600 text-white p-4 w-max rounded-md">Submit</button>
        </form>
    </section>
}

export default Home