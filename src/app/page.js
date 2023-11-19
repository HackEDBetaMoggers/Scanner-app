import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import CustomWebcam from './Components/Webcam'
import ReceiptTable from './Components/ReceiptTable'

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1 className='text-black text-center text-5xl mt-10 p-10'>HackedBeta 2023</h1>
      <h4 className='text-black text-center text-xl my-5'>Take a photo of your receipt</h4>
      <CustomWebcam />
      <Footer />
    </main>
  )
}
