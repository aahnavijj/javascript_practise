const debounce = (fun, delay) => {
    let timer = null
    return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=>fun.apply(this, args), delay)
    
    }
    
    }
    
    const res = debounce(()=>{
    console.log("hii debounce fun")
    }, 4000)
    
    res()
    