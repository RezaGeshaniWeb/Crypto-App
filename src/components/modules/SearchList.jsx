import { CircleLoader } from 'react-spinners'

export default function SearchList({ coins, isLoading }) {
    return (
        <>
            {(!!coins.length || isLoading) && <div className="absolute top-14 left-0 w-[350px] bg-[#13131a] border-2 border-[#303030] rounded-md py-2 px-6 min-h-[390px] max-h-[400px] overflow-hidden overflow-y-auto flex flex-col items-center">
                {isLoading && <CircleLoader color="#6552f4" size={50} className="mt-8" />}
                <ul className="w-full">
                    {
                        coins.map(coin => {
                            return (
                                <li key={coin.id} className="w-full flex items-center py-5 gap-4 border-b border-slate-600">
                                    <img src={coin.thumb} alt={coin.name} className="w-8" />
                                    <p className="text-lg">{coin.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>}
        </>
    )
}
