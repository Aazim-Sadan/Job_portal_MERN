import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '@/redux/jobSlice'

const filterData = [
    {
        filterType: "Location",
        array: ["New Delhi", "Bangalore", "Hyderabad", ]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer", ]
    },
    {
        filterType: "Salary",
        array: ["0-40k", "42k-1L", "1L-5L"]
    }
]

const FilterCard = () => {

    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValue(value);
    }

    const clearSelection = () => {
        setSelectedValue('');
    };
    
    useEffect(() => {
        dispatch(setSearchQuery(selectedValue));
    }, [selectedValue])


    return (
        <div className=' w-full bg-white px-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {
                    filterData.map((data, index) => (
                        <div className='max-sm:grid max-sm:grid-cols-4'>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item, idx) => {
                                    const itemId = `id${index}-${idx}`
                                    return (
                                        <div className='flex items-center space-x-2 my-2 '>
                                            <RadioGroupItem value={item} id={itemId} />
                                            <Label htmlFor={itemId}>{item}</Label>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    ))
                }
            </RadioGroup>

            <button
                onClick={clearSelection}
                className="mt-3 px-5 py-1 font-bold bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
                Clear
            </button>

        </div>
    )
}

export default FilterCard