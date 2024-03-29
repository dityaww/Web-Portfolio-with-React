import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <>
            <div className="py-5 shadow-md">
                <div className="2xl:container mx-16 2xl:mx-auto flex justify-between items-center 2xl:max-w-7xl">
                    <div className="text-xl font-bold">Aditya.</div>
                    <div>
                        <ul className="flex gap-5">
                            <li>
                                <Link className="hover:underline underline-offset-4" to={"/"}>Home</Link>
                            </li>
                            {/* <li>
                                <Link className="hover:underline underline-offset-4" to={"/about"}>About</Link>
                            </li>
                            <li>
                                <Link className="hover:underline underline-offset-4" to={"/project"}>Project</Link>
                            </li> */}
                            <li>
                                <Link className="hover:underline underline-offset-4" to={"/blogs"}>Blogs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar