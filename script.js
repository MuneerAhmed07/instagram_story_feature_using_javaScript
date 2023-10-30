let arr = [
    {
        dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1621786037709-6c700b14ea75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        story: "https://images.unsplash.com/photo-1621786030484-4c855eed6974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    }
];

let stories = document.querySelector(".stories");
let fullScreen = document.querySelector(".full_screen");
let data = "";

arr.forEach((elem, index) => {
    data += `
        <div class="story">
            <img id="${index}" src="${elem.dp}" />
        </div>
    `
});

stories.innerHTML = data;

stories.addEventListener("click", (dets) => {
    var story = arr[dets.target.id].story;
    // console.log(story);
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${story})`;

    setTimeout(() => {
        fullScreen.style.display = "none";
    }, 3000);
})