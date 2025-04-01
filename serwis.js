function showInfo(section){
    const content = document.getElementById("main-content");
    if(section === "about"){
        content.innerHTML = `
                <h2>Nasza firma</h2>
                <hr>
                <p>Comp-Serw to profesjonalny serwis komputerowy działający w Częstochowie. Oferujemy kompleksowe usługi naprawy i konserwacji sprzętu komputerowego, laptopów oraz urządzeń peryferyjnych.</p>
                <p>Nasze usługi obejmują:</p>
                <ul>
                    <li>Diagnozowanie i naprawę usterek sprzętowych oraz programowych</li>
                    <li>Usuwanie wirusów i złośliwego oprogramowania</li>
                    <li>Modernizację i rozbudowę komputerów</li>
                    <li>Instalację i konfigurację systemów operacyjnych</li>
                    <li>Odzyskiwanie danych</li>
                </ul>
                <p>Zapewniamy szybką i profesjonalną obsługę oraz konkurencyjne ceny. Skontaktuj się z nami, aby dowiedzieć się więcej!</p>
                <div class="imgContainer">
                    <img class="imgMain" src="https://img.freepik.com/premium-wektory/komputer-ikona-logo-wektor-szablon-projektu_827767-1722.jpg" alt="komp">
                    <img class="imgMain" src="https://img.freepik.com/premium-wektory/laptop-ikona-logo-wektor-szablon-projektu_827767-1086.jpg" alt="laptop">
                    <img class="imgMain" src="https://png.pngtree.com/png-vector/20220422/ourmid/pngtree-computer-virus-laptop-vector-icon-illustration-computer-attention-isolated-vector-png-image_44033718.jpg" alt="wirus">
                    <img class="imgMain" src="https://img.redro.pl/naklejki/naprawa-ikona-700-194717441.jpg" alt="fixing">
                </div>
                <hr>
            `;
    } else if(section === "price"){
        content.innerHTML = `
            <h2>Cennik</h2>
            <hr>
            <table class="table">
                <tr>
                    <th>od 20 PLN</th>
                    <td>Diagnoza usterki</td>
                </tr>
                <tr>
                    <th>od 100 PLN</th>
                    <td>Instalacja oraz konfiguracja systemu operacyjnego</td>
                </tr>
                <tr>
                    <th>od 50 PLN</th>
                    <td>Kopiowanie i zabezpieczenie danych</td>
                </tr>
                <tr>
                    <th>od 150 PLN</th>
                    <td>Oczyszczenie komputera z wirusów itp.</td>
                </tr>
                <tr>
                    <th>od 200 PLN</th>
                    <td>Rozbudowa komputera, wymiana części</td>
                </tr>
                <tr>
                    <th>od 200 PLN</th>
                    <td>Naprawa elektroniki</td>
                </tr>
                <tr>
                    <th>od 150 PLN</th>
                    <td>Montaż komputera</td>
                </tr>
            </table>
            <hr>
        `;
    } else if (section === "contact"){
        content.innerHTML = `
            <h2>Kontakt</h2>
            <hr>
            <div class="divContact">
                <img class="imgContact" src="https://img.freepik.com/premium-wektory/wektorowa-ilustracja-ikony-telefonu-na-bialym_921039-10603.jpg?semt=ais_hybrid" alt="phone"  loading="lazy">
                <p><span class="spanContact">Email:</span> kontakt@comp-serw.pl</p>
                <p><span class="spanContact">Telefon:</span> +48 123 456 789</p>
            </div>

            <div class="divContact2">
                <br><p>Czynne od poniedziałku do piątku w godzinach <b>9:00 - 16:00</b></p><br>
                <p><b>Adres naszego serwisu</b></p>
                <p>Comp-Serw</p>
                <p>ul. Jagiellońska 3</p>
                <p>42-216 Częstochowa</p><br>
            </div>
            <hr>
        `;
    }

}


function openQuestion(button){
    let answer = button.nextElementSibling;
    if(answer.style.display === "block"){
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}