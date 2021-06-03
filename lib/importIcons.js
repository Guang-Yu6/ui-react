let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('./icons/', true, /\.svg$/))
} catch (error) {

}
// 动态加载所有icons，不用一个个引入，
