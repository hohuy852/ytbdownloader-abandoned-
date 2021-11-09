import React from "react"
import bg from '../assets/bg.png'

export const DownloadList = () => {
    return (
        <div className="container flex justify-center mt-10">
            <div className="flex items-center gap-x-4">
                <div className="w-40 h-24 rounded-xl">
                    <img src={bg} alt="" className="w-auto h-full" />
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-2xl" >
                        Title
                    </div>
                    <div className="max-w-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate iure, minus aliquid perspiciatis laborum corrupti, similique molestiae accusamus deserunt possimus vero dolorum vitae hic natus dignissimos nobis. Modi, illum!
                    </div>
                </div>
                <div>                  
                </div>
            </div>
        </div>
    )
}
