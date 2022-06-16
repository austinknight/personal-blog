---
title: Easy Javascript Object TypeError Protection
preview: Preventing errors with the help of Lodash
date: 2017-10-12
categories:
  - javascript
tags:
  - how-to
---

If you are writing javascript, it’s safe to say you are working with objects on a regular basis (not to mention the fact that objects are a huge part of how javascript works, and javascript’s primitives like arrays, string, booleans, etc. get wrapped in objects when you call specific methods on them). Usually when I’m working with an object, it’s because I am handling data of some kind, like a local state object or a JSON object returned from an API call. When accessing objects, properties may be one, two, three or more levels deep in the structure. Here is an example object we’ll use for reference:

```javascript
const user = {
	id: 1,
	name: 'Rod Kimble',
	username: 'Hotrod',
	email: 'rodk@email.com',
	address: {
		street: 'Kulas Light',
		suite: 'Apt. 556',
		city: 'Gwenborough',
		zipcode: '92998-3874',
		geo: {
			lat: '-37.3159',
			lng: '81.1496'
		}
	},
	phone: '1-770-736-8031 x56442',
	website: 'hildegard.org',
	company: {
		name: 'Romaguera-Crona',
		catchPhrase: 'Multi-layered client-server neural-net',
		bs: 'harness real-time e-markets'
	}
};
```

To access any property of this user object, you could simply do things like:

```javascript
console.log(user.id)
// => 1

console.log(user.address)
// => {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng": '81.1496'
        }
      }

console.log(user.company.name)
// => 'Romaguera-Crona'
```

What happens when you try to access a property on the object that doesn’t exist?

```javascript
console.log(user.birthdate);
// => undefined
```

Nothing too terrible right? If the property doesn’t exist on the object, `undefined` will be returned as the value. Now what happens if you try to access a property two, three, or more levels deep, where both levels don’t exist?

```javascript
console.log(user.birthdate.month);
// => Uncaught TypeError: Cannot read property 'month' of undefined
```

Bad things happen, horrible things, things you don’t want to see! The severity of what happens varies greatly depending on the context of where the attempt to access the property is happening. This type of error can be pretty bad because it often leads to infinite loops, frozen apps, bad data, or just silent failures that lead to who knows what down the line. There are some things we can do though to protect ourselves against nasty bugs like this. You may find it redundant or an unnecessary to add an extra step, but you’re really going to save yourself some time and headache in the long run by being proactive about accessing object properties safely.

A tried and true method for accessing nested object properties safely is to simply check for the existence of a property before trying to do anything with it. For example, you could use a simple if statement:

```javascript
// Our default date
let bday = {};

if (user.birthday) {
	// do some stuff with user.birthday because we know it's got a value if we get into the if block.
	bday = user.birthday;
}

if (user.birthday && user.birthday.month) {
	// We get into this block if the user has a birthday, AND, if the user's birthday has a month property with a value.
	bday.month = user.birthday.month;
}
```

Great, now we’re accessing properties in a safe way. Using this method is perfectly fine, but as you can see it can quickly get out of hand when you add more and more checks. The if statements will continue to grow and you’re going to spend an unnecessary amount of time parsing through the block trying to figure things out. A more developer-friendly method I have become accustomed to is to use some handy tools created by the folks maintaining [Lodash](https://lodash.com/). Aside from some convenient utility functions for accessing object properties, there is a whole host of other useful functionality Lodash provides for working with various javascript data structures. I’ll leave you to explore what else Lodash has to offer, but for the purposes of this article, we’re going to look specifically at the get method. Let’s look at the user birthday example again using this approach:

```javascript
import _ from 'lodash';

let bday = {};

// Same as `user.birthday`
bday = _.get(user, 'birthday', {});

// Same as `user.birthday.month`
bday.month = _.get(user, 'birthday.month');
```

First, we’re importing Lodash from NPM. We can access the different methods of Lodash by using the\_ character. In the get method, the first argument is the object you want to access, the second argument is a string of the path you want to access, and the third argument is a default value to return. The default value you set in the third argument will be returned if Lodash is unsuccessful in finding a value at the path you’ve given. If you do not set a default value like the last line in our example, that is ok too because get will return undefined for you by default. For more examples, see the documentation at [https://lodash.com/docs/4.17.4#get](https://lodash.com/docs/4.17.4#get). As a general rule of thumb, I will use Lodash get when I need to access a property in an object that is more than one level deep. It can be useful to use get when searching the first level if you want to return a default value that is something other than undefined though.
