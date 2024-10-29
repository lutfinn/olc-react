import React, { useContext } from 'react'
import { ThemeContext } from './App'

function ContextComponent() {
    const darkTheme = useContext(ThemeContext)

    const themeStyle = {
        backgroundColor: darkTheme ? '#FFF' : '#000',
        color: darkTheme ? '#000' : '#FFF',
        padding: '5px'
    }
    return (
        <div style={themeStyle}>Context Content</div>
    )
}

export default ContextComponent