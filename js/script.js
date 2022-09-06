console.log('JS OK');

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

// DATI:
// Wayne Barnett	Founder & CEO   wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor    angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

// creo array di oggetti
const membriTeam = [
    {
        Nome: 'Wayne Barnett',
        Ruolo: 'Founder & CEO',
        Foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        Nome: 'Angela Caroll',
        Ruolo: 'Chief Editor',
        Foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        Nome: 'Walter Gordon',
        Ruolo: 'Office Manager',
        Foto: 'walter-gordon-office-manager.jpg'
    },
    {
        Nome: 'Angela Lopez',
        Ruolo: 'Social Media Manager',
        Foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        Nome: 'Scott Estrada',
        Ruolo: 'Developer',
        Foto: 'scott-estrada-developer.jpg'
    },
    {
        Nome: 'Barbara Ramos',
        Ruolo: 'Graphic Designer',
        Foto: 'barbara-ramos-graphic-designer.jpg'
    }
];


for (let indexMembriTeam = 0; indexMembriTeam < membriTeam.length; indexMembriTeam++) {

    const team = membriTeam[indexMembriTeam];
    console.log(team.Nome, team.Ruolo, team.Foto);

    // stampo nel dom

}