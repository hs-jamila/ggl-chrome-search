import Image from 'next/image'
import {useRef} from 'react'
import {useRouter} from 'next/router'
import Avatar from '../components/avatar'
import {MicrophoneIcon,SearchIcon, XIcon} from '@heroicons/react/solid'


function Header(){
    const searchInputRef = useRef(null)
    const router = useRouter(null)
    const OriginalPage=(e)=>{
        e.preventDefault();
        router.push(`/`)
    }
    const ClearText=()=>{
        searchInputRef.current.value =""
    }
    const search = (e)=>{
        e.preventDefault();
        const term = searchInputRef.current.value;
        console.log(`the term is : ${term}`)
        if (!term) return; 
        router.push(`/search?term=${term}`)
     }

    return(
        <header className=' sticky top-0 bg-white'>
          <div className="flex items-center w-full p-6">
             <Image         onClick={OriginalPage}
                            src="https://generationmobiles.net/wp-content/uploads/2014/11/google-logo.jpg"
                            width={120}
                            height={50}
                            className='cursor-pointer'/>
             <form className="flex px-6 py-3 mr-5 ml-10 max-w-3xl flex-grow border-gray-600 shadow-lg items-center">
                           
                           <input ref={searchInputRef} 
                                  type="text" 
                                  placeholder="Search Google" 
                                  className="flex-grow w-full focus:outline-none"/>
                           <XIcon className=" h-7 w-5 sm:mr-3 text-gray-500 transition duration-100 transform hover:scale-125"
                                  onClick={ClearText}/>
                           <SearchIcon className=" h-5 w-5 mr-3 hidden sm:inline-flex border-l-2 border-gray-300 text-blue-500"/>
                           <MicrophoneIcon className="h-5 mr-3 hidden sm:inline-flex  text-blue-500 cursor-pointer "/>
                           <button className="hidden"
                                   type="submit"
                                   onClick={search}
                                    > Search </button>
             </form>               
             <Avatar className='ml-auto'
                     url="https://supporthubstaffcom.lightningbasecdn.com/wp-content/uploads/2019/08/good-pic.png"/>
          </div>
        </header>

    )
}
export default Header
