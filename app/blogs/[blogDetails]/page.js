'use client'
function page({params}) {
  return (
    <div className="container mx-auto px-5">
        <p>page : {params.blogDetails}</p>
    </div>
  )
}

export default page