var mycards = [{
    Image:"./ai-generated-7483596_960_720.jpg",
     Name:"Likhitha",
     class:"6",
     College :"Aditya"
},
{
    Image:"./ChatGPT Image Jun 8, 2025, 08_12_24 PM.png",
     Name:"Harshitha",
     class:"7",
     College :"Pragati"
},
{
    Image:"./ai-generated-7483596_960_720.jpg",
     Name:"Bhanu",
     class:"8",
     College :"Aditya"
},
{
    Image:"./ChatGPT Image Jun 8, 2025, 08_12_24 PM.png",
     Name:"Chandu",
     class:"9",
     College :"Narayana"
},
{
    Image:"./ai-generated-7483596_960_720.jpg",
     Name:"Rajeswari",
     class:"10",
     College :"Chaitanya"
},
{
    Image:"./ChatGPT Image Jun 8, 2025, 08_12_24 PM.png",
     Name:"Hari",
     class:"11",
     College :"Ratnam"
},
{
    Image:"./ai-generated-7483596_960_720.jpg",
     Name:"Satish",
     class:"12",
     College :"Giet"
},
{
    Image:"./ChatGPT Image Jun 8, 2025, 08_12_24 PM.png",
     Name:"Prakash",
     class:"13",
     College :"Kiet"
},
{
    Image:"./ai-generated-7483596_960_720.jpg",
     Name:"Pravallika",
     class:"29",
     College :"Ajantha"
},
]
const container = document.getElementsByClassName("card-section")[0];
mycards.map((ele)=>{
    const result =  `<div class="card">
            <div class="image-section">
                <img src="${ele.Image}">
            </div>
            <div class="content-section">
                <div class="name">Name:${ele.Name}</div>
                 <div class="class">Class:${ele.class}</div>
                  <div class="college">College:${ele.College}</div>
            </div>
        </div>`;
    container.innerHTML += result;
   
});
