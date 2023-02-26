import { ReactNode, useEffect, useState, useRef } from 'react';

const ChangeHighlight = (props: { children: ReactNode }) => {
  const [x, setX] = useState(false);
  const toRef = useRef<any>(null);
  useEffect(() => {
    setX(true);
    toRef.current = setTimeout(() => {
      setX(false);
    }, 100);
    return () => {
      clearTimeout(toRef.current);
      toRef.current = null;
    };
  }, [props.children]);

  return (
    <div
      style={{
        transition: x ? '0s' : '.5s',
        background: x ? '#f001' : 'transparent',
        outline: x ? '2px solid #f002' : '2px solid transparent',
        borderRadius: '.2rem',
      }}
    >
      {props.children}
    </div>
  );
};

export default ChangeHighlight;
