async function fetchPosts(){
    const url = "https://jsonplaceholder.typicode.com/posts/?_limit=1";
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data) 
    // console.log(fetchPosts);
    data.map((ele)=>{
        console.log(`Title is ${ele.title}`)
    })
}

fetchPosts();