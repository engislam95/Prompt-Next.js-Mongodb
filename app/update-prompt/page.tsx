'use client'
import Form from "@/components/Form";

import { useRouter , useSearchParams} from "next/navigation";
import { useEffect, useState } from "react";

const UpdatePrompt = () => {
    const router = useRouter();
    const searchParams =   useSearchParams()
    const promptId = searchParams.get('id')
    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({ prompt: "", tag: "" });


    useEffect(()=> {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`)
            const promptDetails = await response.json() ;
            setPost({
                prompt : promptDetails.prompt , 
                tag : promptDetails.tag
            })
        }
       promptId &&  getPromptDetails() ;
    }, [promptId])
  
    const updatePrompt = async (e: { preventDefault: () => void; } ) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      if(!promptId) return alert('Prompt ID not found')
      try {
        const response = await fetch(`/api/prompt/${promptId}`, {
          method: "PATCH",
          body: JSON.stringify({
            prompt: post.prompt,
            tag: post.tag,
          }),
        });
  
        if (response.ok) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsSubmitting(false);
      }
    };
    
  
    return (
      <Form
        type='Update'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updatePrompt}
      />
    );
  };


  export default UpdatePrompt ;