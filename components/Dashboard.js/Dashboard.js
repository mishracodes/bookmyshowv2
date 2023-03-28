import React from 'react'
import ListContainer from './ListContainer'

const Dashboard = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = yyyy+'-'+ mm +'-'+ dd;

  return (
    <div className='text-black mt-6'>
       <div className='px-3 mb-5 '>
          <p>Popular Now - Movie &#91;Global&#93;</p>
          <ListContainer type="movie" api="https://api.themoviedb.org/3/movie/popular?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/>
        </div>


        <div className='px-3 mb-5 '>
          <p>Popular Now - Movie &#91;Indian&#93;</p>
          <ListContainer type="movie" api={`https://api.themoviedb.org/3/discover/movie?api_key=c725cd6e0711c581df4c197979bb6a39&region=IN&sort_by=popularity.desc&include_adult=false&include_video=false&release_date.lte=${today}&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cbn&page=`}/>
        </div>

        <div className='px-3 mb-5 '>
          <p>Popular Now - TV &#91;Global&#93;</p>
          <ListContainer type="tv" api="https://api.themoviedb.org/3/tv/popular?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/>
        </div>

        {/* " + formattedDate + "&page="+pagePTIn+" */}
        <div className='px-3 mb-5 '>
          <p>Popular Now - TV &#91;Indian&#93;</p>
          <ListContainer type="tv" api={`https://api.themoviedb.org/3/discover/tv?api_key=c725cd6e0711c581df4c197979bb6a39&sort_by=popularity.desc&first_air_date.lte=${today}&timezone=Asia%2FKolkata&include_null_first_air_dates=false&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cbn&page=`}/>
        </div>

      {/* ///////////////////////// LATEST //////////////////////////// */}

        <div className='px-3 mb-5 '>
          <p>Latest - Movie &#91;Global&#93;</p>
          <ListContainer type="movie" api="https://api.themoviedb.org/3/movie/now_playing?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/>
        </div>
        
        <div className='px-3 mb-5 '>
          <p>Latest - Movie &#91;Indian&#93;</p>
          <ListContainer type="movie" api={`https://api.themoviedb.org/3/discover/movie?api_key=c725cd6e0711c581df4c197979bb6a39&region=IN&sort_by=primary_release_date.desc&include_adult=false&include_video=false&release_date.lte=${today}&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cbn&page=`}/>
        </div>
    
        <div className='px-3 mb-5 '>
          <p>Latest - TV &#91;Global&#93;</p>
          <ListContainer type="tv" api={`https://api.themoviedb.org/3/discover/tv?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&sort_by=first_air_date.desc&first_air_date.lte=${today}&vote_average.gte=1&vote_count.gte=4&include_null_first_air_dates=false&page=`}/>
        </div>
       
        <div className='px-3 mb-5 '>
          <p>Latest - TV &#91;Indian&#93;</p>
          <ListContainer type="tv" api={`https://api.themoviedb.org/3/discover/tv?api_key=c725cd6e0711c581df4c197979bb6a39&sort_by=first_air_date.desc&first_air_date.lte=${today}&timezone=Asia%2FKolkata&include_null_first_air_dates=false&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cbn&page=`}/>
        </div>
{/* ////////////////////////////AUTHORS CHOICE and TRAILERS //////////////////////////// */}
        <div className='px-3 mb-5 '>
          <p>Authors Choice</p>
          {/* <ListContainer type="movie" api="https://api.themoviedb.org/3/movie/popular?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/> */}
        </div>

        <div className='px-3 mb-5 '>
          <p>Trailers</p>
          <ListContainer type="trailer" api="https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAmwqLqXJBIIFEt3VWhI9qTHtv9w1LvKPM&type=video&q=%22latest%20bollywood%20trailers%22&maxResults=20&page="/>
        </div>

{/* //////////////////////////// UPCOMING ////////////////////////////////////// */}

        <div className='px-3 mb-5 '>
          <p>Upcoming - Movie &#91;Global&#93;</p>
          <ListContainer type="movie" api="https://api.themoviedb.org/3/movie/upcoming?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/>
        </div>
        
        <div className='px-3 mb-5 '>
          <p>Upcoming - Movie &#91;Indian&#93;</p>
          <ListContainer type="movie" api={`https://api.themoviedb.org/3/discover/movie?api_key=c725cd6e0711c581df4c197979bb6a39&region=IN&sort_by=primary_release_date.asc&include_adult=false&include_video=false&primary_release_date.gte=${today}&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cbn&page=`}/>
        </div>
    
        <div className='px-3 mb-5 '>
          <p>Upcoming - TV &#91;Global&#93;</p>
          <ListContainer type="tv" api={`https://api.themoviedb.org/3/discover/tv?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&sort_by=first_air_date.asc&first_air_date.gte=${today}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_original_language=en&page=`}/>
        </div>
       
        <div className='px-3 mb-5 '>
          <p>Upcoming - TV &#91;Indian&#93;</p>
          <ListContainer type="tv" api={`https://api.themoviedb.org/3/discover/tv?api_key=c725cd6e0711c581df4c197979bb6a39&sort_by=first_air_date.asc&first_air_date.gte=${today}&timezone=Asia%2FKolkata&include_null_first_air_dates=false&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cbn&page=`}/>
        </div>

      {/* ///////////////////////// TOP RATED //////////////////////////// */}

        <div className='px-3 mb-5 '>
          <p>Top Rated - Movie &#91;Global&#93;</p>
          <ListContainer type="movie" api="https://api.themoviedb.org/3/movie/top_rated?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/>
        </div>
        
        <div className='px-3 mb-5 '>
          <p>Top Rated - Movie &#91;Indian&#93;</p>
          <ListContainer type="movie" api={`https://api.themoviedb.org/3/discover/movie?api_key=c725cd6e0711c581df4c197979bb6a39&region=IN&sort_by=vote_count.desc&include_adult=false&include_video=false&vote_count.gte=8&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cb&page=`}/>
        </div>
    
        <div className='px-3 mb-5 '>
          <p>Top Rated - TV &#91;Global&#93;</p>
          <ListContainer type="tv" api={`https://api.themoviedb.org/3/tv/top_rated?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page=`}/>
        </div>
       
        <div className='px-3 mb-5 '>
          <p>Top Rated - TV &#91;Indian&#93;</p>
          <ListContainer type="tv" api={`https://api.themoviedb.org/3/discover/tv?api_key=c725cd6e0711c581df4c197979bb6a39&sort_by=vote_average.desc&timezone=Asia%2FKolkata&vote_count.gte=8&include_null_first_air_dates=false&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cbn&page=`}/>
        </div>
      {/* ///////////////////////// GENRES //////////////////////////// */}

        {/* <div className='px-3 mb-5 '>
          <p>Genres Movie</p>
          <GenresConatiner type="movie" api="https://api.themoviedb.org/3/genre/movie/list?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US"/>
        </div>
        
        <div className='px-3 mb-5 '>
          <p>Genres TV</p>
          <GenresConatiner type="tv" api="https://api.themoviedb.org/3/genre/tv/list?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US"/>
        </div> */}
        
     {/* ///////////////////////// PEOPLE //////////////////////////// */}
        {/* <div className='px-3 mb-5 '>
          <p>Popular People</p>
          <ListContainer type="person" api="https://api.themoviedb.org/3/person/popular?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/>
        </div> */}

    </div>
  )
}

export default Dashboard