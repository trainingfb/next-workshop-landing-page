// store/LanguageContextProvider.tsx
"use client";

import React, { createContext, PropsWithChildren, useState } from 'react';

type LanguageState =  'it' | 'en';

export const LanguageContext = createContext({
  language: 'it',
  setLanguage: (state: LanguageState) => {}
});

export const LanguageContextProvider = (
  { children }: PropsWithChildren
) => {
  const [language, setLanguage] = useState<LanguageState>('it')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );

};
