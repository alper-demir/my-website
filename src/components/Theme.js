import { useEffect } from "react"
const Theme = () => {

    const html = document.querySelector('html')
    const changeTheme = () => {
        html.classList.contains('dark') ? html.className = '' : html.classList = 'dark'
        if (!html.classList.contains('dark')) {
            localStorage.setItem('theme', 'light')
        }
        else {
            localStorage.setItem('theme', 'dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            html.className = 'dark'
        }
        else {
            html.className = ''
        }
    }, [html])

    return (
        <>
            <div className='bg-sky-600 dark:bg-indigo-500 h-6 max-xl:w-16 flex items-center rounded-xl mb-20 mx-auto cursor-pointer max-md:w-14 transition-all duration-300 max-lg:hidden w-20' onClick={changeTheme}>
                <div className='rounded-full bg-white h-4 w-4 ml-2 duration-500 max-xl:dark:translate-x-8 dark:translate-x-12 dark:bg-indigo-900'>
                </div>
            </div>

            <div className='hidden max-lg:block text-center mb-20 dark:text-white text-black cursor-pointer dark:hover:bg-[#343541] p-1 rounded-lg hover:bg-gray-200 hover:bg-opacity-50' onClick={changeTheme}>
                <i className="fa-regular fa-moon fa-2x"></i>
            </div>
        </>
    )
}

export default Theme