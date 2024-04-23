import { usePatientStore } from "../store"
import { Patient } from "../types"
import { PatientInfoDetail } from "./PatientInfoDetail"

type PatientInfoProps = {
  patient: Patient
}

export default function PatientInfo({patient}: PatientInfoProps) {
  // console.log(patient)

  const deletePatient = usePatientStore((state) => state.deletePatient)

  return (
    <div className="bg-white shadow-md rounded-xl px-5 py-10 mx-5 my-10">
      <PatientInfoDetail label={'ID'} data={patient.id} />
      <PatientInfoDetail label={'Name'} data={patient.name} />
      <PatientInfoDetail label={'Caretaker'} data={patient.caretaker} />
      <PatientInfoDetail label={'Email'} data={patient.email} />
      <PatientInfoDetail label={'Date'} data={patient.date.toString()} />
      <PatientInfoDetail label={'Symptoms'} data={patient.symptoms} />

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        >Edit</button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => deletePatient(patient.id)}
        >Delete</button>
      </div>
    </div>
  )
}
