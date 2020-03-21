class Vue{
  constructor(data){
    this.data = data
    observe(data)
  }
  bindData(elm,name){
    var self= this
    if(elm.tagName == 'INPUT'){
      elm.addEventListener('input',function(e){
        console.log(e.target.value)
        let newValue = e.target.value
        let val = self.data[name]
        if(newValue === val){
          return 
        }
        self.data[name] = newValue
      })
    }else{
      elm.innerHTML = this.data[name]
    }
    new Watcher(this,name,function(val){
      elm.innerHTML = val
    })
  }
}