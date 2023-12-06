const container = document.createElement("div");
container.classList.add("container",);
// container.setAttribute("id","title");
document.body.append(container);

const box = document.createElement("div");
box.classList.add("row","box");
container.append(box);



async function getCountryFlags() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    for (countries of data) {
        const card = document.createElement("div");
        card.classList.add("card", "text-center", "col-sm-12", "col-lg-4");
        box.append(card);

        const header = document.createElement("H1");
        header.setAttribute("id", "title");
        header.classList.add("text-center");
        header.innerHTML = `${countries.name.common}`;
        card.append(header);

        const img = document.createElement("img");
        img.setAttribute("src", `${countries.flags.png}`)
        card.append(img);

        const para = document.createElement("p");
        para.classList.add("card-body");
        para.innerText = `Capital:${countries.capital}
Region:${countries.region}
Population:${countries.population}
Country Code:${countries.cca2}
Latlng:${countries.latlng[0]},${countries.latlng[1]}
`;
        card.append(para);

        const btn = document.createElement("button");
        btn.classList.add("btn", "btn-primary", "text-white");
        btn.innerHTML = `click for weather`;
        card.append(btn);

        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${countries.latlng[0]}&lon=${countries.latlng[1]}&appid=fbb352a417c0f980535df5d4a273be35&units=metric`
        );
        const data2 = await response2.json();
        btn.addEventListener("click", getWeather);
        function getWeather() {
            let a=header.textContent;
            let b=img.getAttribute("src");
            box.classList.add("hidden");
            let x=[];
            x.push(`${countries.latlng[0]},${countries.latlng[1]}`)
            x = x[0].split(",").map(Number);
            const container2 = document.createElement("div");
container2.classList.add("container",);
document.body.append(container2);

            const box2 = document.createElement("div");
            box2.classList.add("row");
            container2.append(box2);
            const card2 = document.createElement("div");
            card2.classList.add("card", "text-center", "col-sm-12", "col-lg-4");
            box2.append(card2);

            const header2 = document.createElement("H1");
            header2.setAttribute("id", "title");
            header2.classList.add("text-center");
            header2.innerHTML = `${a}`;
            card2.append(header2);

            const img2 = document.createElement("img");
            img2.setAttribute("src", `${b}`)
            card2.append(img2);

            const para2 = document.createElement("p");
            para2.classList.add("card-body");
            para2.innerText = `Weather:${data2.weather[0].description}
Temperature:${data2.main.temp}
Wind Speed:${data2.wind.speed}
Pressure:${data2.main.pressure}
`;
            card2.append(para2);

            const btn2 = document.createElement("button");
            btn2.classList.add("btn", "btn-primary", "text-white");

            btn2.innerText = `click to back`;
            card2.append(btn2);
            btn2.addEventListener("click", () => {
                location.reload();
            });
        }
    }
}
getCountryFlags();


