import React from 'react'

const ProfilePage = ({ params }) => {
  return (
    <div>{params.username}</div>
  )
}

export default ProfilePage