import { promptInterface } from "@/types/prompts";
import PromptCard from "./PromptCard";

interface profileInterface {
  name : string; 
  desc : string ; 
  data : promptInterface[] ; 
  handleEdit : (post :promptInterface ) => void
  handleDelete: (post :promptInterface) => void
}

const Profile = ({name , desc , data , handleEdit , handleDelete} : profileInterface) => {
  return (
    <section className='w-full'>
    <h1 className='head_text text-left'>
      <span className='blue_gradient'>{name} Profile</span>
    </h1>
    <p className='desc text-left'>{desc}</p>

    <div className='mt-10 prompt_layout'>
      {data.map((post : promptInterface) => (
        <PromptCard
          key={post._id}
          post={post}
          handleEdit={() => handleEdit && handleEdit(post)}
          handleDelete={() => handleDelete && handleDelete(post)}
        />
      ))}
    </div>
  </section>
  );
};

export default Profile;
