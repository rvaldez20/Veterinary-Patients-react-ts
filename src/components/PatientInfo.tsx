import { Patient } from "../types"
import { PatientInfoDetail } from "./PatientInfoDetail"

type PatientInfoProps = {
  patient: Patient
}

export default function PatientInfo({patient}: PatientInfoProps) {
  console.log(patient)

  return (
    <div className="bg-white shadow-md rounded-xl px-5 py-10 mx-5 my-10">
      <PatientInfoDetail label={'ID'} data={patient.id} />
      <PatientInfoDetail label={'Name'} data={patient.name} />
      <PatientInfoDetail label={'Caretaker'} data={patient.caretaker} />
      <PatientInfoDetail label={'Email'} data={patient.email} />
      <PatientInfoDetail label={'Date'} data={patient.date.toString()} />
      <PatientInfoDetail label={'Symptoms'} data={patient.symptoms} />


    </div>
  )
}
