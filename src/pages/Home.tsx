import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Navbar } from '@/components/navbar/Navbar'
import { Hero } from '@/components/hero/Hero'
import { About } from '@/components/about/About'
import { Services } from '@/components/services/Services'
import { Industries } from '@/components/industries/Industries'
import { Strengths } from '@/components/strengths/Strengths'
import { Clients } from '@/components/clients/Clients'
import { Vision } from '@/components/vision/Vision'
import { Contact } from '@/components/contact/Contact'
import { Footer } from '@/components/footer/Footer'

export function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hindustan Networks LLP – Comprehensive Network & Communication Solutions</title>
        <meta
          name="description"
          content="Hindustan Networks LLP delivers end-to-end network and communication infrastructure solutions including LAN, fiber, CCTV, WiFi, servers and more in Shadnagar, Telangana."
        />
        <meta name="keywords" content="network solutions, structured cabling, CCTV, WiFi, fiber optic, Shadnagar, Telangana, Internet leased line" />
        <meta property="og:title" content="Hindustan Networks LLP" />
        <meta property="og:description" content="Powering businesses with reliable, secure and scalable network infrastructure." />
        <link rel="canonical" href="https://hindustannetworks.com" />
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Strengths />
        <Clients />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </HelmetProvider>
  )
}
