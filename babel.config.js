module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    '@components': './src/components',
                    '@screens': './src/screens',
                    '@navigation': './src/navigation',
                    '@services': './src/services',
                    '@store': './src/store',
                    '@hooks': './src/hooks',
                    '@utils': './src/utils',
                    '@constants': './src/constants',
                    '@types': './src/types',
                    '@assets': './src/assets',
                },
            },
        ],
        'react-native-reanimated/plugin',
        [
            'module:react-native-dotenv',
            {
                moduleName: '@env',
                path: '.env',
            },
        ],
    ],
};
