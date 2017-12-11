let transform = [
    [
        "babelify",
        {
            "presets": [
                "es2015"
            ],
        }
    ]
];
module.exports = {
    build: {
        files: {
            'dist/tooltip.js': ['src/tooltip.js']
        },
        browserifyOptions: {
            standalone: 'tooltip',
            transform
        },
        minifyFiles: {
            'dist/tooltip-min.js': ['dist/tooltip.js']
        },
        bannerFiles: ['dist/*']
    },
    tests: {
        mocha: {
            files: ['tests/*.js'],
            transform
        }
    }
};
