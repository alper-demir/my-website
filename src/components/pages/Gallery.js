import { FormattedMessage } from "react-intl"

const Gallery = () => {
  return (
    <div className="h-full min-h-screen flex items-center justify-center max-md:text-sm max-sm:text-xs transition-all duration-200 dark:bg-[#343541] dark:text-white py-20">
      <div className="w-2/3 min-h-[70vh]">
        {/* title */}
        <div className='text-center' id='projects'>
          <h2 className='mb-6 pb-2 inline-block font-semibold text-3xl border-b-2 border-sky-600 dark:border-indigo-400'>
            <FormattedMessage id='gallery'></FormattedMessage>
          </h2>
        </div>
        {/* content */}

      </div>

    </div>
  )
}

export default Gallery