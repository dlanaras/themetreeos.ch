
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const ELECTRON_RUN_AS_NODE: string;
	export const ANDROID_HOME: string;
	export const ANDROID_SDK_ROOT: string;
	export const BROWSER: string;
	export const CASROOT: string;
	export const CHROME_DESKTOP: string;
	export const CSF_DrawPluginDefaults: string;
	export const CSF_EXCEPTION_PROMPT: string;
	export const CSF_IGESDefaults: string;
	export const CSF_LANGUAGE: string;
	export const CSF_MDTVTexturesDirectory: string;
	export const CSF_MIGRATION_TYPES: string;
	export const CSF_OCCTResourcePath: string;
	export const CSF_PluginDefaults: string;
	export const CSF_SHMessage: string;
	export const CSF_STEPDefaults: string;
	export const CSF_ShadersDirectory: string;
	export const CSF_StandardDefaults: string;
	export const CSF_StandardLiteDefaults: string;
	export const CSF_TObjDefaults: string;
	export const CSF_TObjMessage: string;
	export const CSF_XCAFDefaults: string;
	export const CSF_XSMessage: string;
	export const CSF_XmlOcafResource: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const DEBUGINFOD_URLS: string;
	export const DISPLAY: string;
	export const DRAWDEFAULT: string;
	export const DRAWHOME: string;
	export const EDITOR: string;
	export const ELECTRON_NO_ATTACH_CONSOLE: string;
	export const GDK_BACKEND: string;
	export const HOME: string;
	export const I3SOCK: string;
	export const LANG: string;
	export const LC_ADDRESS: string;
	export const LC_IDENTIFICATION: string;
	export const LC_MEASUREMENT: string;
	export const LC_MONETARY: string;
	export const LC_NAME: string;
	export const LC_NUMERIC: string;
	export const LC_PAPER: string;
	export const LC_TELEPHONE: string;
	export const LC_TIME: string;
	export const LOGNAME: string;
	export const MAIL: string;
	export const MMGT_CLEAR: string;
	export const MOTD_SHOWN: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const NO_AT_BRIDGE: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const OZONE_PLATFORM: string;
	export const PATH: string;
	export const PWD: string;
	export const QT_QPA_PLATFORM: string;
	export const SHELL: string;
	export const SHLVL: string;
	export const SWAYSOCK: string;
	export const TERM: string;
	export const USER: string;
	export const VSCODE_CLI: string;
	export const VSCODE_CODE_CACHE_PATH: string;
	export const VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
	export const VSCODE_CWD: string;
	export const VSCODE_ESM_ENTRYPOINT: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const VSCODE_IPC_HOOK: string;
	export const VSCODE_NLS_CONFIG: string;
	export const VSCODE_PID: string;
	export const WAYLAND_DISPLAY: string;
	export const XCURSOR_SIZE: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_RUNTIME_DIR: string;
	export const XDG_SEAT: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_ID: string;
	export const XDG_SESSION_TYPE: string;
	export const XDG_VTNR: string;
	export const ELECTRON_NO_ASAR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		ELECTRON_RUN_AS_NODE: string;
		ANDROID_HOME: string;
		ANDROID_SDK_ROOT: string;
		BROWSER: string;
		CASROOT: string;
		CHROME_DESKTOP: string;
		CSF_DrawPluginDefaults: string;
		CSF_EXCEPTION_PROMPT: string;
		CSF_IGESDefaults: string;
		CSF_LANGUAGE: string;
		CSF_MDTVTexturesDirectory: string;
		CSF_MIGRATION_TYPES: string;
		CSF_OCCTResourcePath: string;
		CSF_PluginDefaults: string;
		CSF_SHMessage: string;
		CSF_STEPDefaults: string;
		CSF_ShadersDirectory: string;
		CSF_StandardDefaults: string;
		CSF_StandardLiteDefaults: string;
		CSF_TObjDefaults: string;
		CSF_TObjMessage: string;
		CSF_XCAFDefaults: string;
		CSF_XSMessage: string;
		CSF_XmlOcafResource: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		DEBUGINFOD_URLS: string;
		DISPLAY: string;
		DRAWDEFAULT: string;
		DRAWHOME: string;
		EDITOR: string;
		ELECTRON_NO_ATTACH_CONSOLE: string;
		GDK_BACKEND: string;
		HOME: string;
		I3SOCK: string;
		LANG: string;
		LC_ADDRESS: string;
		LC_IDENTIFICATION: string;
		LC_MEASUREMENT: string;
		LC_MONETARY: string;
		LC_NAME: string;
		LC_NUMERIC: string;
		LC_PAPER: string;
		LC_TELEPHONE: string;
		LC_TIME: string;
		LOGNAME: string;
		MAIL: string;
		MMGT_CLEAR: string;
		MOTD_SHOWN: string;
		MOZ_ENABLE_WAYLAND: string;
		NO_AT_BRIDGE: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		OZONE_PLATFORM: string;
		PATH: string;
		PWD: string;
		QT_QPA_PLATFORM: string;
		SHELL: string;
		SHLVL: string;
		SWAYSOCK: string;
		TERM: string;
		USER: string;
		VSCODE_CLI: string;
		VSCODE_CODE_CACHE_PATH: string;
		VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
		VSCODE_CWD: string;
		VSCODE_ESM_ENTRYPOINT: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		VSCODE_IPC_HOOK: string;
		VSCODE_NLS_CONFIG: string;
		VSCODE_PID: string;
		WAYLAND_DISPLAY: string;
		XCURSOR_SIZE: string;
		XDG_CURRENT_DESKTOP: string;
		XDG_DATA_DIRS: string;
		XDG_RUNTIME_DIR: string;
		XDG_SEAT: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_ID: string;
		XDG_SESSION_TYPE: string;
		XDG_VTNR: string;
		ELECTRON_NO_ASAR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
