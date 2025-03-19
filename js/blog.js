document.addEventListener('DOMContentLoaded', function() {
  const blogPostsContainer = document.querySelector('.blog-posts');
  const filterButtons = document.querySelectorAll('[data-filter]');
  let blogPosts = [];

  // Use the data directly from blogs.js instead of fetching
  try {
    // Make sure blogPostsData is available from the included blogs.js file
    blogPosts = blogPostsData;
    displayPosts(blogPosts);
    setupFilters();
  } catch (error) {
    console.error('Error loading blog posts:', error);
    blogPostsContainer.innerHTML = `
      <div class="error-message">
        <h3>Oops! Something went wrong.</h3>
        <p>Unable to load blog posts. Please check if blogs.js is properly included.</p>
      </div>
    `;
  }

  // Display posts in the container
  function displayPosts(posts) {
    if (posts.length === 0) {
      blogPostsContainer.innerHTML = '<p class="no-posts">No posts found matching your criteria.</p>';
      return;
    }

    const postsHTML = posts.map(post => {
      // Create tags HTML
      const tagsHTML = post.tags.map(tag => 
        `<span class="tag">${tag}</span>`
      ).join('');

      // Create post card HTML
      return `
        <article class="post-card">
          <div class="post-image">
            <img src="${post.coverImage}" alt="${post.title}">
          </div>
          <div class="post-content">
            <span class="post-date">${post.date}</span>
            <h2 class="post-title">${post.title}</h2>
            <p class="post-description">${post.description}</p>
            <div class="post-tags">
              ${tagsHTML}
            </div>
            <a href="post.html?slug=${post.slug}" class="post-link">
              Read more <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </article>
      `;
    }).join('');

    blogPostsContainer.innerHTML = postsHTML;
  }

  // Setup filter functionality
  function setupFilters() {
    filterButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active-filter'));
        
        // Add active class to clicked button
        this.classList.add('active-filter');
        
        const filter = this.getAttribute('data-filter');
        
        if (filter === 'all') {
          displayPosts(blogPosts);
        } else {
          // Filter posts by tag
          const filteredPosts = blogPosts.filter(post => 
            post.tags.includes(filter)
          );
          displayPosts(filteredPosts);
        }
      });
    });
  }
});