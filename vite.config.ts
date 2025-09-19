import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['packages/components/**/*', 'packages/icons/**/*', 'packages/tokens/**/*'],
      exclude: ['**/*.stories.tsx', '**/*.test.tsx', '**/tests/**/*', '**/form.tsx', '**/design-system-icons.ts', '**/chart.tsx', '**/unified-chart.tsx', '**/enhanced-menu.tsx', '**/figma-*.ts', '**/utils/figma.ts', '**/utils/chart-data.ts', '**/utils/slot.ts'],
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        core: resolve(__dirname, 'src/core.ts'),
        lazy: resolve(__dirname, 'src/lazy.ts'),
        tokens: resolve(__dirname, 'src/tokens/index.ts'),
        components: resolve(__dirname, 'src/components/index.ts'),
      },
      name: 'ComcastBusinessDesignSystem',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        // Externalize ALL Radix UI packages with regex
        /^@radix-ui/,
        // Externalize heavy dependencies
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'recharts',
        'cmdk',
        'lucide-react',
      ],
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJSXRuntime',
        },
      },
    },
    sourcemap: true,
    minify: 'esbuild',
  },
})