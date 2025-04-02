import { FaBitcoin } from "react-icons/fa";

export default function Layouts({ children }) {
    return (
        <>
            <header className="w-full py-4 px-5 rounded-[10px] flex items-center justify-between bg-[#6552f4] *:font-semibold mb-[80px]">
                <h1 className="text-2xl">Crypto App</h1>
                <FaBitcoin className="text-4xl" />
            </header>
            {children}
            <footer className="text-xl w-full py-4 px-5 rounded-[10px] text-center bg-[#6552f4] mt-[80px]">
                Developed By <em className="underline underline-offset-8">Reza Geshani</em> with <span className="text-red-600">&hearts;</span>
            </footer>
        </>
    )
}
