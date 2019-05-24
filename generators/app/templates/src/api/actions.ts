export enum Type {
  SUCCEED = 'Api/SUCCEED',
  FAIL = 'Api/FAIL'
}

export interface FailPayload {
  error: string | Error,
  uri: string,
  timestamp: Date
}

interface Fail {
  type: Type.FAIL,
  payload: FailPayload
}

export interface SucceedPayload {
  data: any,
  uri: string
}

export interface Succeed {
  type: Type.SUCCEED,
  payload: SucceedPayload
}

export type Action = Fail | Succeed

export function fail(
  { error, uri }:
    { error: string | Error, uri: string }
): Fail {
  return {
    type: Type.FAIL,
    payload: { error, uri, timestamp: new Date() }
  }
}

export function succeed(payload: SucceedPayload): Succeed {
  return { type: Type.SUCCEED, payload }
}
