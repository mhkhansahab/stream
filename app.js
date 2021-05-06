function render(){
    const contentContainer = document.querySelector(".content-container");
    let playlist = window.localStorage.getItem("playlist");
    var parsed = JSON.parse(playlist);
    
    if(parsed === null){
        const message = document.getElementById("message");
        message.style.display = "block";
        contentContainer.style.display = "none";
    }
    else if(parsed.length === 0){
        const message = document.getElementById("message");
        message.style.display = "block";
        contentContainer.style.display = "none";
    }
    else if(parsed !== []){
        const iFrame = document.getElementById("my-iframe");
        const list = JSON.parse(playlist);
        const url = new URL(list[0].url);
        const param = url.searchParams.get("v");
        iFrame.src = `https://www.youtube.com/embed/${param}`;

        const mainPlaylist = document.querySelector(".playlist > ul");
        list.forEach((element,index) => {
            const url = new URL(element.url);
            const param = url.searchParams.get("v");
            const tile = `<li class="tile"><span><img class="thumbnail" src="https://img.youtube.com/vi/${param}/0.jpg"></span><span class="tile-content" onclick="changeVideo(this)">${element.name}</span><i index = ${index} class="fas fa-trash delete-btn" onclick="deleteVideo(this)"></i></li>`;
            mainPlaylist.innerHTML += tile; 
        });

    }
}

function addVideo(){
    const inputName = document.querySelector("#name");
    const inputUrl = document.querySelector("#url");

    let playlist = window.localStorage.getItem("playlist");
    const list = JSON.parse(playlist);
    
    if(list === null){
        playlist = [];
    }
    else{
        playlist = JSON.parse(playlist);
    }
    if(inputName.value !== "" && inputUrl.value !== ""){
        const contentContainer = document.querySelector(".content-container");
        contentContainer.style.display = "flex";
        const message = document.getElementById("message");
        message.style.display = "none";
        const obj = {
            name : inputName.value,
            url : inputUrl.value
        };
        playlist.push(obj);
        playlist = JSON.stringify(playlist);
        window.localStorage.setItem("playlist",playlist);
        
        const iFrame = document.getElementById("my-iframe");
        const url = new URL(inputUrl.value);
        const param = url.searchParams.get("v");
        
        const videoURL = `https://www.youtube.com/embed/${param}`;
        iFrame.src = videoURL; 

        playlist = window.localStorage.getItem("playlist");
        const list = JSON.parse(playlist);
        const mainPlaylist = document.querySelector(".playlist > ul");
        mainPlaylist.innerHTML = "";

       list.forEach((element,index) => {
            const url = new URL(element.url);
            const param = url.searchParams.get("v");
            const tile = `<li class="tile"><span><img class="thumbnail" src="https://img.youtube.com/vi/${param}/0.jpg"></span><span class="tile-content" onclick="changeVideo(this)">${element.name}</span><i index = ${index} class="fas fa-trash delete-btn" onclick="deleteVideo(this)"></i></li>`;
            mainPlaylist.innerHTML += tile; 
        });
        
        inputName.value = "";
        inputUrl.value = "";
    }

    alert("Video Added");
}

function deleteVideo(e){
    const contentContainer = document.querySelector(".content-container");
    const iFrame = document.getElementById("my-iframe");
    let index = e.getAttribute("index");

    let playlist = window.localStorage.getItem("playlist");
    const list = JSON.parse(playlist);
    
    list.splice(index,1);
    window.localStorage.setItem("playlist",JSON.stringify(list));

    playlist = window.localStorage.getItem("playlist");
    const updated = JSON.parse(playlist);
    
    if(updated.length !== 0){
        if(updated.length >= index){
            index = 0;    
        }
        const url = new URL(updated[index].url);
        const param = url.searchParams.get("v");
        
        const videoURL = `https://www.youtube.com/embed/${param}`;
        iFrame.src = videoURL;

        const mainPlaylist = document.querySelector(".playlist > ul");
        mainPlaylist.innerHTML = ""; 
        updated.forEach((element,index) => {
            const url = new URL(element.url);
            const param = url.searchParams.get("v");
            const tile = `<li class = "tile"><span><img class="thumbnail" src="https://img.youtube.com/vi/${param}/0.jpg"></span><span class="tile-content" onclick="changeVideo(this)">${element.name}</span><i index = ${index} class="fas fa-trash delete-btn" onclick="deleteVideo(this)"></i></li>`;
            mainPlaylist.innerHTML += tile; 
        });

    }else{
        contentContainer.style.display = "none";
        const message = document.getElementById("message");
        message.style.display = "block";
    }

    alert("Video Deleted");

}

function changeVideo(e){
    const iFrame = document.getElementById("my-iframe");
    const index = e.nextSibling.getAttribute("index");
    let playlist = window.localStorage.getItem("playlist");
    list = JSON.parse(playlist);
    const url = new URL(list[index].url);
    const param = url.searchParams.get("v");

    const videoURL = `https://www.youtube.com/embed/${param}`;
    iFrame.src = videoURL; 

}

const arrow = document.querySelector(".arrow");
const drawer = document.querySelector(".drawer-li");
arrow.addEventListener("click", ()=>{
    if(drawer.style.width === "80%" ){
        drawer.style.width = "0%";
        arrow.style.animation = "forwards backward-rotate 1s";
    }
    else{
        drawer.style.width = "80%";
        arrow.style.animation = "forwards forward-rotate 1s";
    }
})

const menu = document.getElementById("menu");
menu.addEventListener("click",()=>{
    if(drawer.style.display === "none" || drawer.style.display === ""){
        drawer.style.display = "block";
    }
    else{
        drawer.style.display = "none";
    }
})

const playlistCollapser = document.getElementById("playlist-arrow");
const playlistList = document.getElementById("list");
playlistCollapser.addEventListener("click",()=>{
    if(playlistList.style.height === "100%" || playlistList.style.height === ""){
        playlistList.style.height = "0px";
        playlistCollapser.style.animation = "forwards downward 1s";
        }
    else{
        playlistList.style.height = "100%";
        playlistCollapser.style.animation = "forwards upward 1s";
    }
    })
    
    // if(window.innerWidth  >= 820){
    //     const rightNav = document.getElementsByClassName("drawer-li");
    //     rightNav[0].className += " desktop-style";
    // }else{
    //     const rightNav = document.getElementsByClassName("drawer-li");
    //     rightNav[0].className += " mobile-style";
    // }

    // window.addEventListener("resize",()=>{
    //     const rightNav = document.getElementsByClassName("drawer-li");
    //     if(window.innerWidth <= 820){
    //         rightNav[0].className += " mobile-style";
    //         if(rightNav[0].classList.contains("desktop-style")){
    //             rightNav[0].classList.remove("desktop-style");
    //         }
            
    //     }else{
    //         rightNav[0].className += " desktop-style";
    //         if(rightNav[0].classList.contains("mobile-style")){
    //             rightNav[0].classList.remove("mobile-style");
    //         } 
    //     }
    // })
    // window.onbeforeunload = ()=>{
    //     window.removeEventListener("resize");
    // }

render();