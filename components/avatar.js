function Avatar({url, className}){
    return(

           <img loading="lazy"
                className={`rounded-full h-12 cursor-pointer transition-150 transform hover:scale-110 ${className}` }
                src={url}
                alt="profile picture"  
           />
        
    )
}
export default Avatar