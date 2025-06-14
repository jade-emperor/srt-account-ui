module.exports = function (api) {
    api.cache(false);

    const presets = [
        ["@babel/preset-typescript"],
        [
            "@babel/preset-env",
            {
                "corejs": { "version": 3},
                "useBuiltIns": "usage",
                "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safar": "11.1",
                }
            }
        ]
    ];

    const plugins = [
        ["@babel/plugin-proposal-decorators", {"decoratorsBeforeExport": true}],
        ["@babel/plugin-transform-class-properties"],
        ["@babel/plugin-transform-runtime"]
    ];

    return {
        presets, plugins
    };
}