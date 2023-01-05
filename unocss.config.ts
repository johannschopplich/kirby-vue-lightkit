import {
  defineConfig,
  presetTypography,
  presetWind,
  transformerDirectives,
} from "unocss";

const control =
  "appearance-none rounded-md border px-3 py-2 text-base leading-4 shadow-sm focus:outline-none sm:text-sm";

export default defineConfig({
  shortcuts: {
    box: "rounded-md bg-white p-4 shadow-sm dark:bg-gray-800 dark:text-white",
    button: `${control} font-500 inline-flex items-center justify-center whitespace-nowrap border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-default disabled:border-gray-100 disabled:bg-gray-100 disabled:text-gray-500 disabled:hover:bg-gray-100 dark:focus:ring-offset-gray-900`,
    input: `${control} w-full border-gray-300 bg-white placeholder-gray-400 focus:border-blue-600 focus:ring focus:ring-blue-600 disabled:border-gray-100 disabled:bg-gray-100 disabled:text-gray-500 dark:border-gray-500 dark:bg-gray-800`,
    "icon-inline":
      "relative bottom-[0.125em] inline-block h-[1em] w-[1em] select-none fill-current text-current",
  },
  transformers: [transformerDirectives()],
  presets: [presetTypography(), presetWind()],
});
