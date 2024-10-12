import React from 'react'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import { useParams } from 'react-router-dom'

const video = () => {
  const {videoId, categoryId} = useParams()
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/></div>
  )
}

export default video
