import {
  defineConfig,
  presetTypography,
  presetWind,
  transformerDirectives,
} from "unocss";

const control =
  "appearance-none text-base leading-4 px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm";

export default defineConfig({
  shortcuts: {
    box: "bg-white rounded-md shadow-sm p-4 dark:bg-gray-800 dark:text-white",
    button: `${control} inline-flex items-center justify-center border-transparent bg-blue-600 text-white font-500 whitespace-nowrap hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:cursor-default disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-100 disabled:hover:bg-gray-100 dark:focus:ring-offset-gray-900`,
    input: `${control} w-full bg-white border-gray-300 placeholder-gray-400 focus:border-blue-600 focus:ring focus:ring-blue-600 disabled:bg-gray-100 disabled:border-gray-100 disabled:text-gray-500 dark:bg-gray-800 dark:border-gray-500`,
    "icon-inline":
      "w-[1em] h-[1em] relative bottom-[0.125em] inline-block fill-current text-current select-none",
  },
  transformers: [transformerDirectives()],
  presets: [presetTypography(), presetWind()],
});
