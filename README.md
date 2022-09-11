# react-native-fullscreen-animations

## Overview
react-native-fullscreen-animations is a library to provides easy to use fullscreen animations. It's based of react-native-reanimated which allows for good performance on both Android and iOS. For now, the main export is the `<Confetti />` component

If there are suggestions or ideas for improvement, please open up an issue and I'll try to get to it

<img src="./docs/assets/confetti.gif" alt="Confetti animation demo"/>

## Props

| Prop | Type | Required? | Default | Description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| count | number | No | Half of the device width | The number of pieces of confetti that should be rendered |
| colors | string[] | No | [`#a864fd`, `#29cdff`, `#78ff44`, `#ff718d`, `#fdff6a`] | An array of the colors that the confetti items will be made from. These must be hex values | 
| fallDuration | number | No | 10000 | The time in which it takes for the confetti items to fall. This value is in milliseconds |  
| zIndex | number | No | 1000 | Allows you to set the zIndex without a hacky solution |  
| startDelay | number | No | 0 | The number of milliseconds that the animation should wait to start |  
| preAnimation | () => void | No | () => {} | Function that runs before the animation is started |  
| postAnimation | () => void | No | () => {} | Function that runs once the animation is completed |  


## To do 

- [ ] Add tests and add the test report badge to the README
- [ ] Add to Circle CI and add the badge to the README
- [ ] Bundle so just the main exports can be imported
- [ ] Create interactive documentation
- [x] Doucment the props in the README
- [x] Confetti items are typically the same width. Make them all the same width and differing heights, but also rotate them to a random degree before they start falling
- [x] Simulate air resistance. Move them from left to right?
- [x] Add a pre animation callback
- [x] Add a post animation callback
- [x] Update default count to be dependent on screen width
- [x] Create a publish script that automatically builds and increments the version number
