
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import CustomWebcam from './Components/Webcam'

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1 className='text-black text-center text-5xl mt-10 p-10'>HackedBeta 2023</h1>
      <CustomWebcam />
      <Footer />
    </main>
  )
}
