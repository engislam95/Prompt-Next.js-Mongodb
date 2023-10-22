'use client'

import { useState , useEffect, SetStateAction } from 'react'; 
import PromptCard from './PromptCard';
import { promptInterface } from '@/types/prompts';

interface PromptCardListInterface {
  data : promptInterface[] ,
  handleTagClick : (tagName : string) => void
}

const PromptCardList = ({data , handleTagClick} : PromptCardListInterface ) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post : promptInterface) => (
        <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  )
}


const Feed = () => {

  const [searchText , setSearchText] = useState<string>('') ; 
  const [posts , setPosts] = useState<promptInterface[]>([]) ; 
  const [searchTimeout, setSearchTimeout] = useState<any>(null);
  const [searchedResults, setSearchedResults] = useState<promptInterface[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt') ; 
      const data = await response.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])


  const filterPrompts = (searchtext : string) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return posts.filter(
      (item : promptInterface) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e: { target: { value:string; }; } ) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName : string) => {
    setSearchText(tagName);
    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type='text'
          placeholder='Search for tag or Username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer' />
      </form>
          {/* All Prompts */}
          {searchText ? (
            <PromptCardList
              data={searchedResults}
              handleTagClick={handleTagClick}
            />
          ) : (
            <PromptCardList data={posts} handleTagClick={handleTagClick} />
         )}
    </section>
  );
};

export default Feed;
