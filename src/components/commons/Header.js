import React from 'react'

const Header = () => {
    const styles ={
        header: {
            borderBottom: 1,
            borderBottomStyle: 'solid',
            borderColor: '#CBD5DE',
            backgroundColor: '#FFFFFF'
        }
    }
    return <div style={styles.header}>
            <h2 textalign='center'>Sales Tax Calculator</h2>
        </div>
}

export default Header