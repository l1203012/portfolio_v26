import { Hero } from '../sections/Hero'
import { Videos } from '../sections/Videos'
import { Skills } from '../sections/Skills'
import { Certifications } from '../sections/Certifications'
import { Contact } from '../sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <Videos />
      <Skills />
      <Certifications />
      <Contact />
    </>
  )
}
