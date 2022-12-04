const dummy = (blogs) => {
    return blogs ? 1 : 0 
}
  
const totalLikes = (blogs) => {
    let likes = blogs.map(each => each.likes)
    return likes.reduce((sum, item) => sum + item)
}

const favoriteBlog = (blogs) => {
    const sorted = blogs.sort((a, b) => a.likes > b.likes ? 1 : 0)
    return sorted[0]
}

const mostFrequentAuthor = (blogs) => {
    const authors = blogs.map(each => each.author);

    const mostFreqAuthor = authors.reduce((a,b,i,arr)=>
        (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b),null)

    const blogsAmount = blogs.filter(each => each.author === mostFreqAuthor).length
    return {'author': mostFreqAuthor, 'blogs': blogsAmount}
}

const mostLikes = (blogs) => {
    const mostLikes = Math.max(...blogs.map(blog => blog.likes));
    const mostLikedBlog = blogs.find(blog => blog.likes === mostLikes);
    return {
        title: mostLikedBlog.title,
        author: mostLikedBlog.author,
        likes: mostLikedBlog.likes,
    }
}

module.exports = {
    dummy, 
    totalLikes, 
    favoriteBlog,
    mostFrequentAuthor, 
    mostLikes
}

