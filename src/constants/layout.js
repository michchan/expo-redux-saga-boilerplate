import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../lib/dimension'

export default {
    window: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    isSmallDevice: SCREEN_WIDTH < 375,
};