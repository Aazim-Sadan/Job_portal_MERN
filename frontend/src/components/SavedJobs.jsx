import React from 'react'
import Navbar from './shared/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import SavedJobsCard from './SavedJobsCard';
import { motion } from 'framer-motion';
import { removeSavedJob } from '@/redux/jobSlice';
import { toast } from 'sonner';

const SavedJobs = () => {

    const dispatch = useDispatch();
    const { savedJobs } = useSelector(store => store.job);

    const handleDeleteJob = (jobId) => {
        const jobToDelete = savedJobs.find(job => job.id === jobId);

        if(jobToDelete){
            const jobTitle = jobToDelete?.title;
            dispatch(removeSavedJob(jobId))
            toast.success(`Job titled ${jobTitle} has been deleted successfully!`)
        }else{
            toast.error("Job not found")
        }
        
    }




    return (
        <div>
            <Navbar />
            <div className='px-3 max-w-7xl mx-auto mt-5'>
                <h1 className=' text-4xl sm:text-5xl font-bold py-5 sm:py-7'>Your Saved <span className='text-[#F83002]'>Jobs</span></h1>
                <hr />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5'>
                    {
                        savedJobs.length <= 0 ? <span className='font-medium text-gray-600'>You didn't save any jobs.</span> :
                        savedJobs.map((job) => (
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.4 }}
                            >
                                <SavedJobsCard key={job._id} job={job} deleteJob={handleDeleteJob} />
                            </motion.div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default SavedJobs