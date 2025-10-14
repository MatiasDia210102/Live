import { useState, useEffect, useRef } from 'react';

export const useScrollReveal = (options) => { 
  
  const [esVisible, setIsVisible] = useState(false); 
  const elementRef = useRef(null); 

  useEffect(() => { 

    const observer = new IntersectionObserver(([entry]) => { 
      
      if (entry.isIntersecting) { 

        setIsVisible(true); 
      } 
    }, options); 

    if (elementRef.current) { 

      observer.observe(elementRef.current); 
    } 

    return () => { 

      if (elementRef.current) { 
        observer.unobserve(elementRef.current); 
      } 
    }; 
  }, [options]); 
  return [elementRef, esVisible]; 
};