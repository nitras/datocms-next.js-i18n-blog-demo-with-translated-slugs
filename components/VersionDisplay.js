import { useEffect, useState } from 'react';
import { version } from '../package.json';

const VersionDisplay = () => {
	// const [appVersion, setAppVersion] = useState(1);

	// useEffect(() => {
	// 	fetch('/api/version') // Fetch the version file from the public folder
	// 		.then((response) => response.json())
	// 		.then((data) => setAppVersion(data.version));
	// }, []);

	return (
		<div>
			{/* <h2>App Version: {appVersion}</h2> */}
			{/* <p>v: {appVersion.toFixed(2)}</p> */}
			<p>github v: {version}</p>
		</div>
	);
};

export default VersionDisplay;
