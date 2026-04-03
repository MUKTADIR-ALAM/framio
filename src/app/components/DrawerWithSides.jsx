import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import localFont from "next/font/local"

const voyage = localFont({
    src: "../../../public/Voyage.ttf",
})

export function DrawerWithSides() {
    return (
        <div className="flex flex-wrap gap-2 topnav">
            <Drawer
            className={``}
                direction={
                    "top"
                }
            >
                {/* <DrawerTrigger asChild>
                        <Button variant="outline" className="capitalize">
                            {side}
                        </Button>
                    </DrawerTrigger> */}


                <DrawerTrigger asChild>
                    <button
                        className="bg-[rgba(255,255,255,0.27)] text-4xl px-8 py-2 text-white rounded-4xl backdrop-blur-2xl hover:bg-[#fc96f4] cursor-pointer">Menu
                    </button>
                </DrawerTrigger>

                <DrawerContent className="h-[100%] bg-[#1d1c1a] text-white">
                    <DrawerHeader>
                        <DrawerTitle className={`text-white mb-10 ${voyage.className} text-4xl font-bold`}>Framio Motion</DrawerTitle>
                        {/* <DrawerDescription>
                            Set your daily activity goal.
                        </DrawerDescription> */}
                    </DrawerHeader>
                    <div className={`no-scrollbar px-4 flex justify-center ${voyage.className} text-2xl h-full`}>
                            <ul className="space-y-12">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Portfolio</a></li>
                                <li><a href="/">Pricing</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <button className={`bg-[rgba(255,255,255,0.27)] text-2xl p-2 text-white rounded-4xl backdrop-blur-2xl hover:bg-[#fc96f4] cursor-pointer ${voyage.className}`} >close</button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </div>
    )
}
