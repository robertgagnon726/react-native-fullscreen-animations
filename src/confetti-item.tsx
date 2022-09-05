import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

interface ConfettiItemProps {
  height: number;
  width: number;
  color: string;
  left: number;
  top: number;
  shape: 'rect' | 'circle' | 'oval';
  rotate: number;
  zIndex: number;
}

export const ConfettiItem = ({
  height,
  width,
  color,
  left,
  top,
  shape,
  rotate,
  zIndex,
}: ConfettiItemProps) => {
  const animatedStyles = useAnimatedStyle(() => {
    const randomNumber = (min: number, max: number) => {
      const res = Math.random() * (max - min) + min;
      return res;
    };

    const rotateDuration = randomNumber(500, 1000);

    const borderRadius = shape === 'circle' ? 25 : shape === 'oval' ? 15 : 1;

    return {
      backgroundColor: color,
      height,
      width,
      zIndex,
      position: 'absolute',
      left,
      top,
      borderRadius,
      transform: [
        {
          rotateX: withRepeat(
            withSequence(
              withTiming(`${180}deg`, {
                duration: rotateDuration,
                easing: Easing.linear,
              }),
              withTiming(`${0}deg`, {
                duration: rotateDuration,
                easing: Easing.linear,
              }),
            ),
            -1,
            true,
          ),
        },
        {
          rotateY: withRepeat(
            withSequence(
              withTiming(`${180}deg`, {
                duration: rotateDuration,
                easing: Easing.linear,
              }),
              withTiming(`${0}deg`, {
                duration: rotateDuration,
                easing: Easing.linear,
              }),
            ),
            -1,
            true,
          ),
        },
        { rotate: `${rotate}deg` },
      ],
    };
  });
  return (
      <Animated.View style={animatedStyles} />
  );
};
