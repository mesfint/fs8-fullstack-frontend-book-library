import { VoidFunctionComponent } from 'react'
import { ApiError } from '../models/ApiError'
import React from 'react'

type ErrorMessageType = {
  error: ApiError
}
const ErrorMessage: VoidFunctionComponent<ErrorMessageType> = ({ error }) => {
  if (!error.source?.errors) {
    return <></>
  }
  return (
    <ul className="p-5 mb-5 bg-red-600 text-white list-inside list-disc">
      {Object.values(error.source?.errors).map((val) => (
        <li>{val.message}</li>
      ))}
    </ul>
  )
}
export default ErrorMessage
