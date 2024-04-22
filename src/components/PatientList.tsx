import { usePatientStore } from "../store"


export function PatientList() {

  const patients = usePatientStore(state => state.patients)
  console.log(patients)

  return (
    <>
      <h3>PatientList</h3>
    </>
  )
}
