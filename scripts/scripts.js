async function getdata() {
  // Get the data from the json file
  let response = await fetch("data.json");
  let data = await response.json();
  return data;
}

async function Createratecards() {
  let data = await getdata();
  for (index = 0; index < data.length; index++) {
    let section = document.createElement("section");
    section.className = `catagory catagory${index + 1}`;
    section.innerHTML = `
            <section class="cattype">
              <img src="${data[index].icon}" alt="" class="icon">
              <p class="typename typename${index + 1}">${data[index].category}</p>
            </section>
            <section class="mark">
              <p class="obtained">${data[index].score}&nbsp;</p>
              <p class="total">/ 100</p>
            </section>
    `;
    document.querySelector(".rate").append(section)
  }
}
Createratecards();
