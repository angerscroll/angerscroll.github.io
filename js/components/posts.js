const Posts = {
    render: async () => {
      return `
        <main>
          <h1>Posts</h1>
          <ul>
            <li><a href="#">Post 1</a></li>
            <li><a href="#">Post 2</a></li>
            <li><a href="#">Post 3</a></li>
          </ul>
        </main>
      `;
    },
    after_render: async () => {}
  };
  
  export default Posts;
  