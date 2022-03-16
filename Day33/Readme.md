Starterd learning Basic Node and Express and learnt the following

- app.get('/',(req, res)=> {
  let absolutePath = \_\_dirname + '/views/index.html'
  res.sendFile(absolutePath);
  }); to send a file as a response
  -use express.static to render staticwlwment of your project(styles, images etc)
- use res.json to create an api that returns json
