---
title: Rebuilding My Blog With SvelteKit
preview: I completed another iteration of my blog using SvelteKit this time around. Take a look at some of the cool stuff going on with this new framework and why you should consider checking it out too!
date: 07-05-2022
categories:
  - svelte
tags:
  - software
  - svelte
  - front-end
  - sveltekit
  - blogging
---

It's that time again where I re-write my site from scratch! This is probably about the sixth re-write I've done here, and every time I've decided to do this, I end up picking a new technology to try out. "Why do I do this to myself?", I think each time I get into it; Well for starters, it would be way less interesting to just redesign things. However, it's a great opportunity to learn something new that works well with the kind of content I want to produce here and, supports getting some learning in for my day job after hours. I spend a lot less time these days actually studying like I did when I first entered the engineering world. At this point, nothing teaches me better than jumping straight into a project with a language or framework I want check out and get some experience with.

## Why Svelte and SvelteKit?

Back in late 2021, I was unfortunately part of a layoff at a seed-stage startup. I was writing a lot of React for many years prior to this event, and enjoyed the framework thoroughly. In fact, I didn't really ever see myself moving on from React any time soon. I eventually landed at a company writing Angular 1.x.x. Huh? That seems like a step back? Yes, it was, however what intrigued me was that the front-end team was migrating to a modern framework with Svelte, and doing so from the inside out. Before interviewing with this company, I had never even heard of Svelte. There was a small coding exercise like most other interview processes, so in my typical fashion I figured why not just go all in and give Svelte a try here instead of using something I was already comfortable with? Long story short, as soon as I completed the exercise and saw what Svelte could do, I was hooked! I landed the job and have been writing with Svelte ever since (fortunatley most of the Angular work has been deleting it, the best kind of engineering in my opinion).

Naturally, as I've been engineering with Svelte close to two years now, I've mostly reached for things within the Svelte ecosystem. SvelteKit is a framework for building web applications of all sizes, utilizing a flexible file-based routing system. Everything you'd need for an app comes right out of the box and only take a minute to bootstrap a new project. In React, it would be similar to something like Gatsby. On top of SvelteKit using Svelte and compiling nicely, I wanted to stick with a staticly-generated build so that I could continue to host this site on Github Pages. I previously used Jekyll, as Github Pages is actually powered by it. It worked, but it was also way more work and not as shiny as all the new stuff out there now.

## The Interesting Parts of SvelteKit

I won't get into the how of building this site, as I mostly followed a couple of excellent tutorials already out there, maybe I'll create a how-to article soon on that. Instead, let me tell you some of the cool parts I came across building this out. All in all, desiging and re-writing everything for this site only took about two full days. I've tried to keep this simple as the years have progressed.

- **Starting a new app is one command away** – Just run one command `npm create svelte my-app`, answer a few questions, and your app scaffolds into a new folder.

- **File-based routing** – Structure of the app is defined by the structure of the codebase. The contents of `src/routes` become pages at that same relative route.

- **Layouts** – Naming files with certain conventions gives you access to special powers. A file prefixed with `__layout.svelte` applies the code in that file to every page within the folder it lives in. You can have a layout file for each directory (or route) if you really wanted.

- **Aliased common components and utilities** – A lot of stuff in a design is often reused across an application, this is why we have reusable components. SveltKit provides an alias called `$lib` which points to `src/lib` and gives you a global access point for all your reusable stuff no matter how shallow or deep you are in your directory structure.

- **Global styling and scoped styles** – Global styles can be added as plain old css files in the common `lib` folder. Since everything is a Svelte file, you can also add styles directly in those files with `<style>` tags which scope those styles directly to the component. This is a [native feature](https://svelte.dev/tutorial/styling) of Svelte.

- **Writing articles in markdown with [mdsvex](https://mdsvex.pngwn.io/)** – Converts markdown to HTML, allows markdown files to be used as components, and the best part: lets you use Svelte components inside markdown 🤯

- **Built-in endpoint generator** – SvelteKit offers a type of route called an endpoint. They work the same as pages, in that you access them by using the filepath structure, except instead of the route returning HTML, and enpoint will return data. In order to makea route an endpoint, it just has to originate at the `src/api` base-path. All an endpoint file needs in an exported function for each HTTP verb accepted, and the function needs to return an object with a `status` and `body`. This is usefull for generating things like post, tag, comment lists and etc.

- **Static generator** – I've already mentioned this as a selling point, but being able to compile things down to static files while still having the pre-build flexibility of Svelte is huge! I get so much done so fast with this setup. I can also build and deploy my site right from the comand line where I am already working.

- **RSS feed** – Setting up an RSS feed is as simple as creating a route at `src/routes/rss` which is just [a file](https://github.com/austinknight/personal-blog/blob/master/src/routes/rss.xlm.js) that returns xml date. This is generated by requesting my post list endpoint and formating the data to work with the xlm feed.

## Getting Started For Yourself

My list of interesting selling points for SvelteKit may be a bit long and I could probably continue on much longer, I just wanted to give my reccomendation here like I would for other things I enjoy. If you'd like to get started with something like this, checkout the official [Svelte tutorial](https://svelte.dev/tutorial/basics) as well as the [SvelteKit getting started docs](https://kit.svelte.dev/docs/introduction) to learn more!

For an in-depth, awesome tutorial on building a SvelteKit static markdown blog, check out [Josh Collinsworth’s excellent tutorial]() that I followed. He covers everything and more on getting up and running.

I hope this article encourages you to at least check out the Svelte ecosystem. [Give me a shout](https://twitter.com/austinknight) if you decide to go down this path, I'll guide you as best I can along the way. If you liked this article, consider sharing it or [give me a follow](https://twitter.com/austinknight) to stay up to date when the next one drops!
