export default function Pagination({ page, setPage }) {
    const previousHandler = () => {
        if (page <= 1) return
        setPage(page => page - 1)
    }

    const nextHandler = () => {
        if (page >= 10) return
        setPage(page => page + 1)
    }

    return (
        <div className="w-[440px] flex justify-between items-center mx-auto my-24">
            <button style={{ opacity: page === 1 ? '.4' : '1', cursor: page === 1 ? 'auto' : 'pointer' }} className="w-[80px] h-[35px] bg-[#3874ff] text-white border-none py-[5px] px-[10px] rounded-md text-[16px]" onClick={previousHandler}>Previous</button>
            <p className="border border-[#3874ff] w-[35px] h-[35px] rounded-md flex justify-center items-center" style={{ backgroundColor: page === 1 ? '#3874ff' : 'inherit' }}>1</p>
            <p className="border border-[#3874ff] w-[35px] h-[35px] rounded-md flex justify-center items-center" style={{ backgroundColor: page === 2 ? '#3874ff' : 'inherit' }}>2</p>
            {
                page > 2 && page < 9 && (<>
                    <span>...</span>
                    <p className="bg-[#3874ff] w-[35px] h-[35px] rounded-md flex justify-center items-center">{page}</p>
                </>)
            }
            <span>...</span>
            <p className="border border-[#3874ff] w-[35px] h-[35px] rounded-md flex justify-center items-center" style={{ backgroundColor: page === 9 ? '#3874ff' : 'inherit' }}>9</p>
            <p className="border border-[#3874ff] w-[35px] h-[35px] rounded-md flex justify-center items-center" style={{ backgroundColor: page === 10 ? '#3874ff' : 'inherit' }}>10</p>
            <button style={{ opacity: page === 10 ? '.4' : '1', cursor: page === 10 ? 'auto' : 'pointer' }} className="w-[80px] h-[35px] bg-[#3874ff] text-white border-none py-[5px] px-[10px] rounded-md text-[16px]" onClick={nextHandler}>Next</button>
        </div>
    )
}
