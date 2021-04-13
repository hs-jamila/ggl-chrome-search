import Head from 'next/head'
import Header from '../components/header'
import Response from '../Response'
import {API_KEY, CONTEXT_KEY} from '../keys'
import SearchResult from '../components/serachresult'
import HeaderOptionsComponent from '../components/headerOptionsComponent'
import { useRouter } from 'next/router'

function Search({results}){
    const router = useRouter();
    console.log(results)


    return(
        <div>
            <Head>
                <title> {router.query.term}  - Google serach</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Our header*/}
            <Header/>

            {/* Our headeroptions*/}
           <HeaderOptionsComponent/>

            {/* Our Search result*/}
            <SearchResult results={results}/>
        </div>
    )
}
export default Search



export async function getServerSideProps(context) {
    const useDummyData =false;
    const startIndex = context.query.start || '0'
    const data = useDummyData 
       ? Response 
       : await  fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&q=${startIndex}`)
    .then(res =>res.json())

    //after the server has rendered ... pass the result to the client ... 
    return { 
        props:{
            results :data
        }
    }
}
