import React from 'react'
import Theme from './Theme'
import { FormattedMessage } from 'react-intl'
import { NavLink } from 'react-router-dom'
import '../css/nav.css'

const Side = ({ changeLanguage }) => {
    return (
        <div className='h-full p-1 border-r-[1px] dark:bg-[#202123] border-black flex flex-col justify-between transition-all duration-200 max-lg:max-w-max'>
            <div className='mt-20 dark:text-white'>
            <span className='text-[0.55rem] p-3 fixed top-2'>v0.1.0</span>
                <ul className='max-lg:hidden font-medium'>
                    <NavLink to="home">
                        <li className='my-5 hover:bg-gray-200 pl-6 max-xl:pl-3 p-2 rounded-xl hover:cursor-pointer transition-all duration-200 dark:hover:bg-[#444654] dark:hover:bg-opacity-50'>
                            <i className="fa-solid fa-home"></i>
                            <span className='px-2'>
                                <FormattedMessage id='home'></FormattedMessage>
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to='skills'>
                        <li className='my-5 hover:bg-gray-200 pl-6 max-xl:pl-3 p-2 rounded-xl hover:cursor-pointer transition-all duration-200 dark:hover:bg-[#444654] dark:hover:bg-opacity-50'>
                            <i className="fa-solid fa-code"></i>
                            <span className='px-2'>
                                <FormattedMessage id='skills'></FormattedMessage>
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to='projects'>
                        <li className='my-5 hover:bg-gray-200 pl-6 max-xl:pl-3 p-2 rounded-xl hover:cursor-pointer transition-all duration-200 dark:hover:bg-[#444654] dark:hover:bg-opacity-50'>
                            <i className="fa-solid fa-sliders"></i>
                            <span className='px-2'>
                                <FormattedMessage id='projects' ></FormattedMessage>
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to='about'>
                        <li className='my-5 hover:bg-gray-200 pl-6 max-xl:pl-3 p-2 rounded-xl hover:cursor-pointer transition-all duration-200 dark:hover:bg-[#444654] dark:hover:bg-opacity-50'>
                            <i className="fa-solid fa-address-card"></i>
                            <span className='px-2'>
                                <FormattedMessage id='about' ></FormattedMessage>
                            </span>
                        </li>
                    </NavLink>
                    <NavLink to='gallery'>
                        <li className='my-5 hover:bg-gray-200 pl-6 max-xl:pl-3 p-2 rounded-xl hover:cursor-pointer transition-all duration-200 dark:hover:bg-[#444654] dark:hover:bg-opacity-50'>
                            <i class="fas fa-image"></i>
                            <span className='px-2'>
                                <FormattedMessage id='gallery' ></FormattedMessage>
                            </span>
                        </li>
                    </NavLink>
                    <li className='my-5 hover:bg-gray-200 pl-6 max-xl:pl-3 p-2 rounded-xl hover:cursor-pointer transition-all duration-200 dark:hover:bg-[#444654] dark:hover:bg-opacity-50 max-xl:text-center' onClick={() => changeLanguage('tr')}>
                        TR
                    </li>
                    <li className='my-5 hover:bg-gray-200 pl-6 max-xl:pl-3 p-2 rounded-xl hover:cursor-pointer transition-all duration-200 dark:hover:bg-[#444654] dark:hover:bg-opacity-50 max-xl:text-center' onClick={() => changeLanguage('en')}>
                        EN
                    </li>
                </ul>

                <ul className='hidden max-lg:block px-3'>
                    <NavLink to="/home">
                        <li className='my-5 text-center hover:bg-gray-200 p-2 rounded-lg dark:hover:bg-[#444654] hover:bg-opacity-50'>
                            <i class="fa-solid fa-house"></i>
                        </li>
                    </NavLink>
                    <NavLink to="/skills">
                        <li className='my-5 text-center hover:bg-gray-200 p-2 rounded-lg dark:hover:bg-[#444654] hover:bg-opacity-50'>
                            <i className="fa-solid fa-code"></i>
                        </li>
                    </NavLink>
                    <NavLink to="/projects">
                        <li className='my-5 text-center hover:bg-gray-200 p-2 rounded-lg dark:hover:bg-[#444654] hover:bg-opacity-50'>
                            <i className="fa-solid fa-sliders"></i>
                        </li>
                    </NavLink>
                    <NavLink to="/about">
                        <li className='my-5 text-center hover:bg-gray-200 p-2 rounded-lg dark:hover:bg-[#444654] hover:bg-opacity-50'>
                            <i className="fa-solid fa-address-card"></i>
                        </li>
                    </NavLink>
                    <NavLink to="/gallery">
                        <li className='my-5 text-center hover:bg-gray-200 p-2 rounded-lg dark:hover:bg-[#444654] hover:bg-opacity-50'>
                            <i class="fas fa-image"></i>
                        </li>
                    </NavLink>
                    <li className='my-5 text-center hover:bg-gray-200 p-2 rounded-lg dark:hover:bg-[#444654] hover:bg-opacity-50 font-medium cursor-pointer' onClick={() => changeLanguage('tr')}>
                        TR
                    </li>
                    <li className='my-5 text-center hover:bg-gray-200 p-2 rounded-lg dark:hover:bg-[#444654] hover:bg-opacity-50 font-medium cursor-pointer' onClick={() => changeLanguage('en')}>
                        EN
                    </li>
                </ul>

            </div>
            <div>
                <Theme />
            </div>
        </div>
    )
}

export default Side