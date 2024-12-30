import { setSingleCompany } from '@/redux/companySlice'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'

const useGetCompanyById = (companyId) => {


    const dispatch = useDispatch();
    const { user } = useSelector(store => store.auth);

    const token = user?.token || localStorage.getItem("token");

    useEffect(() => {

        // if (!token) {
        //     toast.error("User is not authenticated. Please log in again.");
        //     return;
        // }


        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`https://job-portal-mern-z2za.onrender.com/api/v1/company/get/${companyId}`,
                    {
                        headers: { "Authorization": `Bearer ${token}` },
                        withCredentials: true
                    }
                )


                if (res.data.success) {
                  dispatch(setSingleCompany(res.data.company));
                }
            } catch (error) {
                console.log(error);
            }
        }
      fetchSingleCompany();
    }, [companyId, dispatch])
}

export default useGetCompanyById