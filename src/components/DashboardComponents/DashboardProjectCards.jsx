import React from 'react'
import axios from 'axios'

const DashboardProjectCards = (props) => {

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`);
      props.setProjects(prev => prev.filter(project => project._id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.link}</p>
      <p>{props.technologies}</p>
      <button onClick={() => deleteHandler(props.id)}>Press me</button>
    </div>
  )
}

export default DashboardProjectCards