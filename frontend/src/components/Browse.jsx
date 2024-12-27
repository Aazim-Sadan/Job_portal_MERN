import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { motion } from 'framer-motion';


// const randomJobs = [1, 2, 3];

const Browse = () => {

  useGetAllJobs();
  const { allJobs } = useSelector(store => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(''));
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold text-xl ml-3 my-10'>Search Results ({allJobs.length})</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
          {
            allJobs.map((job) => 
              <motion.div
              className='overflow-hidden'
                initial={{opacity:0,x:100}}
                animate={{opacity:1,x:0}}
                 exit={{opacity:0,x:-100}}
                transition={{duration:0.4}}
                key={job._id}>
                <Job  job={job} />
                </motion.div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Browse                                                     