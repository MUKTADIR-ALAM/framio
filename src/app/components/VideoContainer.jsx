import localFont from "next/font/local"
import React from 'react'

const voyage = localFont({
    src: "../../../public/Voyage.ttf",
})

export default function videoContainer() {
    return (
        <div className='mt-10'>
            <div className={`${voyage.className} w-11/12 mx-auto text-9xl my-24 font-bold text-center text-[#fc96f4]`}>Weeding flims</div>
            <iframe
                className="w-11/12 mx-auto h-[613]"
                src='https://www.youtube.com/embed/rxib5rh8JjQ?si=JupnWIX17J0wizce'
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    )
}
