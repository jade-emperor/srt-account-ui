module.exports = {
    roots: ["<rootDir>/src"],

    transform: {
        "^.+\\.(ts|js)x?$": "babel-jest",
        "^.+\\.(scss)$": "jest-scss-transform",
        "^.+\\.css$": "jest-preview/transform/css",
    },

    transformIgnorePattern: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx|mjs|cjs)$",
        "[/\\\\]node_modules[/\\\\].+\\.(css|scss|sass)$",
    ],

    testEnvironment: "jsdom",

    setupFiles: [
        "react-app-polyfill/jsdom"
    ],

    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ],

    testMatch: ["**/?(*.)+(spec|test).ts?(x)"],

    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
        "^src/(.*)": "<rootDir>/src/$1",
        "^@app/(.*)$": "<rootDir>/src/app/$1",
    },

    clearMocks: true,

    collectCoverage: true,
    collectCoverageFrom: [
        "**/src/app/components/**/*.{ts,tsx}",
        "!**/src/app/components/**/*.{stories.js, scss}",
    ],
    coverageDirectory: "src/coverage",
    coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
    coverageProvider: "babel",
    coverageReporters: ["json", "text", "html"],
    coverageThreshold: {
        global: {
            statements: 80,
            branches: 50,
            functions: 50,
            lines: 80,
        }
    }
}