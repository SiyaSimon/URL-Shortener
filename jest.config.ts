export default {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "js"],
    extensionsToTreatAsEsm: [".ts"],
  };
  