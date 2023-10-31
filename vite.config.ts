import { defineConfig } from 'vitest/config'
import type { InlineConfig } from 'vitest'
import type { UserConfig } from 'vite'

interface VitestConfigExport extends UserConfig {
	test: InlineConfig
}
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		watch: true,
		reporters: ['verbose'],
		environment: 'jsdom',
		setupFiles: './src/tests/setup.js',
		coverage: {
			all: true,
			include: ['src/**/*.tsx', 'src/hooks/**', 'src/utils/**'],
			/* exclude: [
				'node_modules/**',
				'src/utilities/**',
				'.storybook/**',
				'storybook-static/**',
				'_helpers/**',
				'dist/**',
				'public/**',
				'styleDictionary/**',
			], */
			// reporter: ['text', 'json', 'html'],
		},
	},
} as VitestConfigExport)
