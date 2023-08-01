import { Link } from "react-router-dom";
import "./search.css";

const Search = () => {
    return(
        <>
            <div className="form-holder">
                <form>
                    <input type="text" placeholder="Write keyword" className="keyword" />
                    <input type="text" placeholder="Zip code" />
                    {/* <Link to="/pros">Search</Link> */}
                    <input type="submit" value="Search" />
                </form>
            </div>
        </>
    )
}

export default Search