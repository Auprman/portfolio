export interface Project {
  projectname: string;
  aboutEn: string;
  aboutDe: string;
  durationEn: string;
  durationDe: string;
  organizationEn?: string;
  organizationDe?: string;
  experienceEn?: string;
  experienceDe?: string;
  imgScreenshot: string;
  gifProject: string;
  usedTechnologies: string[];
  technologiesSpelledOut: string[];
  headlinesEn: string[];
  headlinesDe: string[];
  linkLive: string;
  linkGithub: string;
  isSingleProject: boolean;
}

export const PROJECTS = [{
    projectname: 'Join',

    aboutEn: 'A task manager inspired by the Kanban method. Easily create, organize, and move tasks with drag and drop, and assign users and categories seamlessly.',
    aboutDe: 'Ein Taskmanager zur effizienten Organisation von Aufgaben auf Basis des Kanban-Systems – mit der Möglichkeit, Aufgaben per Drag & Drop flexibel Nutzern und Kategorien zuzuweisen.',

    durationEn: '2 months',
    durationDe: '2 Monate',

    organizationEn: 'We kept our project organized with a Trello Kanban board, splitting tasks and tracking To-Dos as a team. To keep the code clean and maintainable, we built reusable components, used clear naming everywhere, and made sure everything was well-documented.',
    organizationDe: 'Wir haben unser Projekt mit einem Trello-Kanban-Board organisiert, Aufgaben aufgeteilt und gemeinsam To-Dos abgearbeitet. Damit der Code sauber und wartbar bleibt, haben wir auf wiederverwendbare Komponenten, klare Namen und gute Dokumentation gesetzt.',

    experienceEn: 'We were a team of three, and I focused on everything related to creating contacts and linking them to tasks. We supported each other throughout the project, which made working together a lot of fun. We built the app using JavaScript, HTML, CSS, and Google Firebase.',
    experienceDe: 'Wir waren ein Team von drei Leuten, und ich habe mich um alles rund um die Erstellung von Kontakten und deren Verknüpfung mit Aufgaben gekümmert. Durch die enge Zusammenarbeit haben wir uns immer gegenseitig unterstützt – das hat das Projekt besonders spannend und spaßig gemacht. Umgesetzt haben wir das Ganze mit JavaScript, HTML, CSS und Google Firebase.',

    imgScreenshot: '/assets/img/bg-img/project-screenshots/join.png',
    gifProject: '/assets/img/bg-img/join.webp',
    usedTechnologies: ['js', 'css', 'html', 'firebase'],
    technologiesSpelledOut: ['Javascript','CSS','HTML','Firebase'],
    headlinesEn:['About the project','How I have organized my work process','My group work experience'],
    headlinesDe:['Über das Projekt','Meine Organisation des Arbeitsprozesses','Meine Erfahrung in der Teamarbeit'],
    linkLive: './join/html/login.html',
    linkGithub: 'https://github.com/Auprman/da-join',
    isSingleProject: false  
  },
    {
    projectname: 'El Pollo Loco',

    aboutEn: 'El Pollo Loco is a jump-and-run game where players collect coins and Tabasco bottles, defeat chickens along the way, and ultimately throw the bottles at the final boss to win. The game was developed using JavaScript and animated using the HTML5 canvas.',
    aboutDe: 'El Pollo Loco ist ein Jump-and-Run-Spiel, in dem man Münzen und Tabasco-Flaschen sammelt, Hühner besiegt und dem Endgegner am Ende die gesammelten Flaschen entgegenwirft. Das Spiel wurde mit JavaScript entwickelt und mithilfe von HTML5 Canvas animiert.',

    durationEn: '6 weeks',
    durationDe: '6 Wochen',

    organizationEn: 'This solo project was all about practicing object-oriented programming in JavaScript. Over time, I learned how to structure objects, link them together, and use them effectively in a game context. Implementing game logic and animations via canvas helped me understand object hierarchies and game state management in depth.',
    organizationDe: 'In diesem Einzelprojekt stand die objektorientierte Programmierung mit JavaScript im Fokus. Ich habe dabei gelernt, wie man Objekte sinnvoll strukturiert, miteinander verknüpft und im Spielkontext einsetzt. Durch die Umsetzung von Spiellogik und Animationen mit Canvas habe ich ein tieferes Verständnis für Objekt-Hierarchien und die Steuerung von Spielzuständen entwickelt.',

    experienceEn: 'To structure my work, I used a Trello board where I created tasks, tracked bugs, and managed my progress. This helped me stay organized and systematically work through each feature and issue.',
    experienceDe: 'Zur Strukturierung meines Arbeitsprozesses habe ich ein Trello-Board verwendet, auf dem ich Aufgaben erstellt, Bugs dokumentiert und meinen Fortschritt festgehalten habe. So konnte ich systematisch und zielgerichtet an allen Features und Problemen arbeiten.',

    imgScreenshot: '/assets/img/bg-img/project-screenshots/el-pollo-loco.png',
    gifProject: '/assets/img/bg-img/el-pollo-loco.webp',
    usedTechnologies: ['js', 'css', 'html'],
    technologiesSpelledOut: ['Javascript', 'CSS', 'HTML'],
    headlinesEn: ['About the project', 'How I have organized my work process', 'What I have learned'],
    headlinesDe: ['Über das Projekt', 'Meine Organisation des Arbeitsprozesses', 'Was ich gelernt habe'],
    linkLive: './el-pollo-loco/',
    linkGithub: 'https://github.com/Auprman/El-pollo-loco',
    isSingleProject: true
    },
  {
    projectname: 'Pokedex',

    aboutEn: 'Pokedex is a web app that retrieves and displays Pokémon data from the free REST-based PokeAPI. Each Pokémon is shown on its own interactive card including name, ID, image, and type. The project demonstrates how external data can be fetched, processed, and dynamically rendered in the frontend.',
    aboutDe: 'Pokedex ist eine Webanwendung, die Daten aus der öffentlichen, REST-basierten PokeAPI abruft und visuell darstellt. Jedes Pokémon wird auf einer eigenen interaktiven Karte mit Name, ID, Bild und Typ präsentiert. Das Projekt zeigt, wie sich externe Daten dynamisch abrufen, verarbeiten und im Frontend darstellen lassen.',

    durationEn: '1 month',
    durationDe: '1 Monat',

    organizationEn: 'This solo project focused on working with external APIs and asynchronous JavaScript. I learned how to handle fetch requests, manage promises, and dynamically create and update content based on API responses. It helped me develop a deeper understanding of data flow and interactivity in modern web apps.',
    organizationDe: 'In diesem Einzelprojekt lag der Fokus auf dem Umgang mit externen APIs und asynchronem JavaScript. Ich habe gelernt, wie man Daten über Fetch-Requests abruft, Promises verwaltet und Inhalte basierend auf API-Antworten dynamisch generiert und aktualisiert. Das Projekt hat mir ein gutes Verständnis für Datenflüsse und Interaktivität in modernen Webanwendungen vermittelt.',

    experienceEn: 'To stay organized, I used Trello to break down the project into clear steps like API integration, UI layout, and loading logic. This helped me track progress and fix bugs in a structured way while iterating on design and data handling.',
    experienceDe: 'Zur Organisation des Projekts habe ich Trello genutzt, um das Vorhaben in einzelne Arbeitsschritte wie API-Anbindung, Layout-Entwicklung und Ladelogik zu unterteilen. So konnte ich Fortschritte gut nachverfolgen, Bugs gezielt beheben und das Design schrittweise verbessern.',

    imgScreenshot: '/assets/img/bg-img/project-screenshots/pokedex-screenshot.png',
    gifProject: '/assets/img/bg-img/pokedex.webp',
    usedTechnologies: ['js', 'css', 'html','rest'],
    technologiesSpelledOut: ['Javascript','CSS', 'HTML', 'REST API'],
    headlinesEn:['About the project','How I have organized my work process','What i have learned'],
    headlinesDe:['Über das Projekt','Meine Organisation des Arbeitsprozesses','Was ich gelernt habe'],
    linkLive: './pokedex/',
    linkGithub: 'https://github.com/Auprman/pokeindex',
    isSingleProject: true
  },
  {
    projectname: 'Ongoing',
    aboutEn: 'In my upcoming project, I plan to develop a booking system for a psychological practice. Visitors will be able to choose from available time slots and book an appointment directly through the website. The goal is to make the process as simple and user-friendly as possible – for both the clients and the practice team, with particular attention to data privacy requirements.',
    aboutDe: 'In meinem nächsten Projekt möchte ich eine Terminbuchungslogik für eine psychotherapeutische Praxis umsetzen. Nutzerinnen sollen auf der Website aus verfügbaren Zeitfenstern einen passenden Termin auswählen und direkt buchen können. Ziel ist es, den Buchungsprozess so einfach und benutzerfreundlich wie möglich zu gestalten – für die Klientinnen ebenso wie für die Praxis, und das unter besonderer Berücksichtigung datenschutzrechtlicher Bedingungen.',
    durationEn: 'Future project',
    durationDe: 'Zukünftiges Projekt',
    experienceEn: 'I’ll organize the project in clear steps: First, I define the requirements, then I build the responsive frontend using Angular, TypeScript, and CSS. The appointment logic is handled via Firebase. With Git versioning, regular testing, and an iterative approach, I ensure a clean and secure implementation.',
    experienceDe: 'Das Projekt strukturiere ich in klare Schritte: Zuerst definiere ich die Anforderungen, danach entwickle ich das responsive Frontend mit Angular, TypeScript und CSS. Die Terminlogik setze ich mit Firebase um. Durch Git-Versionierung, regelmäßige Tests und Iterationen stelle ich eine saubere und sichere Umsetzung sicher.',
    imgScreenshot: '/assets/img/bg-img/screenshot-coming-soon.png',
    gifProject: '/assets/img/bg-img/join.webp',
    usedTechnologies: ['angular', 'html','css','firebase'],
    technologiesSpelledOut: ['Angular','HTML','CSS','Firebase'],
    headlinesEn:['About the project','How I want to organize my work process','Workflow & Organization'],
    headlinesDe:['Über das Projekt','Meine Organisation des Arbeitsprozesses','Arbeitsweise & Organisation'],
    linkLive: '',
    linkGithub: '',
    isSingleProject: true
  },]