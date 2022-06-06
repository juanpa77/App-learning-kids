
export const wordAnimate = {
  initial: {
    opacity: 0,
    y: 600,
    x: 0
  },
  open: ([x, y]) => ({
    opacity: 1,
    scale: 3,
    y,
    x,
    transition: {
      // delay: 1,
      duration: 0.5
    },
    animate: {
      scale: 3,
      y: 100,
      x: 100
    }
  }),
  closed: {
    opacity: 0,
    y: 600,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
}
