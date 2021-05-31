let rain = document.getElementsByClassName("bad")[0];
let dev = screen.width;
rain.innerHTML = `<h2 class="bad">
Catergory : <span class="badge badge-secondary">Technology</span>
</h2>`;
let para = document.getElementsByClassName("card")[0];
let card = document.createElement("div");

var coun = "in";
if (sessionStorage.getItem("cont") == "America") {
    coun = "us";
} else if (sessionStorage.getItem("cont") == "India") {
    coun = "in";
} else if (sessionStorage.getItem("cont") == "Argentina") {
    coun = "ar";
} else if (sessionStorage.getItem("cont") == "Autralia") {
    coun = "au";
} else if (sessionStorage.getItem("cont") == "Austria") {
    coun = "at";
} else if (sessionStorage.getItem("cont") == "Belgium") {
    coun = "be";
} else if (sessionStorage.getItem("cont") == "Brazil") {
    coun = "br";
} else if (sessionStorage.getItem("cont") == "Bulgaria") {
    coun = "bg";
} else if (sessionStorage.getItem("cont") == "Canada") {
    coun = "ca";
} else if (sessionStorage.getItem("cont") == "China") {
    coun = "cn";
} else if (sessionStorage.getItem("cont") == "Colombia") {
    coun = "co";
} else if (sessionStorage.getItem("cont") == "Cuba") {
    coun = "cu";
} else if (sessionStorage.getItem("cont") == "Czech Republic") {
    coun = "cz";
} else if (sessionStorage.getItem("cont") == "Egypt") {
    coun = "eg";
} else if (sessionStorage.getItem("cont") == "France") {
    coun = "fr";
} else if (sessionStorage.getItem("cont") == "Germany") {
    coun = "de";
} else if (sessionStorage.getItem("cont") == "Greece") {
    coun = "gr";
} else if (sessionStorage.getItem("cont") == "Hong Kong") {
    coun = "hk";
} else if (sessionStorage.getItem("cont") == "Hungary") {
    coun = "hu";
} else if (sessionStorage.getItem("cont") == "Indonesia") {
    coun = "id";
} else if (sessionStorage.getItem("cont") == "Ireland") {
    coun = "ie";
} else if (sessionStorage.getItem("cont") == "Israel") {
    coun = "il";
} else if (sessionStorage.getItem("cont") == "Italy") {
    coun = "it";
} else if (sessionStorage.getItem("cont") == "Japan") {
    coun = "jp";
} else if (sessionStorage.getItem("cont") == "Latvia") {
    coun = "lv";
} else if (sessionStorage.getItem("cont") == "Lithuania") {
    coun = "lt";
} else if (sessionStorage.getItem("cont") == "Malaysia") {
    coun = "my";
} else if (sessionStorage.getItem("cont") == "Morocco") {
    coun = "ma";
} else if (sessionStorage.getItem("cont") == "Netherland") {
    coun = "nl";
} else if (sessionStorage.getItem("cont") == "New Zealand") {
    coun = "nz";
} else if (sessionStorage.getItem("cont") == "Nigera") {
    coun = "ng";
} else if (sessionStorage.getItem("cont") == "Norway") {
    coun = "no";
} else if (sessionStorage.getItem("cont") == "Philippiness") {
    coun = "ph";
} else if (sessionStorage.getItem("cont") == "Poland") {
    coun = "pl";
} else if (sessionStorage.getItem("cont") == "Portugal") {
    coun = "pt";
} else if (sessionStorage.getItem("cont") == "Romania") {
    coun = "ro";
} else if (sessionStorage.getItem("cont") == "Russia") {
    coun = "ru";
} else if (sessionStorage.getItem("cont") == "Saudi Arabia") {
    coun = "sa";
} else if (sessionStorage.getItem("cont") == "Serbia") {
    coun = "rs";
} else if (sessionStorage.getItem("cont") == "Singapore") {
    coun = "sg";
} else if (sessionStorage.getItem("cont") == "Slovakia") {
    coun = "si";
} else if (sessionStorage.getItem("cont") == "Slovenia") {
    coun = "si";
} else if (sessionStorage.getItem("cont") == "South Africa") {
    coun = "za";
} else if (sessionStorage.getItem("cont") == "South Korea") {
    coun = "kr";
} else if (sessionStorage.getItem("cont") == "Sweden") {
    coun = "se";
} else if (sessionStorage.getItem("cont") == "Switzerland") {
    coun = "ch";
} else if (sessionStorage.getItem("cont") == "Taiwan") {
    coun = "tw";
} else if (sessionStorage.getItem("cont") == "Thailand") {
    coun = "th";
} else if (sessionStorage.getItem("cont") == "Turkey") {
    coun = "tr";
} else if (sessionStorage.getItem("cont") == "UAE") {
    coun = "ae";
} else if (sessionStorage.getItem("cont") == "Ukraine") {
    coun = "ua";
} else if (sessionStorage.getItem("cont") == "United Kingdom") {
    coun = "gb";
} else if (sessionStorage.getItem("cont") == "Venuzuela") {
    coun = "ve";
} else {
    coun = "in";
}

let par = document.getElementsByClassName("main")[0];
let api = "a9b14d5f5d3448558fafd022dc27043f";
let chi = document.createElement("div");
chi.setAttribute("class", "cad");
let xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    `https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=${coun}&category=technology&apiKey=${api}`,
    true
);

// This is Main Append Java Script

xhr.send();
let str = ``;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && xhr.status == 200) {
        let no = JSON.parse(this.responseText).articles.length;
        for (let i = 0; i <= no - 1; i++) {
            let na = JSON.parse(this.responseText).articles[i].name;
            let rain = document.getElementsByClassName("rain")[0].children[0]
                .innerText;
            rain.innerText = `News Served By: ${na}`;
            let auth = JSON.parse(this.responseText).articles[i].author;
            let cont = JSON.parse(this.responseText).articles[i].title;
            let desc = JSON.parse(this.responseText).articles[i].description;
            let dat = JSON.parse(this.responseText).articles[0].publishedAt.slice(
                0,
                10
            );
            let iur = JSON.parse(this.responseText).articles[i].urlToImage;
            let ur = JSON.parse(this.responseText).articles[i].url;
            let news = ``;
            if (dev < 400) {
                news = `<div class="accordion" id="accordionExample"></div>
                <div class="card" style="width: auto;">
                    <img src=${iur} class="card-img-top" alt="Fail To Load">
                
                    <div class="card-header" id="heading${i}">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                              
                                <strong>Breaking News ${i + 1}  : </strong>
                                                <br/>
                                                <span>${cont}</span>
                                        <br />
                                                Publised At : ${dat}
                            </button>
                        </h2>
                        <a href="${ur}" class="btn btn-primary my-2" target="_blank">Go To Site</a>
                    </div>
                    <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
                        <div class="card-body">
                            ${desc}
                        </div>
                    </div>
                </div>`;
            } else {
                news = `<div class="card my-2">
            <div class="card-header" id="heading${i}">
                <div class="container">
                    <div class="row">
                        <div class="col" style="padding-right: 0px;">
                            <img src=${iur} alt="Fail To Load" class="img-thumbnail" style="height: 150px; width: 150%;" />
                        </div>
        
                        <div class="col-8">
                            <button class="btn btn-link collapsed text-sm-left" style="text-align:left" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}" }>
                                <strong>Breaking News ${i + 1}  : </strong>
                                <br/>
                                <span>${cont}</span>
                        <br />
                                Publised At : ${dat}
                      </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
                <div class="card-body">
        
                    ${desc}
        
        
                    <br />
                    <a href="${ur}" target="_blank">Read More</a>
                </div>
            </div>
        </div>`;
            }
            str = str + news;
            chi.innerHTML = `${str}`;
            par.appendChild(chi);
        }
    }
};