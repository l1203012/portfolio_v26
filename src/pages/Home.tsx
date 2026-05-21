import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Skills } from '../sections/Skills'
import { Certifications } from '../sections/Certifications'
import { Hobbies } from '../sections/Hobbies'
import { Contact } from '../sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Hobbies />
      <Contact />
    </>
  )
}
