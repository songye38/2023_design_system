import esbuild from 'esbuild';


//esmodule용 build
esbuild.build ({
    entryPoints : ['src/index.ts'],
    bundle : true,
    minify : true,
    sourcemap : true,
    outdir : 'dist',
    format : 'esm',
});


//cjs용 build 설정
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