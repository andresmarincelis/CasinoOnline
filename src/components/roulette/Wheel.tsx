import { animate, utils } from 'animejs';
import { useEffect } from 'react';
import './styles.css';
import { rouletteWheelNumbers } from './utils';
import { useRouletteContext } from '../../contexts/RouletteContext';

export type WheelNumber = {
  next: number | string;
};

const Wheel = () => {
  const { winningNumber } = useRouletteContext();

  const totalNumbers = 37;
  const singleSpinDuration = 5000;
  const singleRotationDegree = 360 / totalNumbers;
  let lastNumber = 0;

  const getIndex = (n: string) => rouletteWheelNumbers.indexOf(parseInt(n));
  const rotationFrom = (n: string) => singleRotationDegree * getIndex(n);

  const getRandomEnd = (min: number, max: number) =>
    singleRotationDegree * utils.random(min * totalNumbers, max * totalNumbers);

  const zeroEnd = (rot: number) => 360 - Math.abs(rot % 360);
  const ballEnd = (zero: number, n: number) =>
    Math.abs(zero) + rotationFrom(n.toString());
  const ballSpins = (min: number, max: number) => 360 * utils.random(min, max);

  function resetRotation() {
    animate(['.layer-2', '.layer-4'], {
      rotate: 0,
      duration: 0,
    });
    animate('.ball-container', {
      rotate: 0,
      translateY: 0,
      duration: 0,
    });
  }

  function spinWheel(number: number) {
    resetRotation();

    const bezier = 'cubicBezier(0.165,0.84,0.44,1.005)';
    const end = -getRandomEnd(2, 4);
    const zeroR = zeroEnd(end);
    const ballRot = ballSpins(2, 4) + ballEnd(zeroR, number);

    // Rueda
    animate(['.layer-2', '.layer-4'], {
      rotate: [rotationFrom(lastNumber.toString()), end],
      duration: singleSpinDuration,
      easing: bezier,
      update: () => {
        // Opcional: logging por animación activa
      },
      complete: () => {
        lastNumber = number;
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

  useEffect(() => {
    if (winningNumber != null) spinWheel(parseInt(String(winningNumber)));
  }, [winningNumber]);

  return (
    <div className="roulette-wheel">
      <div className="layer-2 wheel" />
      <div className="layer-3" />
      <div className="layer-4 wheel" />
      <div className="layer-5" />
      <div className="ball-container">
        <div className="ball" />
      </div>
    </div>
  );
};
export default Wheel;
