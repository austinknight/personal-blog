import { publish } from 'gh-pages';

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
