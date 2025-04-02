import { useEffect, useState } from "react"
import { searchCoin } from "../../services/cryptoApi"
import toast from 'react-hot-toast'
import SearchList from "./SearchList"

export default function Search({ setCurrency, currency }) {
    const [text, setText] = useState('')
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setCoins([])
        if (!text) {
            setIsLoading(false)
            return
        }

        const search = async () => {
            try {
                const res = await fetch(searchCoin(text), { signal: controller.signal })
                const data = await res.json()

                if (data.coins) {
                    setCoins(data.coins)
                    setIsLoading(false)
                }
                else {
                    toast.error('The connection was lost')
                }
                setIsLoading(false)

            } catch (error) {
                if (error.name !== 'AbortError') toast.error('Search limit per minute')
            }
        }
        setIsLoading(true)
        search()

        return () => controller.abort()
    }, [text])

    return (
        <div className="flex gap-4 mb-24 relative">
            <input spellCheck={false} value={text} onChange={e => setText(e.target.value)} type="text" className="bg-[#303030] text-lg px-4 py-2 outline-none rounded-md" placeholder="Search..." />
            <select value={currency} onChange={e => setCurrency(e.target.value)} className="bg-[#303030] border-none outline-none p-2 rounded-md">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
            </select>
            <SearchList coins={coins} isLoading={isLoading} />
        </div>
    )
}