import React from 'react'

const Footer = () => {
  return (
    <div className=' flex flex-col items-center justify-center w-full h-full py-12 bg-gray-900 gap-12' >
        <div className=' flex flex-col items-center justify-center gap-2.5' >
            <h5 className='text-white text-2xl'>Join the Adventure newsletter to receive our best vacation deals</h5>
            <p className='text-white text-xl' >You can unsubscribe at any time.</p>
            <div className=' flex items-center justify-center gap-2'>
                <input className=' text-black w-52 h-8' type="text" placeholder='Email' />
                <button className='bg-transparent text-white w-[8vw] h-8 border-white border-solid border-2' >Subscribe</button>
            </div>
        </div>

        <div className='flex gap-14'>
            <div className='flex flex-col gap-2' >
                <h5 className='text-white text-lg font-bold'>About Us</h5>
                <ul className='flex flex-col gap-1.5' >
                    <li className='text-white text-base' >How it works</li>
                    <li className='text-white text-base'>Testimonials</li>
                    <li className='text-white text-base'>Careers</li>
                    <li className='text-white text-base'>Investors</li>
                    <li className='text-white text-base'>Terms of service</li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h5 className='text-white text-lg font-bold'>Contact Us</h5>
                <ul className='flex flex-col gap-1.5' >
                    <li className='text-white text-base' >How it works</li>
                    <li className='text-white text-base'>Testimonials</li>
                    <li className='text-white text-base'>Careers</li>
                    <li className='text-white text-base'>Investors</li>
                    <li className='text-white text-base'>Terms of service</li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h5 className='text-white text-lg font-bold'>Videos</h5>
                <ul className='flex flex-col gap-1.5' >
                    <li className='text-white text-base' >How it works</li>
                    <li className='text-white text-base'>Testimonials</li>
                    <li className='text-white text-base'>Careers</li>
                    <li className='text-white text-base'>Investors</li>
                    <li className='text-white text-base'>Terms of service</li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h5 className='text-white text-lg font-bold'>Social Media</h5>
                <ul className='flex flex-col gap-1.5' >
                    <li className='text-white text-base' >How it works</li>
                    <li className='text-white text-base'>Testimonials</li>
                    <li className='text-white text-base'>Careers</li>
                    <li className='text-white text-base'>Investors</li>
                    <li className='text-white text-base'>Terms of service</li>
                </ul>
            </div>
        </div>
    
    </div>
  )
}

export default Footer