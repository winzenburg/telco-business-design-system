import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['packages/components/**/*', 'packages/icons/**/*', 'packages/tokens/**/*'],
      exclude: ['**/*.stories.tsx', '**/*.test.tsx', '**/tests/**/*'],
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.build.json',
    }),
    visualizer({
      filename: 'reports/bundle-stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    })
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'packages/components/src/index.ts'),
        // Separate entries for heavy components
        'components/chart': resolve(__dirname, 'src/components/ui/chart.tsx'),
        'components/table': resolve(__dirname, 'src/components/ui/table.tsx'),
        'components/calendar': resolve(__dirname, 'src/components/ui/calendar.tsx'),
        // Separate entries for icons and tokens
        icons: resolve(__dirname, 'packages/icons/src/index.ts'),
        tokens: resolve(__dirname, 'packages/tokens/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        // Externalize all Radix UI packages
        /^@radix-ui/,
        // Externalize heavy dependencies
        'recharts',
        'cmdk',
        'lucide-react',
        // Only include if specifically imported
        'd3-scale',
        'd3-shape',
      ],
      output: {
        // Preserve module structure for better tree-shaking
        preserveModules: true,
        preserveModulesRoot: 'packages',
        // Use compact output
        compact: true,
        // Configure globals for UMD builds
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // Manual chunks for code splitting
        manualChunks(id) {
          // Core utilities in separate chunk
          if (id.includes('utils/cn') || id.includes('class-variance-authority')) {
            return 'utils';
          }
          // Icons in separate chunk
          if (id.includes('/icons/')) {
            return 'icons';
          }
          // Tokens in separate chunk
          if (id.includes('/tokens/')) {
            return 'tokens';
          }
          // Heavy components in their own chunks
          if (id.includes('chart') || id.includes('recharts')) {
            return 'chart';
          }
          if (id.includes('table')) {
            return 'table';
          }
          if (id.includes('calendar')) {
            return 'calendar';
          }
        },
      },
      // Tree-shaking optimizations
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
    },
    // Reduce output size
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    // Set size warning threshold
    chunkSizeWarningLimit: 50, // 50KB warning
  },
})