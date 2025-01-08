/* eslint-disable react/prop-types */
export function Searchbar({setSearchedCity,searchedCity,setCity}){
    return <>
    <div className="searchbar">
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type="search" placeholder="Search by city"  
            value={searchedCity} onChange={(e)=>{
                setSearchedCity(e.target.value)
            }}/>
            <button
            onClick={()=>{setCity(searchedCity); setSearchedCity("")}}
            ><i className="fas fa-search"></i></button>
        </form>
    </div>
    </>
}