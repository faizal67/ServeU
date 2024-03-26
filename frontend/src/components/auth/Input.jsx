import React from 'react'

const Input = ({ value = '', setValue, type = 'text', placeholder, ...props }) => {
    return (
        <input
            className='auth-input  focus:outline-2 focus:outline-blue-500'
            placeholder={placeholder}
            value={value}
            onChange={(event) => { setValue(event.target.value) }}
            {...props}
        />

    )
}

export default Input
