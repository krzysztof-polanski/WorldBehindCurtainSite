import { Tilia } from 'region-description.js';

let a = document.querySelectorAll("a");
let head = document.querySelector("header");
let intr = document.querySelector(".intro");
let map = document.querySelector(".map");
let radio = document.querySelectorAll("input");
let label = document.querySelectorAll("label");
let region = document.querySelector("#hidden-div");
let hidBackImg = document.querySelector(".hidden-div-background");
let regName = document.querySelector(".hidden-h2");
let regCap = document.querySelector(".hidden-h3");
let regDesc = document.querySelector(".hidden-p");
let regIcon = document.querySelector(".hidden-img");
let readMoreBtn = document.querySelector(".read-more-btn");
let specUnitName = document.querySelector(".special-unit-name");

console.log(Tilia);
// Powolne wyłanianie się treści przy załadowaniu strony
document.body.onload = function() {
    setTimeout(function(){
        document.querySelector(".hidden-body").removeAttribute("hidden");
        setTimeout(function(){
            document.querySelector(".hidden-body").style.opacity = "1";
            document.querySelector(".hidden-body").style.transition = "1.5s ease-in-out";
        }, 200)
        
        
    }, 100);
    
    for (let ar = 0; ar < radio.length; ar++) {
        radio[ar].checked = false;
    }
}



// Powolne zanikanie treści przy naciśnięciu odnośnika
for (let aTag = 0; aTag < a.length; aTag++) {
    a[aTag].addEventListener("click", function(event){
        if(a[aTag].href == window.location.href || a[aTag].href == window.location.href + "#") {
            console.log("Już tu jesteś");
        }else{
            event.preventDefault();
                document.querySelector(".hidden-body").style.opacity = "0";
                document.querySelector(".hidden-body").style.transition = "1.5s ease-in-out";
            setTimeout(function(){
                console.log("I'm inside second setTimout");
                window.location.href = a[aTag].href;
            },1500);          
        }
    });
};


// Pokazanie opisu ragionu na stronie głównej po kliknięciu w nazwę regionu na mapie
map.addEventListener("change", function() {
    for (let ar = 0; ar < radio.length; ar++) {
        if (radio[ar].checked) {
            let regionName = radio[ar].attributes.value.value;
            console.log("You checked " + regionName);
            
            for ( let reg = 0; reg < regions.length; reg++ ) {
                if ( regions[reg].rName == regionName.toUpperCase() ) {
                    regName.innerHTML = regions[reg].rName;
                    regCap.innerHTML = "Stolica: " + regions[reg].rCap;
                    regDesc.innerHTML = regions[reg].shortInfo;
                    specUnitName.innerHTML = regions[reg].class;
                    hidBackImg.style.backgroundImage = "url('imgs/edited/" + regions[reg].icon + "')"
                }
            }
            regDesc.classList.add("hidden-p");
            readMoreBtn.removeAttribute("hidden");
            // hidBackImg.style.backgroundImage = "url('imgs/edited/round-shield-transparent-edited.png')";
            region.removeAttribute("hidden");
            scrollTo(0, ( head.scrollHeight + intr.scrollHeight + map.scrollHeight));
        }
    }
})

// Pokazanie reszty opisu regionu po naciśnięciu przycisku "Czytaj Więcej"
readMoreBtn.addEventListener("click", showMoreAndRmvBtn);



let tilia = {
    rName: "TILIA",
    rCap: "Brynja",
    shortInfo: "Serce Cesarstwa, Tilię, zamieszkują Tilowie. Są to ludzie wysocy i postawni o raczej jasnej karnacji skóry. Zgodnie z tradycją to właśnie oni strzegą Mędrców, którzy wyznaczają kolejnych Cesarzy. Na ich terytorium znajduje się stolica Cesarstwa i siedziba Mędrców –Viska. Tilowie to ludzie dumni i honorowi, poważni i długo noszący urazę.",
    icon: "knights-helmet-transparent-edited-25.png",
    class: "RYCERZ ZAKONU"
}
let hesturia = {
    rName: "HESTURIA",
    rCap: "Stodugar",
    shortInfo: "Hesturowie osiedli na dalekim zachodzie lądu, gdzie słońce hojnie obdarza ich plony swoim ciepłem. Ludzie tamci od niego też skórę mają ciemniejszą niż reszta plemion Europy, jakby co dzień u nich lato było. Hesturowie to lud nieskomplikowany, bardzo gościnny i przyjacielski, ale też gwałtowny i gorącokrwisty. Lud podróżników, kawalerzystów i tancerzy. </br> W Hesturii hoduje się najlepsze i najpiękniejsze konie w Cesarstwie. W Kawalerii Cesarskiej najwięcej jest właśnie Hesturów.",
    icon: "horse-dancing-transparent-edited-25.png",
    class: "DZIKI JEŹDZIEC"
}
let vinberia = {
    rName: "VINBERIA",
    rCap: "Korkur",
    shortInfo: "Dzielnica ludzi bardzo spokojnych i bez tradycji wojskowych. Większość terytorium zajmują urokliwe lasy, piękne gaje i obfite winnice. Vinberia jest największą terytorialnie dzielnicą Cesarstwa, i drugą po Sanie jeśli chodzi o ilość szlachty. W porównaniu do tych pierwszych synowie szlacheccy z Vinberii rzadziej sięgają po miecz, a częściej po lutnię. Vinberia jest producentem najlepszego wina, w olbrzymich ilościach eksportowanego na zagraniczne rynki.......Dzielnica ludzi bardzo spokojnych i bez tradycji wojskowych. Większość terytorium zajmują urokliwe lasy, piękne gaje i obfite winnice. Vinberia jest największą terytorialnie dzielnicą Cesarstwa, i drugą po Sanie jeśli chodzi o ilość szlachty. W porównaniu do tych pierwszych synowie szlacheccy z Vinberii rzadziej sięgają po miecz, a częściej po lutnię. Vinberia jest producentem najlepszego wina, w olbrzymich ilościach eksportowanego na zagraniczne rynki.Dzielnica ludzi bardzo spokojnych i bez tradycji wojskowych. Większość terytorium zajmują urokliwe lasy, piękne gaje i obfite winnice. Vinberia jest największą terytorialnie dzielnicą Cesarstwa, i drugą po Sanie jeśli chodzi o ilość szlachty. W porównaniu do tych pierwszych synowie szlacheccy z Vinberii rzadziej sięgają po miecz, a częściej po lutnię. Vinberia jest producentem najlepszego wina, w olbrzymich ilościach eksportowanego na zagraniczne rynki.Dzielnica ludzi bardzo spokojnych i bez tradycji wojskowych. Większość terytorium zajmują urokliwe lasy, piękne gaje i obfite winnice. Vinberia jest największą terytorialnie dzielnicą Cesarstwa, i drugą po Sanie jeśli chodzi o ilość szlachty. W porównaniu do tych pierwszych synowie szlacheccy z Vinberii rzadziej sięgają po miecz, a częściej po lutnię. Vinberia jest producentem najlepszego wina, w olbrzymich ilościach eksportowanego na zagraniczne rynki.Dzielnica ludzi bardzo spokojnych i bez tradycji wojskowych. Większość terytorium zajmują urokliwe lasy, piękne gaje i obfite winnice. Vinberia jest największą terytorialnie dzielnicą Cesarstwa, i drugą po Sanie jeśli chodzi o ilość szlachty. W porównaniu do tych pierwszych synowie szlacheccy z Vinberii rzadziej sięgają po miecz, a częściej po lutnię. Vinberia jest producentem najlepszego wina, w olbrzymich ilościach eksportowanego na zagraniczne rynki.",
    icon:"feather-and-inc-transparent-edited-25.png",
    class: "WĘDROWNY BAJARZ"
}
let landmeria = {
    rName: "LANDMERIA",
    rCap: "Nieznana",
    shortInfo: "Kraina na południowo-wschodnim pograniczu Cesarstwa. Największe połacie tej krainy pokryte są lasami i bagnami. Klimat jest łagodny, z częstymi opadami deszczu. Stolica - Myri - leży pośród bagien w centrum dzielnicy i jest prawdopodobnie jedynym jej barwnym miejscem pośród wszechobecnej szarości. Osiedli ludzkich jest dużo, choć są one raczej niewielkie. Gleba w niemal całej Landmerii nie nadaje się pod uprawę, więc ludzie utrzymują się tam przede wszystkim ze zbieractwa i łowiectwa.",
    icon: "bow-transparent-edited-25.png",
    class: "AMAZONKA"
}
let eyjan = {
    rName: "EYJAN",
    rCap: "Arina",
    shortInfo: "Dzielnica położona jest na wielu niewielkich wysepkach. Na największej z nich leży jej stolica - Arina. Przez większość roku w tej krainie padają deszcze. </br> Ziemia na wyspach jest w dużej części skalista, smagana zimnymi wiatrami znad morza. Największym portem Eyjanu jest Hafnir. Arina jest położona w głębi wyspy i właściwie tylko wokół niej znajdują się pola uprawne. Na innych wyspach ziemia też jest miejscami żyzna, jednak brakuje ludzi do pracy w polu. Większość preferuje dalekie, morskie wyprawy łupieżcze, w których chętnie biorą udział również kobiety.",
    icon: "axe-transparent-edited-25.png",
    class: "BERSERKER"
}
let sania = {
    rName: "SANIA",
    rCap: "Solbein",
    shortInfo: "Kraina słońca. Stolica Sanu to Solbein, a położona jest na południowym wybrzeżu. Miasto to skupia wielu podróżników i poszukiwaczy przygód, którzy mają nawet własną, monstrualnych rozmiarów karczmę, położoną nieco ponad rynkiem wśród konarów olbrzymiego jesionu. Solbein posiada również największy i najchętniej uczęszczany port w Cesarstwie oraz jedyne, aktualnie znane, aktywne wejście do Podziemnego Cesarstwa.",
    icon: "saber-transparent-edited-25.png",
    class: "ZAWADIAKA"
}
let veturia = {
    rName: "VETURIA",
    rCap: "Snjokorn",
    shortInfo: "W Veturii wiatr jest lodowaty, kąsający i raniący skórę. Przez większość roku ta nieprzyjemna kraina przykryta jest śniegiem, nękana śnieżnymi burzami, w trakcie których niebiosa rażą ziemię piorunami. Większość populacji skupiona jest w “łagodnym” Snjokorn. Tam teren jest jeszcze w miarę równinny. Dalej na wschód robi się górzysty i bardzo surowy. Tam stacjonują tylko żołnierze i poszukiwacze przygód.",
    icon: "round-shield-transparent-edited-25.png",
    class: "PIERWORODNY"
}

let regions = [ tilia, hesturia, vinberia, landmeria, eyjan, sania, veturia ];



// Funkcja do przycisku "Czytaj Więcej" w opisie regionu
function showMoreAndRmvBtn() {
    regDesc.classList.remove("hidden-p");
    readMoreBtn.setAttribute("hidden", "hidden");
}