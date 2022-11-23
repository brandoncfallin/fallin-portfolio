import MainNav from './main-nav'
import MainFooter from './footer'
import { Main } from 'next/document'

export default function Layout({ children,darkMode,setDarkMode }) {
  return (
    <>
      <MainNav darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main>{children}</main>
      <MainFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  )
}