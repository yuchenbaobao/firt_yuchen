// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {},
        "postcss-plugin-px2rem": {
            rootValue: 75,
            unitPrecision: 8,
            propWhiteList: [],
            propBlackList: [
                'border-radius',
                'box-shadow'
            ],
            selectorBlackList: [],
            ignoreIdentifier: false,
            replace: true,
            mediaQuery: false,
            minPixelValue: 2
        }
    }
}
