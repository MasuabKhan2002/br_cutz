import { useState, useEffect } from "react";
import { firestore } from "./config";
import { doc, getDoc } from "firebase/firestore";

export default function GetBarbers() {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const docRef = doc(firestore, "barbers", "Betuel")
        const snapshot = await getDoc(docRef);
        setData(snapshot.data());
    };

    fetchData();
  }, []);

  return (
    console.log(data)
  );
}
