import { animate, utils } from 'animejs';
import { useEffect, useRef } from 'react';
import './styles.css';
import { rouletteWheelNumbers } from './utils';
import { useRouletteContext } from '../../contexts/RouletteContext';

export type WheelNumber = {
  next: number | string;
};

const Wheel = () => {
  const { winningNumber } = useRouletteContext();
  const lastNumberRef = useRef(0);
  const spinningInterval = useRef<any>(null);
  const angleRef = useRef(0); // Mantener el ángulo acumulado

  const totalNumbers = 37;
  const singleSpinDuration = 5000;
  const singleRotationDegree = 360 / totalNumbers;

  const getIndex = (n: string) => rouletteWheelNumbers.indexOf(parseInt(n));
  const rotationFrom = (n: string) => singleRotationDegree * getIndex(n);

  const getRandomEnd = (min: number, max: number) =>
    singleRotationDegree * utils.random(min * totalNumbers, max * totalNumbers);

  const zeroEnd = (rot: number) => 360 - Math.abs(rot % 360);
  const ballEnd = (zero: number, n: number) =>
    Math.abs(zero) + rotationFrom(n.toString());
  const ballSpins = (min: number, max: number) => 360 * utils.random(min, max);

  function resetRotation(keepAngle = true) {
    animate(['.layer-2', '.layer-4'], {
      rotate: keepAngle ? angleRef.current : 0,
      duration: 0,
    });
    animate('.ball-container', {
      rotate: 0,
      translateY: 0,
      duration: 0,
    });
    if (!keepAngle) angleRef.current = 0;
  }

  function spinWheel(number: number) {
    resetRotation(false); // Solo resetea a 0 cuando hay spin real

    const bezier = 'cubicBezier(0.165,0.84,0.44,1.005)';
    const end = -getRandomEnd(2, 4);
    const zeroR = zeroEnd(end);
    const ballRot = ballSpins(2, 4) + ballEnd(zeroR, number);

    // Rueda
    animate(['.layer-2', '.layer-4'], {
      rotate: [0, end],
      duration: singleSpinDuration,
      easing: bezier,
      update: () => {},
      complete: () => {
        lastNumberRef.current = number;
        angleRef.current = end; // Cuando termina el spin, la rueda queda en la posición final
      },
    });

    // Bola
    animate('.ball-container', {
      rotate: ballRot,
      translateY: [0, 20, 25, 50],
      duration: singleSpinDuration,
      easing: bezier,
    });
  }

  // Animación constante si no hay winningNumber
  useEffect(() => {
    if (winningNumber == null) {
      if (spinningInterval.current) clearInterval(spinningInterval.current);
      spinningInterval.current = setInterval(() => {
        angleRef.current -= 2;
        animate(['.layer-2', '.layer-4'], {
          rotate: angleRef.current,
          duration: 75,
          easing: 'linear',
        });
      }, 75);
      return () => {
        if (spinningInterval.current) clearInterval(spinningInterval.current);
      };
    } else {
      if (spinningInterval.current) clearInterval(spinningInterval.current);
      spinWheel(parseInt(String(winningNumber)));
    }
  }, [winningNumber]);

  return (
    <div className="roulette-wheel">
      <div className="layer-2 wheel" />
      <div className="layer-3" />
      <div className="layer-4 wheel" />
      <div className="layer-5" />
      <div className="ball-container">
        {winningNumber != null && <div className="ball" />}
      </div>
    </div>
  );
};
export default Wheel;
