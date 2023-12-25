import esbuild from 'esbuild';

esbuild.build ({
    entryPoints : ['src/index.ts'],
    bundle : true,
    minify : true,
    sourcemap : true,
    outdir : 'dist',
    format : 'esm',
});

esbuild.build ({
    entryPoints : ['src/index.ts'],
    bundle : true,
    minify : true,
    sourcemap : true,
    outdir : 'dist',
    format : 'cjs',
    outExtension :{
        ".js":".cjs",
    }
});