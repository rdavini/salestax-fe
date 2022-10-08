import React, { useEffect } from 'react'
import PropTypes from 'prop-types';

const styles={
    alignEnd:{
        textAlign: 'end'
    }
}

const TotalInfo = (props) => {
    return <ul>
            <li style={styles.alignEnd}>
                Total Tax {props.currencyIcon} {props.total}
            </li>
            <li style={styles.alignEnd}>
                Total {props.currencyIcon} {props.totalTax}
            </li>
        </ul>
}

TotalInfo.propTypes = {
    currencyIcon: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    totalTax: PropTypes.number.isRequired,
};

export default TotalInfo