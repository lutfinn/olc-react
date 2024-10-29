import React, { useContext } from 'react'
import { ThemeContext } from './App'

function ContextComponent() {
    const theme = useContext(ThemeContext)

    const themeStyle = {
        backgroundColor: theme === 'light' ? '#FFF' : '#000',
        color: theme === 'light' ? '#000' : '#FFF',
        padding: '15px',
        margin: '10px'
    }
    return (
        <div style={themeStyle}>Context Content</div>
    )
}

export default ContextComponent