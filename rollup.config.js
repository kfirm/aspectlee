//--input src/index.js --output dist/index.js --format es --name Aspectlee

import uglify from 'rollup-plugin-uglify';

export default {
    input: 'src/index.js',
    output:{
        file: 'dist/index.js',
        name: 'Aspectlee',
        format: 'es'
    },
    plugins: [
        uglify()
    ]
}