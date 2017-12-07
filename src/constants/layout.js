import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../lib/dimension'

export default {
    window: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    isSmallDevice: width < 375,
};