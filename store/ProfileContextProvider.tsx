// store/ProfileContextProvider.tsx
"use client";

import React, { Dispatch, createContext, useReducer, PropsWithChildren } from 'react';

type ProfileState = {
  email: string | null,
  username: string | null;
};

type ProfileActions = {
  type: string;
  payload: string;
};

const initialState: ProfileState = {
  username: null,
  email: null,
};

const reducer = (state: ProfileState, action: ProfileActions) => {
  switch (action.type) {
    case "CHANGE_USERNAME":
      return { ...state, username: action.payload };
    case "CHANGE_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export const ProfileContext = createContext<{
  state: ProfileState;
  dispatch: Dispatch<ProfileActions>;
}>({ state: initialState, dispatch: () => null });

export const ProfileContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );

};
