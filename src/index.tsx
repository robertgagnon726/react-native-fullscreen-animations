import React from 'react';
import { Dimensions } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { ConfettiItem } from './confetti-item';
import { randomColor, randomNumber } from './utils';

interface ConfettiRootProps {
  /** The number of pieces of confetti that should be rendered */
  count?: number;
  /** An array of the colors that the confetti items will be made from. These must be hex values */
  colors?: string[];
  /** The time in which it takes for the confetti items to fall. This value is in milliseconds */
  fallDuration?: number;
  /** Allows you to set the zIndex without a hacky solution */
  zIndex?: number;
  /** The number of milliseconds that the animation should wait to start */
  startDelay?: number;
  /** Function that runs before the animation is started */
  preAnimation?: () => void;
  /** Function that runs once the animation is completed */
  postAnimation?: () => void;
}

interface Res {
  height: number;
  width: number;
  color: string;
  left: number;
  top: number;
  shape: 'circle' | 'oval' | 'rect';
  rotate: number;
}

const DEFAULT_COLORS = ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'];

export const Confetti = ({
  count = Dimensions.get('screen').width / 2,
  colors = DEFAULT_COLORS,
  fallDuration = 10000,
  zIndex = 1000,
  startDelay = 0,
  preAnimation = () => {},
  postAnimation = () => {},
}: ConfettiRootProps) => {
  const _yOffset = useSharedValue(0);

  React.useEffect(() => {
    preAnimation();
    setTimeout(() => {
      _yOffset.value = 10;
    }, startDelay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      postAnimation();
    }, startDelay + fallDuration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = React.useMemo(() => {
    const MIN_SHORT = 4;
    const MAX_LONG = 16;
    const res: Res[] = [];
    for (let i = 0; i < count; i++) {
      const height = randomNumber(MIN_SHORT, MAX_LONG);
      const width = 8;
      const color = randomColor(colors);
      const left = randomNumber(0, Dimensions.get('window').width) - MAX_LONG;
      const top = randomNumber(-MAX_LONG, -500);
      const rotate = Math.round(randomNumber(0, 180));
      const init = Math.round(randomNumber(0, 2));
      const shape: 'rect' | 'circle' | 'oval' =
        init === 2 ? 'rect' : init === 1 ? 'circle' : 'oval';
      res.push({
        height,
        width,
        color,
        left,
        top,
        shape,
        rotate,
      });
    }
    return res;
  }, [colors, count]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      zIndex: 1000,
      position: 'absolute',
      transform: [
        {
          translateY: withTiming(_yOffset.value * 255, {
            duration: fallDuration,
            easing: Easing.out(Easing.linear),
          }),
        },
      ],
    };
  });
  return (
    <Animated.View style={[animatedStyles]}>
      {items.map(item => (
        <ConfettiItem
          key={`${item.left}-${item.top}`}
          height={item.height}
          width={item.width}
          color={item.color}
          left={item.left}
          top={item.top}
          shape={item.shape}
          rotate={item.rotate}
          zIndex={zIndex}
          fallDuration={fallDuration}
          startDelay={startDelay}
        />
      ))}
    </Animated.View>
  );
};
