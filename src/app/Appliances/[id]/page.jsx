import React from 'react'

async function page({params}) {
  const {id}=await params;
  return (
    <div>
      <p>{id}</p>
    </div>
  )
}

export default page