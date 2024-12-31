import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchQuery(query));
        navigate("/browse")
    }

    return (
        <div className='px-3 sm:text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-normal text-sm sm:text-[15px]'>A buzzing hub for job opportunities</span>
                <h1 className='text-4xl sm:text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Job</span></h1>
                <p>Find your next opportunity with ease - connect, apply, and thrive in your dream career</p>
                <div className=' flex w-full sm:w-[40%] shadow-lg border-gray-200 pl-4 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream job'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full py-2'
                    />
                    <Button onClick={searchJobHandler} className='rounded-r-full bg-[#6A38C2]'>
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection