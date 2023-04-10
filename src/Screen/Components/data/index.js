import { UrlImage } from "../../../Utils/UrlImage";

// selection 
export let TheSelection = [
    {
        _id: 0,
        name: 'Hur kan vi hjälpa dig ?'
    },
    {
        _id: 1,
        name: 'Sökmotoroptimering (SEO)'
    },
    {
        _id: 2,
        name: 'Webbdesign'
    },
    {
        _id: 3,
        name: 'E-handel'
    },
    {
        _id: 4,
        name: 'Social Media Marketing'
    },
    {
        _id: 5,
        name: ' Webb & Mobil app'
    }, {
        _id: 6,
        name: 'Annat'
    },
]

// the contact list 
export let ListContact = {
    title: {EN :   `Fyll i dina uppgifter nedan sà hör vi av oss och bokar ett möte`,AR : 'املأ التفاصيل الخاصة بك أدناه حتى نتمكن من الاتصال وحجز اجتماع'},
    des: {EN :`Vi är övertygade om att alla bra samarbeten börjar med ett möte. Orkar du inte vänta kan du alltid ringa oss pà`,AR: 'نحن مقتنعون بأن كل أشكال التعاون الجيد تبدأ بالاجتماع. إذا كنت لا تطيق الانتظار ، يمكنك دائمًا الاتصال بنا على'},
    telephone: '07327463',
    image: UrlImage.TheContact
}

// services...
export let FirstPage = {
    title: 'Hemsida som håller dina kunder inlåsta',
    firstTitle: { EN :'Våra tjänster',  AR : 'خدماتنا'},
    image: UrlImage.thepaper,
    des: {
        EN : `med oss härligaste webbyrå. Vi har sedan starten 2022, hjälpt företag med deras online närvaro och profil. Vi erbjuder tjänster som webbutveckling, grafisk design, SEO, och mycket mer.`,
        AR : 'معنا أجمل وكالة ويب. منذ البداية في عام 2022 ، ساعدنا الشركات في تواجدها على الإنترنت وملفها الشخصي. نحن نقدم خدمات مثل تطوير الويب والتصميم الجرافيكي وتحسين محركات البحث وغير ذلك الكثير'
    }

}

// home slider 
export let data = {

    title: {
        EN: 'Webbyrå som tänjer digitala gränser med javascript.',
        AR: 'وكالة الويب التي تدفع الحدود الرقمية باستخدام جافا سكريبت'
    },


    image: UrlImage.ExtraUi,
    meet: {
        EN: 'Boka möte',
        AR: "حجز اجتماع"

    },
    Services: {
        EN: 'Läs mer om vara tjänster',
        AR: 'اقرأ المزيد عن خدماتنا'
    },
    des: {
        EN: `Med Oss är en app- och webbyrå som hjälper dig designa och utveckla din webbplats, app eller ditt spel. Vi är en heltäckande digital byrå med mycket bred kompetens. Genom kundnära samarbete, agila arbetssätt och fokus på lönsamhet tar vi ditt projekt från idé till färdig produkt.`,
        AR: 'هي وكالة تطبيقات وويب تساعدك على تصميم وتطوير موقعك على الويب أو تطبيقك أو لعبتك. نحن وكالة رقمية شاملة بكفاءات واسعة للغاية. من خلال التعاون الوثيق مع العملاء وأساليب العمل الرشيقة والتركيز على الربحية ، نأخذ مشروعك من الفكرة إلى المنتج النهائي'
    },

}


// services 

export let TheServices = [
    {
        _id: 1,
        title: {
            EN: 'Webbdesign',
            AR: 'تصميم المواقع',
        },
        image: UrlImage.ExtraUi,
        buttom: {
            EN: 'läs mer om Webbdesign',
            AR: 'اقرأ المزيد عن تصميم الويب'
        },
        link: {
            EN: '/web/',
            AR: '/web/ar/'
        },
        des: {
            EN: 'Vi designar funktionella gränssnitt för en estetiskt tilltalande digital närvaro som hjälper till att berätta en historia och öka ditt varumärkesprestanda',
            AR: 'نحن نصمم واجهات وظيفية من أجل حضور رقمي ممتع من الناحية الجمالية يساعد على سرد قصة وزيادة أداء علامتك التجارية',
        }

    },
    {
        _id: 2,
        title: {
            EN: 'Webbutveckling',
            AR: 'تطوير المواقع',
        },
        image: UrlImage.Webbutveckling,
        buttom: {
            EN: 'läs mer om Webbutveckling',
            AR: 'اقرأ المزيد عن تطوير الويب'
        },

        link: {
            EN: '/web/',
            AR: '/web/ar/'
        },
        des: {
            EN: 'Vi tillhandahåller webbplatsutveckling tjänster som ligger i framkant av dagens teknik',
            AR: 'نحن نقدم خدمات تطوير المواقع التي هي في طليعة تكنولوجيا اليوم'

        }

    },
    {
        _id: 3,
        title: {
            EN: 'App Utveckling',
            AR: 'تطوير التطبيقات'
        },
        image: UrlImage.App,
        buttom: { EN: 'läs mer om App Utveckling', AR: 'اقرأ المزيد عن تطوير التطبيقات' },
        link: {
            EN: '/mobilapp/',
            AR: '/mobilapp/ar/',
        },
        des: { EN: 'Skräddarsydda programvara som underlättar era unika affärsproblem', AR: 'برنامج مصمم خصيصًا يسهل مشاكل عملك الفريدة' }

    },
    {
        _id: 4,
        title: { EN: 'Sökmotoroptimering', AR: 'تحسين محرك البحث' },
        image: UrlImage.SEO,
        link: { EN: '/seo/', AR: '/seo/ar/' },
        buttom: { EN: 'läs mer om App Sökmotoroptimering', AR: 'اقرأ المزيد عن تحسين محرك بحث التطبيقات' },
        des:
        {
            EN: 'Med oss erbjuder en SEO-tjänst som driver försäljning, inte bara trafik. Ranka & synas på första sidan i sökresultaten',
            AR : `
            نحن نقدم خدمة تحسين محركات البحث  التي تزيد المبيعات ، وليس مجرد حركة المرور. الترتيب والظهور في الصفحة الأولى من نتائج البحث

            `
        },

    },

    {
        _id: 5,
        title: { EN: 'E-Handel', AR: 'تصميم مواقع التجارة الإلكترونية' },
        image: UrlImage.UI,
        link: {
            EN: '/design/ar',
            AR: '/design/ar',
        },
        buttom: { EN: 'läs mer om App E-Handel', AR: 'اقرأ المزيد عن التجارة الإلكترونية' },
        des: {
            EN: 'Vi skapar en intuitiv UI/UX-design, snabba laddnings hastigheter och mobil kompatibilitet butik som förbättrar konverteringar',
            AR: 'نصنع تصميمًا بديهيًا لواجهة المستخدم  ، وسرعات تحميل سريعة ومتجرًا متوافقًا مع الأجهزة المحمولة يعمل على تحسين التحويلات'
        }

    },
    {
        _id: 6,
        title: { EN: 'E-postmarknadsföring', AR: 'التسويق عبر البريد الإلكتروني' },
        image: UrlImage.Email,
        link: {
            EN: '/e-postmarknadsforing/',
            AR: '/e-postmarknadsforing/ar/',
        },
        buttom: { EN: 'läs mer om App E-postmarknadsföring', AR: 'اقرأ المزيد عن التسويق عبر البريد الإلكتروني للتطبيق' },
        des: {
            EN: 'Med e-post marknadsföringsstrategi leder vi ditt företag till framgång och ökar försäljningens omvandling och avkastningen',
            AR: 'من خلال استراتيجية التسويق عبر البريد الإلكتروني ، نقود عملك إلى النجاح ونزيد من تحويل المبيعات وعائد الاستثمار'
        }
    }

]


// web development 
export let Webdevelopment = [
    {
        _id: 1,
        title: 'Exklusiv Design',
        des: `Designprinciper gör det enkelt att skapa en estetiskt tilltalande och effektiv användarupplevelse (UX) och användargränssnitt (UI). Vårt åtagande är att tillhandahålla högsta kvalitet med den smidigaste möjliga kundupplevelsen.`,
        image: UrlImage.ExtraUi
    },
    {
        _id: 2,
        title: 'Laddningshastighet',
        image: UrlImage.Fast,
        des: `Vi erbjuder en webbplats med hög laddningshastighet eftersom snabbare sidor är effektivare och ger en mycket bättre användarupplevelse.`
    },
    {
        _id: 3,
        title: 'Varumärke Identitet',
        image: UrlImage.Logo,
        des: 'Vi bygger din fascinerande webbplats med en stark varumärkeslogo med vårt teams kraftfulla kommunikations- och design färdigheter.'
    },
    {
        _id: 4,
        title: 'Webbdomän',
        image: UrlImage.domen,
        des: 'Ett domännamn är grunden för ditt företags närvaro på internet, med oss hjälper dig med det.'
    },
    {
        _id: 5,
        title: 'Webbhotell (Hosting)',
        image: UrlImage.Host,
        des: 'På med oss tar vi hand om allt, från att designa och skapa din webbplats till att vara värd för den.'
    },
    {
        _id: 6,
        title: 'Mobilvänlig Hemsida',
        image: UrlImage.response,
        des: 'Vi designar, bygger och testar en mobilvänlig webbplats för att fungera sömlöst på telefoner och surfplattor, oavsett storlek.'
    },
    {
        _id: 7,
        title: ' Skydd & Support',
        image: UrlImage.setting,
        des: 'Med oss erbjuder kontinuerligt support och webbplatsunderhållning.'
    },

    {
        _id: 8,
        title: 'SSL-Certifikat',
        image: UrlImage.Ssl,
        des: 'Kryptering av trafiken mellan webbservern och webbläsaren för att förhindra utomståenden att avlyssna data som skickas eller tas emot '
    }

]

// web development 
export let WebTitle = {
    title: 'Hemsida som håller dina kunder inlåsta',
}


// app development 
export let AppMobile = {
    title: ' Din Framtida Mobil App & Programvara',
    image: UrlImage.App,
    des: `Vårt mål är att underlätta positiv förändring inom ditt företag genom att bygga skräddarsydd programvara som svarar på dina unika affärsproblem.
    Det är alltid en utmaning att hitta en pålitlig partner som hjälper dig att bygga en programvara när du står inför problem som hindrar ditt företags tillväxt och utveckling. Med Oss erbjuder koncept och strategi, design, integration, implementering och support för att uppnå dina affärsmål.
    Vi ställer alla rätta frågor från början av vårt samarbete för att skapa en tydlig färdplan för att uppnå det önskade affärsmålet.
    Vi guidar dig genom hela digitala resan och bygger din egen webbapplikation eller mobilapp enligt dina förväntningar. Vi hjälper dig också att förvandla din webbplats till en mobilapp.
        `
}



export let TheseoTitle = {
    title: 'Mät KPI för SEO och se hur din webbplats presterar',
    image: UrlImage.SEO,
}

// SEO 
export let TheSEOdATA = {
    title: 'Sökmotoroptimering med mätbara resultat',
    image: UrlImage.SEO,
    des: `Sökmotoroptimering, sökoptimering, SEO… Oavsett vilken term som används är målet att få dina sidor att ranka högt i sökresultaten, på sökfraser som är relevanta för dig och de som är intresserade av ditt erbjudande. Vägen dit ser olika ut beroende på dina förutsättningar och önskemål, men med oss får du alla möjligheter att nå fram.Det bästa med SEO är att det ger så stor utdelning i form av mätbara resultat. Om det sköts på rätt sätt kan du nå bättre placeringar och sedan kapitalisera på effekten av det under en lång tid framöver. Vi är konsulter som sätter oss på din sida av bordet, analyserar läget och identifierar åtgärder som kan hjälpa dig att nå bättre resultat med SEO. Har du en fråga eller vill du komma igång med sökmotoroptimering så snart som möjligt? Kontakta oss `

}

export let DesignTitle = {
    title: 'Professionell webbdesign - Skapa en minnesvärd kundupplevelse',
    image: UrlImage.thepaper,
    des: 'Vi arbetar dag som natt för att garantera snabba leveranser oavsett var i världen man befinner sig.'
}
// desgin 
export let TheDesign = [
    {
        _id: 1,
        title: 'E-Handel Webbdesign',
        image: UrlImage.thepaper,
        des: `En webbdesigner ställer alltid vissa frågor. Hur ska sajten användas och av vem? Vilken information bör finnas på en viss webbsida, och hur kommer man åt den? Har sidorna rätt funktioner (t.ex. ett bokningssystem eller en webbshop)? Vilka sajter länkar till varandra? Vilken information är viktigast?
        På Med Oss besvarar vi sådana här frågor tidigt i en noggrann wireframe- och konceptfas, där vi också gör användartester för att förstå hur människor använder en tjänst och varför. Vi bygger ingenting förrän en webbdesign fungerar perfekt på papperet.
        `,
    }, {

        _id: 2,
        title: ' Design som ökar konverteringar',
        image: UrlImage.ExtraUi,
        des: `
Din webbplats är avsedd att inspirera aktion, den är inte bara en broschyr.
Användbar information finns på nästan alla webbsida som helst, den här informationen kan vara lättläst och övertygande för användarna, men inte så många har starka uppmaningar som driver användarna till nästa steg på inköpsresan.
Att skapa en smidig användarresa maximerar konverteringar och levererar en e-handelsupplevelse som besökare tycker är givande och intuitivt. Att få det här felaktigt kommer att göra kunderna frustrerade och springa till dina konkurrenter.
Med vår utveckling av e-handel skapar vi en ren och intuitiv UI/UX-design, snabba sidladdningshastigheter och mobilkompatibilitet. Med detta i åtanke ser du fler genomförda köp och förbättrad avkastning på din onlinebutik.
        `

    }
]


// email seo 
export let EmailTile = {
    title: 'Vad är e-postmarknadsföring?',
    h1title: 'Kommunicera bättre genom personaliserad e-postmarknadsföring',
    des: 'Kommunicera bättre genom personaliserad e-postmarknadsföring och e-postutskick',
    image: UrlImage.emailmarketing,
}
// email 
export let TheEmailMarketing = [

    {
        _id: 1,
        title: 'Vad är e-postmarknadsföring?',
        image: UrlImage.emailmarketing,
        des: `E-postmarknadsföring handlar i stora drag om att kommunicera med människor på en lista som kan vara intresserade av att köpa produkter eller tjänster som ditt företag erbjuder. Den primära poängen med marknadsföring via e-post är att skapa förtroende, lojalitet och bygga varumärke.  E-postmarknadsföring består oftast av ett e postutskick med nyheter, kampanjer eller information om ditt företag. Dessa utskick ska alltså förmedla någon form av värde för kunden. Med Oss erbjuder verktyg och funktioner för att skapa upp segmenterad, professionell och träffsäker e-postmarknadsföring.`
    },
    {
        _id: 2,
        title: 'Varför använda e-postmarknadsföring?',
        image: UrlImage.emailmarketingOne,
        des: ` Kanalen e postmarknadsföring kommer med många fördelar. Du kan använda e-postmarknadsföring för att driva trafik och ökad försäljning till en webbplats, stärka kundlojalitet och stärka relationen till varumärket. Med e post marknadsföring kan du även få en bra inblick i vad för typ av information och innehåll som intresserar dina kunder. Du kan se vilka länkar som mottagare klickar på, vilka av kunderna som genomför ett köp och vilka delar av ditt e-postutskick som blir mest lästa. All statistik från dina mejlutskick samlas i Med Oss och finns tillgänglig för dig, för att optimera din marknadsföringsstrategi.`

    }

]


// list navbar =>
export let ListNavBar = [

    {
        _id: 0,
        name: {EN :'start', AR: 'med oss'},
        link: {EN:'/', AR : '/ar/'}
    },

    {
        _id: 1,
        name:  {EN :'tjänster', AR: 'خدمات'},
        link: {
            EN : '/services/',
            AR: '/services/ar/'
        }
    },
    {
        _id: 2,
        name: {EN:'E-Handel',AR : 'تطوير المواقع'},
        link: {
            EN : '/design/',
            AR : '/design/ar/'
        }
    },
    {
        _id: 3,
        name: {EN:'App Utveckling',AR : 'تطوير التطبيقات'},
        link: {
            EN : '/mobilapp/',
            AR: '/mobilapp/ar/'
        }
    },
    {
        _id: 4,
        name: {EN:'Kontakt', AR : 'اتصال'},
        link: {
            EN : '/contact/',
            AR : '/contact/ar/'
        }
    },
    {
        _id: 5,
        name: {EN :'E-postmarknadsföring',AR :'التسويق عبر البريد الإلكتروني'},
        link: {
            EN : '/e-postmarknadsforing/',
            AR : '/e-postmarknadsforing/ar/'
        }
    },

]


// info contact 
export let InfoContact = {
    email: 'info@medoss.se',
    telephone: '0709208520',
    ask: 'Vill du fà uppdateringar frän oss?',
    answer: 'Anmäl dig till värt nyhetsbrev',
    agree: 'Jag godkänner integritetspolicyn*'
}



// who is us
export let WhoIsUs = {
    us: { EN:'om oss', AR : 'معلومات عنا' },
    title: {EN :'Skapa framgång tillsammans med Med Oss', AR : 'اصنع النجاح معنا' },
    des: 
    {
        EN :`Vi jobbar alltid nära kunden. Standardlösningar är inget för oss, utan alla våra samarbeten bygger på ömsesidig förståelse och individuella anpassningar. Vi har ett agilt arbetssätt, och baserat på era problemställningar ser vi till att skapa den bästa lösningen för er – bit för bit, steg för steg.`,
        AR: 'نحن نعمل دائمًا بالقرب من العميل. الحلول القياسية ليست مناسبة لنا ، ولكن كل تعاوننا قائم على التفاهم المتبادل والتكيفات الفردية. لدينا طريقة مرنة للعمل ، وبناءً على مشاكلك ، نتأكد من إنشاء أفضل حل لك - قطعة قطعة ، خطوة بخطوة.'
},
    choose: {EN :'Varför välja oss!', AR : 'لماذا أخترتنا' },
    des2: {
        EN : `Oavsett om ni är ett småföretag som startar med bara en idé eller ett företag som vill utveckla sin digitala närvaro, Med Oss erbjuder strategisk insikt och decennier av erfarenhet av affärs uppväxt i den digitala världen vilket resulterar i kompletta och helheltslösningar som levereras perfekt och på rekordtid.`,
        AR : `
        سواء كنت شركة صغيرة تبدأ بفكرة فقط أو شركة تتطلع إلى تطوير وجودها الرقمي ، تقدم  رؤية استراتيجية وعقودًا من الخبرة في تنمية الأعمال التجارية في العالم الرقمي مما أدى إلى حلول كاملة وشاملة يتم تسليمها بشكل مثالي وفي وقت قياسي .
        `
    }

}