const fs = require('fs');
const path = require('path');

const versionFilePath = path.join(__dirname, 'version.json');

function roundToThreeDecimals(number) {
	return Number(number.toFixed(3));
}

function incrementVersion() {
	try {
		const data = fs.readFileSync(versionFilePath, 'utf8');
		const versionData = JSON.parse(data);
		const newVersion = versionData.version + 0.01;

		versionData.version = newVersion;

		fs.writeFileSync(
			versionFilePath,
			JSON.stringify(versionData, null, 2),
			'utf8',
		);
		console.log(`App version incremented to: ${newVersion}`);
	} catch (error) {
		console.error('Error incrementing version:', error);
	}
}

incrementVersion();
