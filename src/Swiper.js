import { useEffect, useState } from "react"
import { Button } from "antd"
import "./css/Swiper.css"
import "./css/ani.css"
import kimage from "./img/kubosan.webp"
import jQuery from 'jquery'
const Swiper = () => {
    let [items, setItem] = useState([])
    let [containerStyle, setStyle ]= useState({ justifyContent: "flex-start" })
    const [delayHandler, setDelayHandler] = useState(null)
    console.log("render")
    useEffect(() => {
        setItem((item) => [1, 2, 3, 4, 5, 6])
       
    }, [])

    const onMouseOver = (e) => {
        let a = e.currentTarget
        
        let id = e.currentTarget.dataset.id
        if(parseInt(id) > 3) {
            setStyle((state) => {
                // state.justifyContent = 'flex-end'
                state = {
                    ...state,
                    justifyContent: 'flex-end'
                }
                return state
            })
            
        } else {
            setStyle((state) => {
                // state.justifyContent = 'flex-end'
                state = {
                    ...state,
                    justifyContent: 'flex-start'
                }
                return state
            })
        }
        // setDelayHandler(setTimeout(() => {
            if(!a.classList.contains('is-hover-active-play')) {
                // setTimeout(() => {
                    a.classList.add("is-hover-active-play")
                // },200)
            }
        // }, 300))
        

       

    }
    const onMouseLeave = (e) => {
        let a = e.currentTarget
        a.classList.remove("is-hover-active-play")
        // clearTimeout(delayHandler)
    }
    return <>
        <div id="home_v3_module_page_switch" className="home-page-switch-wrapper inner-content-wrapper">
            <div className="home-page-switch-wrapper">
                <div className="inner-content-body-container">
                    <div className="inner-content-body" style={containerStyle}>
                        {
                            items.map((k, v) => <div data-id={v} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} style={{ marginRight: "15px", background: "rgba(137, 88, 236, 0.1)" }} className="hot-ranking-cell-wrapper inner-content-item is-hover-animation-active" key={k + 'img'}
                            // onMouseOver={onMouseOver}
                            // 
                            >
                                <div className="ranking-ratio-item-container home_v3_vertical_item_6" style={{ height: "250px" }}>
                                    <img src={kimage}></img>
                                </div>
                                <div className="ranking-cell-desc">
                                    <div className="ranking-cell-index" style={{ color: "rgba(234,62,205,0.298)" }}>{v+1}</div>
                                    <div className="hotranking-content-item-desc">
                                        <a><div className="home-cell-desc-title">间谍过家家</div></a>

                                        <div className="hotranking-content-item-desc">散装家庭的爆笑喜剧</div>
                                    </div>

                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </div>
        </div>

    </>
}
export default Swiper 