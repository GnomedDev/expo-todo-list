module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["@babel/plugin-proposal-class-properties", { loose: false }],
      [
        "@babel/plugin-proposal-decorators",
        {
          version: "2023-05",
        },
      ],
    ],
  };
};
