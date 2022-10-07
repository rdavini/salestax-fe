import React, { useState } from 'react'
import Create from './Create'
import Index from './Index'

const Item = () => {
    const [url, setUrl] = useState('create')
    const renderSwitch = () => {
        switch(url){
            case 'create':
                return <Create setUrl={setUrl}/>
            case 'index':
                return <Index setUrl={setUrl}/>
            default:
                return 'Wrong url'
        }
    }

    return renderSwitch()
}

export default Item