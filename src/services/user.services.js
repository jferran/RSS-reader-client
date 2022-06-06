import service from "./config.services";

const getMyFeedsService = () => {
    return service.get("/user/feed/")
}
const getMyNewsService = (id) => {
    if(id)return service.get("/user/feed/"+id)
    else return service.get("/user/feed/all")
}
export {
    getMyFeedsService,
    getMyNewsService
}