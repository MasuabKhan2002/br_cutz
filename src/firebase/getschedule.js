import { firestore } from "./config";
import { doc, getDoc } from "firebase/firestore";

const ScheduleData = getDoc(doc(firestore, "barbers", "betuel", "availibility", "week1"));
export {ScheduleData};