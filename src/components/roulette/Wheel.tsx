import { animate, utils } from 'animejs';
import { useEffect, useRef } from 'react';
import { rouletteWheelNumbers } from './utils';
import { useRouletteContext } from '../../contexts/RouletteContext';
import wheelImage from './assets/wheel.svg';
import wheelPartImage from './assets/wheel_part.svg';
import './styles.css';

const Wheel = () => {
  const { winningNumber } = useRouletteContext();
  const lastNumberRef = useRef(0);
  const spinningInterval = useRef<any>(null);
  const angleRef = useRef(0);

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
    animate('.wheel-svg', {
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
    resetRotation(false);
    const bezier = 'cubicBezier(0.165,0.84,0.44,1.005)';
    const end = -getRandomEnd(2, 4);
    const zeroR = zeroEnd(end);
    const ballRot = ballSpins(2, 4) + ballEnd(zeroR, number) + 5;

    animate('.wheel-svg', {
      rotate: [0, end],
      duration: singleSpinDuration,
      easing: bezier,

      complete: () => {
        lastNumberRef.current = number;
      },
    });

    animate('.ball-container', {
      rotate: ballRot,
      translateY: [0, 20, 25, 50],
      duration: singleSpinDuration,
      easing: bezier,
    });
  }

  useEffect(() => {
    if (winningNumber == null) {
      if (spinningInterval.current) clearInterval(spinningInterval.current);
      spinningInterval.current = setInterval(() => {
        angleRef.current -= 2;
        animate('.wheel-svg', {
          rotate: angleRef.current,
          duration: 50,
          easing: 'linear',
        });
      }, 50);
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
      <div className="wheel-svg">
        <img src={wheelImage} alt="roulette wheel" className="wheel-base" />
        <img
          src={wheelPartImage}
          alt="wheel part"
          className="wheel-part-overlay"
        />
      </div>
      <div className="ball-container">
        {winningNumber != null && <div className="ball" />}
      </div>
    </div>
  );
};

export default Wheel;
