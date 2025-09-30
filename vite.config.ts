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
        manualChunks(id) {
          // Split typography into separate chunk (136.27KB)
          if (id.includes('typography-consolidated') || id.includes('/typography/')) {
            return 'typography-consolidated';
          }
          // Split heavy form components
          if (id.includes('/calendar.tsx') || id.includes('/date-picker.tsx')) {
            return 'date-components';
          }
          // Split chart component (7.52KB)
          if (id.includes('/chart.tsx')) {
            return 'chart';
          }
          // Split dialog and overlay components together
          if (id.includes('/dialog.tsx') || id.includes('/sheet.tsx') || id.includes('/popover.tsx')) {
            return 'overlay-components';
          }
          // Split table and command (data-heavy components)
          if (id.includes('/table.tsx') || id.includes('/command.tsx')) {
            return 'data-components';
          }
        },
      },
    },
    sourcemap: true,
    minify: 'esbuild',
  },
})