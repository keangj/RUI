let importAll = (requireContent) => requireContent.keys().forEach(requireContent);
try {
  importAll(require.context('../icons', true, /\.svg$/))
} catch (error) {

}