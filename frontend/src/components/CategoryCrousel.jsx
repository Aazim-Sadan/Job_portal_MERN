import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '@/redux/jobSlice'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Data Scientist",
    "Data Analyst",
    "SDE1",
    "Fullstack Developer",
    "DevOps"
]


const CategoryCrousel = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchQuery(query));
        navigate("/browse")
    }

    return (
        <div className='my-10 md:my-20'>
            <Carousel className='w-full max-w-xl mx-auto '>
                <CarouselContent >
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className='basis-1/2 lg:basis-1/3'>
                                <Button onClick={() => searchJobHandler(cat)} variant='outline' className='rounded-full'>{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCrousel