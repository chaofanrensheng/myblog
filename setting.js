//数据库配置信息
module.exports = {
    cookieSecret:"pjc",  // 加密的时候用到的字符串  随便写的
    db:'blog',          // 数据库名称
    host:'localhost',  // 数据库地址
    post:27017    // 数据库的端口号
}

//我们把数据库的配置信息写在这里，是为了在连接数据库的时候，一旦数据库的地址或者是名称或者是端口号发生变化的时候，我们只需要改这里就行了