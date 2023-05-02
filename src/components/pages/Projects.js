import { FormattedMessage } from 'react-intl'
import '../../css/projects.css'
import { Outlet, NavLink } from 'react-router-dom'
const Skills = () => {
    return (
        <>
            <div className="h-full min-h-screen flex items-center justify-center max-md:text-sm max-sm:text-xs transition-all duration-200 dark:bg-[#343541] dark:text-white py-20">
                <div className="w-2/3 min-h-[70vh]">
                    {/* title */}
                    <div className='text-center' id='projects'>
                        <h2 className='mb-6 pb-2 inline-block font-semibold text-3xl border-b-2 border-sky-600 dark:border-indigo-400'>
                            <FormattedMessage id='projects'></FormattedMessage>
                        </h2>
                    </div>
                    {/* content */}
                    <div className='flex flex-col' id='links'>
                        <NavLink to='communication-portal' className="font-medium text-xl dark:hover:bg-slate-100 dark:hover:bg-opacity-10 hover:bg-opacity-20 p-1 mt-1 rounded hover:bg-slate-500">Communication Portal</NavLink>
                        <NavLink to='instagram-clone' className="font-medium text-xl dark:hover:bg-slate-100 dark:hover:bg-opacity-10 hover:bg-opacity-20 p-1 mt-1 rounded hover:bg-slate-500">Instagram Clone</NavLink>
                        <NavLink to='recipe-app' className="font-medium text-xl dark:hover:bg-slate-100 dark:hover:bg-opacity-10 hover:bg-opacity-20 p-1 mt-1 rounded hover:bg-slate-500">Recipe App</NavLink>
                        <NavLink to='image-scaling' className="font-medium text-xl dark:hover:bg-slate-100 dark:hover:bg-opacity-10 hover:bg-opacity-20 p-1 mt-1 rounded hover:bg-slate-500">Image Scaling</NavLink>
                        <NavLink to='valorant-api' className="font-medium text-xl dark:hover:bg-slate-100 dark:hover:bg-opacity-10 hover:bg-opacity-20 p-1 mt-1 rounded hover:bg-slate-500">Valorant API</NavLink>
                        <NavLink to='weather-app' className="font-medium text-xl dark:hover:bg-slate-100 dark:hover:bg-opacity-10 hover:bg-opacity-20 p-1 mt-1 rounded hover:bg-slate-500">Weather App</NavLink>
                        <NavLink to='mp3-player' className="font-medium text-xl dark:hover:bg-slate-100 dark:hover:bg-opacity-10 hover:bg-opacity-20 p-1 mt-1 rounded hover:bg-slate-500">MP3 Player</NavLink>
                        <NavLink to='color-changer-react' className="font-medium text-xl dark:hover:bg-slate-100 dark:hover:bg-opacity-10 hover:bg-opacity-20 p-1 mt-1 rounded hover:bg-slate-500">Color Changer - React</NavLink>
                        <NavLink to='color-changer-vanillajs' className="font-medium text-xl dark:hover:bg-slate-100 dark:hover:bg-opacity-10 hover:bg-opacity-20 p-1 mt-1 rounded hover:bg-slate-500">Color Changer - Vanilla.js</NavLink>
                        <main className='mt-2'>
                            <Outlet />
                        </main>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Skills