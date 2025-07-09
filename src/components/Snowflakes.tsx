// src/components/Snowflakes.tsx (Versão Melhorada)
import { useEffect, useState, useRef, useCallback } from 'react';

const Snowflakes = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);
  const snowflakeIdCounter = useRef(0); // Para garantir IDs únicos para cada floco

  // Função para criar um único floco de neve
  const createSnowflake = useCallback(() => {
    snowflakeIdCounter.current += 1;
    return {
      id: snowflakeIdCounter.current,
      left: Math.random() * 100, // Posição horizontal aleatória (0-100%)
      delay: Math.random() * 10, // Atraso da animação (até 10s) para escalonar o aparecimento
      duration: 15 + Math.random() * 10, // Duração da animação (entre 15s e 25s) para variar a velocidade de queda
      size: 0.5 + Math.random() * 1 // Tamanho (entre 0.5rem e 1.5rem)
    };
  }, []);

  useEffect(() => {
    // Gerar flocos iniciais para preencher a tela imediatamente
    const initialFlakesCount = 50;
    const initialFlakes = Array.from({ length: initialFlakesCount }, (_, i) => {
      const flake = createSnowflake();
      // Ajustar o atraso inicial para distribuir os flocos verticalmente na tela ao carregar
      flake.delay = Math.random() * -flake.duration; 
      return flake;
    });
    setSnowflakes(initialFlakes);

    // Configurar um intervalo para adicionar novos flocos continuamente
    const spawnInterval = setInterval(() => {
      setSnowflakes((prevFlakes) => {
        const newFlake = createSnowflake();
        // Limitar o número total de flocos ativos para otimizar a performance.
        // Remove os flocos mais antigos à medida que novos são adicionados.
        const maxActiveFlakes = 100; // Pode ajustar este valor conforme a densidade desejada
        
        return [...prevFlakes.slice(Math.max(0, prevFlakes.length - maxActiveFlakes + 1)), newFlake];
      });
    }, 500); // Gerar um novo floco a cada 500ms (pode ajustar a frequência)

    // Função de limpeza para parar o intervalo quando o componente for desmontado
    return () => clearInterval(spawnInterval);
  }, [createSnowflake]); // A dependência `createSnowflake` garante que a função é estável

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          // A classe `animate-snow` deve ser definida em `src/index.css`
          className="absolute animate-snow opacity-70"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            fontSize: `${flake.size}rem`,
            // A cor é controlada pela classe `animate-snow` no CSS, que usa `--foreground`
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default Snowflakes;