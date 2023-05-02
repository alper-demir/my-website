import Side from '../components/Side'
import { Outlet } from 'react-router-dom'
import messages from '../locales/content.json'
import { IntlProvider } from 'react-intl'
import { useEffect, useState } from 'react'


const MainLayout = () => {
    const [locale, setLocale] = useState('tr')
    const changeLanguage = (language) => {
        setLocale(language)
        localStorage.setItem('language', language)
    }
    useEffect(() => {
        const language = localStorage.getItem('language')
        language && setLocale(language)
    }, [])
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <div className='flex'>
                <div className='w-[14%] max-lg:max-w-max min-w-fit h-screen fixed'>
                    <Side changeLanguage={changeLanguage} />
                </div>
                <main className='w-full ml-[14%] max-lg:ml-16'>
                    <Outlet locale={locale} />
                </main>
            </div>
        </IntlProvider>
    )
}

export default MainLayout