import React from 'react';
import { staffMembers } from "./data/mods.js";
import { useScrollReveal } from '../hooks/aparicion.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function StaffCarousel() {
 const [contentRef, isVisible] = useScrollReveal({ threshold: 0.1 });

 const transitionClasses = `transition-all duration-1000 ease-out ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
 }`;

 const swiperParams = {

  modules: [Autoplay, Pagination],
    pagination: {
        clickable: true,
    },
    
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
    
  loop: true,
  spaceBetween: 24,
  speed: 800,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: true, 

    breakpoints: {
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            centeredSlides: false,
        },

        1024: {
            slidesPerView: 4,     
            slidesPerGroup: 4,
            centeredSlides: false,
        },
    },
 };

 return (
    <section id="staff" className="py-7 bg-gray-950 text-white font-[Poppins]">

        <div className="container mx-auto max-w-6xl px-6">

                <h2 className={`text-4xl font-bold text-center mb-12 text-cyan-400 ${transitionClasses}`} style={{ transitionDelay: '0ms' }}>
                    Conoce al Staff
                </h2>

                <div ref={contentRef} className="w-full">
                    
                    <Swiper {...swiperParams} className="w-full h-auto relative pb-10">
                    
                        {staffMembers.map((member, index) => (
                            
                            <SwiperSlide key={index} className="w-full" style={{ transitionDelay: `${100 * (index + 1)}ms` }}>{}

                                <div className="w-full flex justify-center">
                                    
                                    <StaffCard member={member} transitionClasses={transitionClasses} index={index}/>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
        </div>
    </section>
 );
}

function StaffCard({ member, transitionClasses, index }) {
    return (
        <div className={`relative w-full max-w-xs h-96 rounded-xl overflow-hidden shadow-xl 
         bg-slate-800 transition-all duration-500 cursor-pointer group 
        ${transitionClasses}`} style={{ transitionDelay: `${100 * (index + 1)}ms` }}>
            
            <img src={member.image} alt={`Foto de ${member.name}`} className=" w-full h-full object-cover  transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-50"/>
            
            <div className="absolute inset-0 bg-black/50 transition-all duration-500 group-hover:bg-black/70"></div>
            
            <div className="absolute inset-0 flex flex-col items-center p-4 text-center">
                
                <div className="w-full mb-4"> 
                    <h3 className="text-3xl font-bold text-yellow-400 drop-shadow-lg">{member.name}</h3>
                    <p className="text-2x1 text-pink-400 font-semibold">{member.role}</p>
                </div>

                <div className="w-full">
                    <p className="text-lg text-gray-200 transition-opacity duration-500 mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0}">
                        {member.description}
                    </p>
                </div>
            </div>
        </div>
    );
}