import { FormattedMessage } from "react-intl"

const ColorChangerVanilla = () => {
    return (
        <div>
            <div className="border-2 p-3 rounded border-sky-600 dark:border-indigo-400 my-2 hover:shadow-xl dark:hover:border-purple-400 hover:border-blue-400 transition-transform">
                <div className="flex items-center">
                    <div>
                        <h2>Color Changer Vanilla.js</h2>
                    </div>
                    <div className="text-red-400 dark:text-[#F06D65]">
                        <a href='https://github.com/alper-demir/Color-Changer' target='_blank' rel="noreferrer">
                            <i className="fa-brands fa-github fa-2x mx-2 hover:text-red-500 dark:hover:text-[#d88273] transition-colors"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <p className="mt-1">
                       <FormattedMessage id="color-changer-vanilla"></FormattedMessage>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ColorChangerVanilla