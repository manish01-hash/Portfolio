/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  // Add other Vite environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}