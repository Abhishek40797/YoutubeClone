export interface ICategroy {
    categoryName : string
}

export interface IHeroVideos {
    etag : string,
    id : { 
        kind : string,
        videoId: string
    }
    kind : string,
    snippet : {
        channelId : string,
        channelTitle : string,
        description : string,
        liveBroadcastContent : string,
        publishTime : string,
        publishedAt : string,
        thumbnails : {
            default : {
                url : string,
                width : number,
                height : number
            },
            high : {
                url : string,
                width : number,
                height : number
            },
            medium : {
                url : string,
                width : number,
                height : number
            }
        }
        title : string
    } 
}

export interface IWatchProps {
    etag : string,
    id : string,
    kind : string,
    snippet : {
        categoryId : string,
        channelId : string,
        channelTitle : string,
        description : string,
        liveBroadcastContent : string,
        localized : {
            description : string,
            title : string
        }
        tags : string[]
        publishedAt : string,
        thumbnails : {
            default : {
                url : string,
                width : number,
                height : number
            },
            high : {
                url : string,
                width : number,
                height : number
            },
            maxres : {
                url : string,
                width : number,
                height : number
            }
            medium : {
                url : string,
                width : number,
                height : number
            },
            standard : {
                url : string,
                width : number,
                height : number
            }
        }
        title : string
    }
}