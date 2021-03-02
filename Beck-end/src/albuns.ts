import * as express from 'express';
const router = express.Router();
 
router.get('/', (request, response) => {
  response.send('He world!');

  const URL_TO_FETCH = 'https://jsonplaceholder.typicode.com/albums'; 
    fetch(URL_TO_FETCH, { 
    method: 'get'
  })
  .then(function(response) { 
    var response = request.response;
    populateTodo(response);
  })
  .catch(function(err) { console.error(err); });
  
  
  
});

export default router;