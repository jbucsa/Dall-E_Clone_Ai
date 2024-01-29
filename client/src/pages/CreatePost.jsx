import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets';
import { getRamdomPrompt } from '../utilities'
import { FormField, Loader } from '../components';



const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg ] = useState(false);
  const [loading, setLoading] = useState(false);


  return (
    <section className='max-w-7x-l mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Create
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w [500px]'>
          Create collection of imaginative and visually stunning images through Dall-E AI and share them with the community!!
        </p>
      </div>
    </section>
  )
};

export default CreatePost;