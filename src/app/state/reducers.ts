import { userState } from './../models/user.state';
import { loadInitialSession, loadSession, loadUser } from './actions';
import { createReducer, on } from '@ngrx/store';
export const initialUserState: userState = {
  session: false,
  user: undefined
}


export const sessionReducer = createReducer(
  initialUserState,
  on(loadInitialSession, (initState) => ({...initState}) ),
  on(loadSession, (initState, props) => {
    return {...initState, session:props.session};
  }),
  on(loadUser, (initState, props) => {
    return {...initState, user: props.user}
  })
)

