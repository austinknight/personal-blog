<script type="ts">
  import type { Post } from '$lib/types'
  
  export let posts: Post[] = [];
</script>

<ul>
  {#each posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>