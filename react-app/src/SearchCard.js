import { useState } from "react";

const SearchCard = (props) => {
    console.log(props)
    const { data, getDataFromChild } = props
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        const { value } = event.target

        setInputValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getDataFromChild(inputValue)
    }

    return (
        <div>
            <form className='SearchCard' onSubmit={handleSubmit}>
                <input type='text' onChange={handleInputChange} value={inputValue} placeholder='Search'></input>
                <button type='submit'>Search</button>
            </form>

        </div>

    )
}

export default SearchCard;