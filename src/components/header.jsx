import Logo from "../images/logo.svg"
import hamburger from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"
import { useState } from "react"

const Header = () => {

const [isOpen, setIsOpen] = useState(false)

const toggleNav = () => {setIsOpen(!isOpen)}



    return <div className="py-10 px-10 md:px-32 w-full flex justify-between bg-transparent items-center">
                <div><img src={Logo} alt="" /></div>
                <div>
                    <div>
                        <ul>
                            <li onClick={toggleNav} className={`md:hidden ${isOpen ? "hidden" : "block"} md:hidden`}><a href="#"></a><img src={hamburger} alt="" /></li>
                            <li onClick={toggleNav} className={`md:hidden ${isOpen ? "block mb-3 absolute right-10" : "hidden"}`}><a href="#"></a><img src={close} alt="" /></li>
                        </ul>
                    </div>
                    <ul className={`md:flex md:bg-transparent  ${isOpen ? "flex-column absolute top-20 right-6 bg-slate-100" : "hidden"} justify-evenly items-center md:w-[20rem]`}>
                        <li><a className={`${isOpen ? "p-5" : "p-0"} uppercase font-secondary font-bold text-slate-700 hover:text-slate-300`} href="#">product</a></li>
                        <li><a className={`${isOpen ? "p-5" : "p-0"} uppercase font-secondary font-bold text-slate-700 hover:text-slate-300`} href="#">features</a></li>
                        <li><a className={`${isOpen ? "p-5" : "p-0"} uppercase font-secondary font-bold text-slate-700 hover:text-slate-300`} href="#">pricing</a></li>
                        <li><div className={`${isOpen ? "h-[2px]" : "h-0"} bg-slate-300 p-1 rounded-full`}></div></li>
                        <li><a className={`${isOpen ? "p-5" : "p-0"} uppercase font-secondary font-bold text-slate-700 hover:text-slate-300`} href="#">login</a></li>
                    </ul>
                </div>

            </div>
}

export default Header