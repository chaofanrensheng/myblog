/**
 * Created by Administrator on 2017/12/8.
 // */
//连接数据库文件
//引入数据库配置文件
var setting  = require("../setting");

//引入mongodb模块下的Db对象
var Db = require('mongodb').Db;

//引入mongodb模块下的server对象
var Server = require('mongodb').Server;

//数据库的实例对象
module.exports = new Db(setting.db,new Server(setting.host,setting.post),{safe:true});
// safe:true在安全模式下打开   setting.db   数据库名