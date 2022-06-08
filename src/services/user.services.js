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
        url: `${process.env.REACT_APP_SERVER_URL}/feed/searchFeedSources`,
        data: {
          sourceUrl: sourceUrl
        },
      
      })
    return service.post("/feed/searchFeedSources", sourceUrl)
}

const subscribeFeedService = (sourceUrl, title) => {
    return service.request({
        method: 'POST',
        url: `${process.env.REACT_APP_SERVER_URL}/user/feed/createOrFindAndSubscribe`,
        data: {
          name: title,
          sourceUrl: sourceUrl,
        },
      
      })
      return service.get("/user/feed/createOrFindAndSubscribe")
}
const subscribeByIdService = (id) => {
    return service.get(`/user/feed/${id}/subscribe`)
}

const unSubscribeFeedService = (id) => {
    return service.get(`/user/feed/${id}/unsubscribe`)
}

const writeCommentService = (id, comment) => {
    return service.request({
        method: 'POST',
        url: `${process.env.REACT_APP_SERVER_URL}/user/news/${id}/comment`,
        data: {
          comment: comment,
        },  
      })
}

const saveToFavouritesService = (id) => {
    return service.get(`/user/news/${id}/markAsFavourite`)
}
const unsaveFromFavouritesService = (id) => {
    return service.get(`/user/news/${id}/unmarkAsFavourite`)
}
const shareFeedService = (id) => {
    return service.get(`/user/feed/${id}/share`)
}
const unshareFeedService = (id) => {
    return service.get(`/user/feed/${id}/unshare`)
}
const refreshService = () => {
    return service.get(`/feed/`)
}
const getNewsUpdateService = () => {
    return service.get(`/user/news/refresh`)
}

const getFeedNameService = (id) => {
    return service.get(`/user/feed/${id}/name`)
}
const getFeedsSharedByUsers = () => {
    return service.get(`/user/feed/sharedByUsers`)
}

export {
    getMyFeedsService,
    getMyNewsService,
    searchFeedService,
    subscribeFeedService,
    subscribeByIdService,
    unSubscribeFeedService,
    shareFeedService,
    writeCommentService,
    saveToFavouritesService,
    unsaveFromFavouritesService,
    unshareFeedService,
    refreshService,
    getNewsUpdateService,
    getFeedNameService,
    getFeedsSharedByUsers
}