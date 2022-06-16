import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/austinknight/personal-blog.git',
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
