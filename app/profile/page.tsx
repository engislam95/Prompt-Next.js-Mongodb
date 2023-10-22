'use client'

import { useState , useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from '@/components/Profile'
import { promptInterface } from "@/types/prompts";


const MyProfile = () => {
    const { data : session } = useSession()
    const [posts , setPosts] = useState([]) ; 
    const router = useRouter() ;

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`) ; 
          const data = await response.json()
          setPosts(data)
        }
        session?.user.id && fetchPosts()
      }, [])

    const handleEdit = (post : promptInterface) => {
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post : promptInterface) => {

      const hasConfirmed = confirm("Are you sure want to delete this prompt?")

      if(hasConfirmed)
      {
        try {
          await fetch(`/api/prompt/${post._id.toString()}`, {
            method: "DELETE"
          })

          const filteredPrompts = posts.filter((p : promptInterface) => p._id !== post._id)
          setPosts(filteredPrompts)
        } catch (error) {
          console.log(error)
        }
       
      }
      
    }


    return <Profile name="My" desc="Welcome to your personalized profile page" data={posts} handleEdit={handleEdit} handleDelete={handleDelete}/>
}

export default MyProfile ;