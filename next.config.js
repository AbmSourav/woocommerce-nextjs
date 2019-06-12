const withCss = require( '@zeit/next-css' );
const path = require( 'path' );

const withOffline = require('next-offline');
const withSass = require( '@zeit/next-sass' );

const workBoxOptions = {
	workboxOpts: {
		swSrc: 'service-worker.js',
	}
};

module.exports = withOffline( withCss( withSass( {
	workboxOpts: workBoxOptions.workboxOpts,
	generateInDevMode: true,
	dontAutoRegisterSw: true,
	generateSw: false,
} ) ) );
