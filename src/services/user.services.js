import service from "./config.services";

const getMyFeedsService = () => {
    return service.get("/user/feed/")
}
const getMyNewsService = (id) => {
    // if(id==='favourites') return service.get("/user/feed/all/favourites")
    // else if (id) return service.get("/user/feed/"+id)
    console.log("ID of newsfeed: ", id)
    if(id) return service.get(`/user/feed/${id}`)
    else return service.get("/user/feed/all")
}

const searchFeedService = (sourceUrl) =>{
    return service.request({
        method: 'POST',
        url: `http://localhost:5005/api/feed/searchFeedSources`,
        data: {
          sourceUrl: sourceUrl
        },
      
      })
    return service.post("/feed/searchFeedSources", sourceUrl)
}

const subscribeFeedService = (sourceUrl, title) => {
    return service.request({
        method: 'POST',
        url: `http://localhost:5005/api/user/feed/createOrFindAndSubscribe`,
        data: {
          name: title,
          sourceUrl: sourceUrl,
        },
      
      })
      return service.get("/user/feed/createOrFindAndSubscribe")
}

const unSubscribeFeedService = (id) => {
    return service.get(`/user/feed/${id}/unsubscribe`)
}

const writeCommentService = (id, comment) => {
    return service.request({
        method: 'POST',
        url: `http://localhost:5005/api/user/news/${id}/comment`,
        data: {
          comment: comment,
        },  
      })
}

const saveToFavouritesService = (id) => {
    return service.get(`/user/news/${id}/markAsFavourite`)
}
const shareFeedService = (id) => {
    return service.get(`/user/feed/${id}/share`)
}
const unshareFeedService = (id) => {
    return service.get(`/user/feed/${id}/unshare`)
}
export {
    getMyFeedsService,
    getMyNewsService,
    searchFeedService,
    subscribeFeedService,
    unSubscribeFeedService,
    shareFeedService,
    writeCommentService,
    saveToFavouritesService,
    unshareFeedService
}