module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["@babel/plugin-transform-private-property-in-object", { loose: false }],
      ["@babel/plugin-transform-private-methods", { loose: false }],
      ["@babel/plugin-proposal-class-properties", { loose: false }],
      "react-native-reanimated/plugin",
    ],
  };
};
