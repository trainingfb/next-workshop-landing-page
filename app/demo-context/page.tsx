// app/demo-context/page.tsx
"use client";

import { LanguageContext } from '@/store/LanguageContextProvider';
import { ProfileContext } from '@/store/ProfileContextProvider';
import { useContext } from 'react';

export default function Demo5() {
  const { language, setLanguage } = useContext(LanguageContext);
  const { state, dispatch } = useContext(ProfileContext);

  return (
    <main className="flex flex-col gap-2">
      <h1 className="widget-title">Context Counter</h1>

      <em>Set a global state clicking buttons. You can see the state updates in the navbar  </em>

      <div>
        <h1>Profile {state.username} - {state.email} </h1>
      </div>

      <div>
        <button
          className="bg-sky-700 rounded-xl p-2"
          onClick={
          () => dispatch({ type: "CHANGE_USERNAME", payload: 'fabio' })}
        > set username
        </button>

        <button
          className="bg-sky-700 rounded-xl p-2"
          onClick={
          () => dispatch({ type: "CHANGE_EMAIL", payload: 'hello@fabiobiondi.io' })}
        > set email
        </button>
      </div>


      <div>
        <button
          className="bg-sky-700 rounded-xl p-2"
          onClick={() => setLanguage('it')}> IT</button>
        <button
          className="bg-sky-700 rounded-xl p-2"
          onClick={() => setLanguage('en')}> EN </button>
      </div>
    </main>
  )
}
