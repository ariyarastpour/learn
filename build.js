const { exec } = require('child_process');

const isWin = process.platform === 'win32';
const command = isWin
	? 'set NODE_ENV=production&& npx tailwindcss -i ./src/style.css -o ./dist/styles.css --minify'
	: 'NODE_ENV=production npx tailwindcss -i ./src/style.css -o ./dist/styles.css --minify';

exec(command, (error, stdout, stderr) => {
	if (error) {
		console.error(`❌ خطا هنگام اجرای build:\n${error.message}`);
		return;
	}
	if (stderr) {
		console.error(`⚠️ stderr:\n${stderr}`);
	}
	console.log(`✅`);
});
