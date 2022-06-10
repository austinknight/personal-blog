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

<HomeBanner />

<div class="content-container">
  <PostList posts={posts} />
</div>


