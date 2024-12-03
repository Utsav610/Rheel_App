import { Dimensions, PixelRatio } from 'react-native';
const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT
} = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 390;
const heightBaseScale = SCREEN_HEIGHT / 844;

function normalize(size, based = 'width') {
	const newSize = (based === 'height') ? size * heightBaseScale : size * widthBaseScale;
	return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

/** for width  pixel */
const wp = (size) => {
	return normalize(size, 'width');
};

/** for height  pixel */
const hp = (size) => {
	return normalize(size, 'height');
};

/** for font  pixel */
const fontPixel = (size) => {
	return wp(size);
};

/** for Margin and Padding vertical pixel */
const pv = (size) => {
	return hp(size);
};

/** for Margin and Padding horizontal pixel */
const ph = (size) => {
	return wp(size);
};

export {
	wp,
	hp,
	fontPixel,
	pv,
	ph
};