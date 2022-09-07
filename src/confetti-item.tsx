import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";

interface ConfettiItemProps {
  height: number;
  width: number;
  color: string;
  left: number;
  top: number;
  shape: "rect" | "circle" | "oval";
  rotate: number;
  zIndex: number;
  fallDuration: number;
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
  fallDuration,
}: ConfettiItemProps) => {
  const _yOffset = useSharedValue(0);

  React.useEffect(() => {
    const randomNumber = (min: number, max: number) => {
      const res = Math.random() * (max - min) + min;
      return res;
    };

    _yOffset.value = randomNumber(0, 5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    const randomNumber = (min: number, max: number) => {
      const res = Math.random() * (max - min) + min;
      return res;
    };

    const rotateDuration = randomNumber(500, 1000);

    const leftEnd = randomNumber(
      left - ((height + width) * 2) / 2,
      left + ((height + width) * 2) / 2
    );

    const topEnd = randomNumber(
      top - ((height + width) * 2) / 2,
      top + ((height + width) * 2) / 2
    );

    const leftSpeed = randomNumber(500, 1500);
    const topSpeed = randomNumber(500, 1500);

    const borderRadius = shape === "circle" ? 25 : shape === "oval" ? 15 : 1;

    return {
      backgroundColor: color,
      height,
      width,
      zIndex,
      position: "absolute",
      left: withRepeat(
        withSequence(
          withTiming(left, {
            duration: leftSpeed,
            easing: Easing.linear,
          }),
          withTiming(leftEnd, {
            duration: leftSpeed,
            easing: Easing.linear,
          })
        ),
        -1,
        true
      ),
      // top,
      top: withRepeat(
        withSequence(
          withTiming(top, {
            duration: topSpeed,
            easing: Easing.linear,
          }),
          withTiming(topEnd, {
            duration: topSpeed,
            easing: Easing.linear,
          })
        ),
        -1,
        true
      ),
      borderRadius,
      transform: [
        {
          rotateX: withRepeat(
            withSequence(
              withTiming(`${0}deg`, {
                duration: rotateDuration,
                easing: Easing.linear,
              }),
              withTiming(`${180}deg`, {
                duration: rotateDuration,
                easing: Easing.linear,
              })
            ),
            -1,
            true
          ),
        },
        {
          rotateY: withRepeat(
            withSequence(
              withTiming(`${0}deg`, {
                duration: rotateDuration,
                easing: Easing.linear,
              }),
              withTiming(`${180}deg`, {
                duration: rotateDuration,
                easing: Easing.linear,
              })
            ),
            -1,
            true
          ),
        },
        {
          rotateZ: withRepeat(
            withSequence(
              withTiming(`${0}deg`, {
                duration: rotateDuration,
                easing: Easing.linear,
              }),
              withTiming(`${180}deg`, {
                duration: rotateDuration,
                easing: Easing.linear,
              })
            ),
            -1,
            true
          ),
        },
        { rotate: `${rotate}deg` },
      ],
    };
  });

  const containerAnimatedStyles = useAnimatedStyle(() => {
    return {
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
    <Animated.View style={containerAnimatedStyles}>
      <Animated.View style={animatedStyles} />
    </Animated.View>
  );
};
