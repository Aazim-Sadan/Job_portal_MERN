import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'


// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8]

const Jobs = () => {

    const { allJobs, searchQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJob] = useState(allJobs);

    useEffect(() => {
        if (searchQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    String(job.salary).includes(searchQuery.toLowerCase())
            })
            setFilterJob(filteredJobs)
        } else {
            setFilterJob(allJobs)
        }
    }, [allJobs, searchQuery]);


    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex flex-col sm:flex-row'>
                    <div className='flex sm:w-1/5 w-full sm:order-none order-1'>
                        <FilterCard />
                    </div>
                    {
                        filterJobs.length <= 0 ? <span className='sm:order-none order-2 font-medium text-gray-600 px-3 pt-3'>Job not found</span> : (
                            <div className='flex-1 sm:order-none order-2 h-[88vh] overflow-y-auto pb-5 scrollbar-hide'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                                    {
                                        filterJobs.map((job) => (
                                            <motion.div
                                                className='overflow-hidden'
                                                initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                transition={{ duration: 0.4 }}
                                                key={job._id}>
                                                <Job job={job} />
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs