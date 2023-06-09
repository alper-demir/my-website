import { FormattedMessage } from 'react-intl'
import '../../css/skills.css'
const Skills = () => {
    document.querySelector('title').innerText = "Skills"
    return (
        <>
            <div className="h-full min-h-screen flex items-center justify-center max-md:text-sm max-sm:text-xs transition-all duration-200 dark:bg-[#343541] dark:text-white py-20">
                <div className="w-2/3 max-sm:w-4/5" id='skills-container'>
                    {/* title */}
                    <div className='text-center'>
                        <h2 className='mb-6 pb-2 inline-block font-semibold text-3xl border-b-2 border-sky-600 dark:border-indigo-400 max-sm:text-2xl'>
                            <FormattedMessage id='skills'></FormattedMessage>
                        </h2>
                    </div>
                    {/* content */}
                    <div>
                        <h2 className="font-medium text-xl max-sm:text-lg">Front-end</h2>
                        <div className="border-2 p-3 rounded border-sky-600 dark:border-indigo-400 my-2 hover:shadow-xl hover:translate-x-2 duration-500 dark:hover:border-purple-400 hover:border-blue-400 transition-transform">
                            <h3 className="dark:text-indigo-300 text-sky-700 font-medium text-lg max-sm:text-base">React.js</h3>
                            <p>
                                <FormattedMessage id='reactjs'></FormattedMessage>
                            </p>
                            <hr className="my-2" />
                            <h3 className="dark:text-indigo-300 text-sky-700 font-medium text-lg max-sm:text-base">CSS</h3>
                            <p>
                                TailwindCSS, Bootstrap
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-medium text-xl max-sm:text-lg">Back-end</h2>
                        <div className="border-2 p-3 rounded border-sky-600 dark:border-indigo-400 my-2 hover:shadow-xl hover:translate-x-2 duration-500 dark:hover:border-purple-400 hover:border-blue-400 transition-transform">
                            <h3 className="dark:text-indigo-300 text-sky-700 font-medium text-lg max-sm:text-base">Node.js</h3>
                            <p>
                                <FormattedMessage id='nodejs'></FormattedMessage>
                            </p>
                            <hr className="my-2" />
                            <h3 className="dark:text-indigo-300 text-sky-700 font-medium text-lg max-sm:text-base">Django</h3>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-medium text-xl max-sm:text-lg"><FormattedMessage id='database-title'></FormattedMessage></h2>
                        <div className="border-2 p-3 rounded border-sky-600 dark:border-indigo-400 my-2 hover:shadow-xl hover:translate-x-2 duration-500 dark:hover:border-purple-400 hover:border-blue-400 transition-transform">
                            <h3 className="dark:text-indigo-300 text-sky-700 font-medium text-lg max-sm:text-base">MySql & MSSQL</h3>
                            <p>
                                <FormattedMessage id='database'></FormattedMessage>
                            </p>
                            <hr className="my-2" />
                            <h3 className="dark:text-indigo-300 text-sky-700 font-medium text-lg max-sm:text-base">ORM</h3>
                            <p><FormattedMessage id='orm'></FormattedMessage></p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Skills