import * as fs from 'fs';
import { publish } from 'gh-pages';

fs.writeFile('build/CNAME', 'austinknight.dev', () => {});

publish(
	'build', // path to public directory
	{
		repo: 'https://github.com/austinknight/personal-blog.git',
		dotfiles: true
	},
	(e) => {
		console.log('Deploy Complete! ', e);
	}
);
