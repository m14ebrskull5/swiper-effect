import { Space, Avatar } from 'antd';
import { createRef } from 'react';
import { useState, useEffect } from 'react';

export default function MyAvatar() {

    const [ collapsed, setCollapsed ] = useState(false);
    const PopOverStyle = {
        display: !collapsed?'none':''
    }
    const avatarStyle = {
        display: collapsed?'none':''
    }
    const popOverContainer = createRef()
    useEffect(() => {
        if(collapsed) {
            console.log(111, popOverContainer.current)
            popOverContainer.current.classList.add("hover-animate-active")
        } else {
            popOverContainer.current.classList.remove("hover-animate-active")
        }
    }, [collapsed])
    const url = 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJO1Lia2qKj3yMPpJsyzKRvU34PxOJApicPwLPNN8icY2Tkamopl0CK49qTDu326TAKic670icNeDMMQ6w/132'
    return <Space id="myAvatar">
        <Avatar shape="circle" style={avatarStyle} size={42} icon={<img src={url} alt="avatar" />} onClick={() => {setCollapsed(!collapsed)}} />
        <Avatar shape="circle" className='pop-over-avatar' style={PopOverStyle} size={42} icon={<img src={url} alt="avatar" onClick={() => {setCollapsed(!collapsed)}}/>} />
        <div className='pop-over-container hover-animate-active' ref={popOverContainer} style={PopOverStyle}>

        </div>
    </Space>
}