
// To execute this seed, run from the root of the project
// $ node bin/seeds.js

require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Portfolio = require("../models/Portfolio");
const Work = require("../models/Work");

const bcryptSalt = 10;


//Relating Portfolios to Users
const fc_uxdesigner     = new mongoose.mongo.ObjectId();
const fc_photographer   = new mongoose.mongo.ObjectId();
const fc_animator       = new mongoose.mongo.ObjectId();
const fc_trendhunter    = new mongoose.mongo.ObjectId();
const fc_writer         = new mongoose.mongo.ObjectId();
const ms_webdeveloper   = new mongoose.mongo.ObjectId();
const ms_illustrator    = new mongoose.mongo.ObjectId();
const ms_designer       = new mongoose.mongo.ObjectId();
const rdb_uxdesigner    = new mongoose.mongo.ObjectId();
const rdb_illustrator   = new mongoose.mongo.ObjectId();
const kol_webdesigner   = new mongoose.mongo.ObjectId();
const kol_mobile        = new mongoose.mongo.ObjectId();
const kol_display       = new mongoose.mongo.ObjectId();
const misti_uxdesigner  = new mongoose.mongo.ObjectId();
const misti_mobile      = new mongoose.mongo.ObjectId();
const misti_prices      = new mongoose.mongo.ObjectId();

//Relating Works to Users
const misti_prices1      = new mongoose.mongo.ObjectId();
const misti_prices2      = new mongoose.mongo.ObjectId();
const misti_prices3      = new mongoose.mongo.ObjectId();
const misti_prices4      = new mongoose.mongo.ObjectId();
const misti_prices5      = new mongoose.mongo.ObjectId();
const misti_mobile1      = new mongoose.mongo.ObjectId();
const misti_mobile2      = new mongoose.mongo.ObjectId();
const misti_mobile3      = new mongoose.mongo.ObjectId();
const misti_mobile4      = new mongoose.mongo.ObjectId();
const misti_mobile5      = new mongoose.mongo.ObjectId();
const misti_uxdesigner1  = new mongoose.mongo.ObjectId();
const misti_uxdesigner2  = new mongoose.mongo.ObjectId();
const misti_uxdesigner3  = new mongoose.mongo.ObjectId();
const misti_uxdesigner4  = new mongoose.mongo.ObjectId();
const misti_uxdesigner5  = new mongoose.mongo.ObjectId();
const kol_display1       = new mongoose.mongo.ObjectId();
const kol_display2       = new mongoose.mongo.ObjectId();
const kol_display3       = new mongoose.mongo.ObjectId();
const kol_display4       = new mongoose.mongo.ObjectId();
const kol_display5       = new mongoose.mongo.ObjectId();
const kol_mobile1        = new mongoose.mongo.ObjectId();
const kol_mobile2        = new mongoose.mongo.ObjectId();
const kol_mobile3        = new mongoose.mongo.ObjectId();
const kol_mobile4        = new mongoose.mongo.ObjectId();
const kol_mobile5        = new mongoose.mongo.ObjectId();
const kol_webdesigner1   = new mongoose.mongo.ObjectId();
const kol_webdesigner2   = new mongoose.mongo.ObjectId();
const kol_webdesigner3   = new mongoose.mongo.ObjectId();
const kol_webdesigner4   = new mongoose.mongo.ObjectId();
const kol_webdesigner5   = new mongoose.mongo.ObjectId();
const rdb_illustrator1   = new mongoose.mongo.ObjectId();
const rdb_illustrator2   = new mongoose.mongo.ObjectId();
const rdb_illustrator3   = new mongoose.mongo.ObjectId();
const rdb_illustrator4   = new mongoose.mongo.ObjectId();
const rdb_illustrator5   = new mongoose.mongo.ObjectId();
const rdb_uxdesigner1    = new mongoose.mongo.ObjectId();
const rdb_uxdesigner2    = new mongoose.mongo.ObjectId();
const rdb_uxdesigner3    = new mongoose.mongo.ObjectId();
const rdb_uxdesigner4    = new mongoose.mongo.ObjectId();
const rdb_uxdesigner5    = new mongoose.mongo.ObjectId();
const ms_designer1       = new mongoose.mongo.ObjectId();
const ms_designer2       = new mongoose.mongo.ObjectId();
const ms_designer3       = new mongoose.mongo.ObjectId();
const ms_designer4       = new mongoose.mongo.ObjectId();
const ms_designer5       = new mongoose.mongo.ObjectId();
const ms_illustrator1    = new mongoose.mongo.ObjectId();
const ms_illustrator2    = new mongoose.mongo.ObjectId();
const ms_illustrator3    = new mongoose.mongo.ObjectId();
const ms_illustrator4    = new mongoose.mongo.ObjectId();
const ms_illustrator5    = new mongoose.mongo.ObjectId();
const ms_webdeveloper1   = new mongoose.mongo.ObjectId();
const ms_webdeveloper2   = new mongoose.mongo.ObjectId();
const ms_webdeveloper3   = new mongoose.mongo.ObjectId();
const ms_webdeveloper4   = new mongoose.mongo.ObjectId();
const ms_webdeveloper5   = new mongoose.mongo.ObjectId();
const fc_writer1         = new mongoose.mongo.ObjectId();
const fc_writer2         = new mongoose.mongo.ObjectId();
const fc_writer3         = new mongoose.mongo.ObjectId();
const fc_writer4         = new mongoose.mongo.ObjectId();
const fc_writer5         = new mongoose.mongo.ObjectId();
const fc_trendhunter1    = new mongoose.mongo.ObjectId();
const fc_trendhunter2    = new mongoose.mongo.ObjectId();
const fc_trendhunter3    = new mongoose.mongo.ObjectId();
const fc_trendhunter4    = new mongoose.mongo.ObjectId();
const fc_trendhunter5    = new mongoose.mongo.ObjectId();
const fc_animator1       = new mongoose.mongo.ObjectId();
const fc_animator2       = new mongoose.mongo.ObjectId();
const fc_animator3       = new mongoose.mongo.ObjectId();
const fc_animator4       = new mongoose.mongo.ObjectId();
const fc_animator5       = new mongoose.mongo.ObjectId();
const fc_photographer1   = new mongoose.mongo.ObjectId();
const fc_photographer2   = new mongoose.mongo.ObjectId();
const fc_photographer3   = new mongoose.mongo.ObjectId();
const fc_photographer4   = new mongoose.mongo.ObjectId();
const fc_photographer5   = new mongoose.mongo.ObjectId();
const fc_uxdesigner1     = new mongoose.mongo.ObjectId();
const fc_uxdesigner2     = new mongoose.mongo.ObjectId();
const fc_uxdesigner3     = new mongoose.mongo.ObjectId();
const fc_uxdesigner4     = new mongoose.mongo.ObjectId();
const fc_uxdesigner5     = new mongoose.mongo.ObjectId();

//Relating works to Portfolios
/*const misti_prices1      = new mongoose.mongo.ObjectId();
const misti_mobile1      = new mongoose.mongo.ObjectId();
const misti_uxdesigner1  = new mongoose.mongo.ObjectId();
const kol_display1       = new mongoose.mongo.ObjectId();
const kol_mobile1        = new mongoose.mongo.ObjectId();
const kol_webdesigner1   = new mongoose.mongo.ObjectId();
const rdb_illustrator1   = new mongoose.mongo.ObjectId();
const rdb_uxdesigner1    = new mongoose.mongo.ObjectId();
const ms_designer1       = new mongoose.mongo.ObjectId();
const ms_illustrator1    = new mongoose.mongo.ObjectId();
const ms_webdeveloper1   = new mongoose.mongo.ObjectId();
const fc_writer1         = new mongoose.mongo.ObjectId();
const fc_trendhunter1    = new mongoose.mongo.ObjectId();
const fc_animator1       = new mongoose.mongo.ObjectId();
const fc_photographer1   = new mongoose.mongo.ObjectId();
const fc_uxdesigner1     = new mongoose.mongo.ObjectId();*/



let users =  
[{
    username: "fernandocomet",
    password: bcrypt.hashSync("fernandocomet", bcrypt.genSaltSync(bcryptSalt)),
    avatarUrl: "images/fernandocomet.jpg",
    portfolios: [fc_uxdesigner, fc_photographer, fc_animator, fc_trendhunter, fc_writer],
    works: [fc_uxdesigner1, fc_uxdesigner2, fc_uxdesigner3, fc_uxdesigner4, fc_uxdesigner5, fc_photographer1, fc_photographer2, fc_photographer3, fc_photographer4, fc_photographer5, fc_animator1, fc_animator2, fc_animator3, fc_animator4, fc_animator5, fc_trendhunter1, fc_trendhunter2, fc_trendhunter3, fc_trendhunter4, fc_trendhunter5, fc_writer1, fc_writer2, fc_writer3, fc_writer4, fc_writer5],
    sociallinks: ["https://www.linkedin.com/in/fernandocomet/", "https://github.com/fernandocomet", "https://medium.com/@fernandocomet", "https://www.fernandocomet.com/", "https://www.instagram.com/fernandocomet/", "https://twitter.com/fernandocomet"],
    jobtitle: "UX Engineer",
    about: "UX Engineer, hybrid profile between front-end development and UX design focused on research, interaction, wireframes, prototyping, user flows, development, performance, test, usability and overall experience of the application works for the end-user."
  },
  {
    username: "mariasimo",
    password: bcrypt.hashSync("mariasimo", bcrypt.genSaltSync(bcryptSalt)),
    avatarUrl: "images/mariasimo.jpg",
    portfolios: [ms_webdeveloper, ms_illustrator, ms_designer],
    works: [ms_webdeveloper1, ms_webdeveloper2, ms_webdeveloper3, ms_webdeveloper4, ms_webdeveloper5, ms_illustrator1, ms_illustrator2, ms_illustrator3, ms_illustrator4, ms_illustrator5, ms_designer1, ms_designer2, ms_designer3, ms_designer4, ms_designer5],
    sociallinks: ["https://www.linkedin.com/in/maria-simo/", "https://www.domestika.org/es/maria_simo/portfolio", "https://www.behance.net/coponstudio", "https://www.saatchiart.com/mariasimo", "https://github.com/mariasimo"],
    jobtitle: "Front End Developer + Graphic Designer | Teacher Assistant at Ironhack",
    about: "As a child, I was curious, creative and I loved to learn. I painted in an workshop since I was six. I remember that, when I have to choose a career, I felt sorry for all the other options that I would miss. Finishing my arts degree made me understand a couple of things: that creativity can't be enclosed in a field, and that we are our most creative self when we are faced to solve a problem. That lead me to graphic & digital design and from there to web development, where my passion about languages, technology and creativity is more fulfilled than ever. As an adult, I want to stay curious, creative, always learning."
  },
  {
    username: "ruthdeblas",
    password: bcrypt.hashSync("ruthdeblas", bcrypt.genSaltSync(bcryptSalt)),
    avatarUrl: "images/ruthdeblas.jpg",
    portfolios: [rdb_uxdesigner, rdb_illustrator],
    works: [rdb_uxdesigner1, rdb_uxdesigner2, rdb_uxdesigner3, rdb_uxdesigner4, rdb_uxdesigner5, ms_illustrator1, rdb_illustrator2, rdb_illustrator3, rdb_illustrator4, rdb_illustrator5],
    sociallinks: ["https://www.linkedin.com/in/ruthdeblas/", "https://twitter.com/ruthdeblas", "https://www.pinterest.es/cabagalle/", "https://www.instagram.com/ruth1993soria/", "https://issuu.com/ruthdeblasalvarez/docs/portfolio_issu"],
    jobtitle: "UX/UI Designer and Graphic Designer",
    about: "I am a creative multidisciplinary UX / UI designer and Graphic designer. I am an enterprising person, who loves challenges and does not give up easily. Very detailed and self-taught every day, I never stop learning. My main goal is to develop professionally and evolve, so I look for opportunities that allow me to do so." 
  },
  {
    username: "kolision",
    password: bcrypt.hashSync("kolision", bcrypt.genSaltSync(bcryptSalt)),
    avatarUrl: "images/kolision.jpg",
    portfolios: [kol_webdesigner, kol_mobile, kol_display],
    works: [kol_webdesigner1, kol_webdesigner2, kol_webdesigner3, kol_webdesigner4, kol_webdesigner5, kol_mobile1, kol_mobile2, kol_mobile3, kol_mobile4, kol_mobile5, kol_display1, kol_display2, kol_display3, kol_display4, kol_display5],
    sociallinks: ["https://kolision.com/", "https://www.instagram.com/gabrielk.o/", "https://twitter.com/gabrielcreative"],
    jobtitle: "Founder en KOLISION",
    about: "Love to do: Think, Graphic Design, UX/UI Design, Events, Richmedia Banners, Illustration And Photography."
  },
  {
    username: "misti",
    password: bcrypt.hashSync("misti", bcrypt.genSaltSync(bcryptSalt)),
    avatarUrl: "images/misti.jpg",
    portfolios: [misti_uxdesigner, misti_mobile, misti_prices],
    works: [misti_uxdesigner1, misti_uxdesigner2, misti_uxdesigner3, misti_uxdesigner4, misti_uxdesigner5, misti_mobile1, misti_mobile2, misti_mobile3, misti_mobile4, misti_mobile5, misti_prices1, misti_prices2, misti_prices3, misti_prices4, misti_prices5],
    sociallinks: ["http://www.misti.info/", "https://www.linkedin.com/in/m-angeles-peinado-hilinger/", "https://twitter.com/misti_ph", "https://github.com/mist-mist"],
    jobtitle: "UX Engineer & Creative Technologist",
    about: "Hi I’m Misti, I am a Creative Technology Lead specialized in the execution of innovative digital experiential solutions for different clients. My professional profile is a hybrid between front-end development and UX design. My technical skills provide me with an extensive interaction, usability and accessibility experience. I possess strong skills in team management and project planning; I’m used to managing simultaneous projects and tight deadlines. Open-minded and sociable, I’m always able to collaborate with other departments to achieve the best results.."
  }
];



let portfolios = 
[{
    _id: fc_uxdesigner,
    alias: "fc_uxdesigner",
    title: "UX Designer",
    subtitle: "Several freelance projects in the area of UX Design",
    imagecover: "https://source.unsplash.com/collection/1976082/400x225",
    works:[fc_uxdesigner1, fc_uxdesigner2, fc_uxdesigner3, fc_uxdesigner4, fc_uxdesigner5]
  },
  {
    _id: fc_photographer,
    alias: "fc_photographer",
    title: "Photographer",
    subtitle: "A collection of my best works, some of them awarded",
    imagecover: "https://source.unsplash.com/collection/1597792/400x225",
    works:[fc_photographer1, fc_photographer2, fc_photographer3, fc_photographer4, fc_photographer5]    
  },
  {
    _id: fc_animator,
    alias: "fc_animator",
    title: "Animator",
    subtitle: "Some of my best works in Display Advertising",
    imagecover: "https://source.unsplash.com/collection/1223439/400x225",
    works:[fc_animator1, fc_animator2, fc_animator3, fc_animator4, fc_animator5]   
  },
  {
    _id: fc_trendhunter,
    alias: "fc_trendhunter",
    title: "Trendhunter",
    subtitle: "Trenhunting from best sites as ProductHunt",
    imagecover: "https://source.unsplash.com/collection/429524/400x225",
    works:[fc_trendhunter1, fc_trendhunter2, fc_trendhunter3, fc_trendhunter4, fc_trendhunter5]   
  },
  {
    _id: fc_writer,
    alias: "fc_writer",
    title: "Writer",
    subtitle: "Some of my best posts on Medium.",
    imagecover: "https://source.unsplash.com/collection/1111575/400x225",
    works:[fc_writer1, fc_writer2, fc_writer3, fc_writer4, fc_writer5]   
  },
  {
    _id: ms_webdeveloper,
    alias: "ms_webdeveloper",
    title: "Web Developer",
    subtitle: "I just walked down the street on a rainy day.",
    imagecover: "https://source.unsplash.com/collection/1074434/400x225",
    works:[ms_webdeveloper1, ms_webdeveloper2, ms_webdeveloper3, ms_webdeveloper4, ms_webdeveloper5]   
  },
  {
    _id: ms_illustrator,
    alias: "ms_illustrator",
    title: "Illustration",
    subtitle: "I represent the subrealism of the Murcian afternoon also know as `tardeo`.",
    imagecover: "https://source.unsplash.com/collection/1346770/400x225",
    works:[ms_illustrator1, ms_illustrator2, ms_illustrator3, ms_illustrator4, ms_illustrator5]   
  },
  {
    _id: ms_designer,
    alias: "ms_designer",
    title: "Designer",
    subtitle: "Branding works for best projects.",
    imagecover: "https://source.unsplash.com/collection/369/400x225", 
    works:[ms_designer1, ms_designer2, ms_designer3, ms_designer4, ms_designer5]   
  },
  {
    _id: rdb_uxdesigner,
    alias: "rdb_uxdesigner",
    title: "UX Designer",
    subtitle: "Sketch - Design Thinking - Invision - Photoshop - Illustrator - Indesign.",
    imagecover: "https://source.unsplash.com/collection/2276562/400x225", 
    works:[rdb_uxdesigner1, rdb_uxdesigner2, rdb_uxdesigner3, rdb_uxdesigner4, rdb_uxdesigner5]   
  },
  {
    _id: rdb_illustrator,
    alias: "rdb_illustrator",
    title: "Illustrator",
    subtitle: "My best drawings.",
    imagecover: "https://source.unsplash.com/collection/291422/400x225",
    works:[rdb_illustrator1, rdb_illustrator2, rdb_illustrator3, rdb_illustrator4, rdb_illustrator5]   
  },
  {
    _id: kol_webdesigner,
    alias: "kol_webdesigner",
    title: "Web Designer",
    subtitle: "Development of Digital Experiences, Creativity, Design & Production.",
    imagecover: "https://source.unsplash.com/collection/162213/400x225",
    works:[kol_webdesigner1, kol_webdesigner2, kol_webdesigner3, kol_webdesigner4, kol_webdesigner5]   
  },
  {
    _id: kol_mobile,
    alias: "kol_mobile",
    title: "Mobile",
    subtitle: "Showing my best works in UI for Apps.",
    imagecover: "https://source.unsplash.com/collection/827743/400x225",
    works:[kol_mobile1, kol_mobile2, kol_mobile3, kol_mobile4, kol_mobile5]   
  },
  {
    _id: kol_display,
    alias: "kol_display",
    title: "Display",
    subtitle: "featuring Rich Media projects, DCO and advanced banners.",
    imagecover: "https://source.unsplash.com/collection/3582397/400x225",
    works:[kol_display1, kol_display2, kol_display3, kol_display4, kol_display5]   
  },
  {
    _id: misti_uxdesigner,
    alias: "misti_uxdesigner",
    title: "UX Designer",
    subtitle: "Research, Wireframing and prototyping focusing on the User Experience.",
    imagecover: "https://source.unsplash.com/collection/1901880/400x225",
    works:[misti_uxdesigner1, misti_uxdesigner2, misti_uxdesigner3, misti_uxdesigner4, misti_uxdesigner5]   
  },
  {
    _id: misti_mobile,
    alias: "misti_mobile",
    title: "Mobile Projects",
    subtitle: "A compilation of works for Apps and Responsive sites.",
    imagecover: "https://source.unsplash.com/collection/1198107/400x225",
    works:[fc_photographer1, fc_photographer2, fc_photographer3, fc_photographer4, fc_photographer5]   
  }, 
  {
    _id: misti_prices,
    alias: "misti_prices",
    title: "Awards & Prices",
    subtitle: "Some of my best works awarded as a Creative Technologist.",
    imagecover: "https://source.unsplash.com/collection/209138/400x225",
    works:[misti_prices1, misti_prices2, misti_prices3, misti_prices4, misti_prices5]   
  }                                              
];


//The images could be 1600x900 ie. See unsplash

let works = [
  {
    _id: misti_prices1,
    title: "misti_prices1",
    subtitle: "Some of my best works awarded as a Creative Technologist.",
    description: "Entrepreneur interaction design churn rate validation niche market advisor long tail pivot value proposition iPad. Sales iteration buyer seed money venture low hanging fruit non-disclosure agreement deployment business model canvas pivot business plan strategy network effects first mover advantage. Monetization business plan sales analytics infographic business-to-consumer virality release supply chain. IPad series A financing startup early adopters business model canvas android stock. Monetization gamification assets lean startup. MVP hypotheses direct mailing virality holy grail partnership influencer gen-z long tail supply chain validation agile development success strategy. Startup product management lean startup responsive web design interaction design growth hacking success advisor niche market validation paradigm shift venture founders user experience. Ecosystem gen-z return on investment venture social media assets android iPad advisor analytics. Beta ecosystem stock growth hacking non-disclosure agreement advisor. Vesting period prototype business model canvas release monetization value proposition twitter social proof conversion equity analytics infographic ramen.",
    image: "https://source.unsplash.com/collection/209138/800x450"
  },
  {
    _id: misti_prices2,
    title: "misti_prices2",
    subtitle: "Some of my best works awarded as a Creative Technologist.",
    description: "Entrepreneur interaction design churn rate validation niche market advisor long tail pivot value proposition iPad. Sales iteration buyer seed money venture low hanging fruit non-disclosure agreement deployment business model canvas pivot business plan strategy network effects first mover advantage. Monetization business plan sales analytics infographic business-to-consumer virality release supply chain. IPad series A financing startup early adopters business model canvas android stock. Monetization gamification assets lean startup. MVP hypotheses direct mailing virality holy grail partnership influencer gen-z long tail supply chain validation agile development success strategy. Startup product management lean startup responsive web design interaction design growth hacking success advisor niche market validation paradigm shift venture founders user experience. Ecosystem gen-z return on investment venture social media assets android iPad advisor analytics. Beta ecosystem stock growth hacking non-disclosure agreement advisor. Vesting period prototype business model canvas release monetization value proposition twitter social proof conversion equity analytics infographic ramen.",
    image:"https://source.unsplash.com/collection/209138/800x450"
  },
  {
    _id: misti_prices3,
    title: "misti_prices3",
    subtitle: "Some of my best works awarded as a Creative Technologist.",
    description: "Entrepreneur interaction design churn rate validation niche market advisor long tail pivot value proposition iPad. Sales iteration buyer seed money venture low hanging fruit non-disclosure agreement deployment business model canvas pivot business plan strategy network effects first mover advantage. Monetization business plan sales analytics infographic business-to-consumer virality release supply chain. IPad series A financing startup early adopters business model canvas android stock. Monetization gamification assets lean startup. MVP hypotheses direct mailing virality holy grail partnership influencer gen-z long tail supply chain validation agile development success strategy. Startup product management lean startup responsive web design interaction design growth hacking success advisor niche market validation paradigm shift venture founders user experience. Ecosystem gen-z return on investment venture social media assets android iPad advisor analytics. Beta ecosystem stock growth hacking non-disclosure agreement advisor. Vesting period prototype business model canvas release monetization value proposition twitter social proof conversion equity analytics infographic ramen.",
    image: "https://source.unsplash.com/collection/209138/800x450"
  },
  {
    _id: misti_prices4,
    title: "misti_prices4",
    subtitle: "Some of my best works awarded as a Creative Technologist.",
    description: "Entrepreneur interaction design churn rate validation niche market advisor long tail pivot value proposition iPad. Sales iteration buyer seed money venture low hanging fruit non-disclosure agreement deployment business model canvas pivot business plan strategy network effects first mover advantage. Monetization business plan sales analytics infographic business-to-consumer virality release supply chain. IPad series A financing startup early adopters business model canvas android stock. Monetization gamification assets lean startup. MVP hypotheses direct mailing virality holy grail partnership influencer gen-z long tail supply chain validation agile development success strategy. Startup product management lean startup responsive web design interaction design growth hacking success advisor niche market validation paradigm shift venture founders user experience. Ecosystem gen-z return on investment venture social media assets android iPad advisor analytics. Beta ecosystem stock growth hacking non-disclosure agreement advisor. Vesting period prototype business model canvas release monetization value proposition twitter social proof conversion equity analytics infographic ramen.",
    image: "https://source.unsplash.com/collection/209138/800x450"
  },
  {
    _id: misti_prices5,
    title: "misti_prices5",
    subtitle: "Some of my best works awarded as a Creative Technologist.",
    description: "Entrepreneur interaction design churn rate validation niche market advisor long tail pivot value proposition iPad. Sales iteration buyer seed money venture low hanging fruit non-disclosure agreement deployment business model canvas pivot business plan strategy network effects first mover advantage. Monetization business plan sales analytics infographic business-to-consumer virality release supply chain. IPad series A financing startup early adopters business model canvas android stock. Monetization gamification assets lean startup. MVP hypotheses direct mailing virality holy grail partnership influencer gen-z long tail supply chain validation agile development success strategy. Startup product management lean startup responsive web design interaction design growth hacking success advisor niche market validation paradigm shift venture founders user experience. Ecosystem gen-z return on investment venture social media assets android iPad advisor analytics. Beta ecosystem stock growth hacking non-disclosure agreement advisor. Vesting period prototype business model canvas release monetization value proposition twitter social proof conversion equity analytics infographic ramen.",
    image: "https://source.unsplash.com/collection/209138/800x450"
  },     
  {
    _id: misti_mobile1,
    title: "misti_mobile1",
    subtitle: "A bunch of my best works for Apps in the last three years.",
    description: "WorAccelerator disruptive ecosystem marketing gen-z. Incubator termsheet alpha metrics product management iPhone leverage buyer value proposition venture paradigm shift focus prototype. Infrastructure hackathon learning curve mass market sales buzz twitter bootstrapping investor backing launch party focus branding. Value proposition network effects beta monetization lean startup technology interaction design holy grail product management growth hacking innovator branding. Ramen founders stock mass market partner network sales. Focus gamification long tail creative series A financing funding ramen network effects facebook hackathon social media MVP first mover advantage. Return on investment pivot gen-z focus paradigm shift influencer backing facebook ownership crowdsource supply chain first mover advantage user experience interaction design. Supply chain bootstrapping lean startup. Termsheet holy grail churn rate influencer growth hacking. Interaction design success advisor seed money first mover advantage stock deployment business plan angel investor customer analytics hypotheses.",
    image: "https://source.unsplash.com/collection/1198107/800x450"
  },
  {
    _id: misti_mobile2,
    title: "misti_mobile2",
    subtitle: "A bunch of my best works for Apps in the last three years.",
    description: "WorAccelerator disruptive ecosystem marketing gen-z. Incubator termsheet alpha metrics product management iPhone leverage buyer value proposition venture paradigm shift focus prototype. Infrastructure hackathon learning curve mass market sales buzz twitter bootstrapping investor backing launch party focus branding. Value proposition network effects beta monetization lean startup technology interaction design holy grail product management growth hacking innovator branding. Ramen founders stock mass market partner network sales. Focus gamification long tail creative series A financing funding ramen network effects facebook hackathon social media MVP first mover advantage. Return on investment pivot gen-z focus paradigm shift influencer backing facebook ownership crowdsource supply chain first mover advantage user experience interaction design. Supply chain bootstrapping lean startup. Termsheet holy grail churn rate influencer growth hacking. Interaction design success advisor seed money first mover advantage stock deployment business plan angel investor customer analytics hypotheses.",
    image: "https://source.unsplash.com/collection/1198107/800x450" 
  },
  {
    _id: misti_mobile3,
    title: "misti_mobile3",
    subtitle: "A bunch of my best works for Apps in the last three years.",
    description: "WorAccelerator disruptive ecosystem marketing gen-z. Incubator termsheet alpha metrics product management iPhone leverage buyer value proposition venture paradigm shift focus prototype. Infrastructure hackathon learning curve mass market sales buzz twitter bootstrapping investor backing launch party focus branding. Value proposition network effects beta monetization lean startup technology interaction design holy grail product management growth hacking innovator branding. Ramen founders stock mass market partner network sales. Focus gamification long tail creative series A financing funding ramen network effects facebook hackathon social media MVP first mover advantage. Return on investment pivot gen-z focus paradigm shift influencer backing facebook ownership crowdsource supply chain first mover advantage user experience interaction design. Supply chain bootstrapping lean startup. Termsheet holy grail churn rate influencer growth hacking. Interaction design success advisor seed money first mover advantage stock deployment business plan angel investor customer analytics hypotheses.",
    image: "https://source.unsplash.com/collection/1198107/800x450"
  },
  {
    _id: misti_mobile4,
    title: "misti_mobile4",
    subtitle: "A bunch of my best works for Apps in the last three years.",
    description: "WorAccelerator disruptive ecosystem marketing gen-z. Incubator termsheet alpha metrics product management iPhone leverage buyer value proposition venture paradigm shift focus prototype. Infrastructure hackathon learning curve mass market sales buzz twitter bootstrapping investor backing launch party focus branding. Value proposition network effects beta monetization lean startup technology interaction design holy grail product management growth hacking innovator branding. Ramen founders stock mass market partner network sales. Focus gamification long tail creative series A financing funding ramen network effects facebook hackathon social media MVP first mover advantage. Return on investment pivot gen-z focus paradigm shift influencer backing facebook ownership crowdsource supply chain first mover advantage user experience interaction design. Supply chain bootstrapping lean startup. Termsheet holy grail churn rate influencer growth hacking. Interaction design success advisor seed money first mover advantage stock deployment business plan angel investor customer analytics hypotheses.",
    image: "https://source.unsplash.com/collection/1198107/800x450"
  },
  {
    _id: misti_mobile5,
    title: "misti_mobile5",
    subtitle: "A bunch of my best works for Apps in the last three years.",
    description: "WorAccelerator disruptive ecosystem marketing gen-z. Incubator termsheet alpha metrics product management iPhone leverage buyer value proposition venture paradigm shift focus prototype. Infrastructure hackathon learning curve mass market sales buzz twitter bootstrapping investor backing launch party focus branding. Value proposition network effects beta monetization lean startup technology interaction design holy grail product management growth hacking innovator branding. Ramen founders stock mass market partner network sales. Focus gamification long tail creative series A financing funding ramen network effects facebook hackathon social media MVP first mover advantage. Return on investment pivot gen-z focus paradigm shift influencer backing facebook ownership crowdsource supply chain first mover advantage user experience interaction design. Supply chain bootstrapping lean startup. Termsheet holy grail churn rate influencer growth hacking. Interaction design success advisor seed money first mover advantage stock deployment business plan angel investor customer analytics hypotheses.",
    image: "https://source.unsplash.com/collection/1198107/800x450" 
  },
  {
    _id: misti_uxdesigner1,
    title: "misti_uxdesigner1",
    subtitle: "A Digital Unicorn always wants to learn.",
    description: "Funding responsive web design assets. Virality termsheet niche market business model canvas iPad non-disclosure agreement buzz low hanging fruit sales leverage creative gamification partnership buyer. Agile development pitch termsheet backing business-to-business leverage angel investor iPhone. Equity business-to-business growth hacking disruptive virality channels iPad marketing entrepreneur pivot freemium. IPad accelerator entrepreneur gen-z startup creative business-to-business alpha customer. Assets startup partnership rockstar prototype responsive web design innovator iteration incubator social media user experience first mover advantage. Pitch product management MVP paradigm shift business-to-business crowdfunding validation stock ecosystem funding interaction design lean startup business plan. Early adopters partnership business-to-business niche market ramen gamification iPad. Value proposition iPad partnership market lean startup stock sales product management business-to-business iteration crowdfunding. Business plan research & development bandwidth.",
    image: "https://source.unsplash.com/collection/1901880/800x450"
  },
  {
    _id: misti_uxdesigner2,
    title: "misti_uxdesigner2",
    subtitle: "A Digital Unicorn always wants to learn.",
    description: "Funding responsive web design assets. Virality termsheet niche market business model canvas iPad non-disclosure agreement buzz low hanging fruit sales leverage creative gamification partnership buyer. Agile development pitch termsheet backing business-to-business leverage angel investor iPhone. Equity business-to-business growth hacking disruptive virality channels iPad marketing entrepreneur pivot freemium. IPad accelerator entrepreneur gen-z startup creative business-to-business alpha customer. Assets startup partnership rockstar prototype responsive web design innovator iteration incubator social media user experience first mover advantage. Pitch product management MVP paradigm shift business-to-business crowdfunding validation stock ecosystem funding interaction design lean startup business plan. Early adopters partnership business-to-business niche market ramen gamification iPad. Value proposition iPad partnership market lean startup stock sales product management business-to-business iteration crowdfunding. Business plan research & development bandwidth.",
    image: "https://source.unsplash.com/collection/1901880/800x450"
  },
  {
    _id: misti_uxdesigner3,
    title: "misti_uxdesigner3",
    subtitle: "A Digital Unicorn always wants to learn.",
    description: "Funding responsive web design assets. Virality termsheet niche market business model canvas iPad non-disclosure agreement buzz low hanging fruit sales leverage creative gamification partnership buyer. Agile development pitch termsheet backing business-to-business leverage angel investor iPhone. Equity business-to-business growth hacking disruptive virality channels iPad marketing entrepreneur pivot freemium. IPad accelerator entrepreneur gen-z startup creative business-to-business alpha customer. Assets startup partnership rockstar prototype responsive web design innovator iteration incubator social media user experience first mover advantage. Pitch product management MVP paradigm shift business-to-business crowdfunding validation stock ecosystem funding interaction design lean startup business plan. Early adopters partnership business-to-business niche market ramen gamification iPad. Value proposition iPad partnership market lean startup stock sales product management business-to-business iteration crowdfunding. Business plan research & development bandwidth.",
    image: "https://source.unsplash.com/collection/1901880/800x450"
  },
  {
    _id: misti_uxdesigner4,
    title: "misti_uxdesigner4",
    subtitle: "A Digital Unicorn always wants to learn.",
    description: "Funding responsive web design assets. Virality termsheet niche market business model canvas iPad non-disclosure agreement buzz low hanging fruit sales leverage creative gamification partnership buyer. Agile development pitch termsheet backing business-to-business leverage angel investor iPhone. Equity business-to-business growth hacking disruptive virality channels iPad marketing entrepreneur pivot freemium. IPad accelerator entrepreneur gen-z startup creative business-to-business alpha customer. Assets startup partnership rockstar prototype responsive web design innovator iteration incubator social media user experience first mover advantage. Pitch product management MVP paradigm shift business-to-business crowdfunding validation stock ecosystem funding interaction design lean startup business plan. Early adopters partnership business-to-business niche market ramen gamification iPad. Value proposition iPad partnership market lean startup stock sales product management business-to-business iteration crowdfunding. Business plan research & development bandwidth.",
    image: "https://source.unsplash.com/collection/1901880/800x450"
  },
  {
    _id: misti_uxdesigner5,
    title: "misti_uxdesigner5",
    subtitle: "A Digital Unicorn always wants to learn.",
    description: "Funding responsive web design assets. Virality termsheet niche market business model canvas iPad non-disclosure agreement buzz low hanging fruit sales leverage creative gamification partnership buyer. Agile development pitch termsheet backing business-to-business leverage angel investor iPhone. Equity business-to-business growth hacking disruptive virality channels iPad marketing entrepreneur pivot freemium. IPad accelerator entrepreneur gen-z startup creative business-to-business alpha customer. Assets startup partnership rockstar prototype responsive web design innovator iteration incubator social media user experience first mover advantage. Pitch product management MVP paradigm shift business-to-business crowdfunding validation stock ecosystem funding interaction design lean startup business plan. Early adopters partnership business-to-business niche market ramen gamification iPad. Value proposition iPad partnership market lean startup stock sales product management business-to-business iteration crowdfunding. Business plan research & development bandwidth.",
    image: "https://source.unsplash.com/collection/1901880/800x450"
  },
  {
    _id: kol_display1,
    title: "kol_display1",
    subtitle: "Working with Procter&Gamble, Lexus, eCommerce, etc.",
    description: "Non-disclosure agreement early adopters freemium lean startup bootstrapping disruptive buyer beta deployment equity conversion. Partnership marketing accelerator backing ramen termsheet stock social proof venture partner network hypotheses startup validation. Churn rate long tail pivot disruptive handshake startup business-to-consumer leverage. Value proposition twitter assets investor mass market business-to-consumer lean startup business-to-business interaction design series A financing early adopters. Launch party infrastructure disruptive leverage churn rate pitch partnership. Alpha bootstrapping business-to-consumer crowdsource long tail android scrum project ramen accelerator buyer sales lean startup virality niche market. Founders user experience value proposition supply chain social media bandwidth backing low hanging fruit market business-to-consumer infrastructure graphical user interface launch party traction. Focus pivot beta freemium creative stock. Seed money disruptive interaction design series A financing investor A/B testing assets sales entrepreneur ramen graphical user interface paradigm shift. Long tail market business plan android.",
    image: "https://source.unsplash.com/collection/3582397/800x450"
  },
  {
    _id: kol_display2,
    title: "kol_display2",
    subtitle: "Working with Procter&Gamble, Lexus, eCommerce, etc.",
    description: "Non-disclosure agreement early adopters freemium lean startup bootstrapping disruptive buyer beta deployment equity conversion. Partnership marketing accelerator backing ramen termsheet stock social proof venture partner network hypotheses startup validation. Churn rate long tail pivot disruptive handshake startup business-to-consumer leverage. Value proposition twitter assets investor mass market business-to-consumer lean startup business-to-business interaction design series A financing early adopters. Launch party infrastructure disruptive leverage churn rate pitch partnership. Alpha bootstrapping business-to-consumer crowdsource long tail android scrum project ramen accelerator buyer sales lean startup virality niche market. Founders user experience value proposition supply chain social media bandwidth backing low hanging fruit market business-to-consumer infrastructure graphical user interface launch party traction. Focus pivot beta freemium creative stock. Seed money disruptive interaction design series A financing investor A/B testing assets sales entrepreneur ramen graphical user interface paradigm shift. Long tail market business plan android.",
    image: "https://source.unsplash.com/collection/3582397/800x450"
  },
  {
    _id: kol_display3,
    title: "kol_display3",
    subtitle: "Working with Procter&Gamble, Lexus, eCommerce, etc.",
    description: "Non-disclosure agreement early adopters freemium lean startup bootstrapping disruptive buyer beta deployment equity conversion. Partnership marketing accelerator backing ramen termsheet stock social proof venture partner network hypotheses startup validation. Churn rate long tail pivot disruptive handshake startup business-to-consumer leverage. Value proposition twitter assets investor mass market business-to-consumer lean startup business-to-business interaction design series A financing early adopters. Launch party infrastructure disruptive leverage churn rate pitch partnership. Alpha bootstrapping business-to-consumer crowdsource long tail android scrum project ramen accelerator buyer sales lean startup virality niche market. Founders user experience value proposition supply chain social media bandwidth backing low hanging fruit market business-to-consumer infrastructure graphical user interface launch party traction. Focus pivot beta freemium creative stock. Seed money disruptive interaction design series A financing investor A/B testing assets sales entrepreneur ramen graphical user interface paradigm shift. Long tail market business plan android.",
    image: "https://source.unsplash.com/collection/3582397/800x450"
  },
  {
    _id: kol_display4,
    title: "kol_display4",
    subtitle: "Working with Procter&Gamble, Lexus, eCommerce, etc.",
    description: "Non-disclosure agreement early adopters freemium lean startup bootstrapping disruptive buyer beta deployment equity conversion. Partnership marketing accelerator backing ramen termsheet stock social proof venture partner network hypotheses startup validation. Churn rate long tail pivot disruptive handshake startup business-to-consumer leverage. Value proposition twitter assets investor mass market business-to-consumer lean startup business-to-business interaction design series A financing early adopters. Launch party infrastructure disruptive leverage churn rate pitch partnership. Alpha bootstrapping business-to-consumer crowdsource long tail android scrum project ramen accelerator buyer sales lean startup virality niche market. Founders user experience value proposition supply chain social media bandwidth backing low hanging fruit market business-to-consumer infrastructure graphical user interface launch party traction. Focus pivot beta freemium creative stock. Seed money disruptive interaction design series A financing investor A/B testing assets sales entrepreneur ramen graphical user interface paradigm shift. Long tail market business plan android.",
    image: "https://source.unsplash.com/collection/3582397/800x450"
  },
  {
    _id: kol_display5,
    title: "kol_display5",
    subtitle: "Working with Procter&Gamble, Lexus, eCommerce, etc.",
    description: "Non-disclosure agreement early adopters freemium lean startup bootstrapping disruptive buyer beta deployment equity conversion. Partnership marketing accelerator backing ramen termsheet stock social proof venture partner network hypotheses startup validation. Churn rate long tail pivot disruptive handshake startup business-to-consumer leverage. Value proposition twitter assets investor mass market business-to-consumer lean startup business-to-business interaction design series A financing early adopters. Launch party infrastructure disruptive leverage churn rate pitch partnership. Alpha bootstrapping business-to-consumer crowdsource long tail android scrum project ramen accelerator buyer sales lean startup virality niche market. Founders user experience value proposition supply chain social media bandwidth backing low hanging fruit market business-to-consumer infrastructure graphical user interface launch party traction. Focus pivot beta freemium creative stock. Seed money disruptive interaction design series A financing investor A/B testing assets sales entrepreneur ramen graphical user interface paradigm shift. Long tail market business plan android.",
    image: "https://source.unsplash.com/collection/3582397/800x450"
  },
  {
    _id: kol_mobile1,
    title: "kol_mobile1",
    subtitle: "A collection for UI App Design made of best works of last two years",
    description: "Accelerator partnership investor crowdfunding venture validation traction facebook return on investment MVP bandwidth. Freemium buzz sales infrastructure value proposition pitch monetization holy grail paradigm shift business-to-consumer churn rate low hanging fruit. Leverage business model canvas early adopters product management. Bootstrapping seed round alpha analytics assets graphical user interface. Gamification assets value proposition traction ownership pitch social media. Hypotheses channels ownership twitter accelerator infrastructure rockstar. Alpha equity termsheet supply chain twitter seed money. Niche market conversion ownership funding holy grail low hanging fruit. Launch party ramen hackathon entrepreneur startup. IPhone churn rate value proposition focus niche market first mover advantage.",
    image: "https://source.unsplash.com/collection/827743/800x450"
  },
  {
    _id: kol_mobile2,
    title: "kol_mobile2",
    subtitle: "A collection for UI App Design made of best works of last two years",
    description: "Accelerator partnership investor crowdfunding venture validation traction facebook return on investment MVP bandwidth. Freemium buzz sales infrastructure value proposition pitch monetization holy grail paradigm shift business-to-consumer churn rate low hanging fruit. Leverage business model canvas early adopters product management. Bootstrapping seed round alpha analytics assets graphical user interface. Gamification assets value proposition traction ownership pitch social media. Hypotheses channels ownership twitter accelerator infrastructure rockstar. Alpha equity termsheet supply chain twitter seed money. Niche market conversion ownership funding holy grail low hanging fruit. Launch party ramen hackathon entrepreneur startup. IPhone churn rate value proposition focus niche market first mover advantage.",
    image: "https://source.unsplash.com/collection/827743/800x450"
  },
  {
    _id: kol_mobile3,
    title: "kol_mobile3",
    subtitle: "A collection for UI App Design made of best works of last two years",
    description: "Accelerator partnership investor crowdfunding venture validation traction facebook return on investment MVP bandwidth. Freemium buzz sales infrastructure value proposition pitch monetization holy grail paradigm shift business-to-consumer churn rate low hanging fruit. Leverage business model canvas early adopters product management. Bootstrapping seed round alpha analytics assets graphical user interface. Gamification assets value proposition traction ownership pitch social media. Hypotheses channels ownership twitter accelerator infrastructure rockstar. Alpha equity termsheet supply chain twitter seed money. Niche market conversion ownership funding holy grail low hanging fruit. Launch party ramen hackathon entrepreneur startup. IPhone churn rate value proposition focus niche market first mover advantage.",
    image: "https://source.unsplash.com/collection/827743/800x450"
  },
  {
    _id: kol_mobile4,
    title: "kol_mobile4",
    subtitle: "A collection for UI App Design made of best works of last two years",
    description: "Accelerator partnership investor crowdfunding venture validation traction facebook return on investment MVP bandwidth. Freemium buzz sales infrastructure value proposition pitch monetization holy grail paradigm shift business-to-consumer churn rate low hanging fruit. Leverage business model canvas early adopters product management. Bootstrapping seed round alpha analytics assets graphical user interface. Gamification assets value proposition traction ownership pitch social media. Hypotheses channels ownership twitter accelerator infrastructure rockstar. Alpha equity termsheet supply chain twitter seed money. Niche market conversion ownership funding holy grail low hanging fruit. Launch party ramen hackathon entrepreneur startup. IPhone churn rate value proposition focus niche market first mover advantage.",
    image: "https://source.unsplash.com/collection/827743/800x450"
  },
  {
    _id: kol_mobile5,
    title: "kol_mobile5",
    subtitle: "A collection for UI App Design made of best works of last two years",
    description: "Accelerator partnership investor crowdfunding venture validation traction facebook return on investment MVP bandwidth. Freemium buzz sales infrastructure value proposition pitch monetization holy grail paradigm shift business-to-consumer churn rate low hanging fruit. Leverage business model canvas early adopters product management. Bootstrapping seed round alpha analytics assets graphical user interface. Gamification assets value proposition traction ownership pitch social media. Hypotheses channels ownership twitter accelerator infrastructure rockstar. Alpha equity termsheet supply chain twitter seed money. Niche market conversion ownership funding holy grail low hanging fruit. Launch party ramen hackathon entrepreneur startup. IPhone churn rate value proposition focus niche market first mover advantage.",
    image: "https://source.unsplash.com/collection/827743/800x450"
  }, 
  {
    _id: kol_webdesigner1,
    title: "kol_webdesigner1",
    subtitle: "Web Design Work",
    subtitle: "Iteration hackathon burn rate partner network pitch crowdfunding entrepreneur client backing strategy crowdsource. A/B testing focus strategy client crowdsource scrum project learning curve research & development pitch partner network launch party social proof bandwidth. Client gamification bandwidth startup launch party partner network entrepreneur analytics paradigm shift MVP backing responsive web design business-to-business. Long tail iPad graphical user interface. Responsive web design user experience launch party crowdsource creative facebook social media buyer. Accelerator business-to-consumer bootstrapping success business-to-business iPhone seed money deployment launch party handshake. Strategy return on investment handshake. Analytics creative rockstar incubator twitter metrics innovator buyer business model canvas termsheet. Advisor stealth incubator hypotheses customer client return on investment influencer business-to-business ownership. Release hypotheses iPad leverage business-to-consumer funding buyer influencer.",
    image: "https://source.unsplash.com/collection/162213/800x450"
  },
  {
    _id: kol_webdesigner2,
    title: "kol_webdesigner2",
    subtitle: "Web Design Work",
    description: "Iteration hackathon burn rate partner network pitch crowdfunding entrepreneur client backing strategy crowdsource. A/B testing focus strategy client crowdsource scrum project learning curve research & development pitch partner network launch party social proof bandwidth. Client gamification bandwidth startup launch party partner network entrepreneur analytics paradigm shift MVP backing responsive web design business-to-business. Long tail iPad graphical user interface. Responsive web design user experience launch party crowdsource creative facebook social media buyer. Accelerator business-to-consumer bootstrapping success business-to-business iPhone seed money deployment launch party handshake. Strategy return on investment handshake. Analytics creative rockstar incubator twitter metrics innovator buyer business model canvas termsheet. Advisor stealth incubator hypotheses customer client return on investment influencer business-to-business ownership. Release hypotheses iPad leverage business-to-consumer funding buyer influencer.",
    image: "https://source.unsplash.com/collection/162213/800x450"
  },
  {
    _id: kol_webdesigner3,
    title: "kol_webdesigner3",
    subtitle: "Web Design Work",
    description: "Iteration hackathon burn rate partner network pitch crowdfunding entrepreneur client backing strategy crowdsource. A/B testing focus strategy client crowdsource scrum project learning curve research & development pitch partner network launch party social proof bandwidth. Client gamification bandwidth startup launch party partner network entrepreneur analytics paradigm shift MVP backing responsive web design business-to-business. Long tail iPad graphical user interface. Responsive web design user experience launch party crowdsource creative facebook social media buyer. Accelerator business-to-consumer bootstrapping success business-to-business iPhone seed money deployment launch party handshake. Strategy return on investment handshake. Analytics creative rockstar incubator twitter metrics innovator buyer business model canvas termsheet. Advisor stealth incubator hypotheses customer client return on investment influencer business-to-business ownership. Release hypotheses iPad leverage business-to-consumer funding buyer influencer.",
    image: "https://source.unsplash.com/collection/162213/800x450"
  },
  {
    _id: kol_webdesigner4,
    title: "kol_webdesigner4",
    subtitle: "Web Design Work",
    description: "Iteration hackathon burn rate partner network pitch crowdfunding entrepreneur client backing strategy crowdsource. A/B testing focus strategy client crowdsource scrum project learning curve research & development pitch partner network launch party social proof bandwidth. Client gamification bandwidth startup launch party partner network entrepreneur analytics paradigm shift MVP backing responsive web design business-to-business. Long tail iPad graphical user interface. Responsive web design user experience launch party crowdsource creative facebook social media buyer. Accelerator business-to-consumer bootstrapping success business-to-business iPhone seed money deployment launch party handshake. Strategy return on investment handshake. Analytics creative rockstar incubator twitter metrics innovator buyer business model canvas termsheet. Advisor stealth incubator hypotheses customer client return on investment influencer business-to-business ownership. Release hypotheses iPad leverage business-to-consumer funding buyer influencer.",
    image: "https://source.unsplash.com/collection/162213/800x450"
  },
  {
    _id: kol_webdesigner5,
    title: "kol_webdesigner5",
    subtitle: "Web Design Work",
    description: "Iteration hackathon burn rate partner network pitch crowdfunding entrepreneur client backing strategy crowdsource. A/B testing focus strategy client crowdsource scrum project learning curve research & development pitch partner network launch party social proof bandwidth. Client gamification bandwidth startup launch party partner network entrepreneur analytics paradigm shift MVP backing responsive web design business-to-business. Long tail iPad graphical user interface. Responsive web design user experience launch party crowdsource creative facebook social media buyer. Accelerator business-to-consumer bootstrapping success business-to-business iPhone seed money deployment launch party handshake. Strategy return on investment handshake. Analytics creative rockstar incubator twitter metrics innovator buyer business model canvas termsheet. Advisor stealth incubator hypotheses customer client return on investment influencer business-to-business ownership. Release hypotheses iPad leverage business-to-consumer funding buyer influencer.",
    image: "https://source.unsplash.com/collection/162213/800x450"
  },    
  {
    _id: rdb_illustrator1,
    title: "rdb_illustrator1",
    subtitle: "Illustration works",
    description: "Iteration A/B testing product management android focus buzz non-disclosure agreement metrics buyer crowdfunding success strategy. Disruptive metrics agile development first mover advantage ecosystem iPad lean startup bandwidth iteration. Branding lean startup innovator business-to-consumer client analytics buzz founders focus burn rate. Virality incubator ramen social proof low hanging fruit business-to-business alpha strategy. Hackathon seed round partner network gamification channels equity paradigm shift buyer influencer. Graphical user interface prototype sales validation accelerator direct mailing agile development niche market scrum project seed round. Ownership return on investment infrastructure business-to-consumer. Bandwidth success marketing product management ecosystem buyer iPad niche market crowdfunding research & development pivot network effects. Ecosystem non-disclosure agreement backing partnership client founders buyer infographic. Social proof advisor seed money business plan value proposition launch party technology termsheet business model canvas leverage buzz.",
    image: "https://source.unsplash.com/collection/291422/800x450"
  },
  {
    _id: rdb_illustrator2,
    title: "rdb_illustrator2",
    subtitle: "Illustration works",
    description: "Iteration A/B testing product management android focus buzz non-disclosure agreement metrics buyer crowdfunding success strategy. Disruptive metrics agile development first mover advantage ecosystem iPad lean startup bandwidth iteration. Branding lean startup innovator business-to-consumer client analytics buzz founders focus burn rate. Virality incubator ramen social proof low hanging fruit business-to-business alpha strategy. Hackathon seed round partner network gamification channels equity paradigm shift buyer influencer. Graphical user interface prototype sales validation accelerator direct mailing agile development niche market scrum project seed round. Ownership return on investment infrastructure business-to-consumer. Bandwidth success marketing product management ecosystem buyer iPad niche market crowdfunding research & development pivot network effects. Ecosystem non-disclosure agreement backing partnership client founders buyer infographic. Social proof advisor seed money business plan value proposition launch party technology termsheet business model canvas leverage buzz.",
    image: "https://source.unsplash.com/collection/291422/800x450"
  },
  {
    _id: rdb_illustrator3,
    title: "rdb_illustrator3",
    subtitle: "Illustration works",
    description: "Iteration A/B testing product management android focus buzz non-disclosure agreement metrics buyer crowdfunding success strategy. Disruptive metrics agile development first mover advantage ecosystem iPad lean startup bandwidth iteration. Branding lean startup innovator business-to-consumer client analytics buzz founders focus burn rate. Virality incubator ramen social proof low hanging fruit business-to-business alpha strategy. Hackathon seed round partner network gamification channels equity paradigm shift buyer influencer. Graphical user interface prototype sales validation accelerator direct mailing agile development niche market scrum project seed round. Ownership return on investment infrastructure business-to-consumer. Bandwidth success marketing product management ecosystem buyer iPad niche market crowdfunding research & development pivot network effects. Ecosystem non-disclosure agreement backing partnership client founders buyer infographic. Social proof advisor seed money business plan value proposition launch party technology termsheet business model canvas leverage buzz.",
    image: "https://source.unsplash.com/collection/291422/800x450"
  },
  {
    _id: rdb_illustrator4,
    title: "rdb_illustrator4",
    subtitle: "Illustration works",
    description: "Iteration A/B testing product management android focus buzz non-disclosure agreement metrics buyer crowdfunding success strategy. Disruptive metrics agile development first mover advantage ecosystem iPad lean startup bandwidth iteration. Branding lean startup innovator business-to-consumer client analytics buzz founders focus burn rate. Virality incubator ramen social proof low hanging fruit business-to-business alpha strategy. Hackathon seed round partner network gamification channels equity paradigm shift buyer influencer. Graphical user interface prototype sales validation accelerator direct mailing agile development niche market scrum project seed round. Ownership return on investment infrastructure business-to-consumer. Bandwidth success marketing product management ecosystem buyer iPad niche market crowdfunding research & development pivot network effects. Ecosystem non-disclosure agreement backing partnership client founders buyer infographic. Social proof advisor seed money business plan value proposition launch party technology termsheet business model canvas leverage buzz.",
    image: "https://source.unsplash.com/collection/291422/800x450"
  },
  {
    _id: rdb_illustrator5,
    title: "rdb_illustrator5",
    subtitle: "Illustration works",
    description: "Iteration A/B testing product management android focus buzz non-disclosure agreement metrics buyer crowdfunding success strategy. Disruptive metrics agile development first mover advantage ecosystem iPad lean startup bandwidth iteration. Branding lean startup innovator business-to-consumer client analytics buzz founders focus burn rate. Virality incubator ramen social proof low hanging fruit business-to-business alpha strategy. Hackathon seed round partner network gamification channels equity paradigm shift buyer influencer. Graphical user interface prototype sales validation accelerator direct mailing agile development niche market scrum project seed round. Ownership return on investment infrastructure business-to-consumer. Bandwidth success marketing product management ecosystem buyer iPad niche market crowdfunding research & development pivot network effects. Ecosystem non-disclosure agreement backing partnership client founders buyer infographic. Social proof advisor seed money business plan value proposition launch party technology termsheet business model canvas leverage buzz.",
    image: "https://source.unsplash.com/collection/291422/800x450"
  },
  {
    _id: rdb_uxdesigner1,
    title: "rdb_uxdesigner1",
    subtitle: "I am a UXUI Designer looking for challenges.",
    description: "Return on investment infrastructure supply chain. Angel investor direct mailing responsive web design research & development sales iPhone startup early adopters interaction design. MVP scrum project leverage crowdfunding venture growth hacking holy grail. Termsheet scrum project angel investor leverage supply chain entrepreneur founders mass market customer ecosystem. Technology deployment iPhone value proposition interaction design research & development focus A/B testing virality bootstrapping success. Incubator first mover advantage MVP iteration research & development burn rate crowdsource ramen focus infographic. Conversion startup product management creative advisor marketing business plan mass market stock hypotheses business-to-business virality handshake. Assets ramen user experience infrastructure startup pitch stock burn rate prototype beta sales venture client. Launch party branding creative conversion stock interaction design scrum project lean startup. Stealth crowdsource release accelerator marketing.",
    image: "https://source.unsplash.com/collection/2276562/800x450"
  },
  {
    _id: rdb_uxdesigner2,
    title: "rdb_uxdesigner2",
    subtitle: "I am a UXUI Designer looking for challenges.",
    description: "Return on investment infrastructure supply chain. Angel investor direct mailing responsive web design research & development sales iPhone startup early adopters interaction design. MVP scrum project leverage crowdfunding venture growth hacking holy grail. Termsheet scrum project angel investor leverage supply chain entrepreneur founders mass market customer ecosystem. Technology deployment iPhone value proposition interaction design research & development focus A/B testing virality bootstrapping success. Incubator first mover advantage MVP iteration research & development burn rate crowdsource ramen focus infographic. Conversion startup product management creative advisor marketing business plan mass market stock hypotheses business-to-business virality handshake. Assets ramen user experience infrastructure startup pitch stock burn rate prototype beta sales venture client. Launch party branding creative conversion stock interaction design scrum project lean startup. Stealth crowdsource release accelerator marketing.",
    image: "https://source.unsplash.com/collection/2276562/800x450"
  },
  {
    _id: rdb_uxdesigner3,
    title: "rdb_uxdesigner3",
    subtitle: "I am a UXUI Designer looking for challenges.",
    description: "Return on investment infrastructure supply chain. Angel investor direct mailing responsive web design research & development sales iPhone startup early adopters interaction design. MVP scrum project leverage crowdfunding venture growth hacking holy grail. Termsheet scrum project angel investor leverage supply chain entrepreneur founders mass market customer ecosystem. Technology deployment iPhone value proposition interaction design research & development focus A/B testing virality bootstrapping success. Incubator first mover advantage MVP iteration research & development burn rate crowdsource ramen focus infographic. Conversion startup product management creative advisor marketing business plan mass market stock hypotheses business-to-business virality handshake. Assets ramen user experience infrastructure startup pitch stock burn rate prototype beta sales venture client. Launch party branding creative conversion stock interaction design scrum project lean startup. Stealth crowdsource release accelerator marketing.",
    image: "https://source.unsplash.com/collection/2276562/800x450"
  },
  {
    _id: rdb_uxdesigner4,
    title: "rdb_uxdesigner4",
    subtitle: "I am a UXUI Designer looking for challenges.",
    description: "Return on investment infrastructure supply chain. Angel investor direct mailing responsive web design research & development sales iPhone startup early adopters interaction design. MVP scrum project leverage crowdfunding venture growth hacking holy grail. Termsheet scrum project angel investor leverage supply chain entrepreneur founders mass market customer ecosystem. Technology deployment iPhone value proposition interaction design research & development focus A/B testing virality bootstrapping success. Incubator first mover advantage MVP iteration research & development burn rate crowdsource ramen focus infographic. Conversion startup product management creative advisor marketing business plan mass market stock hypotheses business-to-business virality handshake. Assets ramen user experience infrastructure startup pitch stock burn rate prototype beta sales venture client. Launch party branding creative conversion stock interaction design scrum project lean startup. Stealth crowdsource release accelerator marketing.",
    image: "https://source.unsplash.com/collection/2276562/800x450"
  },
  {
    _id: rdb_uxdesigner5,
    title: "rdb_uxdesigner5",
    subtitle: "I am a UXUI Designer looking for challenges.",
    description: "Return on investment infrastructure supply chain. Angel investor direct mailing responsive web design research & development sales iPhone startup early adopters interaction design. MVP scrum project leverage crowdfunding venture growth hacking holy grail. Termsheet scrum project angel investor leverage supply chain entrepreneur founders mass market customer ecosystem. Technology deployment iPhone value proposition interaction design research & development focus A/B testing virality bootstrapping success. Incubator first mover advantage MVP iteration research & development burn rate crowdsource ramen focus infographic. Conversion startup product management creative advisor marketing business plan mass market stock hypotheses business-to-business virality handshake. Assets ramen user experience infrastructure startup pitch stock burn rate prototype beta sales venture client. Launch party branding creative conversion stock interaction design scrum project lean startup. Stealth crowdsource release accelerator marketing.",
    image: "https://source.unsplash.com/collection/2276562/800x450"
  },
  {
    _id: ms_designer1,
    title: "ms_designer1",
    subtitle: "I am a Graphic Designer from Murcia.",
    description: "Entrepreneur client partnership long tail ecosystem branding. Mass market startup android equity influencer user experience niche market business-to-business monetization. Paradigm shift marketing release customer angel investor vesting period MVP A/B testing sales stealth pitch leverage series A financing. Scrum project crowdfunding client lean startup churn rate channels founders bandwidth branding validation. Holy grail paradigm shift innovator channels social media agile development. Customer holy grail seed round entrepreneur business model canvas gamification android angel investor beta. Business plan A/B testing creative strategy hypotheses. Deployment launch party beta pitch value proposition disruptive social proof leverage user experience. Iteration paradigm shift burn rate interaction design influencer partnership. Value proposition ownership startup founders sales non-disclosure agreement virality burn rate.",
    image: "https://source.unsplash.com/collection/369/800x450"
  },
  {
    _id: ms_designer2,
    title: "ms_designer2",
    subtitle: "I am a Graphic Designer from Murcia.",
    description: "Entrepreneur client partnership long tail ecosystem branding. Mass market startup android equity influencer user experience niche market business-to-business monetization. Paradigm shift marketing release customer angel investor vesting period MVP A/B testing sales stealth pitch leverage series A financing. Scrum project crowdfunding client lean startup churn rate channels founders bandwidth branding validation. Holy grail paradigm shift innovator channels social media agile development. Customer holy grail seed round entrepreneur business model canvas gamification android angel investor beta. Business plan A/B testing creative strategy hypotheses. Deployment launch party beta pitch value proposition disruptive social proof leverage user experience. Iteration paradigm shift burn rate interaction design influencer partnership. Value proposition ownership startup founders sales non-disclosure agreement virality burn rate.",
    image: "https://source.unsplash.com/collection/369/800x450"
  },
  {
    _id: ms_designer3,
    title: "ms_designer3",
    subtitle: "I am a Graphic Designer from Murcia.",
    description: "Entrepreneur client partnership long tail ecosystem branding. Mass market startup android equity influencer user experience niche market business-to-business monetization. Paradigm shift marketing release customer angel investor vesting period MVP A/B testing sales stealth pitch leverage series A financing. Scrum project crowdfunding client lean startup churn rate channels founders bandwidth branding validation. Holy grail paradigm shift innovator channels social media agile development. Customer holy grail seed round entrepreneur business model canvas gamification android angel investor beta. Business plan A/B testing creative strategy hypotheses. Deployment launch party beta pitch value proposition disruptive social proof leverage user experience. Iteration paradigm shift burn rate interaction design influencer partnership. Value proposition ownership startup founders sales non-disclosure agreement virality burn rate.",
    image: "https://source.unsplash.com/collection/369/800x450"
  },
  {
    _id: ms_designer4,
    title: "ms_designer4",
    subtitle: "I am a Graphic Designer from Murcia.",
    description: "Entrepreneur client partnership long tail ecosystem branding. Mass market startup android equity influencer user experience niche market business-to-business monetization. Paradigm shift marketing release customer angel investor vesting period MVP A/B testing sales stealth pitch leverage series A financing. Scrum project crowdfunding client lean startup churn rate channels founders bandwidth branding validation. Holy grail paradigm shift innovator channels social media agile development. Customer holy grail seed round entrepreneur business model canvas gamification android angel investor beta. Business plan A/B testing creative strategy hypotheses. Deployment launch party beta pitch value proposition disruptive social proof leverage user experience. Iteration paradigm shift burn rate interaction design influencer partnership. Value proposition ownership startup founders sales non-disclosure agreement virality burn rate.",
    image: "https://source.unsplash.com/collection/369/800x450"
  },
  {
    _id: ms_designer5,
    title: "ms_designer5",
    subtitle: "I am a Graphic Designer from Murcia.",
    description: "Entrepreneur client partnership long tail ecosystem branding. Mass market startup android equity influencer user experience niche market business-to-business monetization. Paradigm shift marketing release customer angel investor vesting period MVP A/B testing sales stealth pitch leverage series A financing. Scrum project crowdfunding client lean startup churn rate channels founders bandwidth branding validation. Holy grail paradigm shift innovator channels social media agile development. Customer holy grail seed round entrepreneur business model canvas gamification android angel investor beta. Business plan A/B testing creative strategy hypotheses. Deployment launch party beta pitch value proposition disruptive social proof leverage user experience. Iteration paradigm shift burn rate interaction design influencer partnership. Value proposition ownership startup founders sales non-disclosure agreement virality burn rate.",
    image:"https://source.unsplash.com/collection/369/800x450"
  },
  {
    _id: ms_illustrator1,
    title: "ms_illustrator1",
    subtitle: "Best drawings collection.",
    description: "Crowdsource assets seed money funding partner network. Gen-z termsheet seed money crowdsource assets long tail angel investor backing infographic early adopters monetization business-to-business. Scrum project innovator user experience agile development technology traction. Business model canvas gamification alpha marketing accelerator series A financing customer venture. Creative business plan interaction design accelerator buzz long tail bootstrapping A/B testing infrastructure pivot infographic direct mailing holy grail. Holy grail android business model canvas customer prototype venture hackathon crowdsource return on investment beta facebook business-to-business entrepreneur ecosystem. Validation funding bootstrapping lean startup seed money early adopters incubator startup mass market focus beta supply chain seed round holy grail. MVP investor entrepreneur graphical user interface. Paradigm shift product management freemium ecosystem partnership channels social proof. First mover advantage focus alpha.",
    image: "https://source.unsplash.com/collection/1346770/800x450"
  },
  {
    _id: ms_illustrator2,
    title: "ms_illustrator2",
    subtitle: "Best drawings collection.",
    description: "Crowdsource assets seed money funding partner network. Gen-z termsheet seed money crowdsource assets long tail angel investor backing infographic early adopters monetization business-to-business. Scrum project innovator user experience agile development technology traction. Business model canvas gamification alpha marketing accelerator series A financing customer venture. Creative business plan interaction design accelerator buzz long tail bootstrapping A/B testing infrastructure pivot infographic direct mailing holy grail. Holy grail android business model canvas customer prototype venture hackathon crowdsource return on investment beta facebook business-to-business entrepreneur ecosystem. Validation funding bootstrapping lean startup seed money early adopters incubator startup mass market focus beta supply chain seed round holy grail. MVP investor entrepreneur graphical user interface. Paradigm shift product management freemium ecosystem partnership channels social proof. First mover advantage focus alpha.",
    image: "https://source.unsplash.com/collection/1346770/800x450"
  },
  {
    _id: ms_illustrator3,
    title: "ms_illustrator3",
    subtitle: "Best drawings collection.",
    description: "Crowdsource assets seed money funding partner network. Gen-z termsheet seed money crowdsource assets long tail angel investor backing infographic early adopters monetization business-to-business. Scrum project innovator user experience agile development technology traction. Business model canvas gamification alpha marketing accelerator series A financing customer venture. Creative business plan interaction design accelerator buzz long tail bootstrapping A/B testing infrastructure pivot infographic direct mailing holy grail. Holy grail android business model canvas customer prototype venture hackathon crowdsource return on investment beta facebook business-to-business entrepreneur ecosystem. Validation funding bootstrapping lean startup seed money early adopters incubator startup mass market focus beta supply chain seed round holy grail. MVP investor entrepreneur graphical user interface. Paradigm shift product management freemium ecosystem partnership channels social proof. First mover advantage focus alpha.",
    image: "https://source.unsplash.com/collection/1346770/800x450"
  },
  {
    _id: ms_illustrator4,
    title: "ms_illustrator4",
    subtitle: "Best drawings collection.",
    description: "Crowdsource assets seed money funding partner network. Gen-z termsheet seed money crowdsource assets long tail angel investor backing infographic early adopters monetization business-to-business. Scrum project innovator user experience agile development technology traction. Business model canvas gamification alpha marketing accelerator series A financing customer venture. Creative business plan interaction design accelerator buzz long tail bootstrapping A/B testing infrastructure pivot infographic direct mailing holy grail. Holy grail android business model canvas customer prototype venture hackathon crowdsource return on investment beta facebook business-to-business entrepreneur ecosystem. Validation funding bootstrapping lean startup seed money early adopters incubator startup mass market focus beta supply chain seed round holy grail. MVP investor entrepreneur graphical user interface. Paradigm shift product management freemium ecosystem partnership channels social proof. First mover advantage focus alpha.",
    image: "https://source.unsplash.com/collection/1346770/800x450"
  },
  {
    _id: ms_illustrator5,
    title: "ms_illustrator5",
    subtitle: "Best drawings collection.",
    description: "Crowdsource assets seed money funding partner network. Gen-z termsheet seed money crowdsource assets long tail angel investor backing infographic early adopters monetization business-to-business. Scrum project innovator user experience agile development technology traction. Business model canvas gamification alpha marketing accelerator series A financing customer venture. Creative business plan interaction design accelerator buzz long tail bootstrapping A/B testing infrastructure pivot infographic direct mailing holy grail. Holy grail android business model canvas customer prototype venture hackathon crowdsource return on investment beta facebook business-to-business entrepreneur ecosystem. Validation funding bootstrapping lean startup seed money early adopters incubator startup mass market focus beta supply chain seed round holy grail. MVP investor entrepreneur graphical user interface. Paradigm shift product management freemium ecosystem partnership channels social proof. First mover advantage focus alpha.",
    image: "https://source.unsplash.com/collection/1346770/800x450"
  },
  {
    _id: ms_webdeveloper1,
    title: "ms_webdeveloper1",
    subtitle: "MERN: Javasdript based technologies: Mongo DB, Express JS, React JS/ Redux and Node JS.",
    description: "Release strategy research & development infographic handshake ownership market business-to-consumer incubator angel investor funding. Interaction design channels partner network termsheet conversion analytics A/B testing monetization growth hacking iPad crowdsource return on investment. Partner network assets direct mailing termsheet gen-z startup metrics. Traction burn rate branding crowdfunding facebook client. Business model canvas pivot agile development niche market ramen client analytics monetization growth hacking burn rate innovator focus advisor success. Venture mass market user experience value proposition stock direct mailing market iPad. Series A financing innovator scrum project incubator responsive web design churn rate A/B testing monetization marketing influencer. Hypotheses A/B testing business plan technology startup churn rate creative buyer angel investor infrastructure accelerator. Facebook research & development business model canvas funding entrepreneur incubator crowdfunding ownership gen-z deployment MVP. Business-to-business churn rate partnership ramen stock virality seed round equity.",
    image: "https://source.unsplash.com/collection/1074434/800x450"
  },
  {
    _id: ms_webdeveloper2,
    title: "ms_webdeveloper2",
    subtitle: "MERN: Javasdript based technologies: Mongo DB, Express JS, React JS/ Redux and Node JS.",
    description: "Release strategy research & development infographic handshake ownership market business-to-consumer incubator angel investor funding. Interaction design channels partner network termsheet conversion analytics A/B testing monetization growth hacking iPad crowdsource return on investment. Partner network assets direct mailing termsheet gen-z startup metrics. Traction burn rate branding crowdfunding facebook client. Business model canvas pivot agile development niche market ramen client analytics monetization growth hacking burn rate innovator focus advisor success. Venture mass market user experience value proposition stock direct mailing market iPad. Series A financing innovator scrum project incubator responsive web design churn rate A/B testing monetization marketing influencer. Hypotheses A/B testing business plan technology startup churn rate creative buyer angel investor infrastructure accelerator. Facebook research & development business model canvas funding entrepreneur incubator crowdfunding ownership gen-z deployment MVP. Business-to-business churn rate partnership ramen stock virality seed round equity.",
    image: "https://source.unsplash.com/collection/531563/800x450"
  },
  {
    _id: ms_webdeveloper3,
    title: "ms_webdeveloper3",
    subtitle: "MERN: Javasdript based technologies: Mongo DB, Express JS, React JS/ Redux and Node JS.",
    description: "Release strategy research & development infographic handshake ownership market business-to-consumer incubator angel investor funding. Interaction design channels partner network termsheet conversion analytics A/B testing monetization growth hacking iPad crowdsource return on investment. Partner network assets direct mailing termsheet gen-z startup metrics. Traction burn rate branding crowdfunding facebook client. Business model canvas pivot agile development niche market ramen client analytics monetization growth hacking burn rate innovator focus advisor success. Venture mass market user experience value proposition stock direct mailing market iPad. Series A financing innovator scrum project incubator responsive web design churn rate A/B testing monetization marketing influencer. Hypotheses A/B testing business plan technology startup churn rate creative buyer angel investor infrastructure accelerator. Facebook research & development business model canvas funding entrepreneur incubator crowdfunding ownership gen-z deployment MVP. Business-to-business churn rate partnership ramen stock virality seed round equity.",
    image: "https://source.unsplash.com/collection/162326/800x450",
  },
  {
    _id: ms_webdeveloper4,
    title: "ms_webdeveloper4",
    subtitle: "MERN: Javasdript based technologies: Mongo DB, Express JS, React JS/ Redux and Node JS.",
    description: "Release strategy research & development infographic handshake ownership market business-to-consumer incubator angel investor funding. Interaction design channels partner network termsheet conversion analytics A/B testing monetization growth hacking iPad crowdsource return on investment. Partner network assets direct mailing termsheet gen-z startup metrics. Traction burn rate branding crowdfunding facebook client. Business model canvas pivot agile development niche market ramen client analytics monetization growth hacking burn rate innovator focus advisor success. Venture mass market user experience value proposition stock direct mailing market iPad. Series A financing innovator scrum project incubator responsive web design churn rate A/B testing monetization marketing influencer. Hypotheses A/B testing business plan technology startup churn rate creative buyer angel investor infrastructure accelerator. Facebook research & development business model canvas funding entrepreneur incubator crowdfunding ownership gen-z deployment MVP. Business-to-business churn rate partnership ramen stock virality seed round equity.",
    image: "https://source.unsplash.com/collection/1074434/800x450",
  },
  {
    _id: ms_webdeveloper5,
    title: "ms_webdeveloper5",
    subtitle: "MERN: Javasdript based technologies: Mongo DB, Express JS, React JS/ Redux and Node JS.",
    description: "Release strategy research & development infographic handshake ownership market business-to-consumer incubator angel investor funding. Interaction design channels partner network termsheet conversion analytics A/B testing monetization growth hacking iPad crowdsource return on investment. Partner network assets direct mailing termsheet gen-z startup metrics. Traction burn rate branding crowdfunding facebook client. Business model canvas pivot agile development niche market ramen client analytics monetization growth hacking burn rate innovator focus advisor success. Venture mass market user experience value proposition stock direct mailing market iPad. Series A financing innovator scrum project incubator responsive web design churn rate A/B testing monetization marketing influencer. Hypotheses A/B testing business plan technology startup churn rate creative buyer angel investor infrastructure accelerator. Facebook research & development business model canvas funding entrepreneur incubator crowdfunding ownership gen-z deployment MVP. Business-to-business churn rate partnership ramen stock virality seed round equity.",
    image: "https://source.unsplash.com/collection/1198107/800x450"
  },
  {
    _id: fc_writer1,
    title: "fc_writer1",
    subtitle: "A collection for my best posts on Medium",
    description: "IPhone ecosystem monetization market seed round deployment release.",
    image: "https://source.unsplash.com/collection/8469893/800x450"
  },
  {
    _id: fc_writer2,
    title: "fc_writer2",
    subtitle: "A collection for my best posts on Medium",
    description: "Hackathon accelerator deployment founders.",
    image: "https://source.unsplash.com/collection/209138/800x450"
  },
  {
    _id: fc_writer3,
    title: "fc_writer3",
    subtitle: "A collection for my best posts on Medium",
    description: "Direct mailing android strategy network effects value proposition.",
    image: "https://source.unsplash.com/collection/420324/800x450"
  },
  {
    _id: fc_writer4,
    title: "fc_writer4",
    subtitle: "A collection for my best posts on Medium",
    description: "Incubator founders investor traction gen-z.",
    image: "https://source.unsplash.com/collection/923267/800x450"
  },
  {
    _id: fc_writer5,
    title: "fc_writer5",
    subtitle: "A collection for my best posts on Medium",
    description: "Interaction design hackathon conversion.",
    image: "https://source.unsplash.com/collection/1911873/800x450"
  },
  {
    _id: fc_trendhunter1,
    title: "fc_trendhunter1",
    subtitle: "Focusing on Research and Trends",
    description: "Rockstar crowdsource MVP seed money conversion.",
    image: "https://source.unsplash.com/collection/429524/800x450"
  },
  {
    _id: fc_trendhunter2,
    title: "fc_trendhunter2",
    subtitle: "Focusing on Research and Trends",
    description: "Seed money conversion.",
    image: "https://source.unsplash.com/collection/852718/800x450"
  },
  {
    _id: fc_trendhunter3,
    title: "fc_trendhunter3",
    subtitle: "Focusing on Research and Trends",
    subtitle: "Advantage validation supply chain rockstar.",
    image: "https://source.unsplash.com/collection/1976082/800x450"
  },
  {
    _id: fc_trendhunter4,
    title: "fc_trendhunter4",
    subtitle: "Focusing on Research and Trends",
    description: "Buyer termsheet first mover advantage validation supply chain rockstar crowdsource MVP.",
    image: "https://source.unsplash.com/collection/1597792/800x450"
  },
  {
    _id: fc_trendhunter5,
    title: "fc_trendhunter5",
    subtitle: "Focusing on Research and Trends",
    description: "Incubator stealth client business-to-consumer bandwidth niche market user experience.",
    image: "https://source.unsplash.com/collection/1223439/800x450"
  },
  {
    _id: fc_animator1,
    title: "fc_animator1",
    subtitle: "Best Display Ads compilation",
    description: "Network effects paradigm shift virality validation startup accelerator.",
    image: "https://source.unsplash.com/collection/429524/800x450"
  },
  {
    _id: fc_animator2,
    title: "fc_animator2",
    subtitle: "Best Display Ads compilation",
    description: "Stealth backing low hanging fruit scrum project infographic alpha network effects.",
    image: "https://source.unsplash.com/collection/1111575/800x450"
  },
  {
    _id: fc_animator3,
    title: "fc_animator3",
    subtitle: "Best Display Ads compilation",
    description: "Churn rate iPad deployment network effects lean startup termsheet analytics buyer.",
    image: "https://source.unsplash.com/collection/1074434/800x450"
  },
  {
    _id: fc_animator4,
    title: "fc_animator4",
    subtitle: "Best Display Ads compilation",
    description: "Twitter bandwidth iteration.",
    image: "https://source.unsplash.com/collection/1346770/800x450"
  },
  {
    _id: fc_animator5,
    title: "fc_animator5",
    subtitle: "Best Display Ads compilation",
    description: "Startup iteration vesting period traction. Network effects paradigm shift virality validation startup access.",
    image: "https://source.unsplash.com/collection/369/800x450"
  },
  {
    _id: fc_photographer1,
    title: "fc_photographer1",
    subtitle: "What do I do with a cam?",
    description: "Responsive web design paradigm shift ramen angel investor success.",
    image: "https://source.unsplash.com/collection/1597792/1200x675"
  },
  {
    _id: fc_photographer2,
    title: "fc_photographer2",
    subtitle: "What do I do with a cam?",
    description: "Return on investment responsive web design paradigm shift ramen angel investor success.",
    image: "https://source.unsplash.com/collection/2276562/1200x675"
  },
  {
    _id: fc_photographer3,
    title: "fc_photographer3",
    subtitle: "What do I do with a cam?",
    description: "accelerator return on investment responsive web design paradigm shift ramen angel investor success.",
    image: "https://source.unsplash.com/collection/291422/1200x675"
  },
  {
    _id: fc_photographer4,
    title: "fc_photographer4",
    subtitle: "What do I do with a cam?",
    subtitle: "Launch party startup social proof deployment crowdfunding fruit.",
    image: "https://source.unsplash.com/collection/162213/1200x675"
  },
  {
    _id: fc_photographer5,
    title: "fc_photographer5",
    subtitle: "What do I do with a cam?",
    description: "Buyer partnership series A financing iteration business-to-consumer ",
    image: "https://source.unsplash.com/collection/827743/1200x675"
  },
  {
    _id: fc_uxdesigner1,
    title: "fc_uxdesigner1",
    subtitle: "Best UX Designer Projects",
    subtitle: "Seed round focus user experience handshake first mover ",
    image: "https://source.unsplash.com/collection/1976082/800x450"
  },
  {
    _id: fc_uxdesigner2,
    title: "fc_uxdesigner2",
    subtitle: "Best UX Designer Projects",
    description: "Beta entrepreneur social media bootstrapping buyer responsive web design monetization business-to-business. ",
    image: "https://source.unsplash.com/collection/3582397/800x450"
  },
  {
    _id: fc_uxdesigner3,
    title: "fc_uxdesigner3",
    subtitle: "Best UX Designer Projects",
    description: "product management success churn rate freemium release gen-z. Beta entrepreneur social ",
    image: "https://source.unsplash.com/collection/1901880/800x450"
  },
  {
    _id: fc_uxdesigner4,
    title: "fc_uxdesigner4",
    subtitle: "Best UX Designer Projects",
    description: "Deployment freemium creative A/B testing niche market social media venture marketing early adopters conversion.",
    image: "https://source.unsplash.com/collection/1198107/800x450"
  },
  {
    _id: fc_uxdesigner5,
    title: "fc_uxdesigner5",
    subtitle: "Best UX Designer Projects",
    description: "creative influencer angel investor venture pivot scrum project",
    image: "https://source.unsplash.com/collection/209138/800x450"
  }                                                                                     
]


/*In a not too distant future I will add the following
let menu = []
let layouts = []
let movements = []
let transitions = [] 
*/

// Heroku -> MONGODB_URL   -> .connect(`${process.env.MONGODB_URL}`, 
// Local -> MONGODB_LOCAL  -> .connect(`${process.env.MONGODB_LOCAL}`, 

//DataBase Connection for the three Collections
mongoose
    .connect(`${process.env.MONGODB_URL}`, {  // With Local  
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });


//Users
User.deleteMany()
  .then(() => {
    return User.create(users);
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });


//Portfolios
Portfolio.deleteMany()
  .then(() => {
    return Portfolio.create(portfolios);
  })
  .then(portfoliosCreated => {
    console.log(`${portfoliosCreated.length} portfolios created with the following id:`);
    console.log(portfoliosCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });


//Works
Work.deleteMany()
.then(() => {
  return Work.create(works);
})
.then(worksCreated => {
  console.log(`${worksCreated.length} works created with the following id:`);
  console.log(worksCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect();
})
.catch(err => {
  mongoose.disconnect();
  throw err;
});