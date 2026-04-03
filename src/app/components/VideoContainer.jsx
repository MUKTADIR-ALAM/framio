import localFont from "next/font/local"
import React from 'react'
import WedHighlight from "./WedHighlight"

const voyage = localFont({
    src: "../../../public/Voyage.ttf",
})

export default function videoContainer() {
    return (
        <div className='mt-10'>
            <div>
                <div className="flex flex-col items-center my-8">
                    <div className={`${voyage.className} w-11/12 mx-auto text-4xl font-bold text-center text-[#fc96f4]`}>Weeding Teaser</div>
                    <div className={` text-sm font-extralight mt-3`}>Duration- 30 Sec to 1 Min</div>
                </div>
                <iframe
                    className="w-full max-w-[800px] mx-auto aspect-[800/513] mt-28"
                    src='https://www.youtube.com/embed/L12ypEzyZXA?si=AHleu3XsMuNnFsHL'
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>


                <WedHighlight></WedHighlight>




            <div className="flex flex-col items-center my-8">
                <div className={`${voyage.className} w-11/12 mx-auto text-4xl font-bold text-center text-[#fc96f4]`}>Weeding Highlight</div>
                <div className={` text-sm font-extralight mt-3`}>Duration 3 to 7 Min</div>
            </div>

            <div className="mt-40">

                <iframe
                    className="w-full max-w-[1300px] mx-auto aspect-[1300/890]"
                    src='https://www.youtube.com/embed/lwFlaIkPGjg?si=Xi_CQxOMs10oBLGG'
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                ></iframe>

                <div className="flex flex-col items-center mb-20 mt-20">
                    <div className={`${voyage.className} w-11/12 mx-auto text-4xl font-bold text-center text-[#fc96f4]`}>Weeding Highlight</div>
                    <div className={` text-sm font-extralight mt-3`}>Duration 3 to 7 Min</div>
                </div>


                <iframe
                    className="w-8/12 mx-auto h-[613]"
                    src='https://www.youtube.com/embed/H5l4Ips6KHA?si=C2NEGjOKq-NcmfFt'
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}
