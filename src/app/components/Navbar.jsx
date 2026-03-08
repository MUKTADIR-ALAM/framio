import React from 'react'
import localFont from "next/font/local"
import { DrawerWithSides } from './DrawerWithSides'

const voyage = localFont({
    src: "../../../public/Voyage.ttf",
})
export default function Navbar() {
    return (
        <div className=''>

            <div className=''></div>


            <div className={`${voyage.className}`} >

                <DrawerWithSides>
                    
                </DrawerWithSides>
            </div>
        </div>
    )
}
