<script context="module" lang="ts">
  import type { LoadOutput, ExternalFetch } from '@sveltejs/kit'

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

<script lang="ts">
  import PostList from '$lib/components/PostList.svelte'
  import type { Post } from '$lib/types'

  export let posts: Post[] = [];
</script>

<PostList posts={posts} />