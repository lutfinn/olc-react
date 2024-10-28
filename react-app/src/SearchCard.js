import { useEffect, useState } from "react";

const UsersItem = (props) => {
    console.log(props)
    const {user} = props
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.username}</p>
        </div>
    )
}

const SearchCard = (props) => {
    console.log('trigger')
    const [inputValue, setInputValue] = useState('')
    const [users, setUsers] = useState([])

    const getUserData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${inputValue}`)
        const result = await response.json()
        setUsers(result)
    }

    useEffect(() => {
        getUserData()
    }, [inputValue])

    const handleInputChange = (event) => {
        const { value } = event.target

        setInputValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    console.log('users', users)

    return (
        <div>
            <form className='SearchCard' onSubmit={handleSubmit}>
                <input type='text' onChange={handleInputChange} value={inputValue} placeholder='Search'></input>
                <button type='submit'>Search</button>
            </form>
            {users.map((user, index) => (
                <UsersItem user={user} key={index}/>
            )
            )}
        </div>

    )
}

export default SearchCard;