import PaginationButtons from '../components/paginationbuttons'

function SearchResult({results}){
    return(
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl[14%] lg:pl-52">
            <p className="text-gray-500 mt-3 mb-5"> About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.searchTime} seconds)</p>
            {results.items.map(result =>(
                <div  key={result.link}
                      className='max-w-xl mb-8 group'>
                      <div> 
                           <a href={result.link}
                              className='text-sm  cursor-pointer line-clamp-1'>
                              {result.formattedUrl}
                           </a>
                           <a href={result.link}> 
                              <h2 className='truncate text-xl text-blue-800 font-medium group-hover:underline'>{result.title}</h2>
                           </a>

                      </div>
                      <p className='text-sm  line-clamp-2'> {result.snippet} </p>
                </div>
            ))}
            <PaginationButtons/>
        </div>
    )
}
export default SearchResult

