import { createAction, props } from "@ngrx/store";

export const login = createAction(
    '[Auth Collection] Login',
    props<{status: boolean}>()
);

export const logout = createAction(
    '[Auth Collection] Logout',
);