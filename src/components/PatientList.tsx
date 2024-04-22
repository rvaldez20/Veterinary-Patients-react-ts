import { usePatientStore } from "../store"
import PatientInfo from './PatientInfo'


export function PatientList() {

  const patients = usePatientStore((state) => state.patients)
  // console.log(patients)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length
        ? (
            <>
              <h2 className="font-bold text-3xl text-center">List Patients</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                Manage yours {''}
                <span className="text-indigo-600 font-bold">Patients and Appointments</span>
              </p>

              {patients.map(patient => (
                <PatientInfo
                  key={patient.id}
                  patient={patient}
                />
              ))}

            </>
          )
        : (
            <>
              <h2 className="font-bold text-3xl text-center">No Patients</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                Start add Patients {''}
                <span className="text-indigo-600 font-bold">show the patients list here</span>
              </p>
            </>
          )
      }
    </div>
  )
}
