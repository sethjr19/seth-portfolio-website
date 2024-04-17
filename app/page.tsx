import Skills from '@/components/Skills'
import Experience from '@/components/experience'
import Me from '@/components/me'
import Projects from '@/components/projects'
import SectionDivider from '@/components/sectiondivider'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Me/>
      <SectionDivider/>
      <Skills/>
      <SectionDivider/>
      <Projects/>
      <Experience/>
    </main>
  )
}
