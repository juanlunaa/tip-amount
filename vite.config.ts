import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true, // esto hace que el servidor escuche en todas las interfaces de red
		port: 3000, // puedes cambiar el puerto si lo deseas
	},
});
