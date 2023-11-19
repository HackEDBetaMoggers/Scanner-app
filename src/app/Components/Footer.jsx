const Footer = () => {
    return (
        <footer className="w-full bg-white shadow dark:bg-gray-800">
            <div className=" mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 HackED Beta at the University of Alberta
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://github.com/HackEDBetaMoggers" className="hover:underline me-4 md:me-6">Github repo</a>
                </li>
            </ul>
            </div>
        </footer>

    )
}

export default Footer