import React from 'react'

const TotalInfo = (props) => {
    return <ul>
            <li>
                Total Tax {props.total}
            </li>
            <li>
                Total {props.totalTax}
            </li>
        </ul>
}

export default TotalInfo