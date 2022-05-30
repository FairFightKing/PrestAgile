import { NextPage } from 'next'
import { HttpRequests } from '../logic/common/methods/httpRequests/HttpRequests'
import { PopulationEnum } from '../logic/common/enum/Population'
import { useEffect } from 'react'

const Laboratory: NextPage = () => {
  const Fetch = async () => {
    return await HttpRequests.getHttpRequest(
      'form-freelance',
      PopulationEnum.deep,
    )
  }

  useEffect(() => {
    Fetch().then(res => console.log(res))
  })

  return <div>ok</div>
}

export default Laboratory

/*
export async function loadPosts() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://.../posts/')
    const data = await res.json()

    return data
}

// pages/blog.js
import { loadPosts } from '../lib/load-posts'

// This function runs only on the server side
export async function getStaticProps() {
    // Instead of fetching your `/api` route you can call the same
    // function directly in `getStaticProps`
    const posts = await loadPosts()

    // Props returned will be passed to the page component
    return { props: { posts } }
}*/
