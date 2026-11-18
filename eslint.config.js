
module.exports = [
    {
        files: ["**/*.js"],
        ignores: ["node_modules/**", "coverage/**"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                module: "readonly",
                require: "readonly",
                test: "readonly",
                expect: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",
            "semi": ["error", "always"],
            "eqeqeq": "error"
        }
    }
];
