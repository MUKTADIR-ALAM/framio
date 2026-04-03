import React from 'react'
import localFont from "next/font/local"


const voyage = localFont({
    src: "../../../public/Voyage.ttf",
})

export default function WedHighlight() {
    return (
        <div className='w-11/12 mx-auto flex flex-col md:flex-row justify-around my-40 space-y-20'>
            {/* image part */}
            <div className='relative'>
                    <div className='absolute -left-10 -bottom-10 w-full h-full bg-[#d9dccd] z-0'>

                    </div>

                    <div>
                        <img className='relative z-0.1 w-[400px]' src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
            </div>


            {/* writhing part */}
            <div className='my-auto space-y-20'>
                <h1 className={`${voyage.className} text-4xl font-bold`}>Wedding Highlight - 3 to 7 minute</h1>
                <div className={`${voyage.className} text-2xl`}>
                    <p>1. Background music. </p>
                    <p>2. 3cam Footages </p>
                    <p>3. Sound Fx.</p>
                    <p>4. Color Correction & Grading</p>
                    <p>5. Effects.</p>
                    <p>6. Credit or Title</p>
                </div>
            </div>
        </div>
    )
}
