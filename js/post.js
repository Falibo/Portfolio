    document.addEventListener('DOMContentLoaded', function() {
      const postContentElement = document.getElementById('post-content');
      
      // Get the slug from the URL
      const urlParams = new URLSearchParams(window.location.search);
      const slug = urlParams.get('slug');
      
      if (!slug) {
        // If no slug is provided, show an error message
        postContentElement.innerHTML = `
          <div class="not-found">
            <h1>Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist or the URL is invalid.</p>
            <a href="index.html" class="back-to-blog">Back to Blog</a>
          </div>
        `;
        return;
      }
      
      // Find the post with the matching slug
      const post = blogPostsData.find(post => post.slug === slug);
      
      if (!post) {
        // If no post is found with the given slug, show an error message
        postContentElement.innerHTML = `
          <div class="not-found">
            <h1>Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist or the URL is invalid.</p>
            <a href="index.html" class="back-to-blog">Back to Blog</a>
          </div>
        `;
        return;
      }
      
      // Update the page title
      document.title = post.title;
      
      // Create the tags HTML
      const tagsHTML = post.tags.map(tag => 
        `<span class="tag">${tag}</span>`
      ).join('');
      
      // Render the post content
      postContentElement.innerHTML = `
        <div class="post-header">
          <div class="post-date">${post.date}</div>
          <h1 class="post-title">${post.title}</h1>
          <div class="post-tags">
            ${tagsHTML}
          </div>
        </div>
        <div class="post-content">
          ${post.article}
        </div>
        <a href="blog.html" class="back-to-blog">
          <i class="fas fa-arrow-left"></i> Back to Blog
        </a>
      `;
    });
  