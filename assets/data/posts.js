const blogPostsData = [
  {
    "id": "1",
    "title": "How to Deploy a React App to GitHub Pages",
    "slug": "deploy-react-app-to-github-pages",
    "date": "January 4, 2025",
    "description": "Learn how to create responsive layouts that adapt to any screen size using the power of CSS Grid. This comprehensive guide covers grid templates, fractional units, and advanced techniques for modern web design.",
    "tags": ["React", "GitHub", "Deployment"],
    "coverImage": "assets/img/blogs/react-github.png",
    "article": `
      <h1>Deploying React Apps to GitHub Pages</h1>
      <h2>Introduction</h2>
      <p>GitHub Pages provides a convenient way to host static websites, including React applications. In this article, we'll explore the steps to deploy a React app to GitHub Pages.</p>
      <img src="assets/img/blogs/react-github.png" alt="Deploying React apps to GitHub Pages">
      <h2>Step 1: Create a GitHub Repository</h2>
      <p>To deploy a React app to GitHub Pages, you'll need to create a new GitHub repository for your project. Initialize a new React project using <code>create-react-app</code> and link it to your GitHub repository.</p>
      <h2>Step 2: Install the <code>gh-pages</code> Package</h2>
      <p>To deploy your React app to GitHub Pages, you'll need to install the <code>gh-pages</code> package. Run the following command in your terminal:</p>
      <code class="block">npm install gh-pages --save-dev</code>
      <h2>Step 3: Configure <code>gh-pages</code></h2>
      <p>Configure the <code>gh-pages</code> package by adding a <code>homepage</code> property to your <code>package.json</code> file. The <code>homepage</code> property should match the URL of your GitHub Pages site.</p>
      <code class="block">"homepage": "https://username.github.io/repository-name",</code>
      <h2>Step 4: Deploy to GitHub Pages</h2>
      <p>To deploy your React app to GitHub Pages, add a <code>deploy</code> script to your <code>package.json</code> file:</p>
      <code class="block">"scripts": { "deploy": "gh-pages -d build" },</code>
      <p>Run the <code>deploy</code> script to deploy your React app to GitHub Pages:</p>
      <code class="block">npm run deploy</code>
      <h2>Conclusion</h2>
      <p>Deploying a React app to GitHub Pages is a straightforward process. By following these steps, you can easily host your React app on GitHub Pages.</p>
    `
  },
  {
    "id": "2",
    "title": "My Journey to Creating a CSS Framework",
    "slug": "my-own-css-framework",
    "date": "March 17, 2025",
    "description": "Learn from my experience of creating a reusable CSS framework, overcoming challenges such as design consistency, scalability, browser compatibility, and performance.",
    "tags": ["CSS", "Framework", "Web Development"],
    "coverImage": "assets/img/blogs/own-css-framework.png",
    "article": `<h1>My Journey to Creating a CSS Framework</h1> <img src="assets/img/blogs/own-css-framework.png" alt="Creating a CSS Framework" style="width:100%;height:auto;"> <h2>Introduction</h2> <p>As a web developer, I've always been fascinated by the idea of creating a reusable CSS framework. The thought of having a set of pre-defined styles and components that I could easily apply to any project was too enticing to resist. So, I embarked on a journey to create my own CSS framework.</p> <h2>The Initial Excitement</h2> <p>In the beginning, I was bursting with excitement and ideas. I spent hours brainstorming, researching, and experimenting with different approaches. I devoured articles, tutorials, and documentation on CSS frameworks, trying to absorb as much knowledge as possible.</p> <h2>Challenge 1: Design Consistency and Flexibility</h2> <p>As I delved deeper into the project, I encountered my first major challenge: striking a balance between design consistency and flexibility. I wanted my framework to have a consistent look and feel, but I also needed it to be flexible enough to accommodate different use cases and project requirements.</p> <p>To overcome this challenge, I defined clear design principles and created reusable, modular components. I also established a robust naming convention and organizational system, making it easier to maintain and update my framework.</p> <h2>Challenge 2: Scalability</h2> <p>As my framework grew, I encountered another significant challenge: scalability. I needed to ensure that my framework could handle large, complex projects without becoming bloated or unmanageable.</p> <p>To address this challenge, I adopted a modular architecture and employed utility-first and component-based approaches. This allowed me to create a robust and scalable framework that could easily adapt to different project requirements.</p> <h2>Challenge 3: Browser Compatibility</h2> <p>Browser compatibility was another significant hurdle I faced. I needed to ensure that my framework worked seamlessly across all modern and older browsers.</p> <p>To overcome this challenge, I regularly tested my framework on various browsers and leveraged CSS normalization techniques. I also used tools like Autoprefixer and CSSnano to ensure that my framework was optimized for different browsers and environments.</p> <h2>Challenge 4: Performance</h2> <p>Finally, I needed to ensure that my framework didn't become too large and slow down page load times. To address this challenge, I minified my CSS, used only necessary features, and provided options to include only required components.</p> <h2>Conclusion</h2> <p>Creating a CSS framework was a challenging but rewarding experience. Through this journey, I gained valuable insights into the importance of design consistency, scalability, browser compatibility, and performance. I hope that my experience can serve as a guide for others who embark on similar projects.</p>`
    },
];