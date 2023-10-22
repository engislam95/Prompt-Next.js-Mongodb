import Prompt from "@/models/prompt"
import { connectToDB } from "@/utils/database"

export const POST = async(req: { json: () => PromiseLike<{ prompt: any; userId: any; tag: any }> | { prompt: any; userId: any; tag: any } } ) => {
    const {prompt , userId , tag} = await req.json()
    try {
        await connectToDB()
        const newPrompt = new Prompt({creator : userId , tag , prompt})
        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt) , {
            status : 201
        })
    } catch (error) {
        return new Response('Failed to create new Prompt' , {
            status : 500
        })
    }
}
