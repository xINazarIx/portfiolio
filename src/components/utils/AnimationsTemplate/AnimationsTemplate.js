const scaleAnimations = {
  hidden: {
    cursor: 'default',
    opacity: 0,
    scale: .5
  },
  visible: custom => ({
    cursor: 'pointer',
    opacity: 1,
    scale: 1,
    transition: {delay: custom * 0.2}
  })
}

const opacityAnimations = {
  hidden: {
    opacity: 0
  },
  visible: custom => ({
    opacity: 1,
    transition: {delay: custom * 0.2}
  }),
}

const opacityHoverAnimations = {
  hidden: {
    opacity: 0
  },
  hover: custom => ({
    opacity: 1,
    transition: {delay: custom * 0.2}
  })
}

const transformAnimations = {
  hidden: {
    opacity: 0,
    x: -200
  },
  visible: custom => ({
    opacity: 1,
    x: 0,
    transition: {delay: custom * 0.2}
  })
}

export {scaleAnimations, opacityAnimations, opacityHoverAnimations, transformAnimations}
