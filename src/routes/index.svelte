<script context="module" lang="ts">
  import type { LoadOutput } from '@sveltejs/kit'

  export const load = async ({ fetch }): Promise<LoadOutput> => {
    const res = await fetch('/api/posts.json')
    const posts = await res.json()

    return {
      props: {
        posts
      }
    }
  }
</script>

<script type="ts">
  import HomeBanner from '$lib/components/HomeBanner.svelte';
  import PostList from '$lib/components/PostList.svelte'

  import type { Post } from '$lib/types'

  export let posts: Post[] = [];
</script>

<style>
  .all-articles {
    display: flex;
  }
</style>

<HomeBanner />

<div class="content-container">
  <div />
  <div>
    <PostList posts={posts} />
    <a class="all-articles" href="/articles">See All Articles <span class="material-symbols-outlined">chevron_right</span></a>
  </div>
</div>


