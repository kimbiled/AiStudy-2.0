import {

   facebook,
   instagram,
   linkedin,
   twitter,

 
   puzzle,
   tick,
   students,
   alumni,
} from "../assets";

export const navLinks = [
   {
      id: "",
      title: "Главная",
   },
   {
      id: "practice/game",
      title: "Игры",
   },
   // {
   //    id: "practice/video",
   //    title: "Видеоуроки",
   // },
   {
      id: "education",
      title: "Обучение",
   },
   // {
   //    id: "practice/writing",
   //    title: "Практика Writing",
   // },
   {
      id: "profile",
      title: "Моя страница",
   },
   {
      id: "login",
      title: "Войти",
   },
];




export const stats = [
   {
      id: "stats-1",
      photo: puzzle,
      title: "45% СТУДЕНТОВ",
      value: "присоединились к нам по рекомендации",
   },
   {
      id: "stats-2",
      photo: tick,
      title: "7/10 СТУДЕНТОВ",
      value: "отмечают результат спустя 2 недели",
   },
   {
      id: "stats-3",
      photo: students,
      title: "375 СТУДЕНТОВ",
      value: "занимаются вместе с нами сегодня",
   },
   {
      id: "stats-4",
      photo: alumni,
      title: "500+ СТУДЕНТОВ",
      value: "уже сдали экзамены на заветный балл",
   },
];
export const footerLinks = [
   {
      title: "Карта сайта",
      links: [
         {
            name: "Главная",
            link: "https://www.hoobank.com/content/",
         },
         {
            name: "О нас",
            link: "https://www.hoobank.com/how-it-works/",
         },
         {
            name: "Обучение",
            link: "https://www.hoobank.com/create/",
         },
         {
            name: "Моя страница",
            link: "https://www.hoobank.com/explore/",
         },
      ],
   },
   {
      title: "Свяжитесь с нами",
      links: [
         {
            name: "+7 (700) 518-78-69",
            link: "https://www.hoobank.com/help-center/",
         },
         {
            name: "camila.mussaldinovam@gmail.com",
            link: "https://www.hoobank.com/partners/",
         },
      ],
   },
];

export const socialMedia = [
   {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
   },
   {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
   },
   {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
   },
   {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
   },
];


export const games = [
   {
      id: "game-1",
      title: "Quiz",
      subject: "IELTS/SAT",
      desc: "В захватывающей игре-викторине вам предстоит проверить свои знания в различных областях!",
      duration: 15,
   },
   {
      id: "game-2",
      title: "Connect",
      subject: "IELTS/SAT",
      desc: "В этой захватывающей головоломке ваше мастерство связывания пазлов будет поставлено на прочность! ",
      duration: 10,
   },
   {
      id: "game-3",
      title: "Blitz",
      subject: "SAT",
      desc: "В этой адреналиновой игре вам придется держать нервы на пределе и реагировать мгновенно!",
      duration: 17,
   },
   {
      id: "game-4",
      title: "Puzzle",
      subject: "IELTS",
      desc: "В этой адреналиновой игре вам придется держать нервы на пределе и реагировать мгновенно! ",
      duration: 6,
   },
   {
      id: "game-5",
      title: "Quest",
      subject: "IELTS/SAT",
      desc: "В этой адреналиновой игре вам придется держать нервы на пределе и реагировать мгновенно! ",
      duration: 8,
   },
   {
      id: "game-6",
      title: "Hide&Seek",
      subject: "SAT",
      desc: "Погрузитесь в мир приключений и веселья с этой классической игрой Прятки!",
      duration: 15,
   },
];

export const apiEndpoint = "http://127.0.0.1:8000/api";
