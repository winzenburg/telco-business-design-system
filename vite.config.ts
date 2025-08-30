import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['packages/components/**/*', 'packages/icons/**/*', 'packages/tokens/**/*'],
      exclude: ['**/*.stories.tsx', '**/*.test.tsx', '**/tests/**/*', '**/form.tsx'],
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/components/src/index.ts'),
      name: 'ComcastBusinessDesignSystem',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@radix-ui/react-accordion',
        '@radix-ui/react-avatar', 
        '@radix-ui/react-checkbox',
        '@radix-ui/react-dialog',
        '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-label',
        '@radix-ui/react-popover',
        '@radix-ui/react-progress',
        '@radix-ui/react-radio-group',
        '@radix-ui/react-select',
        '@radix-ui/react-separator',
        '@radix-ui/react-slider',
        '@radix-ui/react-slot',
        '@radix-ui/react-switch',
        '@radix-ui/react-tabs',
        '@radix-ui/react-toast',
        '@radix-ui/react-tooltip',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'recharts',
        'cmdk',
        'lucide-react',
      ],
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