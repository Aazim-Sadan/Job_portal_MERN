import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        allAdminJobs: [],
        singleJob: null,
        searchJobByText: "",
        allAppliedJobs: [],
        searchQuery: "",
        savedJobs: [],

    },
    reducers: {
        // actions 
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setAllAdminJobs: (state, action) => {
            state.allAdminJobs = action.payload;
        },
        setSearchJobByText: (state, action) => {
            state.searchJobByText = action.payload;
        },
        setAllAppliedJobs: (state, action) => {
            state.allAppliedJobs = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setSavedJobs: (state, action) => {
            if (!Array.isArray(state.savedJobs)) {
                state.savedJobs = [];
            }
            const jobExists = state.savedJobs.some(job => job._id === action.payload._id);
            if (!jobExists) {
                state.savedJobs = [...state.savedJobs, action.payload];
            }
        },
        removeSavedJob: (state, action) => {
            state.savedJobs = state.savedJobs.filter(job => job._id !== action.payload);
        }

    }
});

export const {
    setAllJobs,
    setSingleJob,
    setAllAdminJobs,
    setSearchJobByText,
    setAllAppliedJobs,
    setSearchQuery,
    setSavedJobs,
    removeSavedJob
} = jobSlice.actions;
export default jobSlice.reducer; 