import { setAllAdminJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'

const useGetAllAdminJobs = () => {


    const dispatch = useDispatch();
    const { user } = useSelector(store => store.auth);

    const token = user?.token || localStorage.getItem("token");

    useEffect(() => {

        if (!token) {
            toast.error("User is not authenticated. Please log in again.");
            return;
        }


        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`,
                    {
                        headers: { "Authorization": `Bearer ${token}` },
                        withCredentials: true
                    }
                )

                if (res.data.success) {
                  dispatch(setAllAdminJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
      fetchAllAdminJobs();
    }, [])
}

export default useGetAllAdminJobs