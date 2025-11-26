import download_app from '@/public/download_app.png'
import SectionTitle from '../common/SectionTitle'
import CommonBtn from '../common/CommonBtn'
import { IoLogoAppleAppstore } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const DownloadApp = () => {
    return (
        <section id="download-app" className="w-full lg:mb-20 flex flex-col items-center justify-start gap-3 lg:gap-6">
            <div className='w-full flex flex-col items-center justify-start px-4 gap-4'>
                <SectionTitle text='Take Your Library Anywhere' />
                <p className='text-center text-sm sm:text-base'>Read premium eBooks, trade physical books, and manage your library on the go. Available for iOS and Android.</p>
            </div>
            <div className='flex items-center w-full max-w-3xl md:flex-row flex-col justify-between px-4 gap-4 md:gap-10'>
                <CommonBtn className={`gap-3.5 px-6`}>
                    <span className='line-clamp-1'>Download on the App Store</span>
                    <IoLogoAppleAppstore  className='text-[#17C9FB] text-xl' />
                </CommonBtn>
                <CommonBtn className={`gap-3.5 px-6 bg-secondary`}>
                    <span className='line-clamp-1'>Download on the Play Store</span>
                    <IoLogoGooglePlaystore  className='text-[#FBBC04] text-xl' />
                </CommonBtn>
            </div>
            <div className='w-full lg:mt-10 mt-3 sm:mt-6 h-[350px] sm:h-[450px] lg:h-[600px] xl:h-[1000px] 2xl:h-[1400px] overflow-hidden'>
                <img src={download_app.src} alt="download app" className='w-full h-full object-fill' />
            </div>
        </section>
    )
}

export default DownloadApp