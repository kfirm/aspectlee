
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
    input: 'src/index.js',
    output:{
        file: 'dist/index.node.js',
        format: 'umd',
        name: 'Aspectlee'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        uglify()
    ]
}