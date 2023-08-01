// components/BuildId.js
import { useEffect, useState } from 'react';

const BuildId = () => {
	const [buildId, setBuildId] = useState('');

	useEffect(() => {
		// Fetch the build ID from the server or any other source
		// In this case, we use the `__NEXT_DATA__` global variable to get the build ID.
		const currentBuildId = window.__NEXT_DATA__.buildId;
		setBuildId(currentBuildId);
	}, []);

	return (
		<div>
			<p>Build ID: {buildId}</p>
		</div>
	);
};

export default BuildId;
