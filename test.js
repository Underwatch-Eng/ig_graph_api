var request = require("request");

var options = { method: 'GET',
  url: 'https://api.instagram.com/v1/users/search',
  qs: { q: 'ray_mooon.kim', count: 'SOME_INTEGER_VALUE' },
  headers: { access_token: 'EABAmnjtK04IBAL3TZCZBb1V2IZA1ZCZBuEK8u5JQ0u2fTGbr1fyWcJrZAYfsKZCA6zgo5r2ZClVjvpvjLV74CTdIi1bz0Wd6xcthV58aoQvIbtNbs2dmtB3ZCLb2wJ4nawDZA7xO7VU3hVPUYHUumDqsjiYplmFLAc2uJTUn0ZBaqrPZCwZDZD' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});