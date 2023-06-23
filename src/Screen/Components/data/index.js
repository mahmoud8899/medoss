import { UrlImage } from "../../../Utils/UrlImage";


// language
export let language = [
    {
        _id: 1,
        name: 'svenska',
        link: '/'
    },
    {
        _id: 2,
        name: 'العربية',
        link: '/ar/'
    },
]


// selection 
export let TheSelection = [
    {
        _id: 0,
        name: { EN: 'Hur kan vi hjälpa dig ?', AR: 'كيف يمكننا مساعدتك ؟' }
    },
    {
        _id: 1,
        name: { EN: 'Sökmotoroptimering (SEO)', AR: 'تحسين محركات البحث' }
    },
    {
        _id: 2,
        name: {
            EN: 'Webbdesign',
            AR: "تصميم الويب"
        }
    },
    {
        _id: 3,
        name: { EN: 'E-handel', AR: 'تطوير المواقع' }
    },
    {
        _id: 4,
        name: { EN: 'Social Media Marketing', AR: 'تسويق وسائل الاعلام الاجتماعية' },
    },
    {
        _id: 5,
        name: { EN: 'Webb & Mobil app', AR: 'تطبيق الويب والجوال' }
    }, {
        _id: 6,
        name: { EN: 'Annat', AR: 'آخر' }
    },
]

// the contact list 
export let ListContact = {
    title: { EN: `Fyll i dina uppgifter nedan sà hör vi av oss och bokar ett möte`, AR: 'املأ التفاصيل الخاصة بك أدناه حتى نتمكن من الاتصال وحجز اجتماع' },
    des: { EN: `Vi är övertygade om att alla bra samarbeten börjar med ett möte. Orkar du inte vänta kan du alltid ringa oss pà`,
     AR: 'نحن مقتنعون بأن كل أشكال التعاون الجيد تبدأ بالاجتماع. إذا كنت لا تطيق الانتظار ، يمكنك دائمًا الاتصال بنا على' },
    telephone: '+467327463',
    image: UrlImage.TheContact
}

// services...
export let FirstPage = {
    title: { EN: 'Hemsida som håller dina kunder inlåsta', AR: 'موقع الويب الذي يحافظ على عملائك' },
    firstTitle: { EN: 'Våra tjänster', AR: 'خدماتنا' },
    image: UrlImage.thepaper,
    des: {
        EN: `Med oss är en nyskapande webbyrå. Vi har sedan starten 2022, hjälpt företag med deras
        online närvaro och profil. Just nu erbjuder vi tjänster som webbutveckling, grafisk design,
        SEO, och mycket mer.`,
        AR: `معنا أجمل وكالة ويب. منذ البداية في عام 2022 ، ساعدنا الشركات في تواجدها على الإنترنت وملفها الشخصي. نحن نقدم خدمات مثل تطوير الويب والتصميم والجرافيكي وتحسين محركات البحث وغير ذلك الكثير`
    }

}
// services heder .
export let ServicesHeader = {
    title: {
        EN: 'Få hjälp med webbutveckling från erfaren webbyrå',
        AR: 'احصل على مساعدة في تطوير الويب من وكالة ويب ذات خبرة'
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
        EN: `Med Oss är en app- och webbyrå som hjälper dig att designa och utveckla din webbplats, app
        eller ditt spel. Vi är en flexibel digital byrå med en bred kompetens. Genom ett kundnära
        samarbete, agila arbetssätt och fokus på lönsamhet tar vi ditt projekt från idé till färdig
        produkt.`,
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
            AR: `نساعدك في الحصول على متجر إلكتروني يلبي .متطلبات السوق وتحقيق نسبة عالية من المبيعات.`

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
        des: {
            EN: 'Skräddarsydda programvara som underlättar era unika affärsproblem',
            AR: `إذا كنت صاحب شركة أو لديك فكرة مشروع خاص ستحتاج إلي خدمة تصميم وبرمجة تطبيقات الجوال لكي تحصل علي تطبيق خاص بشركتك أو مشروعك لتتمكن من التواصل مع عملائك بشكل أسرع.`
        }

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
            AR: `
            نحن نقدم خدمة تحسين محركات البحث  التي تزيد المبيعات ، وليس مجرد حركة المرور. الترتيب والظهور في الصفحة الأولى من نتائج البحث

            `
        },

    },

    {
        _id: 5,
        title: {
            EN: 'E-Handel',
            AR:
                `التصميم الابداعي`
        },
        image: UrlImage.UI,
        link: {
            EN: '/design/',
            AR: '/design/ar',
        },
        buttom: {
            EN: 'läs mer om App E-Handel',
            AR: 'اقرأ المزيد عن التصميم الإبداعي'

        },
        des: {
            EN: 'Vi skapar en intuitiv UI/UX-design, snabba laddnings hastigheter och mobil kompatibilitet butik som förbättrar konverteringar',
            AR: `لدينا فريق مبدع متخصص بالعديد من برامج التصميم الإبداعي والرسم ، يعمل باحترافية وأسس علمية، لبناء صورة ذهنية مميزة، وهوية بصرية رائعة.`

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
        title: { EN: 'Exklusiv Design', AR: 'تصميم حصري' },
        des: {
            EN: `Design är ett enkelt sätt att skapa en estetiskt tilltalande och effektiv användarupplevelse (UX)
            och användargränssnitt (UI). Vårt åtagande är att tillhandahålla högsta kvalitet med den
            smidigaste möjliga kundupplevelsen.`,
            AR: 'تجعل مبادئ التصميم من السهل إنشاء تجربة مستخدم فعالة وجمالية  واجهة مستخدم  التزامنا هو تقديم أعلى مستويات الجودة مع أفضل تجربة ممكنة للعملاء.'
        },
        image: UrlImage.ExtraUi
    },
    {
        _id: 2,
        title: { EN: 'Laddningshastighet', AR: 'سرعة الشحن' },
        image: UrlImage.Fast,
        des: {
            EN: `Vi erbjuder dig en webbplats med en hög laddningshastighet för att snabbare sidor är
            effektivare och ger kunden en mycket bättre användarupplevelse.`,
            AR: `نقدم لك موقعًا إلكترونيًا بسرعة تحميل عالية لصفحات أسرع
            أكثر كفاءة ويمنح العميل تجربة مستخدم أفضل بكثير.`
        }
    },
    {
        _id: 3,
        title: { EN: 'Varumärkes Identitet', AR: 'هوية العلامة التجارية' },
        image: UrlImage.Logo,
        des: {
            EN: `Vi bygger upp en webbplats som väcker intresset hos dina kunder med hjälp av en stark
            varumärkeslogga med hjälp av vårt teams kraftfulla kommunikations- och design färdigheter.`,
            AR: `نقوم ببناء موقع على شبكة الإنترنت يثير اهتمام عملائك بمساعدة قوية
            شعار العلامة التجارية باستخدام مهارات الاتصال والتصميم القوية لفريقنا.`,
        }

    },
    {
        _id: 4,
        title: { EN: 'Webbdomän', AR: 'مجال الويب' },
        image: UrlImage.domen,
        des: {
            EN: `Ett domännamn är grunden för ditt företags närvaro på internet, Vi hjälper dig med det.`,
            AR: `اسم المجال هو أساس تواجد شركتك على الإنترنت ، فنحن نساعدك في ذلك.`
        }
    },
    {
        _id: 5,
        title: { EN: 'Webbhotell (Hosting)', AR: 'استضافة المواقع (استضافة)' },
        image: UrlImage.Host,
        des: {
            EN: 'På med oss tar vi hand om allt, från att designa och skapa din webbplats till att vara värd för den.',
            AR: 'معنا ، نحن نهتم بكل شيء ، من تصميم وإنشاء موقع الويب الخاص بك إلى استضافته'
        }
    },
    {
        _id: 6,
        title: { EN: 'Mobilvänlig Hemsida', AR: 'موقع ويب سهل الاستخدام للجوال' },
        image: UrlImage.response,
        des: {
            EN: 'Vi designar, bygger och testar en mobilvänlig webbplats för att fungera sömlöst på telefoner och surfplattor, oavsett storlek.',
            AR: 'نحن نصمم ونبني ونختبر موقعًا متوافقًا مع الجوّال للعمل بسلاسة على الهواتف والأجهزة اللوحية ، بغض النظر عن الحجم'
        }
    },
    {
        _id: 7,
        title: { EN: 'Skydd & Support', AR: 'الحماية والدعم' },
        image: UrlImage.setting,
        des: {
            EN: 'Med oss erbjuder kontinuerligt support och webbplats underhållning',
            AR: 'معنا يقدم الدعم المستمر وترفيه الموقع'
        }
    },

    {
        _id: 8,
        title: { EN: 'SSL-Certifikat', AR: 'شهادة SSL' },
        image: UrlImage.Ssl,
        des: {
            EN: 'Kryptering av trafiken mellan webbserver och webbläsare för att förhindra utomståenden att avlyssna data som skickas eller tas emot',
            AR: 'تشفير حركة المرور بين خادم الويب والمتصفح لمنع الغرباء من اعتراض البيانات التي يتم إرسالها أو استلامها'
        }

    }

]

// web development 
export let WebTitle = {
    title: { EN: 'Hemsida som håller dina kunder inlåsta', AR: 'موقع ويب يحافظ على عملائك' }
}


// app development 
export let AppMobile = {
    title: { EN: 'Din Framtida Mobil App & Programvara', AR: 'تطبيقك وبرمجياتك المستقبلية للهاتف المحمول' },
    image: UrlImage.App,
    des: {
        EN: `Vårt mål på Med Oss är att underlätta för dig och ditt företag genom bygga en skräddarsydd
        programvara som motsvarar dina unika affärsproblem. Att hitta en pålitlig partner som hjälper
        dig att utveckla och bygga en programvara när du står inför problem som hindrar ditt företags
        tillväxt och utveckling är oftast en utmaning. Vi på Med Oss erbjuder ett koncept och en
        strategi, design, integration, implementering och support för att uppnå dina unika affärsmål.
        Vi ställer alla rätta frågor från början av vårt samarbete för att skapa en tydlig färdplan för att
        uppnå det önskade affärsmålet. Vi vägleder dig genom hela din digitala resa och bygger din
        egen webbapplikation eller mobilapp enligt dina förväntningar och drömmar. Vi hjälper dig
        också att förvandla din webbplats till en mobilapp.`,
        AR:
            `
        هدفنا  هو تسهيل الأمر عليك وعلى شركتك من خلال بناء ملف
برنامج يعالج مشاكل عملك الفريدة. إيجاد شريك موثوق للمساعدة
عليك تطوير وبناء برنامج عندما تواجه مشاكل تعيق عملك
عادة ما يكون النمو والتنمية تحديًا. نحن  نقدم مفهوم و
الإستراتيجية والتصميم والتكامل والتنفيذ والدعم لتحقيق أهداف عملك الفريدة.
نطرح جميع الأسئلة الصحيحة منذ بداية تعاوننا لإنشاء خارطة طريق واضحة لـ
تحقيق هدف العمل المطلوب. نحن نوجهك خلال رحلتك الرقمية بأكملها ونبني
تطبيق ويب خاص به أو تطبيق جوال وفقًا لتوقعاتك وأحلامك. سوف نساعدك
أيضًا لتحويل موقع الويب الخاص بك إلى تطبيق جوال.
        `
    }
}



export let TheseoTitle = {
    title: 'Mät KPI för SEO och se hur din webbplats presterar',
    image: UrlImage.SEO,
}

// SEO 
export let TheSEOdATA = {
    title: { EN: 'Sökmotoroptimering med mätbara resultat', AR: 'تحسين محرك البحث بنتائج قابلة للقياس' },
    image: UrlImage.SEO,
    des: {
        EN:
            `SEO, sökmotoroptimering, sökoptimering. Ja, oavsett vilken benämning som används är vårt
sikte inställt på att få dina sidor att ranka högt i sökresultaten, på sökfraser som är relevanta
för dig och de som är intresserade av ditt erbjudande. Vägen dit ser olika ut beroende på dina
förutsättningar och önskemål, men med oss får du alla möjligheter att nå fram. Det bästa med
SEO är att det ger så stor utdelning i form av mätbara resultat. Om det förvaltas på rätt sätt
kan du på det viset nå bättre placeringar och sedan ta vara på den effekten under en lång tid
framöver. Vi på Med Oss sätter oss på din sida av bordet, gör en analys av läget och hittar
åtgärder som kan hjälpa dig att nå ett bättre resultat med SEO. Undrar du något, vill komma i
gång med sökmotoroptimering så snart som möjligt? Tveka inte kontakta oss.
        `,

        AR: `
    تحسين محرك البحث ، وتحسين البحث ، وتحسين محركات البحث ... بغض النظر عن المصطلح المستخدم ، فإن الهدف هو جعل صفحاتك تحتل مرتبة عالية في نتائج البحث ، في عبارات البحث ذات الصلة بك وللمهتمين بعرضك. تبدو الطريقة مختلفة وفقًا لظروفك ورغباتك ، ولكن معنا تحصل على كل فرصة للوصول إلى هناك. أفضل شيء في مُحسّنات محرّكات البحث هو أنه يعطي عائدًا كبيرًا في شكل نتائج قابلة للقياس. إذا تمت إدارتها بشكل صحيح ، يمكنك تحقيق مواضع أفضل ثم الاستفادة من التأثير لفترة طويلة قادمة. نحن مستشارون نجلس إلى جانبك من الطاولة ، ونحلل الموقف ونحدد الإجراءات التي يمكن أن تساعدك على تحقيق نتائج أفضل مع مُحسنات محركات البحث. هل لديك سؤال أو تريد البدء في تحسين محرك البحث في أسرع وقت ممكن؟ اتصل بنا
    `
    }


}

export let DesignTitle = {
    title: { EN: 'Professionell webbdesign - Skapa en minnesvärd kundupplevelse', AR: "تصميم ويب احترافي - خلق تجربة عملاء لا تنسى" },
    image: UrlImage.thepaper,
    des: {
        EN: 'Vi arbetar dag som natt för att garantera snabba leveranser oavsett var i världen man befinner sig.',
        AR: "نحن نعمل ليلًا ونهارًا لضمان توصيل سريع بغض النظر عن مكان وجودك في العالم."
    }
}
// desgin 
export let TheDesign = [
    {
        _id: 1,
        title: { EN: 'E-Handel Webbdesign', AR: 'تصميم مواقع التجارة الإلكترونية' },
        image: UrlImage.thepaper,
        des: {
            EN:
                `
            En webbdesigner ställer alltid vissa frågor. Hur ska sajten användas och av vem? Vilken
information bör finnas på en viss webbsida, och hur kommer man åt den? Har hemsidan rätt
funktioner till exempel en webbshop eller bokningssystem? Vilka sajter länkar till varandra?
Vilken information är viktigast?
På Med Oss ger vi svar på de här frågorna tidigt i en noggrann wireframe- och konceptfas, där
gör vi också användartester för att på det viset förstå hur människor använder en tjänst och
varför. Vi skapar ingenting förrän en webbdesign fungerar perfekt på papperet.
            `
            ,
            AR: `
        يسأل مصمم الويب دائمًا أسئلة معينة. كيف يتم استخدام الموقع ومن قبل من؟ ما هي المعلومات التي يجب أن تكون على صفحة ويب معينة ، وكيف يمكن الوصول إليها؟ هل الصفحات لها الوظائف الصحيحة (مثل نظام الحجز أو متجر على شبكة الإنترنت)؟ ما هي المواقع التي ترتبط ببعضها البعض؟ ما هي المعلومات الأكثر أهمية؟
         في Med Oss ، نجيب على أسئلة مثل هذه في وقت مبكر في مرحلة الإطار الشبكي الشامل والمفهوم ، حيث نجري أيضًا اختبارات المستخدم لفهم كيفية استخدام الأشخاص للخدمة ولماذا. نحن لا نبني أي شيء حتى يعمل تصميم الويب بشكل مثالي على الورق.
        `}
    },
    {

        _id: 2,
        title: { EN: 'Design som ökar konverteringar', 
        AR: `نساعدك في اختصار الكثير من الرسائل الموجهة للعملاء في تصميم احترافي وجذاب`
    
    },
        image: UrlImage.ExtraUi,
        des: {
            EN:
                `
            Din webbplats är skapad för att inspirera till aktion, den är inte bara en broschyr. Användbar
information finns på nästan alla webbsidor, den här informationen kan vara lättläst och
övertygande och för användarna, men inte så många har starka uppmaningar som driver
användarna till nästa steg på inköpsresan. Att skapa en smidig användarresa maximerar
chansen att kunden väljer dig framför sina konkurrenter. och levererar en e-handelsupplevelse
som besökarna tycker är lönsamt och intuitivt. Om detta bli fel blir kunderna frustrerade och
kommer att välja till dina konkurrenter framför dig. Vi på Med Oss skapar en fräsch och
intuitiv UI/UX-design, kvicka sidladdningshastigheter och mobilkompatibilitet. Resultatet av
detta blir då fler genomförda köp och förbättrad vinst på din Online butik.
            `,
            AR: `
            نطراً للأهمية الكبيرة التي يحظى بها التصميم الجرافيكي لأي نشاط وذلك لدوره الكبير في التأثير على قرار العملاء وترك انطباع أولي لديهم ينعكس على قراراتهم المستقبلية ، فإننا في Med Oss نهتم بشدة في هذا الجانب ابتداءً من الهوية البصرية وانتهاءً بأدق التفاصيل .
            `
        }

    }
]


// email seo 
export let EmailTile = {
    title: { EN: 'Vad är e-postmarknadsföring?', AR: 'ما هو التسويق عبر البريد الإلكتروني؟' },
    h1title: { EN: 'Kommunicera bättre genom personaliserad e-postmarknadsföring', AR: 'تواصل بشكل أفضل من خلال التسويق المخصص عبر البريد الإلكتروني' },
    des: { EN: 'Kommunicera bättre genom personaliserad e-postmarknadsföring och e-postutskick', AR: "التواصل بشكل أفضل من خلال التسويق عبر البريد الإلكتروني والمراسلات المخصصة" },
    image: UrlImage.emailmarketing,
}
// email 
export let TheEmailMarketing = [

    {
        _id: 1,
        title: { EN: 'Vad är e-postmarknadsföring?', AR: 'ما هو التسويق عبر البريد الإلكتروني؟' },
        image: UrlImage.emailmarketing,
        des: {
            EN: `
            I stora drag handlar E-postmarknadsföring om att kommunicera med människor som kan vara
intresserade av att köpa produkter eller tjänster som ditt företag erbjuder. Poängen med att
marknadsföra via e-post är att man på så viss kan bygga ett varumärke, visa att man finns,
skapa ett förtroende och vinna lojalitet hos kunderna. I denna typ av marknadsföring ingår
oftast ett e post utskick med nyheter, olika kampanjer eller information om ditt företag. Målet
med utskicken är att förmedla någon form av värde till kunden. Vi på Med Oss erbjuder dig
verktyg och funktioner för att skapa upp en segmenterad, professionell och träffsäker e-
postmarknadsföring.
            `,
            AR: `
            بشكل عام ، يتعلق التسويق عبر البريد الإلكتروني بالتواصل مع الأشخاص الذين يمكن أن يكونوا كذلك
مهتمًا بشراء المنتجات أو الخدمات التي تقدمها شركتك. الهدف من
يعني التسويق عبر البريد الإلكتروني أنه يمكنك بناء علامة تجارية بهذه الطريقة ، وإظهار وجودك ،
خلق الثقة وكسب ولاء العملاء. يشمل هذا النوع من التسويق
عادةً ما يكون بريدًا إلكترونيًا يحتوي على أخبار أو حملات مختلفة أو معلومات عن شركتك. الهدف
مع المراسلات هو نقل شكل من أشكال القيمة إلى العميل. نحن في Med Oss نقدم لك
الأدوات والوظائف لإنشاء إلكتروني مجزأ واحترافي ودقيق
التسويق عبر البريد.
`
        }
    },
    {
        _id: 2,
        title: { EN: 'Varför använda e-postmarknadsföring?', AR: "لماذا نستخدم التسويق عبر البريد الإلكتروني؟" },
        image: UrlImage.emailmarketingOne,
        des: {
            EN:
                `
E postmarknadsföring har många fördelar. Tillexempel kan du använda e-postmarknadsföring
för att stärka kundlojaliteten, driva trafik och ökad försäljning till en webbplats. Med denna
typ av marknadsföring kan du även få en bra inblick i vad för typ av information och innehåll
som intresserar dina kunder. Tillexempel kan du se populära länkar samt vilka delar av ditt e-
postutskick som blir mest lästa. vilka av dina kunder som genomför ett köp, All statistik från
dina mejlutskick samlas här hos oss och finns tillgänglig för dig, för att optimera din
marknadsföringsstrategi.
            `,
            AR: `
            التسويق عبر البريد الإلكتروني له مزايا عديدة. على سبيل المثال ، يمكنك استخدام التسويق عبر البريد الإلكتروني
لتعزيز ولاء العملاء ، وجذب حركة المرور وزيادة المبيعات إلى موقع الويب. مع هذا
نوع التسويق ، يمكنك أيضًا الحصول على رؤية جيدة لنوع المعلومات والمحتوى
التي تهم عملائك. على سبيل المثال ، يمكنك مشاهدة الروابط الشائعة وأي أجزاء من جهاز e-
الرسائل البريدية التي تحظى بأكبر قدر من القراءة. أي من عملائك يُجري عملية شراء ، كل الإحصائيات من
يتم جمع رسائل البريد الإلكتروني الخاصة بك هنا معنا وهي متاحة لك ، من أجل تحسين
استراتيجية التسويق.
            `
        }

    }

]


// list navbar =>
export let ListNavBar = [

    {
        _id: 0,
        name: { EN: 'start', AR: 'med oss' },
        link: { EN: '/', AR: '/ar/' }
    },

    {
        _id: 1,
        name: { EN: 'tjänster', AR: 'خدمات' },
        link: {
            EN: '/services/',
            AR: '/services/ar/'
        }
    },
    {
        _id: 2,
        name: { EN: 'E-Handel', AR: 'تطوير المواقع' },
        link: {
            EN: '/design/',
            AR: '/design/ar/'
        }
    },
    {
        _id: 3,
        name: { EN: 'App Utveckling', AR: 'تطوير التطبيقات' },
        link: {
            EN: '/mobilapp/',
            AR: '/mobilapp/ar/'
        }
    },
    {
        _id: 4,
        name: { EN: 'Kontakt', AR: 'اتصال' },
        link: {
            EN: '/contact/',
            AR: '/contact/ar/'
        }
    },
    {
        _id: 5,
        name: { EN: 'E-postmarknadsföring', AR: 'التسويق عبر البريد الإلكتروني' },
        link: {
            EN: '/e-postmarknadsforing/',
            AR: '/e-postmarknadsforing/ar/'
        }
    },

]


// info contact 
export let InfoContact = {
    email: 'info@medoss.se',
    telephone: '+46709208520',
    ask: 'Vill du fà uppdateringar frän oss?',
    answer: 'Anmäl dig till värt nyhetsbrev',
    agree: 'Jag godkänner integritetspolicyn*'
}



// who is us
export let WhoIsUs = {
    us: { EN: 'om oss', AR: 'معلومات عنا' },
    title: { EN: 'Skapa framgång tillsammans med Med Oss', AR: 'اصنع النجاح معنا' },
    des:
    {
        EN: `På Med Oss är det viktigt med ett kundnära arbete. Standardlösningar är inget för oss, utan
        alla våra samarbeten bygger på en bra kommunikation och individuella anpassningar för just
        dig. Vi har ett agilt arbetssätt vilket innebär att du som kund hela tiden är med och kan
        påverka processen i vårt arbete, tillsammans är vi ett team och baserat på dina
        problemställningar ser vi till att skapa den bästa lösningen för er – bit för bit, steg för steg
        tillsammans.`,
        AR: `
          ، من المهم العمل بالقرب من العميل. الحلول القياسية ليست لنا ، ولكن
تستند جميع تعاوناتنا على التواصل الجيد والتكيفات الفردية من أجل فقط
أنت. لدينا طريقة عمل مرنة ، مما يعني أنك كعميل تشارك دائمًا ويمكنك ذلك
تؤثر على العملية في عملنا ، فنحن معًا فريق ومعتمد على
المشاكل ، نتأكد من إنشاء أفضل حل لك - قطعة قطعة ، خطوة بخطوة
معاً.
        ` ,
    },

    choose: { EN: 'Varför välja oss!', AR: 'لماذا أخترتنا' },
    des2: {
        EN: `För att vi gör ingen skillnad på om ni är ett litet företag som startar med bara en idé eller ett
        etablerat företag som vill utveckla sin digitala närvaro. Vi på Med Oss erbjuder dig ett
        kundnära arbete, där du är en viktig del av temaet, vi har stor erfarenhet av affärs tillväxter i
        den digitala världen och du sitter på ideerna, vilket resulterar i att du kommer ett steg nämare
        din dröm. Vi är dessutom snabba på att leverera det du önskar. Så våga ta steget och kontakta
        oss. levereras perfekt och på rekordtid.`,
        AR: `
        سواء كنت شركة صغيرة تبدأ بفكرة فقط أو شركة تتطلع إلى تطوير وجودها الرقمي ، تقدم  رؤية استراتيجية وعقودًا من الخبرة في تنمية الأعمال التجارية في العالم الرقمي مما أدى إلى حلول كاملة وشاملة يتم تسليمها بشكل مثالي وفي وقت قياسي .
        `
    }

}