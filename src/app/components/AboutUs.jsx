import localFont from "next/font/local"
import React from 'react'
import img from "../../../public/img/logo-footer.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const voyage = localFont({
  src: "../../../public/Voyage.ttf",
})

export default function AboutUs() {
  return (
    <div className={` w-11/12 mx-auto rounded-2xl border border-[#fc96f4] h-96 mt-10 mb-4 flex flex-col items-center justify-between p-10`}>
      <img className="w-40" src="/img/logo-footer.svg" alt="" />
      <p className="text-2xl font-medium">Foto & Film Studio für Hochzeiten</p>
      <p className="text-xl">E — hallo@stefans.studio</p>
      <p className="font-medium">Contact Us on</p>
      <div className="flex gap-2">
        <FontAwesomeIcon className="w-7 cursor-pointer" icon={faWhatsapp} />
        <FontAwesomeIcon className="w-7 cursor-pointer" icon={faInstagram} />
      </div>
    </div>
  )
}
