import Navbar     from '@/components/Navbar'
import Hero       from '@/components/Hero'
import Servicios  from '@/components/Servicios'
import Diagnostico from '@/components/Diagnostico'
import Nosotros   from '@/components/Nosotros'
import Resenas    from '@/components/Resenas'
import Tarifas    from '@/components/Tarifas'
import Contacto   from '@/components/Contacto'
import Footer     from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Diagnostico />
        <Nosotros />
        <Resenas />
        <Tarifas />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
