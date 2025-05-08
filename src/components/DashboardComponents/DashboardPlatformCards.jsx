import React from 'react'
import axios from 'axios'

const DashboardPlatformCards = (props) => {
  
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/platforms/${id}`);
      props.setPlatforms(prev => prev.filter(platform => platform._id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div>
      <p>{props.platform}</p>
      <p>{props.username}</p>
      <p>{props.highlights}</p>
      <button onClick={() => deleteHandler(props.id)}>Press me</button>
    </div>
  )
}

export default DashboardPlatformCards