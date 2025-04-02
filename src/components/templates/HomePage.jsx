import { useEffect, useState } from "react"
import Layouts from "../../layouts/Layouts"
import TableCoin from "../modules/TableCoin"
import { getCoinList } from "../../services/cryptoApi"
import Pagination from "../modules/Pagination"
import Search from "../modules/Search"
import toast, { Toaster } from "react-hot-toast"
import Chart from "../modules/Chart"
import { CircleLoader } from "react-spinners"

export default function HomePage() {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [currency, setCurrency] = useState('usd')
    const [chart, setChart] = useState(null)
    const [isChartLoading, setIsChartLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(getCoinList(page, currency))
                const data = await res.json()
                setCoins(data)
                setIsLoading(false)

            } catch (error) {
                toast.error('The connection was lost')
            }
        }
        getData()
    }, [page, currency])

    return (
        <div className="max-w-[1200px] min-h-screen mx-auto p-[10px] text-white relative">
            <Layouts>
                <Toaster />
                <Search setCurrency={setCurrency} currency={currency} />
                <TableCoin coins={coins} isLoading={isLoading} currency={currency} setChart={setChart} setIsChartLoading={setIsChartLoading} />
                <Pagination page={page} setPage={setPage} />
            </Layouts>
            {!!chart && <Chart chart={chart} setChart={setChart} />}
            {isChartLoading &&
                <div className='fixed top-0 left-0 w-full h-full backdrop-blur-xs flex justify-center items-center'>
                    <CircleLoader color="#6552f4" size={150} />
                </div>}
        </div>
    )
}