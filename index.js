function slideShow(index){
    let items = ["a","b","c","d"];
    if(index>items.length-1){
        index = 0
    }
    console.log(items[index])
    setTimeout(()=>{
        slideShow(index + 1)
    }, 2000)
}
slideShow(0)