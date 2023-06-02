import GetBookings from "../../firebase/getbookings";

export default function BookingDashboard() {
    return(
        <>
        <div className="h-screen pt-4">
        <div className="surface-200 shadow-3 box h-full flex flex-column">
            <p className="flex justify-content-center p-4 text-2xl font-bold">Bookings</p>
            <GetBookings/>
        </div>
        </div>
        </>
    );
};