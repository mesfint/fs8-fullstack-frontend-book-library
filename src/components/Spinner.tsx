import { VoidFunctionComponent } from 'react'

const Spinner: VoidFunctionComponent = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-900" />
  </div>
)
export default Spinner
