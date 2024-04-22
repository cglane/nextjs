
import {cookies} from "next/headers";

export type User = {
    login: string;
}
export  function getSession() : string {
    const session = cookies().get('auth_session')?.value || ""
    return session
}

export function setSession() {
  cookies().set('auth_session', '')
}