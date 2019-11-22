import React from 'react'

import "./Button.styles.scss"

export default function Button({ children, disabled='', outline='', danger='', handleClick  }) {
    return (
        <>
         <button onClick={handleClick} disabled={disabled} className={`button ${outline} ${danger}`} > { children } </button>   
        </>
    )
}
