import React from 'react'

import "./Spinner.styles.scss";

export default function Spinner() {
    return (
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
