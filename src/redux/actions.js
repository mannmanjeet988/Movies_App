export const SEARCH_MOVIE='SEARCH_MOVIE'


export const searchMovie=(searchTerm)=>{
    console.log(searchTerm)
    return {
        type:SEARCH_MOVIE,
        payload:searchTerm
    }
}