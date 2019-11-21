import React from 'react'

import "./Button.styles.scss"

export default function Button({ children }) {
    return (
        <>
         <button className="button"> { children } </button>   
        </>
    )
}
