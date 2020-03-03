
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

//Relating works to Portfolios
const _misti_prices      = new mongoose.mongo.ObjectId();
const _misti_mobile      = new mongoose.mongo.ObjectId();
const _misti_uxdesigner  = new mongoose.mongo.ObjectId();
const _kol_display       = new mongoose.mongo.ObjectId();
const _kol_mobile        = new mongoose.mongo.ObjectId();
const _kol_webdesigner   = new mongoose.mongo.ObjectId();
const _rdb_illustrator   = new mongoose.mongo.ObjectId();
const _rdb_uxdesigner    = new mongoose.mongo.ObjectId();
const _ms_designer       = new mongoose.mongo.ObjectId();
const _ms_illustrator    = new mongoose.mongo.ObjectId();
const _ms_webdeveloper   = new mongoose.mongo.ObjectId();
const _fc_writer         = new mongoose.mongo.ObjectId();
const _fc_trendhunter    = new mongoose.mongo.ObjectId();
const _fc_animator       = new mongoose.mongo.ObjectId();
const _fc_photographer   = new mongoose.mongo.ObjectId();
const _fc_uxdesigner     = new mongoose.mongo.ObjectId();



let users =  
[{
    username: "fernandocomet",
    password: bcrypt.hashSync("fernandocomet", bcrypt.genSaltSync(bcryptSalt)),
    avatarUrl: "images/fernandocomet.jpg",
    portfolios: [fc_uxdesigner, fc_photographer, fc_animator, fc_trendhunter, fc_writer],
    sociallinks: ["https://www.linkedin.com/in/fernandocomet/", "https://github.com/fernandocomet", "https://medium.com/@fernandocomet", "https://www.fernandocomet.com/", "https://www.instagram.com/fernandocomet/", "https://twitter.com/fernandocomet"],
    jobtitle: "UX Engineer",
    about: "UX Engineer, hybrid profile between front-end development and UX design focused on research, interaction, wireframes, prototyping, user flows, development, performance, test, usability and overall experience of the application works for the end-user."
  },
  {
    username: "mariasimo",
    password: bcrypt.hashSync("mariasimo", bcrypt.genSaltSync(bcryptSalt)),
    avatarUrl: "images/mariasimo.jpg",
    portfolios: [ms_webdeveloper, ms_illustrator, ms_designer],
    sociallinks: ["https://www.linkedin.com/in/maria-simo/", "https://www.domestika.org/es/maria_simo/portfolio", "https://www.behance.net/coponstudio", "https://www.saatchiart.com/mariasimo", "https://github.com/mariasimo"],
    jobtitle: "Front End Developer + Graphic Designer | Teacher Assistant at Ironhack",
    about: "As a child, I was curious, creative and I loved to learn. I painted in an workshop since I was six. I remember that, when I have to choose a career, I felt sorry for all the other options that I would miss. Finishing my arts degree made me understand a couple of things: that creativity can't be enclosed in a field, and that we are our most creative self when we are faced to solve a problem. That lead me to graphic & digital design and from there to web development, where my passion about languages, technology and creativity is more fulfilled than ever. As an adult, I want to stay curious, creative, always learning."
  },
  {
    username: "ruthdeblas",
    password: bcrypt.hashSync("ruthdeblas", bcrypt.genSaltSync(bcryptSalt)),
    avatarUrl: "images/ruthdeblas.jpg",
    portfolios: [rdb_uxdesigner, rdb_illustrator],
    sociallinks: ["https://www.linkedin.com/in/ruthdeblas/", "https://twitter.com/ruthdeblas", "https://www.pinterest.es/cabagalle/", "https://www.instagram.com/ruth.deblas/", "https://issuu.com/ruthdeblasalvarez/docs/portfolio_issu"],
    jobtitle: "UX/UI Designer and Graphic Designer",
    about: "I am a creative multidisciplinary UX / UI designer and Graphic designer. I am an enterprising person, who loves challenges and does not give up easily. Very detailed and self-taught every day, I never stop learning. My main goal is to develop professionally and evolve, so I look for opportunities that allow me to do so." 
  },
  {
    username: "kolision",
    password: bcrypt.hashSync("kolision", bcrypt.genSaltSync(bcryptSalt)),
    avatarUrl: "images/kolision.jpg",
    portfolios: [kol_webdesigner, kol_mobile, kol_display],
    sociallinks: ["https://kolision.com/", "https://www.instagram.com/gabrielk.o/", "https://twitter.com/gabrielcreative"],
    jobtitle: "Founder en KOLISION",
    about: "Love to do: Think, Graphic Design, UX/UI Design, Events, Richmedia Banners, Illustration And Photography."
  },
  {
    username: "misti",
    password: bcrypt.hashSync("misti", bcrypt.genSaltSync(bcryptSalt)),
    avatarUrl: "images/misti.jpg",
    portfolios: [misti_uxdesigner, misti_mobile, misti_prices],
    sociallinks: ["http://www.misti.info/", "https://www.linkedin.com/in/m-angeles-peinado-hilinger/", "https://twitter.com/misti_ph", "https://github.com/mist-mist"],
    jobtitle: "UX Engineer & Creative Technologist",
    about: "Hi I’m Misti, I am a Creative Technology Lead specialized in the execution of innovative digital experiential solutions for different clients. My professional profile is a hybrid between front-end development and UX design. My technical skills provide me with an extensive interaction, usability and accessibility experience. I possess strong skills in team management and project planning; I’m used to managing simultaneous projects and tight deadlines. Open-minded and sociable, I’m always able to collaborate with other departments to achieve the best results.."
  }
];



let portfolios = 
[{
    _id: fc_uxdesigner,
    alias: fc_uxdesigner,
    title: "UX Designer",
    subtitle: "Several freelance projects in the area of UX Design",
    works: [_fc_uxdesigner]
  },
  {
    _id: fc_photographer,
    alias: fc_photographer,
    title: "Photographer",
    subtitle: "A collection of my best works, some of them awarded",
    works: [_fc_uxdesigner, _fc_photographer, _fc_animator, _fc_trendhunter, _fc_writer]
  },
  {
    _id: fc_animator,
    alias: fc_animator,
    title: "Animator",
    subtitle: "Some of my best works in Display Advertising, using animation libraries as gsap, velocity, pixie or 5pjs. Showing advanced effects with text, svg filters, etc.",
    works: [_fc_animator, _fc_trendhunter, _fc_writer]
  },
  {
    _id: fc_trendhunter,
    alias: fc_trendhunter,
    title: "Trendhunter",
    subtitle: "Some of my best works in Display Advertising, using animation libraries as gsap, velocity, pixie or 5pjs. Showing advanced effects with text, svg filters, etc.",
    works: [_fc_trendhunter, _fc_writer]
  },
  {
    _id: fc_writer,
    alias: fc_writer,
    title: "Writer",
    subtitle: "Some of my best posts on Medium.",
    works: [_fc_uxdesigner, _fc_photographer, _fc_animator, _fc_trendhunter]
  },
  {
    _id: ms_webdeveloper,
    alias: ms_webdeveloper,
    title: "Web Developer",
    subtitle: "I just walked down the street on a rainy day, and told to myself: Code is poetry.",
    works: [_ms_webdeveloper, _ms_illustrator, _ms_designer]
  },
  {
    _id: ms_illustrator,
    alias: ms_illustrator,
    title: "Illustration",
    subtitle: "Here my little drawings, some made freehand, others in acrylic, watercolor and oil. In them I represent the subrealism of the Murcian afternoon also know as `tardeo`.",
    works: [_ms_webdeveloper, _ms_illustrator]
  },
  {
    _id: ms_designer,
    alias: ms_designer,
    title: "Designer",
    subtitle: "Branding works for best projects.",
    works: [_ms_illustrator, _ms_designer]
  },
  {
    _id: rdb_uxdesigner,
    alias: rdb_uxdesigner,
    title: "UX Designer",
    subtitle: "Sketch - Design Thinking - Invision - Photoshop - Illustrator - Indesign.",
    works: [_rdb_uxdesigner, _rdb_illustrator]
  },
  {
    _id: rdb_illustrator,
    alias: rdb_illustrator,
    title: "Illustrator",
    subtitle: "My best drawings.",
    works: [_rdb_uxdesigner, _rdb_illustrator]
  },
  {
    _id: kol_webdesigner,
    alias: kol_webdesigner,
    title: "Web Designer",
    subtitle: "Development of Digital Experiences, Creativity, Design & Production. Brand of the Digital Designer Gabriel Guerrero.",
    works: [_kol_webdesigner, _kol_mobile, _kol_display]
  },
  {
    _id: kol_mobile,
    alias: kol_mobile,
    title: "Mobile",
    subtitle: "Showing my best works in UI for Apps.",
    works: [_kol_mobile, _kol_display]
  },
  {
    _id: kol_display,
    alias: kol_display,
    title: "Display",
    subtitle: "My best works for the Display Advertising Ad industry, featuring Rich Media projects, DCO and advanced banners.",
    works: [_kol_webdesigner, _kol_mobile]
  },
  {
    _id: misti_uxdesigner,
    alias: misti_uxdesigner,
    title: "UX Designer",
    subtitle: "Research, Wireframing and prototyping focusing on the User Experience.",
    works: [_misti_uxdesigner, _misti_mobile, _misti_prices]
  },
  {
    _id: misti_mobile,
    alias: misti_mobile,
    title: "Mobile Projects",
    subtitle: "A compilation of works for Apps and Responsive sites.",
    works: [_misti_uxdesigner, _misti_mobile]
  }, 
  {
    _id: misti_prices,
    alias: misti_prices,
    title: "Awards & Prices",
    subtitle: "Some of my best works awarded as a Creative Technologist.",
    works: [_misti_mobile, _misti_prices]
  }                                              
];



let works = [
  {
    _id: _misti_prices,
    title: "Awards & Prices",
    subtitle: "Some of my best works awarded as a Creative Technologist.",
    description: "Entrepreneur interaction design churn rate validation niche market advisor long tail pivot value proposition iPad. Sales iteration buyer seed money venture low hanging fruit non-disclosure agreement deployment business model canvas pivot business plan strategy network effects first mover advantage. Monetization business plan sales analytics infographic business-to-consumer virality release supply chain. IPad series A financing startup early adopters business model canvas android stock. Monetization gamification assets lean startup. MVP hypotheses direct mailing virality holy grail partnership influencer gen-z long tail supply chain validation agile development success strategy. Startup product management lean startup responsive web design interaction design growth hacking success advisor niche market validation paradigm shift venture founders user experience. Ecosystem gen-z return on investment venture social media assets android iPad advisor analytics. Beta ecosystem stock growth hacking non-disclosure agreement advisor. Vesting period prototype business model canvas release monetization value proposition twitter social proof conversion equity analytics infographic ramen.",
    img1: "work1img1.png",
    img2: "work1img2.png",
    img3: "work1img3.png",
    img4: "work1img4.png",
    img5: "work1img5.png"
  },
  {
    _id: _misti_mobile,
    title: "Mobile Apps and Responsive webs",
    subtitle: "A bunch of my best works for Apps in the last three years.",
    description: "WorAccelerator disruptive ecosystem marketing gen-z. Incubator termsheet alpha metrics product management iPhone leverage buyer value proposition venture paradigm shift focus prototype. Infrastructure hackathon learning curve mass market sales buzz twitter bootstrapping investor backing launch party focus branding. Value proposition network effects beta monetization lean startup technology interaction design holy grail product management growth hacking innovator branding. Ramen founders stock mass market partner network sales. Focus gamification long tail creative series A financing funding ramen network effects facebook hackathon social media MVP first mover advantage. Return on investment pivot gen-z focus paradigm shift influencer backing facebook ownership crowdsource supply chain first mover advantage user experience interaction design. Supply chain bootstrapping lean startup. Termsheet holy grail churn rate influencer growth hacking. Interaction design success advisor seed money first mover advantage stock deployment business plan angel investor customer analytics hypotheses.",
    img1: "work2img1.png",
    img2: "work2img2.png",
    img3: "work2img3.png",
    img4: "work2img4.png",
    img5: "work2img5.png"
  },
  {
    _id: _misti_uxdesigner,
    title: "UX Engineer, hybrid between UX Designer and Design Technologist",
    subtitle: "A Digital Unicorn always wants to learn.",
    subtitle: "Funding responsive web design assets. Virality termsheet niche market business model canvas iPad non-disclosure agreement buzz low hanging fruit sales leverage creative gamification partnership buyer. Agile development pitch termsheet backing business-to-business leverage angel investor iPhone. Equity business-to-business growth hacking disruptive virality channels iPad marketing entrepreneur pivot freemium. IPad accelerator entrepreneur gen-z startup creative business-to-business alpha customer. Assets startup partnership rockstar prototype responsive web design innovator iteration incubator social media user experience first mover advantage. Pitch product management MVP paradigm shift business-to-business crowdfunding validation stock ecosystem funding interaction design lean startup business plan. Early adopters partnership business-to-business niche market ramen gamification iPad. Value proposition iPad partnership market lean startup stock sales product management business-to-business iteration crowdfunding. Business plan research & development bandwidth.",
    img1: "work3img1.png",
    img2: "work3img2.png",
    img3: "work3img3.png",
    img4: "work3img4.png",
    img5: "work3img5.png"
  },
  {
    _id: _kol_display,
    title: "Kolision Display Ads",
    subtitle: "Working with Procter&Gamble, Lexus, eCommerce, etc.",
    subtitle: "Non-disclosure agreement early adopters freemium lean startup bootstrapping disruptive buyer beta deployment equity conversion. Partnership marketing accelerator backing ramen termsheet stock social proof venture partner network hypotheses startup validation. Churn rate long tail pivot disruptive handshake startup business-to-consumer leverage. Value proposition twitter assets investor mass market business-to-consumer lean startup business-to-business interaction design series A financing early adopters. Launch party infrastructure disruptive leverage churn rate pitch partnership. Alpha bootstrapping business-to-consumer crowdsource long tail android scrum project ramen accelerator buyer sales lean startup virality niche market. Founders user experience value proposition supply chain social media bandwidth backing low hanging fruit market business-to-consumer infrastructure graphical user interface launch party traction. Focus pivot beta freemium creative stock. Seed money disruptive interaction design series A financing investor A/B testing assets sales entrepreneur ramen graphical user interface paradigm shift. Long tail market business plan android.",
    img1: "work4img1.png",
    img2: "work4img2.png",
    img3: "work4img3.png",
    img4: "work4img4.png",
    img5: "work4img5.png"
  },
  {
    _id: _kol_mobile,
    title: "Kolision Mobile works",
    subtitle: "A collection for UI App Design made of best works of last two years",
    subtitle: "Accelerator partnership investor crowdfunding venture validation traction facebook return on investment MVP bandwidth. Freemium buzz sales infrastructure value proposition pitch monetization holy grail paradigm shift business-to-consumer churn rate low hanging fruit. Leverage business model canvas early adopters product management. Bootstrapping seed round alpha analytics assets graphical user interface. Gamification assets value proposition traction ownership pitch social media. Hypotheses channels ownership twitter accelerator infrastructure rockstar. Alpha equity termsheet supply chain twitter seed money. Niche market conversion ownership funding holy grail low hanging fruit. Launch party ramen hackathon entrepreneur startup. IPhone churn rate value proposition focus niche market first mover advantage.",
    img1: "work5img1.png",
    img2: "work5img2.png",
    img3: "work5img3.png",
    img4: "work5img4.png",
    img5: "work5img5.png"
  },
  {
    _id: _kol_webdesigner,
    title: "Kolision Web Designer",
    subtitle: "Web Design Work",
    subtitle: "Iteration hackathon burn rate partner network pitch crowdfunding entrepreneur client backing strategy crowdsource. A/B testing focus strategy client crowdsource scrum project learning curve research & development pitch partner network launch party social proof bandwidth. Client gamification bandwidth startup launch party partner network entrepreneur analytics paradigm shift MVP backing responsive web design business-to-business. Long tail iPad graphical user interface. Responsive web design user experience launch party crowdsource creative facebook social media buyer. Accelerator business-to-consumer bootstrapping success business-to-business iPhone seed money deployment launch party handshake. Strategy return on investment handshake. Analytics creative rockstar incubator twitter metrics innovator buyer business model canvas termsheet. Advisor stealth incubator hypotheses customer client return on investment influencer business-to-business ownership. Release hypotheses iPad leverage business-to-consumer funding buyer influencer.",
    img1: "work6img1.png",
    img2: "work6img2.png",
    img3: "work6img3.png",
    img4: "work6img4.png",
    img5: "work6img5.png"
  },
  {
    _id: _rdb_illustrator,
    title: "Illustration",
    subtitle: "Illustration works",
    subtitle: "Iteration A/B testing product management android focus buzz non-disclosure agreement metrics buyer crowdfunding success strategy. Disruptive metrics agile development first mover advantage ecosystem iPad lean startup bandwidth iteration. Branding lean startup innovator business-to-consumer client analytics buzz founders focus burn rate. Virality incubator ramen social proof low hanging fruit business-to-business alpha strategy. Hackathon seed round partner network gamification channels equity paradigm shift buyer influencer. Graphical user interface prototype sales validation accelerator direct mailing agile development niche market scrum project seed round. Ownership return on investment infrastructure business-to-consumer. Bandwidth success marketing product management ecosystem buyer iPad niche market crowdfunding research & development pivot network effects. Ecosystem non-disclosure agreement backing partnership client founders buyer infographic. Social proof advisor seed money business plan value proposition launch party technology termsheet business model canvas leverage buzz.",
    img1: "work7img1.png",
    img2: "work7img2.png",
    img3: "work7img3.png",
    img4: "work7img4.png",
    img5: "work7img5.png"
  },
  {
    _id: _rdb_uxdesigner,
    title: "UX Designer",
    subtitle: "I am a UXUI Designer looking for challenges.",
    subtitle: "Return on investment infrastructure supply chain. Angel investor direct mailing responsive web design research & development sales iPhone startup early adopters interaction design. MVP scrum project leverage crowdfunding venture growth hacking holy grail. Termsheet scrum project angel investor leverage supply chain entrepreneur founders mass market customer ecosystem. Technology deployment iPhone value proposition interaction design research & development focus A/B testing virality bootstrapping success. Incubator first mover advantage MVP iteration research & development burn rate crowdsource ramen focus infographic. Conversion startup product management creative advisor marketing business plan mass market stock hypotheses business-to-business virality handshake. Assets ramen user experience infrastructure startup pitch stock burn rate prototype beta sales venture client. Launch party branding creative conversion stock interaction design scrum project lean startup. Stealth crowdsource release accelerator marketing.",
    img1: "work8img1.png",
    img2: "work8img2.png",
    img3: "work8img3.png",
    img4: "work8img4.png",
    img5: "work8img5.png"
  },
  {
    _id: _ms_designer,
    title: "Designer",
    subtitle: "I am a Graphic Designer from Murcia.",
    subtitle: "Entrepreneur client partnership long tail ecosystem branding. Mass market startup android equity influencer user experience niche market business-to-business monetization. Paradigm shift marketing release customer angel investor vesting period MVP A/B testing sales stealth pitch leverage series A financing. Scrum project crowdfunding client lean startup churn rate channels founders bandwidth branding validation. Holy grail paradigm shift innovator channels social media agile development. Customer holy grail seed round entrepreneur business model canvas gamification android angel investor beta. Business plan A/B testing creative strategy hypotheses. Deployment launch party beta pitch value proposition disruptive social proof leverage user experience. Iteration paradigm shift burn rate interaction design influencer partnership. Value proposition ownership startup founders sales non-disclosure agreement virality burn rate.",
    img1: "work9img1.png",
    img2: "work9img2.png",
    img3: "work9img3.png",
    img4: "work9img4.png",
    img5: "work9img5.png"
  },
  {
    _id: _ms_illustrator,
    title: "Illustrator and Cartoonist",
    subtitle: "Best drawings collection.",
    subtitle: "Crowdsource assets seed money funding partner network. Gen-z termsheet seed money crowdsource assets long tail angel investor backing infographic early adopters monetization business-to-business. Scrum project innovator user experience agile development technology traction. Business model canvas gamification alpha marketing accelerator series A financing customer venture. Creative business plan interaction design accelerator buzz long tail bootstrapping A/B testing infrastructure pivot infographic direct mailing holy grail. Holy grail android business model canvas customer prototype venture hackathon crowdsource return on investment beta facebook business-to-business entrepreneur ecosystem. Validation funding bootstrapping lean startup seed money early adopters incubator startup mass market focus beta supply chain seed round holy grail. MVP investor entrepreneur graphical user interface. Paradigm shift product management freemium ecosystem partnership channels social proof. First mover advantage focus alpha.",
    img1: "work10img1.png",
    img2: "work10img2.png",
    img3: "work10img3.png",
    img4: "work10img4.png",
    img5: "work10img5.png"
  },
  {
    _id: _ms_webdeveloper,
    title: "Full Stack Web Developer",
    subtitle: "MERN: Javasdript based technologies: Mongo DB, Express JS, React JS/ Redux and Node JS.",
    subtitle: "Release strategy research & development infographic handshake ownership market business-to-consumer incubator angel investor funding. Interaction design channels partner network termsheet conversion analytics A/B testing monetization growth hacking iPad crowdsource return on investment. Partner network assets direct mailing termsheet gen-z startup metrics. Traction burn rate branding crowdfunding facebook client. Business model canvas pivot agile development niche market ramen client analytics monetization growth hacking burn rate innovator focus advisor success. Venture mass market user experience value proposition stock direct mailing market iPad. Series A financing innovator scrum project incubator responsive web design churn rate A/B testing monetization marketing influencer. Hypotheses A/B testing business plan technology startup churn rate creative buyer angel investor infrastructure accelerator. Facebook research & development business model canvas funding entrepreneur incubator crowdfunding ownership gen-z deployment MVP. Business-to-business churn rate partnership ramen stock virality seed round equity.",
    img1: "work11img1.png",
    img2: "work11img2.png",
    img3: "work11img3.png",
    img4: "work11img4.png",
    img5: "work11img5.png"
  },
  {
    _id: _fc_writer,
    title: "Writer and Blogger",
    subtitle: "A collection for my best posts on Medium",
    subtitle: "Interaction design hackathon conversion. Incubator founders investor traction gen-z direct mailing android strategy network effects value proposition. Hackathon accelerator deployment founders. IPhone ecosystem monetization market seed round deployment release. Partner network freemium long tail social proof termsheet early adopters user experience. Advisor prototype success A/B testing market non-disclosure agreement buzz infrastructure incubator funding buyer freemium venture. Infographic advisor analytics buzz research & development influencer entrepreneur crowdsource graphical user interface gamification deployment MVP stealth paradigm shift. Scrum project assets release beta market MVP. Gen-z success graphical user interface bootstrapping assets partnership bandwidth handshake business-to-consumer equity. Investor first mover advantage direct mailing A/B testing launch party funding influencer hackathon client beta virality market stealth long tail.",
    img1: "work12img1.png",
    img2: "work12img2.png",
    img3: "work12img3.png",
    img4: "work12img4.png",
    img5: "work12img5.png"
  },
  {
    _id: _fc_trendhunter,
    title: "Trendhunter",
    subtitle: "Focusing on Research and Trends",
    subtitle: "Incubator stealth client business-to-consumer bandwidth niche market user experience. Buyer termsheet first mover advantage validation supply chain rockstar crowdsource MVP seed money conversion. Funding buyer user experience angel investor long tail handshake. Value proposition sales metrics. Launch party business model canvas conversion. Direct mailing founders termsheet niche market value proposition startup entrepreneur iPad ownership focus analytics holy grail. Gamification leverage learning curve success series A financing stock funding graphical user interface holy grail strategy pitch monetization agile development. Learning curve agile development paradigm shift prototype creative churn rate. Backing prototype niche market agile development hypotheses. Virality scrum project conversion funding startup social proof success termsheet sales.",
    img1: "work13img1.png",
    img2: "work13img2.png",
    img3: "work13img3.png",
    img4: "work13img4.png",
    img5: "work13img5.png"
  },
  {
    _id: _fc_animator,
    title: "Animator",
    subtitle: "Best Display Ads compilation",
    subtitle: "Twitter bandwidth iteration. Churn rate iPad deployment network effects lean startup termsheet analytics buyer. Mass market low hanging fruit buyer A/B testing startup iteration vesting period traction. Network effects paradigm shift virality validation startup accelerator. Stealth backing low hanging fruit scrum project infographic alpha network effects handshake buzz founders startup. Technology handshake burn rate twitter value proposition disruptive facebook seed money accelerator iPhone innovator. Traction long tail investor mass market business model canvas lean startup venture product management alpha launch party direct mailing responsive web design. Crowdfunding deployment iPhone mass market twitter traction influencer partnership direct mailing business model canvas leverage. Entrepreneur vesting period facebook disruptive business model canvas. Startup vesting period release.",
    img1: "work14img1.png",
    img2: "work14img2.png",
    img3: "work14img3.png",
    img4: "work14img4.png",
    img5: "work14img5.png"
  },
  {
    _id: _fc_photographer,
    title: "Photographer",
    subtitle: "What do I do with a cam?",
    subtitle: "Partnership agile development gen-z release android partner network accelerator return on investment responsive web design paradigm shift ramen angel investor success. Buyer partnership series A financing iteration business-to-consumer technology product management assets channels. Launch party startup social proof deployment crowdfunding MVP low hanging fruit. Creative pitch deployment rockstar traction research & development accelerator monetization burn rate churn rate entrepreneur conversion. Seed money stealth business plan validation iPhone marketing. Entrepreneur android backing twitter burn rate paradigm shift release. Iteration direct mailing responsive web design research & development return on investment scrum project graphical user interface funding channels metrics churn rate business-to-consumer burn rate. Low hanging fruit business plan venture business-to-consumer partnership metrics android bootstrapping incubator beta startup interaction design research & development. Handshake graphical user interface social proof interaction design investor buyer partner network network effects research & development. Launch party buyer success hackathon equity niche market marketing validation customer focus strategy.",
    img1: "work15img1.png",
    img2: "work15img2.png",
    img3: "work15img3.png",
    img4: "work15img4.png",
    img5: "work15img5.png"
  },
  {
    _id: _fc_uxdesigner,
    title: "UX Designer",
    subtitle: "Best UX Designer Projects",
    subtitle: "Seed round focus user experience handshake first mover advantage product management success churn rate freemium release gen-z. Beta entrepreneur social media bootstrapping buyer responsive web design monetization business-to-business. Deployment freemium creative A/B testing niche market social media venture marketing early adopters conversion iPad burn rate. Handshake market facebook virality success stealth marketing android. Equity venture scrum project innovator. Burn rate influencer gamification non-disclosure agreement learning curve agile development business-to-consumer deployment hackathon metrics. Focus technology client mass market creative influencer angel investor venture pivot scrum project. Leverage agile development stealth A/B testing user experience. Accelerator client backing vesting period long tail seed money iPad series A financing iteration gen-z A/B testing network effects sales agile development. Market network effects partnership buyer seed money business-to-consumer leverage research & development.",
    img1: "work16img1.png",
    img2: "work16img2.png",
    img3: "work16img3.png",
    img4: "work16img4.png",
    img5: "work16img5.png"
  }                                                                             
]


/*In a not too distant future I will add the following
let menu = []
let layouts = []
let movements = []
let transitions = [] 
*/



mongoose
  .connect(`${process.env.MONGODB_LOCAL}`, {
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