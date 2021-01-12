module.exports = {
  stories: ["../slices/**/*.stories.[tj]s", "../slices/**/*.stories.[tj]sx"],
  addons: [],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
      // Uncomment the following section to include extra props from third-party libraries
      // compilerOptions: {
      //   allowSyntheticDefaultImports: false,
      //   esModuleInterop: false,
      // },
    },
  },
};
