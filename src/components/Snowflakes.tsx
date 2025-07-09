// src/components/Snowflakes.tsx
import { useEffect, useState, useRef, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface Snowflake {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const Snowflakes: React.FC = () => {
  const { theme } = useTheme();
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const snowflakeIdCounter = useRef(0);

  const createSnowflake = useCallback((): Snowflake => {
    snowflakeIdCounter.current += 1;
    return {
      id: snowflakeIdCounter.current,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 0.5 + Math.random() * 1
    };
  }, []);

  useEffect(() => {
    const initialFlakesCount = 50;
    const initialFlakes = Array.from({ length: initialFlakesCount }, () => {
      const flake = createSnowflake();
      flake.delay = Math.random() * -flake.duration;
      return flake;
    });
    setSnowflakes(initialFlakes);

    const spawnInterval = setInterval(() => {
      setSnowflakes((prevFlakes) => {
        const newFlake = createSnowflake();
        const maxActiveFlakes = 100;
        
        return [...prevFlakes.slice(Math.max(0, prevFlakes.length - maxActiveFlakes + 1)), newFlake];
      });
    }, 500);

    return () => clearInterval(spawnInterval);
  }, [createSnowflake]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className={cn(
            "absolute rounded-full",
            "animate-snow"
          )}
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            fontSize: `${flake.size}rem`,
            color: theme === 'dark' ? 'white' : 'black'
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default Snowflakes;
