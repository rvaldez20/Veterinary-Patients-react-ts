import { Patient } from "../types"

type PatientInfoProps = {
  patient: Patient
}

export default function PatientInfo({patient}: PatientInfoProps) {

  console.log(patient)

  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
      {patient.name}
    </div>
  )
}
