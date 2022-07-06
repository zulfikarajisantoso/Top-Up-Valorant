const data = "data.json";
const listfotobes = document.querySelector(".listfotobes");
const listfotokecil = document.querySelector(".listfotokecil");

const ambilfotobesar = () => {
  fetch(data)
    .then((res) => res.json())
    .then((data) => {
      listfotobes.innerHTML = "";
      let besar = data.fotobesar;
      besar.map((item) => {
        listfotobes.innerHTML += `
            <div class="col-6 col-md-4 mt-3">
                     <div class="coverrr">
                            <a href="${item.foto}" download>
                                <img src="${item.foto}"
                                class="imgsize"  alt="" >
                            </a>
                            <h6 class="titleimage" style="margin-top: 10px; ">${item.description}</h6>
                    </div>
             </div>`;
      });
    })
    .catch((err) => console.log(err));
};

document.addEventListener("DOMContentLoaded", ambilfotobesar);

const ambilfotokecil = () => {
  fetch(data)
    .then((res) => res.json())
    .then((data) => {
      listfotokecil.innerHTML = "";
      let besar = data.fotokecil;
      besar.map((item) => {
        listfotokecil.innerHTML += `
            <div class="col-6 col-md-3 mt-3">
                     <div class="coverrrfoto">
                            <a href="${item.foto}" download>
                                <img src="${item.foto}"
                                class="imgsize"  alt="" >
                            </a>
                            <h6 class="titleimagefoto" style="margin-top: 10px; ">${item.description}</h6>
                    </div>
             </div>`;
      });
    })
    .catch((err) => console.log(err));
};

document.addEventListener("DOMContentLoaded", ambilfotokecil);
