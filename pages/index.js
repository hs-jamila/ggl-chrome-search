import Head from 'next/head'
import Avatar from '../components/avatar'
import {ViewGridIcon, MicrophoneIcon,SearchIcon} from '@heroicons/react/solid'
import Image from 'next/image'
import Footer from '../components/footer'
import {useRef} from 'react'
import {useRouter} from 'next/router'

export default function Home() {
   const searchInputRef = useRef(null)
   const router = useRouter(null)
   const search = (e)=>{
      e.preventDefault();
      const term = searchInputRef.current.value;
      console.log(`the term is : ${term}`)
      if (!term) return; 
      router.push(`/search?term=${term}`)
   }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>My Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
         {/* Our header*/}
             <header className="flex w-full text-sm text-gray-700 p-5 justify-between">
                <div className="flex space-x-4 items-center">
                   <p className="link"> About</p>
                   <p className="link"> Store</p>

                </div>

                <div className="flex space-x-4 items-center">
                   <p className="link"> Gmail</p>
                   <p className="link"> Images</p>
                    {/* grid icon*/}
                    <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-300"/>
                   {/* picture*/}
                    <Avatar url="https://supporthubstaffcom.lightningbasecdn.com/wp-content/uploads/2019/08/good-pic.png"/>
                  
                </div>
             </header>
         {/* Our Body*/}
             <form className="flex flex-col items-center mt-44 flex-grow w-3/4">
                        <Image 
                            src="https://generationmobiles.net/wp-content/uploads/2014/11/google-logo.jpg"
                            width={500}
                            height={200}/>
                        
                        <div className="flex px-5 py-5 mt-5 border-gray-600 w-full hover:shadow-lg focus-within:shadow-lg max-w-md items-center sm:max-w-xl lg:max-w-2xl">
                           <SearchIcon className="h-5  text-gray-500 mr-3 "/>
                           <input ref={searchInputRef}
                                  type="text" 
                                  placeholder="Search Google" 
                                  className="flex-grow focus:outline-none"/>
                           <MicrophoneIcon className="h-5  text-gray-500"/>
                        </div>
                        
                        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row space-x-4"> 
                             <button onClick={search} className="btn"> Google Search</button>
                             <button onClick={search} className="btn"> I'm lucky</button>
                        </div>
             </form>
         {/* Our footer*/}
         <Footer/>

    </div>
  )
}
