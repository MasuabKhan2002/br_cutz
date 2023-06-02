import { useState, useEffect } from "react";
import { firestore } from "./config";
import { collection, getDocs } from "firebase/firestore";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function GetBookings() {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const bookingCollection = await getDocs(collection(firestore, "barbers", "betuel", "bookings"));
      setBookingData(bookingCollection.docs.map(doc => doc.data()));
    };
    fetchData();
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString('en-IE', { style: 'currency', currency: 'EUR' });
  };

  const timeTemplate = (booking) => {
    return booking.time.toDate().toLocaleString("en-IE");
  };

  const priceBodyTemplate = (booking) => {
    return formatCurrency(booking.price);
  };

  const footer = `In total there are ${bookingData ? bookingData.length : 0} Bookings.`;

  return (
    <DataTable value={bookingData} size="large" scrollable scrollHeight="520px" footer={footer} tableStyle={{ minWidth: '50rem' }} sortField="time" sortOrder={1}>
      <Column field="name" header="Name"/>
      <Column field="price" header="Amount" body={priceBodyTemplate}/>
      <Column field="time" header="Time" body={timeTemplate}/>
      <Column field="phone" header="Phone No."/>
    </DataTable>
  );
};