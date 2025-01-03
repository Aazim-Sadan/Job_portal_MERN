import React from 'react'
import { Badge } from './ui/badge'
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const SavedJobsCard = ({ job, deleteJob }) => {

    const navigate = useNavigate();
    

    return (
        <div  className='p-5  rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                {/* <p className='text-sm text-gray-600'>{job?.description}</p> */}
                <p className='text-sm text-gray-600 overflow-hidden text-ellipsis'>
                    {job?.description?.length > 100 ? `${job?.description.slice(0, 78)}...` : job?.description}
                </p>
            </div>

            <div className='flex items-center gap-2 mt-4 '>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position}</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
            </div>
            <div className='flex items-center gap-5 pt-5 '>
                <Trash2 onClick={()=> deleteJob(job._id)} />
                 <Button onClick={() => navigate(`/description/${job?._id}`)} className='bg-[#7209b7]'>Details</Button>
            </div>
        </div>
    )
}

export default SavedJobsCard