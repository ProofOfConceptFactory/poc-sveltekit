import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import fs from 'fs'
import type { ServerOptions } from 'vite'

export default defineConfig(({ mode }) => {
	const isDev = mode === 'development';

	const serverConfig: ServerOptions = {
		host: true,
		port: 8000,
	};

	if (isDev) {
		serverConfig.https = {
			key: fs.readFileSync('certs/poc-sveltekit.key.pem'),
			cert: fs.readFileSync('certs/poc-sveltekit.crt.pem'),
		};
	}

	return {
		plugins: [sveltekit()],
		server: serverConfig,
		preview: {
			port: 8080,
		},
	}
});
