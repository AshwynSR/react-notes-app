import { MdSearch } from "react-icons/md"

export default function Search({handleSearch}){

    const handleChange = (e) =>{
        handleSearch(e.target.value);
    }
    return(
        <div className="search">
            <MdSearch className="search-icon" size="1.3em" />
            <input type="text" placeholder="type to search" onChange={handleChange} />
        </div>
    )
}