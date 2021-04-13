import Option from '../components/option'
import{
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon,
} from '@heroicons/react/solid'

function HeaderOptionsComponent(){
    return(
        <div className="flex w-full text-gray-600 justify-evenly text-sm lg:justify-start lg:space-x-36 lg:pl-52 border-b-[2px] lg:text-base">
         {/* left div*/}
            <div className="flex space-x-6">
              <Option Icon={SearchIcon} Title="All" selected/>
              <Option Icon={PhotographIcon} Title="Images"/>
              <Option Icon={PlayIcon} Title="videos" />
              <Option Icon={NewspaperIcon} Title="News" />
              <Option Icon={MapIcon}Title="Maps" />
              <Option Icon={DotsVerticalIcon} Title="More" />
            </div>

         {/* right div*/}
            <div className="flex space-x-4">
               <p className="link"> Settings </p>
               <p className="link"> Tools </p>
           </div>

        </div>
    )
}
export default HeaderOptionsComponent
