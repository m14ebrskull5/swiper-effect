import { useEffect, useState } from "react"
import { Button } from "antd"
import "./css/Swiper.css"
import "./css/ani.css"
// import kimage from "./img/kubosan.webp"
import data from './data/bilibili/week-hot'
const Swiper = () => {
    let [items, setItem] = useState([])
    let [containerStyle, setStyle] = useState({ justifyContent: "flex-start" })
    let [scaleStack, setScaleStack] = useState({})
    const timeout = 400
    useEffect(() => {
        setItem((item) => data)

    }, [])

    const onMouseOver = (e) => {
        let a = e.currentTarget

        let id = e.currentTarget.dataset.id
        if (!a.classList.contains('is-hover-active-play')) {
            let start = performance.now()
            console.log(scaleStack)
            setScaleStack((items) => {
                return {
                    ...items,
                    [id]: {
                        t: start,
                        c: setTimeout(() => {
                            a.classList.add("is-hover-active-play")

                            if (parseInt(id) > 4) {
                                setStyle((state) => {
                                    state = {
                                        ...state,
                                        justifyContent: 'flex-end'
                                    }
                                    return state
                                })
                    
                            } else {
                                setStyle((state) => {
                                    state = {
                                        ...state,
                                        justifyContent: 'flex-start'
                                    }
                                    return state
                                })
                            }
                        }, timeout)
                    }
                }
            })


        }
        // }, 300))




    }
    const onMouseLeave = (e) => {
        
        let a = e.currentTarget
        let id = e.currentTarget.dataset.id
        a.classList.remove("is-hover-active-play")
        if(performance.now() - scaleStack[id].t < timeout) {
            clearTimeout(scaleStack[id].c)
        }
        
    }
    return <>
        <div id="home_v3_module_page_switch" className="home-page-switch-wrapper inner-content-wrapper">
            <div className="home-page-switch-wrapper">
                <div className="inner-content-body-container">
                    <div className="inner-content-body" style={containerStyle}>
                        {
                            items.map((k, v) => <div data-id={v} 
                            onMouseEnter={onMouseOver} onMouseLeave={onMouseLeave} 
                            style={{ marginRight: "15px", background: "rgba(137, 88, 236, 0.1)" }} 
                            className="hot-ranking-cell-wrapper inner-content-item is-hover-animation-active" key={v + 'img'}
                            // onMouseOver={onMouseOver}
                            // 
                            >
                                <div className="ranking-ratio-item-container" style={{ height: "250px" }}>
                                    <img src={k.imgSrc}></img>
                                </div>
                                <div className="ranking-cell-desc">
                                    <div className="ranking-cell-index" style={{ color: "rgba(234,62,205,0.298)" }}>{v + 1}</div>
                                    <div className="hotranking-content-item-desc">
                                        <a><div className="home-cell-desc-title">{k.title}</div></a>

                                        <div className="home-cell-desc-subtitle">{k.desc}</div>
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