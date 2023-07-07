import "./search.css";

const Search = () => {
    return(
        <>
            <div className="form-holder">
                <form>
                    <select>
                        <option>Write keyword</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                    </select>
                    <input type="text" placeholder="Zip code" />
                    <input type="submit" value="Search" />
                </form>
            </div>
        </>
    )
}

export default Search