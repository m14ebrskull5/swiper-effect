import React from 'react'

import { Layout, Menu, theme, Button } from 'antd';

export default React.forwardRef((props, ref) => {
    return <>
        <audio controls ref={ref} src={props.src}/>
        <Button type="primary" onClick={() => {
            console.log(ref.current)
            ref.current.pause()
        }}>停止</Button>
        <Button type="primary" onClick={() => {
            ref.current.play()
        }}>播放</Button>
    </>
})  