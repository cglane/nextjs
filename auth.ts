
// import {cookies} from "next/headers";

export type Session = {
  token: string,
  user: User,
}
export type User = {
  id: string;
  name: string;
  firm: Firm
};

export type Firm = {
  id: string;
  name: string;
};
export  function getSession() : Session {
  return {
    "token": "hello",
    // "token": cookies().get('auth_session')?.value || "",
    "user": {
      "id": "123",
      "name": "Charles Lane",
      "firm": {
        "id": "123",
        "name": "Atticus Finch Law"
      }
    }    
  }
    // const session = cookies().get('auth_session')?.value || ""
    // return session
}

export function setSession() {
  // cookies().set('auth_session', '')
}