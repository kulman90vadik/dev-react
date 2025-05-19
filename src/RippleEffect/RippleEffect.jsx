
import { useState, useEffect } from 'react';
import "../scss-setings/global.scss";



const RippleEffect = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const id = Date.now();
      const x = e.clientX;
      const y = e.clientY;

      setRipples(prev => [...prev, { id, x, y }]);
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== id));
      }, 600);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="ripple-container">
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            top: ripple.y - 25,
            left: ripple.x - 25,
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;