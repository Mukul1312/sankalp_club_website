import React, {useState, useEffect} from 'react'
import { FaArrowUp } from 'react-icons/fa';

import './ScrollToTop.css'

const ScrollToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else{
            setShowTopBtn(false);
        }
      })
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    

  return (
    <>
        {showTopBtn && (
            <div className='top-to-btm'>
              <FaArrowUp
                  className="icon-style"
                  onClick={goToTop}
              />
            </div>
        )}
    </>
  );
};

export default ScrollToTop;