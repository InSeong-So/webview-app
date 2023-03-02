import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';

const config = ({
  stiffness,
  damping,
}: {
  stiffness: number;
  damping: number;
}): TransitionSpec => ({
  animation: 'spring',
  config: {
    stiffness,
    damping,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
});

export const transitionSpec: { open: TransitionSpec; close: TransitionSpec } = {
  open: config({ stiffness: 2000, damping: 1000 }),
  close: config({ stiffness: 1000, damping: 500 }),
};
