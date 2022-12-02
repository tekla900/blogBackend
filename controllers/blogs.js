const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
        console.log(response)
      })
      .catch(error => console.log(error))
  })
  
blogsRouter.get('/:id', (request, response) => {
    Blog.findById(request.params.id)
        .then(blog => {
            if (blog) {
            response.json(blog)
        } else {
            response.status(404).end()
        }
        })
        .catch(error => console.log(error))
})
  
blogsRouter.post('/', (request, response) => {
    const body = request.body
    
    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
    })

    blog
        .save()
        .then(savedBlog => {
          response.json(savedBlog)
        })
        .catch(error => {
          console.log(`BODY:` + request);
          console.log(`TITLE: ${blog.title}`);
          console.log(`author: ${blog.author}`);
          console.log(`url: ${blog.url}`);
          console.log(`likes: ${blog.likes}`);
        })
})
    
blogsRouter.delete('/:id', (request, response) => {
    Blog.findByIdAndRemove(request.params.id)
        .then(() => {
          response.status(204).end()
        })
        .catch(error => console.log(error))
})

module.exports = blogsRouter
