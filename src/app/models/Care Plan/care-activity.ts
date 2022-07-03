import { Appointment } from "./appointment";
import { Medication } from "./medication";
import { NutritionOrder } from "./nutrition-order";

export interface CareActivity {
    Id:              number;
    Periodicity:     number;
    Description:     string;
    Duration:        number;
    Location:        string;
    OutcomeCode:          string;
    TypeActivity:         number;
    ActivityCode:         string;
    Name:            string;
    Medications?:     Medication;
    NutritionOrders?: NutritionOrder;
    Appointments?:    Appointment;
}
