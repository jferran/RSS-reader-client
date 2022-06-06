import service from "./config.services";

const getMyFeedsService = () => {
    return service.get("/user/feed/")
}
const getMyNewsService = (id) => {
    if(id==='favourites') return service.get("/user/feed/all")
    else if (id) return service.get("/user/feed/"+id)
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

export {
    getMyFeedsService,
    getMyNewsService,
    searchFeedService
}