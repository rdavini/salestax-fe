import React from 'react'

const TotalInfo = (props) => {
    return <ul>
            <li>
                Total Tax {props.totalTax} 
            </li>
            <li>
                Total {props.total}
            </li>
        </ul>
}

export default TotalInfo