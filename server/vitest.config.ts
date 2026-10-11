import { defineConfig } from 'vitest/config';

// Each test file starts its own PGlite database (PostgreSQL in WebAssembly), which takes a few
// seconds: files run one after the other, with room for a slow start.
export default defineConfig({
  test: { fileParallelism: false, hookTimeout: 60_000, testTimeout: 30_000 },
});
