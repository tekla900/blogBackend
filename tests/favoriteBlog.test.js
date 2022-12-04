const listHelper = require('../utils/list_helper')

describe('favorite blog ', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]
  
    test('when list has only one blog, returns the same blog', () => {
      const result = listHelper.favoriteBlog(listWithOneBlog)
      expect(result).toBe(listWithOneBlog[0])
    })

    const listWithTwoBlogs =  [
      {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
      },
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
      },
    ]

    test('when list has two blogs, returns the blog with most likes', () => {
      const result = listHelper.favoriteBlog(listWithTwoBlogs)
      expect(result).toBe(listWithTwoBlogs[0])
    })
})