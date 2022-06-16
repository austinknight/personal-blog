---
title: React - Import External Libraries With Webpack
preview: A brief tutorial on a tricky import problem
date: 2016-07-07
categories:
  - javascript
tags:
  - how-to
  - react
  - webpack
---

I've been writing a lot more with React these days, and along with React I've learned some new build tools that are commonly accepted among the React community, namely Webpack. If you are familiar with Webpack, you know it's pretty simple to include a list of javascript files you want bundled. When using import or require statements to include module dependencies in components, Webpack goes out and includes those files in the bundle. It looks a little something like this when writing a React component:

```javascript
import React from 'react';
import Twilio from 'twilio';

const myComponent = () => {
	const handleClick = () => {
		Twilio.Device.setup();
	};

	return (
		<div>
			<button onClick={handleClick}>Click It</button>
		</div>
	);
};
```

I'm not going to go into how to set up webpack ([you can read the docs here](https://webpack.github.io/docs/)), but based on how you've configured your build, webpack will know that it needs to include the Twilio module in the final bundle because we've explicitly imported it in this file. However, I ran into a tricky problem using a javascript client library from Twilio. The library is typical of most javascript client libraries in that it wants to add itself to the global window context of your application. A lot of modules I use in components are simply objects and functions that operate independent of window, but sometimes I need a client library of another application and those typically use window. Unfortunately, modules that depend on the global window context don't play nice with the Webpack bundler, because webpack won't execute scripts in the global context by default. One solution to this problem could be to load this dependency that relies on window by using one script tag to load window dependent modules and another script tag to load the bundled js file that includes the rest of the application, but that extracts code out of the managed bundle and the window dependent modules may not be accessible when you expect it them be in your components. To get around this, webpack has a handy little loader, conveniently called the "[script loader](https://github.com/webpack/script-loader)". It allows us to require a script in a component, like any other module dependency, but it tells webpack to execute the file in the global context once, and will not parse the require statement for that file. This basically behaves the same as loading the file in a script tag, but it gives the guarantee of being accessible within the module that needs it.

In order to use the script loader, it will need to be installed via NPM. Once installed, you should be able to require the module that depends on window using the script loader syntax. The syntax is a simple require statement with script! prepended to the file path of the script. Webpack will pick up this syntax and handle loading the file appropriately.

```javascript
  import React from 'react';
  require('script!../path/to/your/script/twilio-client.js');

  const myComponent = () => {
  const handleClick = () => {
    Twilio.Device.setup();
  }

  return(
    <div>
      <button onClick={handleClick}>Click It</button>
    </div>
  )
```

Now that the script is loading through the script loader, we can just access the module like any other standard global method. It's not necessary to assign the require statement to a named variable because the script loader will just execute the script, which will place the module's methods onto the global window context as expected.
