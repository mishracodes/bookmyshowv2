import React, { useEffect, useState } from 'react'
import Spinner from '../UI/Spinner'
import CardItemVertical from './CardItemVertical'

const ListContainer = ({ type, api }) => {

    const [result, setresult] = useState([])
    
    const fetchList = async () => {
        let url = api + 1
        let data = await fetch(url);
        let parsedData = await data.json();
        if(type==='trailer'){
            setresult(parsedData.items.map((e)=>{
                return {id:e.id.videoId,
                    title:e.snippet.title,
                    poster_path:e.snippet.thumbnails.medium.url,
                        }
            }))
        }
        else
        setresult(parsedData.results)
        // setTotalPage(parsedData.total_pages)
    }


    useEffect(() => {
        fetchList();
        // eslint-disable-next-line
    }, [])
  return (
    <div id="scrollableDiv" className='overflow-auto whitespace-nowrap'>
    {result.map((e) => {
        return (
            <div className='inline-block items-start mx-2 w-[164px]' key={e.id}>
                <CardItemVertical id={e.id} title={e.title ? e.title : (e.original_name ? e.original_name : e.name)} image={e.poster_path ? e.poster_path : e.profile_path} type={type} />
            </div>
        )
    })}
    {!result && <Spinner />}



</div>
  )
}

export default ListContainer