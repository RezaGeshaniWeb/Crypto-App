import TableRow from './TableRow'
import CircleLoader from "react-spinners/CircleLoader"

export default function TableCoin({ coins, isLoading, currency, setChart, setIsChartLoading }) {
    return (
        <section className="w-full flex justify-center">
            {isLoading
                ?
                <CircleLoader color="#6552f4" size={150} className='mt-16 mb-72' />
                :
                <table className="w-full">
                    <thead className="w-full">
                        <tr className="w-full flex *:flex *:justify-start border-b-2 border-b-white pb-3 *:text-lg">
                            <th className="w-[23%]">Coin</th>
                            <th className="w-[16%]">Name</th>
                            <th className="w-[16%]">Price</th>
                            <th className="w-[15%]">24h</th>
                            <th className="w-[30%]">Total Volume</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {coins.map(coin => <TableRow key={coin.id} coin={coin} currency={currency} setChart={setChart} setIsChartLoading={setIsChartLoading} />)}
                    </tbody>
                </table>}
        </section>
    )
}