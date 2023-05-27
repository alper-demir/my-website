import { FormattedMessage } from 'react-intl'
import avatar from '../../avatar2.jpg'
import CV from '../../CV.pdf'
const About = () => {
    document.querySelector('title').innerText = "About"
    return (
        <>
            <div className="h-full min-h-screen flex items-center justify-center max-md:text-sm max-sm:text-xs transition-all duration-200 dark:bg-[#343541] dark:text-white py-20">
                <div className="w-2/3  max-sm:w-4/5 min-h-[70vh] font-medium" id='skills-container'>
                    {/* title */}
                    <div className='text-center flex flex-col justify-center items-center'>
                        <div>
                            <h2 className='mb-5 pb-2 inline-block font-semibold text-3xl border-b-2 border-sky-600 dark:border-indigo-400 max-sm:text-2xl'>
                                <FormattedMessage id='about'></FormattedMessage>
                            </h2>
                        </div>
                        <div>
                            <div>
                                <img src={avatar} alt="avatar" className='w-36 h-36 object-cover rounded-full max-md:w-28 max-md:h-28
                    max-sm:w-24 max-sm:h-24 cursor-pointer hover:ring-2 hover:ring-indigo-400 dark:hover:ring-sky-600 duration-500 transition-all ease-in-out' />
                            </div>
                            {/* socials */}
                            <div className='flex justify-center items-center text-red-400 dark:text-[#F06D65] my-3'>
                                <a href='https://github.com/alper-demir/' target='_blank' rel="noreferrer"><i className="fa-brands fa-github fa-2x mx-2 hover:text-red-500 dark:hover:text-[#d88273] transition-colors"></i></a>
                                <a href='https://www.linkedin.com/in/alper-demir23/' target='blank' rel='noreferrer'><i className="fa-brands fa-linkedin fa-2x mx-2 hover:text-red-500 dark:hover:text-[#d87873] transition-colors"></i></a>
                            </div>
                        </div>

                    </div>

                    {/* content */}
                    <div>
                        <div className="border-2 p-5 rounded border-sky-600 dark:border-indigo-400 my-2 hover:shadow-xl transition-transform hover:translate-x-2 duration-500 dark:hover:border-purple-400 hover:border-blue-400">
                            <FormattedMessage id='about-content'></FormattedMessage>
                        </div>
                        <div className='mt-4'>
                            <a href={CV} className='px-3 py-1 text-white bg-sky-600 dark:bg-indigo-600 hover:bg-sky-700 dark:hover:bg-indigo-800 rounded-md' download="ALPERDEMİR-CV">
                                <span><FormattedMessage id='cv'></FormattedMessage></span>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default About