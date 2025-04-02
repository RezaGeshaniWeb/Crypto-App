import { useState } from "react"
import ChartComponent from "./ChartComponent"

export default function Chart({ chart, setChart }) {
    const [type, setType] = useState("prices")

    const typeHandler = e => {
        if (e.target.tagName === 'BUTTON') {
            const type = e.target.innerText.toLowerCase().replace(' ', '_')
            setType(type)
        }
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-xs">
            <span className="text-2xl font-bold bg-[#d33636] text-white w-[30px] h-[30px] text-center mt-[30px] ml-[30px] rounded-sm cursor-pointer flex justify-center items-center" onClick={() => setChart(null)}>X</span>
            <div className="w-[800px] mx-auto p-5 mt-[20px] bg-[#18181ce6] border-2 border-[#404042] rounded-[20px]">
                <div className="flex items-center mx-2.5 mb-8">
                    <img src={chart.coin.image} alt="" className="w-10 h-10 mr-5" />
                    <p className="text-2xl font-bold">{chart.coin.name}</p>
                </div>
                <div className="w-[760px] h-[300px]">
                    <ChartComponent chart={chart} type={type} />
                </div>
                <div className="mt-7 *:my-2.5 *:mx-5 *:bg-[#18181cdb] *:border *:border-[#3874ff] *:text-[#3874ff] *:text-lg *:py-[5px] *:px-[10px] *:rounded-[5px] *:cursor-pointer" onClick={typeHandler}>
                    <button style={{ backgroundColor: type === 'prices' ? '#3874ff' : '', color: type === 'prices' ? '#fff' : '' }}>Prices</button>
                    <button style={{ backgroundColor: type === 'market_caps' ? '#3874ff' : '', color: type === 'market_caps' ? '#fff' : '' }}>Market Caps</button>
                    <button style={{ backgroundColor: type === 'total_volumes' ? '#3874ff' : '', color: type === 'total_volumes' ? '#fff' : '' }}>Total Volumes</button>
                </div>
                <div className="flex justify-between mt-[30px] mx-5 *:flex">
                    <div className="*:text-lg">
                        <p className="mr-2 text-[#3874ff] font-bold">Price:</p>
                        <span>${chart.coin.current_price}</span>
                    </div>
                    <div className="*:text-lg">
                        <p className="mr-2 text-[#3874ff] font-bold">ATH:</p>
                        <span>${chart.coin.ath}</span>
                    </div>
                    <div className="*:text-lg">
                        <p className="mr-2 text-[#3874ff] font-bold">Market Cap:</p>
                        <span>{chart.coin.market_cap}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
