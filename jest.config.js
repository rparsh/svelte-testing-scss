module.exports = {
    transform: {
      '^.+\\.svelte$': 'svelte-jester',
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'svelte'],
    roots: ['<rootDir>'],
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['node_modules', '.'],
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect',
    ],
    clearMocks: true, // Automatically clear mock calls and instances before every test.
  };
  