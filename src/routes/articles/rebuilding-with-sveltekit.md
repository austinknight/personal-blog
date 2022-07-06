---
title: Rebuilding My Blog With SvelteKit
preview: I completed another iteration of my blog using SvelteKit this time around. Take a look at some of the cool stuff going on with this new framework and why you should consider checking it out too!
date: 07-06-2022
categories:
  - svelte
tags:
  - software
  - svelte
  - front-end
  - sveltekit
  - blogging
---

It's that time again where I re-write my site from scratch! This is probably about the sixth re-write I've done here, and every time I've decided to do this, I end up picking a new technology to try out. "Why do I do this to myself?", I think each time I get into it; Well for starters, it would be way less interesting to just redesign things. Doing a re-write is a great opportunity to learn something new that works well with the kind of content I want to produce here, and it supports getting some learning in for my day job after hours. I spend a lot less time these days actually studying like I did when I first entered the engineering world. At this point, nothing teaches me better than jumping straight into a project with a language or framework I want to check out and get some experience with.

## Why Svelte and SvelteKit?

Back in late 2021 I was unfortunately part of a layoff at a seed-stage startup. I was writing a lot of React for many years prior to this event, and enjoyed the framework thoroughly. In fact, I didn't really ever see myself moving on from React any time soon. Eventually I landed at a company writing Angular 1.x.x. Huh? That seems like a step back? Yes, it was, however what intrigued me was that the front-end team was migrating to a modern framework with Svelte, and doing so from the inside out. Oftentimes when a company transitions to a new front-end framework, it's just a high-stakes big bang rewrite. Not so in this case. Before interviewing with this company, I had never even heard of [Svelte](https://svelte.dev/). There was a small coding exercise like most other interview processes, so in my typical fashion I figured why not just go all in and give Svelte a try here instead of using something I was already comfortable with? Long story short, as soon as I completed the exercise and experienced what Svelte could do, I was hooked! I landed the job and have been writing with Svelte ever since (fortunately most of the Angular work has been deleting it, the best kind of engineering in my opinion).

Since I've been engineering with Svelte for close to two years now, I've mostly reached for things within the Svelte ecosystem. SvelteKit is a framework for building web applications of all sizes, utilizing a flexible file-based routing system. Everything you'd need for an app comes right out of the box and only takes a minute to bootstrap a new project. In React, it would be similar to something like Gatsby. On top of SvelteKit using Svelte and compiling nicely, I wanted to stick with a statically-generated build so that I could continue to host this site on GitHub Pages. I previously used Jekyll, as GitHub Pages is actually powered by it. It worked, but it was also way more work and I love the flexibility and simplicity Svelte provides.

## The Interesting Parts of SvelteKit

I won't get into the how of building this site, as I mostly followed a couple of excellent tutorials already out there. Instead, let me tell you some of the cool parts I came across while building this out. All in all, designing and rewriting everything for this site only took about two days. Design was done roughly in Figma, and the rest with a terminal and VS Code. No database or anything was necessary, so pretty simple stuff here. I've tried to keep the design and engineering as straightforward as possible as the years have progressed.

Here are some of the key things I liked:

- **Starting a new app is one command away** – Just run `npm create svelte my-app`, answer a few questions, and your app scaffolds into a new folder. Do a `yarn install` and `yarn dev` and you're up and running.

- **File-based routing** – Structure of the app is defined by the structure of the codebase. The contents of `src/routes` become pages at that same relative route. So, if I have a file at `src/routes/about.svelte`, I will have an about page available at `austinknight.dev/about`.

- **Layouts** – Naming files with certain conventions gives you access to special powers. A file prefixed with `__layout.svelte` applies the code in that file to every page within the folder it lives in. You can have a layout file for each directory (or route) if you wanted. On top of this, child paths can inherit these layouts in their given hierarchy.

- **Aliased common components and utilities** – A lot of stuff in a design is often reused across an application, this is why we have reusable components. SvelteKit provides an alias called `$lib` which points to `src/lib` and gives you a global access point for all your reusable stuff no matter how shallow or deep you are in your directory structure.

- **Global styling and scoped styles** – Global styles can be added as plain old css files in the common `lib` folder. Since everything is a Svelte file, you can also add styles directly in those files with `<style>` tags which scope those styles directly to the component. This is a [native feature](https://svelte.dev/tutorial/styling) of Svelte.

- **Writing articles in markdown with [mdsvex](https://mdsvex.pngwn.io/)** – Converts markdown to HTML, allows markdown files to be used as components, and the best part: mdsvex lets you use Svelte components inside markdown 🤯

- **Built-in endpoint generator** – SvelteKit offers a type of route called an endpoint. Endpoints work the same as pages in that you access them by using the file path structure, except instead of the route returning HTML, and endpoint will return data. In order to make a route an endpoint, it just has to originate at the `src/routes/api` base-path. All an endpoint file needs is an exported function for each HTTP verb accepted (like get, post put, etc) and the function needs to return an object with a `status` and `body`. This is useful for generating things like posts, tags, comments list etc.

- **Static generator** – I've already mentioned this as a selling point, but being able to compile things down to static files while still having the pre-build flexibility of Svelte is huge! I get so much done so fast with this setup. I can also build and deploy my site right from the command line where I am already working. Setting up SvelteKit to do this does not come out of the box. SvelteKit's documentation does mention something like Gatsby may get you going faster with this, however it's not too much overhead to achieve this.

- **RSS feed** – Setting up an RSS feed is as simple as creating a route at `src/routes/rss` which is just [a file](https://github.com/austinknight/personal-blog/blob/master/src/routes/rss.xml.js) that returns XML data. This is generated by requesting my [post list endpoint](/api/posts.json) and formatting the data to work with the XML feed.

## Getting Started For Yourself

My list of interesting selling points for SvelteKit may be a bit long and I could probably continue on much longer, I just wanted to give my recommendation here like I would for other things I enjoy. If you'd like to get started with something like this, checkout the official [Svelte tutorial](https://svelte.dev/tutorial/basics) as well as the [SvelteKit getting started docs](https://kit.svelte.dev/docs/introduction) to learn more!

For an in-depth, awesome tutorial on building a SvelteKit static markdown blog, check out [Josh Collinsworth’s excellent tutorial](https://joshcollinsworth.com/blog/accessible-toggle-buttons) that I followed. He covers everything and more on getting up and running.

I hope this article encourages you to at least check out the Svelte ecosystem. [Give me a shout](https://twitter.com/austinknight) if you decide to go down this path, I'll guide you as best I can along the way. If you liked this article, consider sharing it or [give me a follow](https://twitter.com/austinknight) to stay up to date when the next one drops!
