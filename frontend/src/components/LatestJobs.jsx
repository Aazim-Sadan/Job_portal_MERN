import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {

    const { allJobs } = useSelector(store => store.job);


    return (
        <div className='max-w-7xl mx-auto my-15 md:my-20 px-3'>
            <h1 className='text-4xl sm:text-5xl font-bold'> <span className='text-[#6A38C2]'>Latest & Top</span> Job Openings</h1>
            <motion.div className='grid grid-cols-1 sm:grid-cols-3 gap-4 my-5'

                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
            >
                {
                    allJobs.length <= 0 ? <span className='font-medium text-gray-600'>No Job Available</span> : allJobs?.slice(0, 6).map((job) =>

                        <LatestJobCards key={job._id} job={job} />
                    )

                }
            </motion.div>

        </div>
    )
}


export default LatestJobs