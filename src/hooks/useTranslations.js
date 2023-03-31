import { createContext, useContext, useState } from 'react'
import trans from '../trans/trans'

export const TransContext = createContext(null)

export function TransContextProvider ({ children }) {
  const [lang, setLang] = useState('en')
  const contextValue = {
    lang,
    setLang,
    toogleLang: () => setLang(prev => prev === 'en' ? 'es' : 'en')
  }

  return (
    <TransContext.Provider value={contextValue}>
      {children}
    </TransContext.Provider>
  )
}

export function useTranslation () {
  const { lang, setLang, toogleLang } = useContext(TransContext)
  return {
    t: (key, defaultText) => {
      try {
        const text = trans[key][lang]
        return text
      } catch (e) {
        return defaultText || key
      }
    },
    lang,
    setLang,
    toogleLang
  }
}
