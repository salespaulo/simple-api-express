
import * as uuid from 'uuid/v4'
import couchdb from '../db/couchdb';

/**
 * @property logged If user is logged on the system
 * @property token Auth token to access the system
 * @property score Readings score to gamefication'.
 */
class Session {
    score: number = 0
    token: any = null
    logged: boolean = false
  }
  
  class User {
    _id: string = ''
    _rev: string = ''
    name: string = ''
    password: string = ''
    phoneNumber: string = ''
    providerId: string = ''
    firebaseId: string = ''
    photoUrl: string = ''
    session: Session = new Session()
  }

  export { User, Session }
