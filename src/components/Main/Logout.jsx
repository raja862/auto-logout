import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useInactivityTimer = (timeoutDuration = 300000) => { // 5 minutes
  const navigate = useNavigate();

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        localStorage.removeItem('token'); // Clear token
        navigate('/login'); // Redirect to login page
      }, timeoutDuration);
    };

    const events = ['mousemove', 'keydown', 'click', 'scroll'];

    events.forEach(event => window.addEventListener(event, resetTimer));
    resetTimer(); // Start the timer

    return () => {
      events.forEach(event => window.removeEventListener(event, resetTimer));
      if (timer) clearTimeout(timer);
    };
  }, [navigate, timeoutDuration]);
};

export default useInactivityTimer;
