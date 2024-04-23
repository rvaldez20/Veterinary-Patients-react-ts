
type PatientInfoDetailProps = {
  label: string
  data: string
}

export function PatientInfoDetail({label, data}: PatientInfoDetailProps) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase"> {label}: {''}
      <span className="font-normal normal-case">{data}</span>
    </p>
  )
}
