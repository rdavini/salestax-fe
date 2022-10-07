import React from 'react'

const TotalInfo = (props) => {
    const styles={
        alignEnd:{
            textAlign: 'end'
        }
    }
    return <ul>
            <li style={styles.alignEnd}>
                Total Tax {props.currencyIcon} {props.total}
            </li>
            <li style={styles.alignEnd}>
                Total {props.currencyIcon} {props.totalTax}
            </li>
        </ul>
}

export default TotalInfo