import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { reportEmergency, trackEmergency } from "../api/emergencyApi";

export const submitEmergency  = createAsyncThunk( "emergency/submit", 
    async(payload, {rejectWithValue}) =>{
        try {
            const response = await reportEmergency(payload);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Enable to report emergency Something went wrong"
            );
        }
    }
);

export const fecthEmergencyByCode = createAsyncThunk("emergeny/track",
    async(accessCode, {rejectWithValue}) => {
        try {
           const response = await trackEmergency(accessCode);
            return response.data; 
        } catch (error) {
            return rejectWithValue(
                error.response?.data.message || "Emergency not found"
            );
        }
    }
);

const emergencySlice = createSlice({
    name: "emergency",
    initialState: {
        lastReported: null,
        tracked: null,
        loading: null,
        error: null,
    },
    reducers: {
        clearEmergencyState: (state) => {
            state.lastReported = null;
            state.tracked = null;
            state.error = null;
        },
    },
    extraReducers: (builder) =>{
        builder
            .addCase(submitEmergency.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(submitEmergency.fulfilled, (state, action) => {
                state.loading = false;
                state.lastReported = action.payload;
            })
            .addCase(submitEmergency.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fecthEmergencyByCode.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fecthEmergencyByCode.fulfilled, (state, action) => {
                state.loading = false;
                state.tracked = action.payload;
            })
            .addCase(fecthEmergencyByCode.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload 
            });
    
    }
})

export const {clearEmergencyState} = emergencySlice.actions;
export default emergencySlice.reducer;