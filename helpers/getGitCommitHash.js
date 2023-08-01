// utils/getGitCommitHash.js
const { execSync } = require('child_process');
const gitHash = require('git-rev-sync');

function getGitCommitHash() {
	try {
		// Use git-rev-sync to get the short commit hash
		return gitHash.short();
	} catch (error) {
		// If git-rev-sync fails, fall back to using git log command
		const commitHash = execSync('git rev-parse --short HEAD').toString().trim();
		return commitHash || 'Unknown';
	}
}

module.exports = getGitCommitHash;
