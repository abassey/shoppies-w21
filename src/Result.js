import React from 'react';

//to be displayed to user if term entered for search not a movie
function Result(props) {
    const isNotMovie = props.isNotMovie;
   
        if(isNotMovie)
    {
        return <p>I don't think that's a movie. Want to try again?</p>
        
    }
    return null
    
}
    
  

export default Result;