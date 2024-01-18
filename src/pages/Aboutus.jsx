import React from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import aboutMainImage from "../assets/images/aboutMainImage.png";
import billGates from "../assets/images/billGates.png";
import steveJobs from "../assets/images/steveJobs.png";
import apj from "../assets/images/apj.png";
import nelsonMandela from '../assets/images/nelsonMandela.png'

function Aboutus() {
  return (
    <HomeLayouts>
      <div className="flex flex-col text-white  pl-20 pt-20">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality eductaion
            </h1>
            <p className="text=xl text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              nisi cumque ea natus nam recusandae expedita, aspernatur autem! At
              provident praesentium quo animi et a cum commodi quis? Accusamus ?
            </p>
          </section>
          <div className="w-1/2">
            <img
              src={aboutMainImage}
              alt="about main page"
              className="drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="carousel w-1/2 my-10 mx-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className='text-xl text-gray-200'>Teaching is a very noble profession that shapes the character, caliber, and future of an individual.</p>
                            <h3 className='text-2xl font-semibold'>APJ Abdul Kalam</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                         <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className='text-xl text-gray-200'>We dont get a chance to do that many things, and every one should be really excellent.</p>
                            <h3 className='text-2xl font-semibold'>Steve Jobs</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={billGates} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className='text-xl text-gray-200'>Success is a lousy teacher. It seduces smart people into thinking they can’t lose.</p>
                            <h3 className='text-2xl font-semibold'>Bill Gates</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className='text-xl text-gray-200'>Education is the most powerful tool you can use to change the world.</p>
                            <h3 className='text-2xl font-semibold'>Nelson Mandela</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
      </div>
      </div>
    </HomeLayouts>
  );
}

export default Aboutus;
