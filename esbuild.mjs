#!/usr/bin/env node
import {common} from '@shelf/esbuild-config';

await common({
  entryPoints: ['./index.js', './frontend.js'],
  target: ['node14'],
  config: {
    //betterer not supports imports in esbuild
    format: 'cjs',
    splitting: false,
  },
});
