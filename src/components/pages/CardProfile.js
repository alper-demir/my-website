import avatar from '../../avatar2.jpg'
import '../../css/card.css'
import { FormattedMessage } from 'react-intl'
const CardProfile = () => {
    document.querySelector('title').innerText = "Home"
    return (
        <div className='h-screen flex items-center justify-center max-md:text-sm max-sm:text-xs transition-all duration-200 dark:bg-[#343541]' >
            <div className='border-2 border-sky-600 p-10 rounded text-center shadow-lg flex flex-col items-center justify-center dark:bg-[#202123] dark:bg-opacity-30 dark:border-indigo-400 hover:shadow-xl dark:hover:border-purple-400 hover:border-blue-400 transition-colors duration-300' id='card-field'>
                <div>
                    <img src={avatar} alt="avatar" className='w-36 h-36 object-cover rounded-full max-md:w-28 max-md:h-28
                    max-sm:w-24 max-sm:h-24 cursor-pointer hover:ring-2 hover:ring-indigo-400 dark:hover:ring-sky-600 duration-500 transition-all ease-in-out' />
                </div>
                <div className='my-2 dark:text-white transition-colors duration-100'>
                    <p>Alper Demir</p>
                    <div className='max-md:hidden'>
                        <p>
                            <span>
                                <FormattedMessage id='job1'></FormattedMessage>
                            </span>
                            <span> - </span>
                            <span>
                                <FormattedMessage id='job2'></FormattedMessage>
                            </span>

                        </p>
                    </div>
                    <div className='hidden max-md:block'>
                        <p className='my-1'>
                            <span>
                                <FormattedMessage id='job1'></FormattedMessage>
                            </span>
                        </p>
                        <p>
                            <span>
                                <FormattedMessage id='job2'></FormattedMessage>
                            </span>
                        </p>
                    </div>
                </div>
                {/* socials */}
                <div className='flex justify-center items-center text-red-400 dark:text-[#F06D65]'>
                    <a href='https://github.com/alper-demir/' target='_blank' rel="noreferrer"><i className="fa-brands fa-github fa-2x mx-2 hover:text-red-500 dark:hover:text-[#d88273] transition-colors"></i></a>
                    <a href='https://www.linkedin.com/in/alper-demir23/' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin fa-2x mx-2 hover:text-red-500 dark:hover:text-[#d87873] transition-colors"></i></a>
                </div>
            </div>
        </div>
    )
}

export default CardProfile