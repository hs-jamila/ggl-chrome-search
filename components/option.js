
function Option({Icon, Title, selected}){
    return(
        <div className={`flex
                        items-center 
                        space-x-1 
                        border-b-4 
                        border-transarent 
                        hover:border-blue-500
                        hover:text-blue-500
                        cursor-pointer
                        pb-3 ${selected && 'text-blue-500 border-blue-500'}` }>
             <Icon className="h-4"/>
             <p className="hidden sm:inline-flex">{Title}</p>
        </div>
    )
}
export default Option
