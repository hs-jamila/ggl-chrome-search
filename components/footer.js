import {GlobeIcon} from '@heroicons/react/solid'
function Footer(){
    return(
        <footer className="grid w-full divide-y-[1px] bg-gray-200 text-sm text-gray-700">
            <div className="px-8 py-3" >
                <p > United Kingdom</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4  items-center md:col-span-2 lg:col-span-1 grid-flow-row-dense ">
                <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 grid-flow-row-dense"> 
                    <GlobeIcon className="h-5 mr-1 text-green-700 "/> Garbon neutral since 2000 
                </div>
               
                <div className="flex justify-center ml-5 space-x-8 white-space-nowrap md:justify-self-start">
                    <p px-5 py-3 > Advertissing</p>
                    <p px-5 py-3 > business</p>
                    <p px-5 py-3 > how search works</p>
                </div>

                <div className="flex justify-center mr-5 space-x-8 white-space-nowrap md:ml-auto">
                    <p px-5 py-3 > privacy</p>
                    <p px-5 py-3 > terms</p>
                    <p px-5 py-3 > settings</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer