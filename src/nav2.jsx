import React from 'react'
import { Button } from 'antd'

const Nav2 = () => {
    const ele = React.cloneElement(Button, {
        type: "dashed"
    }, "11")
    return <div>{ele}</div>
}   
export default Nav2