/*

Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

*/

/*
    1. Crea la struttura dati per la card
    2. Individuare il container nel quale inserire le card
    3. funzione:
        3.a generare il markup necessario per le nostre card
        3.b inserire le card con markup generato nel container per le card

    4. generare un evento dal click sul bottone
    5. estrarre i valori dagl'imput e pusharli nell'array di oggetti

*/

const cards = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'img/walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'img/scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Desogner',
        foto: 'img/barbara-ramos-graphic-designer.jpg',
    }
]

const teamContainer = document.querySelector('.team-container');

genCards(cards, teamContainer);

const addMemberButton = document.getElementById('addMemberButton');

addMemberButton.addEventListener('click', 
    function () {
        const nameImput = document.getElementById('name').value;
        const roleImput = document.getElementById('role').value;
        const imageImput = document.getElementById('image').value;

        const newMember = {
            nome: nameImput,
            ruolo: roleImput,
            foto: imageImput,
        };

        cards.push(newMember);
        genCards(cards, teamContainer)
    }
)




function genCards(cards, teamContainer) {
    teamContainer.innerHTML = '';
    for (let i = 0; i < cards.length; i++) {
        const cardItem = cards[i];
    
        // creare e aggiungere il markup della card
        teamContainer.innerHTML += `
         <div class="team-card">
            <div class="card-image">
              <img
                src="${cardItem.foto}"
                alt="${cardItem.nome}"
              />
            </div>
            <div class="card-text">
              <h3>${cardItem.nome}</h3>
              <p>${cardItem.ruolo}</p>
            </div>
          </div>`;
    }
}