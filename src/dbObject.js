import bus from "@/bus.js";
var dbObject = {};
dbObject.init = function(params) {
    this.db_name = params.db_name;
    this.db_version = params.db_version || 1;
    this.db_store_name = params.db_store_name;
    if (!window.indexedDB) {
        window.console.log("你的浏览器不支持IndexDB,请更换浏览器");
    }

    var request = indexedDB.open(this.db_name, this.db_version);
    //打开数据失败  
    request.onerror = function(event) {
        console.log("不能打开数据库,错误代码: " + event.target.errorCode);
        console.log(event.currentTarget.error.message);
    };
    request.onupgradeneeded = function(event) {
        console.log('更新')
        this.db = event.target.result;
        this.db.createObjectStore("gather");
        this.db.createObjectStore("discern");
        this.db.createObjectStore("relevance");
        this.db.createObjectStore("explore");
        this.db.createObjectStore("healthDetails");
    };
    //打开数据库  
    request.onsuccess = function(event) {
        //此处采用异步通知. 在使用curd的时候请通过事件触发  
        dbObject.db = event.target.result;
        console.log('indexDB连接成功')
    };
};
/** 
 * 增加和编辑操作  
 */
dbObject.put = function(params, key) {
    //此处须显式声明事物  
    var transaction = dbObject.db.transaction(dbObject.db_store_name, "readwrite");
    var store = transaction.objectStore(dbObject.db_store_name);
    var request = store.put(params, key);
    request.onsuccess = function() {
        console.log('添加成功');
    };
    request.onerror = function(event) {
        console.log(event);
    }
};
/** 
 * 删除数据  
 */
dbObject.delete = function(id) {
    // dbObject.db.transaction.objectStore is not a function  
    request = dbObject.db.transaction(dbObject.db_store_name, "readwrite").objectStore(dbObject.db_store_name).delete(id);
    request.onsuccess = function() {
        console.log('删除成功');
    }
};

/** 
 * 查询操作  
 */
dbObject.select = function(key) {
    //第二个参数可以省略  
    var transaction = dbObject.db.transaction(dbObject.db_store_name, "readwrite");
    var store = transaction.objectStore(dbObject.db_store_name);
    if (key)
        var request = store.get(key);
    else
        var request = store.getAll();

    request.onsuccess = function() {
        bus.$emit('search', request.result)
    }
};
/** 
 * 清除整个对象存储(表) 
 */
dbObject.clear = function() {
    var request = dbObject.db.transaction(dbObject.db_store_name, "readwrite").objectStore(dbObject.db_store_name).clear();
    request.onsuccess = function() {
        console.log('清除成功');
    }
};
//  查询所有数据
dbObject.getAlldata = function() {
    var request = dbObject.db.transaction(dbObject.db_store_name, "readwrite").objectStore(dbObject.db_store_name).getAll();
    request.onsuccess = function() {
        console.log('查询成功');
    }
};
window.dbObject = dbObject;
//export default dbObject;