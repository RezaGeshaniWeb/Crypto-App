import chartUp from '../../assets/chart-up.svg'
import chartDown from '../../assets/chart-down.svg'
import { marketChart } from '../../services/cryptoApi'
import toast from 'react-hot-toast'

export default function TableRow({ coin, currency, setChart, setIsChartLoading }) {
    const { id, image, symbol, name, current_price, price_change_percentage_24h, total_volume } = coin

    const showHandler = async () => {
        setIsChartLoading(true)
        try {
            const res = await fetch(marketChart(id))
            const data = await res.json()
            setChart({ ...data, coin })
            setIsChartLoading(false)

        } catch (error) {
            setChart(null)
            toast.error('The connection was lost')
        }
    }

    return (
        <tr className="w-full h-[85px] flex items-center *:flex border-b border-b-gray-500">
            <td className="w-[23%] items-center gap-3 pr-10 justify-start">
                <img className="w-10" src={image} alt={symbol} />
                <span>{symbol.toUpperCase()}</span>
                <span onClick={showHandler} className='bg-[#d33636] px-1 rounded-sm ml-auto cursor-pointer'>Show Chart</span>
            </td>
            <td className="w-[16%] text-lg justify-start">{name}</td>
            <td className="w-[16%] text-lg justify-start">
                {currency === 'usd' ? '$' : currency === 'eur' ? '€' : currency === 'jpy' ? '¥' : ''}&nbsp;
                {current_price.toLocaleString()}
            </td>
            <td style={{ color: price_change_percentage_24h <= 0 ? 'red' : '#00ff00' }} className="w-[15%] text-lg">{price_change_percentage_24h.toFixed(2)}%</td>
            <td className="w-[30%] text-lg justify-between items-center">
                {total_volume.toLocaleString()}
                <img src={price_change_percentage_24h <= 0 ? chartDown : chartUp} alt="total_volume" />
            </td>
        </tr>
    )
}