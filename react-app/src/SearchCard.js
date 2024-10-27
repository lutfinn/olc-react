import { useState } from "react";

const SearchCard = () => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        const { value } = event.target

        setInputValue(value)
    }

    return (
        <form className='SearchCard'>
            <input type='text' onChange={handleInputChange} value={inputValue} placeholder='Search'></input>
            <button type='submit'>Search</button>
        </form>

    )
}

export default SearchCard;