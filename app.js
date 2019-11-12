/** DOM */
const letsPlayParent = document.querySelector("div.start");
const letsPlay = document.querySelector("button.letsPlay");
const restart = document.querySelector("button.restart");
const messageStart = document.querySelector('p.decompte');
const playersList = document.querySelector("div.row");
const titrePlayerList = document.querySelector("h2");
const nbPlayers = document.querySelector("h3");


/** Classe object joueurs */
class Player{
    constructor(id, avatar, nom, sante)
    {
        this.id = id;
        this.nom = nom;
        this.avatar = avatar;
        this.sante = sante;
    }
}

/** Création des 100 joueurs */
const players = [
    new Player(1, "img/skin1.png", "MatthCanardo", "op"),
    new Player(2, "img/skin2.png", "Cassandro_the_king", "op"),
    new Player(3, "img/skin3.png", "xx_Tfue_xx", "op"),
    new Player(4, "img/skin4.png", "Ninja", "op"),
    new Player(5, "img/skin5.png", "Gotagourou", "op"),
    new Player(6, "img/skin6.png", "Kinstaar", "op"),
    new Player(7, "img/skin7.png", "Batman_du_36", "op"),
    new Player(8, "img/skin8.png", "Mimmy_Kitty", "op"),
    new Player(9, "img/skin9.png", "Djojack", "op"),
    new Player(10, "img/skin10.png", "Crouton83", "op"),
    new Player(11, "img/skin11.png", "Mr.Jack", "op"),
    new Player(12, "img/skin12.png", "Monique_Ranou", "op"),
    new Player(13, "img/skin13.png", "Poirissiou", "op"),
    new Player(14, "img/skin14.png", "The_Best_Bambi", "op"),
    new Player(15, "img/skin15.png", "Tru", "op"),
    new Player(16, "img/skin16.png", "John_Wick", "op"),
    new Player(17, "img/skin17.png", "The_Spiderman", "op"),
    new Player(18, "img/skin18.png", "Iron_Girl", "op"),
    new Player(19, "img/skin19.png", "Grinch_xXX", "op"),
    new Player(20, "img/skin20.png", "Poisson22", "op"),
    new Player(21, "img/skin21.png", "Petit_Chat", "op"),
    new Player(22, "img/skin22.png", "Hercule_du_37", "op"),
    new Player(23, "img/skin23.png", "Lilima", "op"),
    new Player(24, "img/skin1.png", "BelleBarbe37", "op"),
    new Player(25, "img/skin2.png", "Barachatte", "op"),
    new Player(26, "img/skin3.png", "Gros_lolo", "op"),
    new Player(27, "img/skin4.png", "Boule_qui_chamboule", "op"),
    new Player(28, "img/skin5.png", "Papin", "op"),
    new Player(29, "img/skin6.png", "Poupouyou", "op"),
    new Player(30, "img/skin7.png", "Dory", "op"),
    new Player(31, "img/skin8.png", "David_Barilla", "op"),
    new Player(32, "img/skin9.png", "PomPote", "op"),
    new Player(33, "img/skin10.png", "Jokair", "op"),
    new Player(34, "img/skin11.png", "The_Boug", "op"),
    new Player(35, "img/skin12.png", "Chauffarde_69", "op"),
    new Player(36, "img/skin13.png", "Iron_xx_Man", "op"),
    new Player(37, "img/skin14.png", "Sosso_du_18", "op"),
    new Player(38, "img/skin15.png", "Venom_Dark", "op"),
    new Player(39, "img/skin16.png", "Pascal_Pine", "op"),
    new Player(40, "img/skin17.png", "Pepe_29", "op"),
    new Player(41, "img/skin18.png", "Maurica_Bougies", "op"),
    new Player(42, "img/skin19.png", "Saumon_De_Norvege", "op"),
    new Player(43, "img/skin20.png", "SkyArt", "op"),
    new Player(44, "img/skin21.png", "Mimi_Chou", "op"),
    new Player(45, "img/skin22.png", "SkyRozz", "op"),
    new Player(46, "img/skin23.png", "YT_Exemple", "op"),
    new Player(47, "img/skin1.png", "Fougere_Verte", "op"),
    new Player(48, "img/skin2.png", "Mistigri_Cat", "op"),
    new Player(49, "img/skin3.png", "Catwoman", "op"),
    new Player(50, "img/skin4.png", "Greninja_Water", "op"),
    new Player(51, "img/skin5.png", "Gamin_pro", "op"),
    new Player(52, "img/skin6.png", "Ax_Vallee2029", "op"),
    new Player(53, "img/skin7.png", "The_Dark_Knight", "op"),
    new Player(54, "img/skin8.png", "Bugha", "op"),
    new Player(55, "img/skin9.png", "G4b", "op"),
    new Player(56, "img/skin10.png", "CR7_Foot", "op"),
    new Player(57, "img/skin11.png", "Jesus_Brasil", "op"),
    new Player(58, "img/skin12.png", "Mirandio_player", "op"),
    new Player(59, "img/skin13.png", "Xx_Sun_xX", "op"),
    new Player(60, "img/skin14.png", "Kad_56", "op"),
    new Player(61, "img/skin15.png", "Scream_white", "op"),
    new Player(62, "img/skin16.png", "Mister_Lucky", "op"),
    new Player(63, "img/skin17.png", "Twitch_Neo", "op"),
    new Player(64, "img/skin18.png", "Ghost_Aydan", "op"),
    new Player(65, "img/skin19.png", "Gotzilla", "op"),
    new Player(66, "img/skin20.png", "Miss_Peach", "op"),
    new Player(67, "img/skin21.png", "Mecton_du_92", "op"),
    new Player(68, "img/skin22.png", "Cerise_Groupama", "op"),
    new Player(69, "img/skin23.png", "Titi_Henry", "op"),
    new Player(70, "img/skin1.png", "Black_Panda", "op"),
    new Player(71, "img/skin2.png", "Kakashi", "op"),
    new Player(72, "img/skin3.png", "Bob_Bricoleur", "op"),
    new Player(73, "img/skin4.png", "Reine_des_nièze", "op"),
    new Player(74, "img/skin5.png", "Panpan", "op"),
    new Player(75, "img/skin6.png", "Nagui", "op"),
    new Player(76, "img/skin7.png", "Pimboli", "op"),
    new Player(77, "img/skin8.png", "Kiki_du_18", "op"),
    new Player(78, "img/skin9.png", "Puma_xX", "op"),
    new Player(79, "img/skin10.png", "Toutou_Toudou", "op"),
    new Player(80, "img/skin11.png", "Bichon_Maltais56", "op"),
    new Player(81, "img/skin12.png", "Hector", "op"),
    new Player(82, "img/skin13.png", "Soldat_rouge", "op"),
    new Player(83, "img/skin14.png", "Bibi", "op"),
    new Player(84, "img/skin15.png", "Roger_Rpz_creuse", "op"),
    new Player(85, "img/skin16.png", "Binouze_du64", "op"),
    new Player(86, "img/skin17.png", "Ineskouik", "op"),
    new Player(87, "img/skin18.png", "JacquesChichi", "op"),
    new Player(88, "img/skin19.png", "Omar_non", "op"),
    new Player(89, "img/skin20.png", "Link_zZ", "op"),
    new Player(90, "img/skin21.png", "Hervé98", "op"),
    new Player(91, "img/skin22.png", "Nikos_loup", "op"),
    new Player(92, "img/skin23.png", "Squeezzzy", "op"),
    new Player(93, "img/skin1.png", "Spyro", "op"),
    new Player(94, "img/skin2.png", "Adriano", "op"),
    new Player(95, "img/skin3.png", "Mylene_Farming", "op"),
    new Player(96, "img/skin4.png", "Chocky", "op"),
    new Player(97, "img/skin5.png", "Milky", "op"),
    new Player(98, "img/skin6.png", "Popo", "op"),
    new Player(99, "img/skin7.png", "PPDA", "op"),
    new Player(100, "img/skin8.png","Claire_Chacal", "op")
]

/** Tableau des joueurs vivants */
const playersVivants = [];

/** Début de la partie */
let seconde = 5;

letsPlay.addEventListener('click', function(){
    /** Ajout des 100 joueurs dans le tableau des joueurs vivants */
    players.forEach(player => 
    {
        playersVivants.push(player);
    });
    /**  Affichage du decompte */
    const decompte = setInterval(function()
    {
        messageStart.textContent = seconde;
        if (seconde === 5)
        {
            letsPlayParent.removeChild(letsPlay);
        }
        else if (seconde <= 0)
        {
            messageStart.textContent = "Les joueurs sautent du bus...";
            clearInterval(decompte);
            affichageNumberPlayer();
            afficheJoueur(); 
        }
        seconde--;
    }, 1000)
});

/** Recommencer la partie */
restart.addEventListener('click', function(){
    location.reload();
})

/** Fonction affichage des joueurs sur la page */
function afficheJoueur(){
    playersVivants.forEach(playerVivant => {
        /** DOM */
        const col = document.createElement('div');
        col.setAttribute("class", "col-3 col-lg-1");
        const avatar = document.createElement('img');
        avatar.setAttribute('src', playerVivant.avatar);
        const nom = document.createElement("p");
        nom.textContent = playerVivant.nom;
        playersList.appendChild(col);
        col.appendChild(avatar);
        col.appendChild(nom);
        /** Gestions de l'affichage des joueurs éliminés */
        const intervalLi = setInterval(function()
        {
            if (playerVivant.sante === "mort")
            {
                nom.style.color ="#C04A4A";
                avatar.style.backgroundColor = "#C04A4A";
                avatar.style.borderRadius = "20px";  
            }
        }, 0)
    });
    /** Appel de la fonction élimination */
    elimination();
}

/** Fonction élimination */
function elimination(){
    /** Toutes les x secondes : récupère deux joueurs aléatoirement du tableau pour un affrontement */
    const intervalElimination = setInterval(function(){
        const playerAleatoire1 = Math.floor(Math.random() * playersVivants.length);
        const playerAleatoire2 = Math.floor(Math.random() * playersVivants.length);
        const player1 = playersVivants[playerAleatoire1];
        const player2 = playersVivants[playerAleatoire2];
        if (player1 != player2)
        {
            const end = Math.floor(Math.random() * 2);

            if (end === 0)
            {
                playersVivants.splice(playerAleatoire1, 1);
                player1.sante = "mort";
                setTimeout(function(){
                    messageStart.innerHTML = player2.nom + " elimine " + player1.nom;
                    
                },0)  
            }
    
            else if (end === 1){
                playersVivants.splice(playerAleatoire2, 1);
                player2.sante = "mort";
                setTimeout(function(){
                    messageStart.innerHTML = player1.nom + " elimine " + player2.nom;
                    
                },0)
            }

            playersVivants.length === 1 ? clearInterval(intervalElimination) : "";

            if (playersVivants.length == 1){
                setTimeout(function(){
                    image = document.createElement('img');
                    image.setAttribute('src', playersVivants[0].avatar);
                    image.style.backgroundColor = "#78CC6B";
                    image.style.borderRadius = "20px";
                    messageStart.innerHTML = "Victoire royale pour " + playersVivants[0].nom;
                    messageStart.appendChild(image);
                    
                },0)
            }
        }
        
    }, 500)
}

/** Fonction affichage du nombre de joueur */
function affichageNumberPlayer(){
    setInterval(function(){
        nbPlayers.innerHTML = "Nombre de joueur(s) : " + playersVivants.length;
    }, 100)
}









