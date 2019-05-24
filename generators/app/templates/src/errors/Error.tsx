import React from 'react'
import { FailPayload } from '../api/actions'

interface Props {
  error: FailPayload
}

const Error = ({error: {error}}: Props) => {
  let message
  // Something very weird is making this condition evaluate to false when
  // actually running it, even though it shows up as true in the console
  // if (error instanceof Error) {
    message = (error as Error).message
  // } else {
  //   message = error
  // }
  return (<div style={{color: 'red'}}>{ message }</div>)
}

export default Error
