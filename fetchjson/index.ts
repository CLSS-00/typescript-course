import axios from 'axios';
// No need to install typescript & ts-node globablly
// added

const HOST = 'https://jsonplaceholder.typicode.com';

axios
  .get(`${HOST}/todos/1`)
  .then(({ data }) => {
    const { id, title, completed } = data;
    console.log(`
    The todo with ID: ${id}
    Has a title of: ${title}
    Is completed: ${completed}
    `);
  })
  .catch(console.log);
