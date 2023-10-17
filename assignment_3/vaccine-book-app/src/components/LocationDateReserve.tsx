"use client"

import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem, FormControl, TextField, InputLabel, Button, ButtonBase } from "@mui/material"
import Link from "next/link";

export default function LocationDateReserve() {
    const submitForm = () => {
        alert("Submit form successfully !");
    }
    return (
        <div className="bg-gradient-to-r from-sky-200 via-sky-300 to-cyan-300 rounded-lg space-x-5 
        space-y-2 px-8 py-6 flex justify-center shadow-md border-blue-800 border-[5px]">
            <FormControl variant="filled" className="flex justify-center space-y-[30px]" fullWidth>
                <p className="text-center text-black text-4xl font-bold">เเบบฟอร์มการจองรับวัคซีน</p>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex space-x-5 text-black">
                    <p className="pt-[20px] font-semibold text-[20px]">ชื่อ</p>
                    <TextField type="text" variant="standard" label="First name" />
                    <p className="pt-[20px] font-semibold text-[20px]">นามสกุล</p>
                    <TextField type="text" variant="standard" label="Last name" />
                </div>
                <div className="flex space-x-5 text-black">
                    <label className="pt-[20px] font-semibold text-[20px]">รหัสประจำตัวประชาชน</label>
                    <TextField type="text" variant="standard" label="Citizen ID" className="w-[300px]" />
                </div>
                <div className="flex space-x-5 text-black">
                    <p className="pt-[20px] font-semibold text-[20px]">โรงพยาบาล</p>
                    <FormControl>
                        <InputLabel className="pr-5">Hospital</InputLabel>
                        <Select variant="standard" name="location" id="location" label="Hospital" className="h-[2em] w-[250px]">
                            <MenuItem value="CU"> Chulalongkorn Hospital</MenuItem>
                            <MenuItem value="RH"> Rajavithi Hospital</MenuItem>
                            <MenuItem value="TU"> Thammasat University Hospital</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="flex space-x-5 text-black">
                    <p className="pt-[20px] font-semibold text-[20px]">วันที่ต้องการรับวัคซีน</p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="bg-white w-[200px] rounded-lg" />
                    </LocalizationProvider>
                </div>
                <Link href="/" className="block w-full">
                    <Button variant="contained" color="success" className="bg-emerald-600 h-[50px] rounded-lg w-full" onClick={submitForm}>
                        <span className="text-lg font-bold text-[20px]">Submit</span>
                    </Button>
                </Link>
            </FormControl>
        </div>
    )
}