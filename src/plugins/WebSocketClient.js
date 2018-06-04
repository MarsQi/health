var websocketClient={};
websocketClient.init = function (options) {
  let connected = false
  let events = {}
  let messageCache = []
  let _ws = ''
  const init = () => {
    this._ws = new window.WebSocket(options.path)
    _ws = this._ws
    this._ws.onopen = (e) => {
      connected = true
      options._open()
      options.open.call(this, e)
    }
    this._ws.onmessage = ({ data }) => {  
      const message = JSON.parse(data)
      if (message.id) {
        event(message.id, message)
      } else {
        event(message.type, JSON.parse(message.msg))
      }
    }
    this._ws.onclose = (e) => {
      connected = false
      options._close()
      options.close.call(this, e)
    }
    this._ws.onerror = (e) => {
      options.error.call(this, e)
    }
  }

  const opt = {
    open () {},
    _open () { sendMessageCache() },
    _close () {
      console.log('又开始初始化')
      setTimeout(init, 5000)
    },
    close () {},
    message () {},
    error () {}
  }
  options = {...opt, ...options}

  this.send = (to, msg, type = -1, isDepart = 0,) => {
    let data = {to, msg, type, isDepart}
    sendMsg(data)
  }
  this.close = ()=>{
    _ws.close()
  }
  function sendMessageCache () {
    if (messageCache.length) {
      let msg = messageCache.shift()
      sendMsg(msg)
      sendMessageCache()
    }
  }

  function sendMsg (msg) {
    if (connected) {
      _ws.send(JSON.stringify(msg))
    } else {
      messageCache.push(msg)
    }
  }

  this.request = (data, type, to, isDepart = 0) => {
    return new Promise((resolve, reject) => {
      try {
        const msg = {'msg':data, type, to, isDepart}
        this.on('login', (data) => {
          // console.log(data)
          // if (error === true) {
          //   reject(data)
          // }
          resolve(data)
          // delete events[messageId]
        })
        sendMsg(msg)
      } catch (e) {
        reject(e)
      }
    })
  }

  this.on = (name, fn) => {
    if (typeof fn === 'function') {
      if (!events[name]) events[name] = []
      events[name].push(fn)
    }
  }

  this.off = (name, fn) => {
    const eventsArray = events[name]
    if (eventsArray) {
      eventsArray.every(eventFn => {
        if (eventFn === fn) {
          eventsArray.splice(eventsArray.indexOf(eventFn), 1)
          return false
        }
        return true
      })
    }
  }

  function event (name, data) {
    let eventsArray = events[name]
    eventsArray && eventsArray.forEach(fn => fn(data))
  }

  init()
  return this
}
export default websocketClient