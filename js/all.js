let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];


//網頁初始化
const ticketCards = document.querySelector(".ticketCards");
const filterResultNum = document.querySelector("#filterResult");
function init() {
  let str = "";
  data.forEach(function (item, index) {
    let content = `<li class="col-4 ticketCard">
  <div class="ticketCardImg">
      <a href="#"><img src="${item.imgUrl}" alt=""></a>
      <div class="cardArea">
          <p>${item.area}</p>
      </div>
  </div>
  <div class="ticketCardContent d-flex flex-column justify-content-between">
      <div class="">
          <h3 class="cardName"><a href="#">${item.name}</a></h3>
          <p class="cardDescription">${item.description}</p>
      </div>
      <div class="d-flex justify-content-between">
          <p class="cardGroup"><span class="material-icons">error</span>剩下最後 ${item.group} 組</p>
          <p class="cardPrice">NTD$<span>${item.price}</span></p>
      </div>
      <div class="cardRate">
          <p>${item.rate}</p>
      </div>
  </div>
</li>`;
    str += content;
  });
  ticketCards.innerHTML = str;
  filterResultNum.textContent = `本次搜尋共 ${data.length} 筆資料`;
};
init();

//新增套票
const addTicketForm = document.querySelector("#addTicketForm");
const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketRegion = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");
const addTicketBtn = document.querySelector("#addTicketBtn");

addTicketBtn.addEventListener("click", function (e) {
  // console.log(ticketName.value);
  // console.log(ticketImgUrl.value);
  // console.log(ticketRegion.value);
  // console.log(ticketPrice.value);
  // console.log(ticketNum.value);
  // console.log(ticketRate.value);
  // console.log(ticketDescription.value);
  e.preventDefault();
  if (ticketName.value == "" || ticketName.value == "" || ticketImgUrl.value == "" || ticketRegion.value == "" || ticketDescription.value == "" || ticketNum.value == "" || ticketPrice.value == "" || ticketRate.value == "") {
    alert("請輸入完整資料");
    return;
  }else if(ticketRate.value <= 0 || ticketRate.value > 10){
    alert("套票星級請介於1～10之間");
  }else{
    let obj = {};
    obj.id = Date.now();
    obj.name = ticketName.value;
    obj.imgUrl = ticketImgUrl.value;
    obj.area = ticketRegion.value;
    obj.description = ticketDescription.value;
    obj.group = parseInt(ticketNum.value);
    obj.price = parseInt(ticketPrice.value);
    obj.rate = parseInt(ticketRate.value);
    data.push(obj);
    alert("新增成功");
    init();
    addTicketForm.reset();
  }
})


//篩選
const regionFilter = document.querySelector("#regionFilter");
regionFilter.addEventListener("change", function (e) {
  // console.log("test");
  let count = 0;
  let str = "";
  data.forEach(function (item, index) {
    if (regionFilter.value == "") {
      init();
      return;
    } else if (regionFilter.value == item.area) {
      let content = `<li class="col-4 ticketCard">
          <div class="ticketCardImg">
              <a href="#"><img src="${item.imgUrl}" alt=""></a>
              <div class="cardArea">
                  <p>${item.area}</p>
              </div>
          </div>
          <div class="ticketCardContent d-flex flex-column justify-content-between">
          <div class="">
              <h3 class="cardName"><a href="#">${item.name}</a></h3>
              <p class="cardDescription">${item.description}</p>
          </div>
          <div class="d-flex justify-content-between">
              <p class="cardGroup"><span class="material-icons">error</span>剩下最後 ${item.group} 組</p>
              <p class="cardPrice">NTD$<span>${item.price}</span></p>
          </div>
          <div class="cardRate">
              <p>${item.rate}</p>
          </div>
        </div>
      </li>`;
      count += 1;
      str += content;
      ticketCards.innerHTML = str;
      filterResultNum.textContent = `本次搜尋共 ${count} 筆資料`;
    }

  })

})