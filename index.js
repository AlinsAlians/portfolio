
// a recursive function that loops through an array and displays
// an element after a given period of time.
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