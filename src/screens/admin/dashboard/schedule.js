import { useState, useEffect } from "react";
import { ScheduleData } from "../../../firebase/getschedule";
import ScheduleForm from "./scheduleform";

export default function ScheduleDashboard() {
    const [isScheduleData, setIsScheduleData] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
            if ((await ScheduleData).exists()) {
                setIsScheduleData(true);
            } else {
                setIsScheduleData(false);
            };
        };
        fetchData();
    }, []);
    return(
        <>
        <div className="pt-2 md:h-screen">
        <div className="surface-200 shadow-3 box h-full flex flex-column">
            <p className="flex justify-content-center p-3 text-2xl font-bold">Schedule</p>
            {isScheduleData
                ? <p>Data</p>
                : <ScheduleForm/>}
        </div>
        </div>
        </>
    );
};