import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

export default function ScheduleForm() {
    const [viewDuration, setViewDuration] = useState(false);
    const [loading, setLoading] = useState(false);
    const [time, setTime] = 
        useState(
        [{day: "Monday", start: null, end: null}, 
        {day: "Tuesday", start: null, end: null}, 
        {day: "Wednesday", start: null, end: null}, 
        {day: "Thursday", start: null, end: null}, 
        {day: "Friday", start: null, end: null}, 
        {day: "Saturday", start: null, end: null}, 
        {day: "Sunday", start: null, end: null}]
    );

    const updateFieldChanged = (index, type) => e => {
        let newArr = [...time];
        newArr[index] = { ...newArr[index], [type]: e.value };
        setTime(newArr);
    };

    const handleTimeSubmit = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setViewDuration(true);
        }, 1000);
    };

    const handleDayOff = (index) => {
        let newArr = [...time];
        newArr[index] = { ...newArr[index], start: null, end: null};
        setTime(newArr);
    };

    return (
        <>
            <div className="flex justify-content-center">
                <p className="text-xl font-semibold">Log your Schedule here</p>
            </div>
            <div>
                {viewDuration
                ? <Duration timeData={time}/>
                : <div className="p-2">
                    {time.map((day, index) => (
                        <div className="" key={index}>
                            <p className="text-lg text-center p-2">{day.day}</p>
                            <div className="flex justify-content-center pt-2">
                                <span className="p-float-label">
                                  <Calendar className="p-2" id="calendar-timeonly" value={day.start} onChange={updateFieldChanged(index, "start")} inputId="start_time" timeOnly />
                                   <label htmlFor="start_time">Start</label>
                                </span>
                                <span className="p-float-label">
                                    <Calendar className="p-2" id="calendar-timeonly" value={day.end} onChange={updateFieldChanged(index, "end")} inputId="end_time" timeOnly />
                                    <label htmlFor="end_time">End</label>
                                </span>
                                <div className="p-2">
                                    <Button label="Day off" onClick={() => handleDayOff(index)}/>
                                </div>
                            </div>
                        </div>))}
                    </div>}
                    <div className="flex justify-content-between flex-wrap p-2">
                            <Button label="Back" disabled={!viewDuration} onClick={() => setViewDuration(false)}/>
                            {viewDuration
                            ? <Button label="Submit"/>
                            : <Button label="Next" raised loading={loading} onClick={handleTimeSubmit}/>}
                    </div>
            </div> 
        </>
    );
};

function Duration( timeData ) {
    const [duration, setDuration] = useState(null);
    const durations = [
        { label: "Next Week", value: 1 },
        { label: "Next Month", value: 4 },
        { label: "Next Year", value: 52 },
    ];
    console.log(duration);
    console.log(timeData)
    return (
        <div className="p-2">
            <p className="text-lg text-center p-2">Set the duration of schedule</p>
            <div className="flex justify-content-center p-2">
                <Dropdown value={duration} className="w-5" placeholder="Select the duration" onChange={(e) => setDuration(e.value)} options={durations} optionLabel="label"/>
            </div>
        </div>
    )
};