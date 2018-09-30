export const imports = {
  "src/App.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-app" */ "src/App.mdx"),
  "src/component/Splash/Splash.mdx": () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-component-splash-splash" */ "src/component/Splash/Splash.mdx")
};
