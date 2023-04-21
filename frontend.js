import {BettererFileTest} from '@betterer/betterer';
import {eslint} from '@betterer/eslint';
import {coverage} from '@betterer/coverage';
import {regexp} from '@betterer/regexp';
import {typescript} from '@betterer/typescript';

function countFiles(issue) {
  return new BettererFileTest(async (filePaths, fileTestResult) => {
    filePaths.forEach(filePath => {
      // In this case the file contents don't matter:
      const file = fileTestResult.addFile(filePath, '');
      // Add the issue to the first character of the file:
      file.addIssue(0, 0, issue);
    });
  });
}

const getBettererConfig = ({
  jsFilesPattern,
  todoFilesPattern,
  tsFilesPattern,
  tsConfigPath = 'tsconfig.json',
  eslintRules = {'no-debugger': 'error'},
  eslintFilesPatterns,
}) => {
  return {
    'no more JavaScript files': () =>
      countFiles('no more JavaScript files!').include(...jsFilesPattern),
    'no more debuggers': () => eslint(eslintRules).include(...eslintFilesPatterns),
    'increase total test coverage': () => coverage(),
    'no todo comments': () => regexp(/(\/\/\s*TODO)/i).include(...todoFilesPattern),
    'stricter compilation': () =>
      typescript(tsConfigPath, {
        strict: true,
        noEmit: true,
      }).include(...tsFilesPattern),
  };
};

export default getBettererConfig;
