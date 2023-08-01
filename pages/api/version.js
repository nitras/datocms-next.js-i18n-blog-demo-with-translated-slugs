import versionData from '../../version.json';

export default function handler(req, res) {
	const { version } = versionData;
	res.status(200).json({ version });
}
