
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import CustomWebcam from './Components/Webcam'

const sample = {'1 12" Tuna Sub': '12.69', 'Sub Total': '12.65', 'GST (5%)': '0.63', 'Total (Eat In)': '13.32', 'es': '0.68', 'otal (With Tips)': '15.00'}

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1 className='text-black text-center text-5xl mt-10 p-10'>HackedBeta 2023</h1>
      <CustomWebcam />

      <div>
        <table className='container text-black text-center'>
            <thead>
              <tr>
                <th></th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(sample).map(twoitem => (
                    <tr>
                      <td>
                        {twoitem[0]}
                      </td>
                      <td>
                        {twoitem[1]}
                      </td>
                    </tr>
                ))
            
              }
          </tbody>
        </table>
      </div>
  
      <Footer />
    </main>
  )
}
