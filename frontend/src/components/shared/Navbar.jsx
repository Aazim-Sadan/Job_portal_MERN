import React from 'react'
import { Link } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { LogOut, SaveAll, User2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { useNavigate } from 'react-router-dom'
import { setUser } from '@/redux/authSlice'

const Navbar = () => {

    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`https://job-portal-mern-z2za.onrender.com/api/v1/user/logout`, { withCredentials: true })
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);

        }
    }



    return (
        <div className=' bg-white mx-2'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div >
                    <h1 className='text-2xl font-bold' > <Link to="/">Work<span className='text-[#F83002]'>Hive</span></Link></h1>
                </div>
                <div className='flex items-center gap-4 sm:gap-12'>
                    <ul className='flex font-medium items-center gap-3 sm:gap-5'>
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies">Companies</Link> </li>
                                    <li><Link to="/admin/jobs">Jobs</Link> </li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/">Home</Link> </li>
                                    <li><Link to="/jobs">Jobs</Link> </li>
                                    <li><Link to="/browse">Browse</Link> </li>
                                </>
                            )
                        }
                    </ul>

                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button variant="outline">Login</Button></Link>
                                <Link to="/signup"> <Button className="bg-[#6A38C2] hover:bg-[#5b29b1] ">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover >
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className='w-80 z-50 bg-white border-1 shadow-md rounded-xl'>
                                    <div className='pl-4 py-2 mt-0.5  relative '>
                                        <div className='flex gap-4 space-y-2'>
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>{user?.fullname}</h4>
                                                <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col my-2 text-gray-600'>
                                            {
                                                user && user.role === 'student' && (
                                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                        <User2 />
                                                        <Button variant="link"><Link to='/profile'>View Profile</Link> </Button>
                                                    </div>
                                                )
                                            }
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <SaveAll />
                                                <Button variant="link"> <Link to='/savedjobs'> Saved Jobs</Link></Button>
                                            </div>
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <LogOut />
                                                <Button onClick={logoutHandler} variant="link">Logout</Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar