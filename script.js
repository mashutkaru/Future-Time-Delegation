(function () {
  'use strict';

  var PHOTO_DIR = 'photos/';
  /** Bump after replacing photos. Card photo area is 272×230; PNGs are portrait (~232×276). */
  var PHOTO_VER = '33';

  function participantPhotoUrl(key) {
    return PHOTO_DIR + key + '.png?v=' + PHOTO_VER;
  }
  function participantPictureFront(key, nameEn) {
    return '<img class="participant-picture" src="' + participantPhotoUrl(key) + '" alt="' + escapeHtml(nameEn) + '" loading="lazy" decoding="async"/>';
  }
  function participantPictureBack(key) {
    return '<img class="participant-picture participant-picture--back" src="' + participantPhotoUrl(key) + '" alt="" loading="lazy" decoding="async"/>';
  }

  const PARTICIPANTS = [
    { id:1,  key:"Avishay_Cohen",            nameEn:"Avishay Cohen",            nameJa:"コーヘン・アヴィシャイ",             nameHe:"אבישי כהן",            sector:"Central Government", org:"Ministry of Labor",                     orgHe:"משרד העבודה",                     role:"Director, Multi- Generational Employment Department", roleHe:"מנהל אגף תעסוקה רב-דורית",            email:"cohan.avishay@gmail.com" },
    { id:2,  key:"Avital_Simcha_Shlezinger", nameEn:"Avital Simcha Shlezinger", nameJa:"シュレジンガー・アヴィタル・シムハ", nameHe:"אביטל שמחה שלזינגר",  sector:"Central Government", org:"National Insurance Institute",          orgHe:"המוסד לביטוח לאומי",              role:"Director of Senior Citizen and Family Advisory Division",  roleHe:"מנהלת אגף הייעוץ לאזרח הוותיק",       email:"avitals@nioi.gov.il" },
    { id:4,  key:"Idit_Ayala_Reiss",         nameEn:"Idit Ayala Reiss",         nameJa:"ライス・イディット・アヤラ",         nameHe:"עדית אילה ריס",       sector:"Central Government", org:"Ministry of Justice",                  orgHe:"משרד המשפטים",                    role:"Adv., Office of Legal Counsel and Legislative Affairs", roleHe:"עו״ד ייעוץ וחקיקה",                 email:"iditna@justice.gov.il" },
    { id:5,  key:"Jasmin_Vulej",             nameEn:"Jasmin Vulej",             nameJa:"ヴレイ・ジャスミン",               nameHe:"יסמין וולך",         sector:"Central Government", org:"The Ministry of Welfare and Social Affairs",            orgHe:"משרד הרווחה",                     role:"Head of Model Development Unit",               roleHe:"מנהלת יחידת פיתוח מודלים",           email:"jasminv@molsa.gov.il" },
    { id:6,  key:"Liat_Stark",               nameEn:"Liat Stark",               nameJa:"スターク・リアット",               nameHe:"ליאת שטרק",            sector:"Central Government", org:"Ministry of Justice",                  orgHe:"משרד המשפטים",                    role:"District Director, Guardian General",          roleHe:"מנהלת מחוז ירושלים אפוטרופוס כללי",  email:"liatsta@justice.gov.il" },
    { id:7,  key:"Lior_Zohar",               nameEn:"Lior Zohar",               nameJa:"ゾハル・リオール",                 nameHe:"ליאור זוהר",            sector:"Central Government", org:"Ministry of Finance",                  orgHe:"משרד האוצר",                      role:"Head of Strategy and Pension Consultation Deptartment", roleHe:"מנהלת תחום אסטרטגיה וייעוץ פנסיוני", email:"liork@mof.gov.il" },
    { id:8,  key:"Rachela_Akuka",            nameEn:"Rachela Akuka",            nameJa:"アクカ・ラヘラ",                   nameHe:"רחלה אקוקה",            sector:"Central Government", org:"Ministry of Finance",                  orgHe:"משרד האוצר",                      role:"Manger of indivdual Taxation Department", roleHe:"מנהלת מחלקת שומה",                   email:"akuka720@gmail.com" },
    { id:9,  key:"Ravit_Nakar_El-Ezra",      nameEn:"Ravit Nakar El-Ezra",      nameJa:"ナカル・エルエズラ・ラヴィット",     nameHe:"רוית נקר אל-עזרה",    sector:"Central Government", org:"The Ministry of Welfare and Social Affairs", orgHe:"משרד הרווחה והביטחון החברתי",    role:"Senior Manager, Budgeting and Pricing, Senior Citizens Administration", roleHe:"מנהלת בכירה תקצוב ותמחור אגף אזרחים ותיקים", email:"ravitn@molsa.gov.il" },
    { id:10, key:"Roei_Rafael_Babai",        nameEn:"Roei Rafael Babai",        nameJa:"ババイ・ロエイ・ラファエル",         nameHe:"רועי רפאל בבאי",       sector:"Central Government", org:"Ministry of Finance",                  orgHe:"משרד האוצר",                      role:"Referent, National Social Insurance, Budget Department", roleHe:"רפרנט ביטוח לאומי, אגף התקציבים", email:"roeib@mof.gov.il" },
    { id:11, key:"Ronit_Rozin",              nameEn:"Ronit Rozin",              nameJa:"ロジン・ロニット",                 nameHe:"רונית רוזין",           sector:"Central Government", org:"Prime Minister Office",                orgHe:"משרד ראש הממשלה",                 role:"CEO Holocaust Survivors Rights Authority",   roleHe:"מנכ״לית הרשות לניצולי שואה",         email:"ronitro@hsa.gov.il" },
    { id:12, key:"Valentina_Batia_Chai",     nameEn:"Valentina Batia Chai",     nameJa:"ハイ・ヴァレンティナ・バティア",     nameHe:"ולנטינה בתיה חי",       sector:"Central Government", org:"National Insurance Institute",          orgHe:"המוסד לביטוח לאומי",              role:"Branch Manager",                             roleHe:"מנהלת סניף עפולה רבתי",                           email:"valic1110@gmail.com" },
    { id:13, key:"Yehuda_Arie_Halali",       nameEn:"Yehuda Arie Halali",       nameJa:"ハラリ・イェフダ・アリエ",           nameHe:"יהודה אריה הללי",      sector:"Central Government", org:"Ministry for Social Equality and the Advancement of the Status of Women", orgHe:"המשרד לשוויון חברתי וקידום מעמד האישה", role:"Manager, Senior Citizens Call Center Department", roleHe:"מנהל תחום מוקד אזרחים ותיקים, המשרד לשוויון חברתי וקידום מעמד האישה", email:"yehudah@mse.gov.il" },
    { id:14, key:"Alon_Kalman",              nameEn:"Alon Kalman",              nameJa:"カルマン・アロン",                 nameHe:"אלון קלמן",             sector:"Civil Society",      org:"Gil‑Ad Geriatric Center",              orgHe:"מרכז גריאטרי גיל-עד",             role:"CEO",                                          roleHe:'מנכ"ל',                               email:"alon.k@giladc.co.il" },
    { id:15, key:"Eden_Chen",                nameEn:"Eden Chen",                nameJa:"チェン・エデン",                   nameHe:"עדן חן",                sector:"Civil Society",      org:"Yesodot Letzmicha Dror NGO",           orgHe:"יסודות לתמיכה דרור עמותה",       role:"Director, Dror Senior Community Network",       roleHe:"מנהלת רשת קהילות דרור",               email:"eden-c@drorzikna.org.il" },
    { id:16, key:"Josef_Kaplan",             nameEn:"Josef Kaplan",             nameJa:"カプラン・ヨセフ",                 nameHe:"יוסף קפלן",             sector:"Civil Society",      org:"Lev Ganim Senior Living", orgBack:"Lev Ganim – Independent Senior Living Community", orgHe:"לב גנים מגורים לגיל השלישי", role:"CEO", roleHe:'מנכ"ל', email:"kaplan@levganim.co.il" },
    { id:17, key:"Liat_Sikron_Vazan",        nameEn:"Liat Sikron Vazan",        nameJa:"ヴァザン・リアット・シクロン",       nameHe:"ליאת סיקרון וזאן",      sector:"Civil Society",      org:"JDC‑Eshel",                            orgHe:"ג'וינט ישראל – אשל",              role:"Head of Knowledge and Learning Center",        roleHe:"ראש מרכז ידע ולמידה",               email:"liats@jdc.org.il" },
    { id:18, key:"Yael_Barkan_Dolev",        nameEn:"Yael Barkan Dolev",        nameJa:"ドレヴ・ヤエル・バルカン",           nameHe:"יעל ברקן דולב",         sector:"Civil Society",      org:"Gil Oz Organization",                  orgHe:"עמותת גיל עוז",                   role:"CEO",                                          roleHe:"מנכ״לית",                             email:"yael@giloz.co.il" },
    { id:19, key:"Adaya_Nissenholtz",        nameEn:"Adaya Nissenholtz",        nameJa:"ニッセンホルツ・アダヤ",             nameHe:"עדיה ניסנהולץ",        sector:"Healthcare System",      org:"Clalit Health Services",               orgHe:"כללית שירותי בריאות",             role:"Regional Geriatrician",                        roleHe:"גריאטרית מחוזית",                   email:"adayani@clalit.org.il" },
    { id:20, key:"Dalit_Cypel",              nameEn:"Dalit Cypel",              nameJa:"ツィペル・ダリット",               nameHe:"דלית ציפל",            sector:"Healthcare System",      org:"Clalit Health Services",               orgHe:"כללית שירותי בריאות",             role:"Head of Geriatrics Field", roleHe:"ראש תחום גריאטריה",                 email:"dalitcy@gmail.com" },
    { id:21, key:"Galit_Segal",              nameEn:"Galit Segal",              nameJa:"セガル・ガリット",                 nameHe:"גלית סגל",              sector:"Healthcare System",      org:"Meuhedet HMO",                        orgHe:"קופת חולים מאוחדת",               role:"Chief Geriatric Physician",                    roleHe:"גריאטרית ראשית",                     email:"galit.s4@meuhedet.co.il" },
    { id:22, key:"Netanel_Levi",             nameEn:"Netanel Levi",             nameJa:"レヴィ・ネタネル",                 nameHe:"נתנאל לוי",             sector:"Healthcare System",      org:"Shoham Medical Center",                orgHe:"המרכז הרפואי שוהם",               role:"Head of Physical Therapy Department",          roleHe:"מנהל שירותי פיזיותרפיה",             email:"netanell@shoham.health.gov.il" },
    { id:23, key:"Suaad_Ektelat",            nameEn:"Suaad Ektelat",            nameJa:"エクテラト・スアード",             nameHe:"סועאד אכתילאת",        sector:"Healthcare System",      org:"Beer Yaakov–Ness Ziona", orgLine2:"Mental Health Center", orgHe:"מרכז לבריאות הנפש באר יעקב-נס ציונה", role:"Adult‑Gerontology Nurse Practitioner",  roleHe:"אחות מומחית גרונטולוגית",          email:"somaa.h84@gmail.com" },
    { id:24, key:"Galit_Groper",             nameEn:"Galit Groper",             nameJa:"グローパー・ガリット",             nameHe:"גלית גרופר",            sector:"Local Government",   org:"Emek Hefer Regional Council",          orgHe:"מועצה אזורית עמק חפר",            role:"Head of Social Services and Health Department",     roleHe:"מנהלת אגף רווחה ובריאות",            email:"galitgr@hefer.org.il" },
    { id:25, key:"Michal_Schwartz",          nameEn:"Michal Schwartz",          nameJa:"シュワルツ・ミハル",               nameHe:"מיכל שוורץ",            sector:"Local Government",   org:"Rishon LeZion Municipality",           orgHe:"עיריית ראשון לציון",             role:"Director, Senior Citizens Department",               roleHe:"מנהלת אגף אזרחים ותיקים",             email:"micalsw@rishonlezion.muni.il" },
    { id:26, key:"Nes-Ya_Strasburg",         nameEn:"Nes-Ya Strasburg",         nameJa:"ストラスブルグ・ネスヤ",           nameHe:"נס-יה שטרסבורג",       sector:"Local Government",   org:"Southern Soreq Cluster",               orgHe:"מרחב שורק דרומי",                 role:"Optimal Aging Regional Director",             roleHe:"מנהלת אזורית להזדקנות מיטבית",      email:"nesyas2222@gmail.com" },
    { id:27, key:"Omer_Ungar",               nameEn:"Omer Ungar",               nameJa:"ウンガル・オメル",                 nameHe:"עומר אונגר",            sector:"Local Government",   org:"Ashdod Municipality",                  orgHe:"עיריית אשדוד",                    role:"Director, Social Services",                     roleHe:"מנהל אגף שירותים חברתיים",            email:"omer@ashdod.muni.il" },
    { id:28, key:"Shirli_Reznizky_Kahan",    nameEn:"Shirli Reznizky Kahan",    nameJa:"カハン・シルリ",                   nameHe:"שירלי רזניצקי קהאן",    sector:"Academia & Research", org:"Myers JDC Brookdale Institute",        orgHe:"מכון מאיירס-ג'וינט-ברוקדייל",    role:"Senior Research Scholar and Aging Team Leader", roleHe:"חוקרת בכירה וראש צוות הזדקנות",    email:"shirlir@jdc.org" },
    { id:29, key:"Shmuel_Springer",          nameEn:"Shmuel Springer",          nameJa:"スプリンガー・シュムエル",           nameHe:"שמואל שפרינגר",         sector:"Academia & Research", org:"Ariel University",                      orgHe:"אוניברסיטת אריאל",                role:"Head Academic Community Partnership Unit",     roleHe:"ראש יחידת קשרי אקדמיה קהילה",       email:"shmuels@ariel.ac.il" },
    { id:30, key:"Meital_Weissman_Tsabari",  nameEn:"Meital Weissman Tsabari",  nameJa:"メイタル・ワイスマン・ツァバリ",     nameHe:"מיטל ויסמן צברי",     sector:"Central Government",   org:"The Ministry of Welfare and Social Affairs",        orgHe:"משרד הרווחה והשירותים החברתיים",    role:"Head of Knowledge Management Field, Policy Planning and Strategy Department", roleHe:"מנהלת תחום, אגף תכנון מדיניות",     email:"meitalit80@gmail.com" },
  ];

  const STEERING_COMMITTEE = [
    { id:"sc1", key:"Yariv_Man", nameEn:"Yariv Man", nameJa:"マン・ヤリヴ", nameHe:"יריב מן", org:"Ministry of Welfare and Social Affairs", orgHe:"משרד הרווחה והביטחון החברתי", role:"Deputy Director General, Administration for Senior Citizens", roleHe:"סגן מנהל האגף לאזרחים ותיקים", email:"YarivM@molsa.gov.il", photo:"Yariv_Man.png" },
    { id:"sc2", key:"Hama_Israeli", nameEn:"Hama Israeli-Smitzer", nameJa:"イスラエリ＝スミッツァー・ハマ", nameHe:"חמה ישראלי", org:"Ministry of Welfare and Social Affairs", orgHe:"משרד הרווחה והביטחון החברתי", role:"Senior Division Manager, Housing Systems for Senior Citizens", roleHe:"מנהלת בכירה, מערכות דיור לאזרחים ותיקים", email:"hamai@molsa.gov.il", photo:"Hama_Israeli.png" },
    { id:"sc3", key:"Oriel_Chazum", nameEn:"Oriel Chazum", nameJa:"カズム・ウリエル", nameHe:"אוריאל כזום", org:"National Insurance Institute", orgHe:"המוסד לביטוח לאומי", role:"Deputy Director General of Subsistence Benefits, Employment, and Senior Citizens Pensions", roleHe:"סגן מנכ״ל תחום קצבאות קיום, תעסוקה ופנסיות לאזרחים ותיקים", email:"urielc@nioi.gov.il", photo:"Oriel_Chazum.jpeg" },
    { id:"sc4", key:"Orit_Shachar", nameEn:"Orit Shahar", nameJa:"シャハル・オリット", nameHe:"אורית שחר", org:"JDC‑Eshel", orgHe:"ג'וינט ישראל – אשל", role:"Area Head – Health and Nursing Care for Older Adults", roleHe:"ראש תחום בריאות ותפקוד למבוגרים", email:"Orits@jdc.org", photo:"Orit_Shachar.jpg" },
    { id:"sc5", key:"Efrat_Gil", nameEn:"Efrat Gil", nameJa:"ギル・エフラット", nameHe:"אפרת גיל", org:"Ministry of Health", orgHe:"משרד הבריאות", role:"Head of Geriatric division", roleHe:"ראש מחלקת גריאטריה", email:"efrat.gil@moh.gov.il", photo:"Efrat_Gil.png" },
    { id:"sc6", key:"Yafit_Bar", nameEn:"Yafit Bar", nameJa:"バル・ヤフィット", nameHe:"יפעת בר", org:"Ministry for Social Equality and the Advancement of the Status of Women", orgHe:"המשרד לשוויון חברתי וקידום מעמד האישה", role:"Director of Employment and Rights for Seniors", roleHe:"מנהלת תחום תעסוקה וזכויות לאזרחים ותיקים", email:"YAFITBA@mse.gov.il", photo:"Yafit_Bar.png" },
  ];

  var PROGRAM_TEAM_BADGE = "Future Time Program Team";
  var PROGRAM_PHOTO_VER = 1;

  const PROGRAM_TEAM = [
    { id:"pt1", key:"Yuval_Golani", nameEn:"Yuval Golani", nameJa:"ゴラニ・ユヴァル", jaTitle:"ゴラニ・ユヴァル", org:"Joint-ELKA", orgJa:"Joint-ELKA（JDC-ELKA）", role:"Coordinator, \"FutureTime\" Program", roleJa:"FutureTimeプログラム コーディネーター", photo:"Yuval_Golani.png", photoVer:4,
      bioEn:[
        "Yuval Golani leads the operations and logistics of the \"FutureTime\" program. In her previous roles at ELKA, she worked with regional municipal clusters to build mechanisms and strengthen capacities for delivering high-quality social services, leading cross-sector collaborations with the Ministry of Health, the Ministry of Interior, and the Ministry of Welfare and Social Services.",
        "Prior to that, Yuval served as Assistant Spokesperson in the Media, Communication and Advocacy Division at the Ministry of Energy and Infrastructure. Alongside her work, she actively volunteers in social organizations working to reduce social inequality.",
        "Yuval holds a BA in Political Science and International Relations from the Hebrew University of Jerusalem."
      ],
      bioJa:[
        "ユヴァル・ゴラニ氏は、「FutureTime」プログラムの運営およびロジスティクスを統括しています。以前のELKAでの役割においては、地域自治体クラスターと連携し、質の高い社会サービスを提供するための仕組みづくりと能力強化に取り組み、厚生労働省、内務省、福祉省などとの分野横断的な協働を主導してきました。",
        "それ以前は、エネルギー・インフラ省メディア・コミュニケーション・アドボカシー部門で広報補佐官を務めました。業務と並行して、社会的不平等の解消に取り組む社会組織への積極的なボランティア活動も続けています。",
        "ユヴァル氏は、エルサレム・ヘブライ大学にて政治学・国際関係学の学士号を取得しています。"
      ]
    },
    { id:"pt2", key:"Sigal_Mautner", nameEn:"Sigal Mautner Siebzehner", nameJa:"マウトナー・シーブツェナー・シガル", jaTitle:"マウトナー・シーブツェナー・シガル", org:"Joint-ELKA", orgJa:"Joint-ELKA（JDC-ELKA）", role:"Director, \"FutureTime\" Program", roleJa:"FutureTimeプログラム ディレクター", photo:"Sigal_Mautner_Sievzehner.jpeg",
      bioEn:[
        "Sigal Mautner Siebzehner is an organizational consultant and group facilitator with more than 20 years of experience in organizational, personal, and professional development. At ELKA, she has played a key role in designing and managing initiatives led by senior executives and experts from government ministries, local authorities, and civil society organizations.",
        "Previously, Sigal directed the Women's Empowerment Unit at the Israel Association of Community Centers, overseeing leadership programs for thousands of women nationwide. She also served as Director of the \"Youth for Youth\" Association, managed the training department at MATI (Small Business Development Center), and worked as a senior organizational consultant in leading consulting firms.",
        "In these roles, she guided senior management teams, led processes in organizations across multiple sectors, and developed training programs for managers and multi-professional teams. Over the years, Sigal has lectured and facilitated workshops in various academic contexts.",
        "She holds an M.Sc. in Organizational Behavior from Tel Aviv University, is a certified trainer with a certificate in group facilitation from the Zippory Center, and has a certificate in psychotherapy studies from the Temurot School of Dynamic Psychotherapy at Bar-Ilan University."
      ],
      bioJa:[
        "シガル・マウトナー・シーブツェナー氏は、組織コンサルタントおよびグループ・ファシリテーターとして、組織・個人・職業能力の開発において20年以上の経験を有しています。ELKAでは、政府省庁、地方自治体、市民社会組織の高官や専門家が主導するイニシアティブの企画・運営において中心的な役割を担ってきました。",
        "以前は、イスラエル・コミュニティ・センター協会の女性エンパワーメント部門を統括し、全国の数千人の女性を対象としたリーダーシップ・プログラムを監督しました。また、「ユース・フォー・ユース」協会の理事長、MATI（中小企業開発センター）研修部門の管理者、大手コンサルティング会社でのシニア組織コンサルタントなどを歴任しています。",
        "これらの役割において、上級管理チームへの助言、多分野にわたる組織プロセスの主導、管理者および多職種チーム向け研修プログラムの開発を行ってきました。長年にわたり、さまざまな学術的文脈で講義やワークショップのファシリテーションも担当しています。",
        "テルアビブ大学にて組織行動学の修士号を取得。ジポリ・センターのグループ・ファシリテーション修了証、バル・イラン大学テムロット動的心理療法スクールの心理療法研究修了証を保有しています。"
      ]
    },
    { id:"pt3", key:"Hadas_Barzilai", nameEn:"Hadas Barzilai", nameJa:"バルジライ・ハダス", jaTitle:"バルジライ・ハダス", org:"Joint-ELKA", orgJa:"Joint-ELKA（JDC-ELKA）", role:"Director, \"FutureTime\" Program", roleJa:"FutureTimeプログラム ディレクター", photo:"Hadas_Barzilai.jpg",
      bioEn:[
        "Hadas Barzilai directs the \"FutureTime\" program at Joint-ELKA, fostering cross-sector collaboration to improve the efficiency and effectiveness of systems and organizations, with the aim of enhancing quality of life for Israeli citizens.",
        "In her previous roles at ELKA, Hadas contributed to developing the Regional Clusters Initiative. She worked closely with the Eastern Negev regional authorities cluster, establishing and leading a forum for local authority heads, a welfare forum, and a multi-sector leadership program. These efforts culminated in a strategic regional economic development plan for the Eastern Negev.",
        "Before joining ELKA, Hadas founded and managed a nonprofit organization dedicated to advancing equality and social justice. Under her leadership, the organization increased public awareness of social rights, provided the tools needed to exercise those rights, and encouraged active civic engagement to influence decision-making processes affecting citizens' quality of life. She led the organization's southern branch for 17 years.",
        "Hadas holds a Master of Social Work (Administration and Welfare Policy track) and a Bachelor of Social Work, both earned cum laude at Ben-Gurion University."
      ],
      bioJa:[
        "バルジライ・ハダス氏は、Joint-ELKA（JDC-ELKA）において「FutureTime」プログラムのディレクターを務めています。分野横断的な協働を推進し、制度や組織の効率と有効性を高めることで、イスラエル国民の生活の質の向上を目指しています。",
        "以前はELKAにおいて、地域クラスター・イニシアティブの開発に貢献しました。東ネゲブ地域自治体クラスターと密接に連携し、地方自治体首長のフォーラム、福祉フォーラム、多分野リーダーシップ・プログラムの設立と運営を主導しました。これらの取り組みは、東ネゲブにおける戦略的な地域経済発展計画の策定につながりました。",
        "ELKA入社以前は、平等と社会正義の推進に取り組む非営利団体を設立・運営しました。同氏のリーダーシップの下、組織は社会権利に関する市民の認識を高め、権利を行使するために必要な手段を提供し、市民の生活の質に影響を与える意思決定プロセスへの積極的な市民参加を促進しました。同組織の南部支部を17年間率いていました。",
        "ベン・グリオン大学にて、社会福祉学修士号（行政・福祉政策コース）および社会福祉学学士号を、いずれも最優等（cum laude）で取得しています。"
      ]
    },
    { id:"pt4", key:"Tal_Miles", nameEn:"Tal Miles", nameJa:"マイルズ・タル", jaTitle:"マイルズ・タル", org:"Joint-ELKA", orgJa:"Joint-ELKA（JDC-ELKA）", role:"Director, National Public System Network Initiatives", roleJa:"全国公共システム・ネットワーク・イニシアティブ ディレクター", photo:"Tal_Miles.png", photoVer:2,
      bioEn:[
        "Tal Miles is the Director of National Public System Network Initiatives at JDC Elka, where she leads large-scale collaborations and cross-sector partnerships to strengthen public systems and address complex societal challenges. Working closely with leaders across central and local government, civil society, and professional networks, she designs and implements initiatives that translate collaboration into meaningful, lasting change in the public sector.",
        "Prior to this role, Tal served as CEO of the Israel Green Building Council, where she led national efforts to advance sustainable urban development. Partnering with government decision-makers, municipalities, industry, and civil society, she promoted policies and practices that integrate environmental, social, and economic sustainability. Earlier, she held senior leadership positions at the Council, including VP of Operations and Training.",
        "Beyond her formal roles, Tal is an active community entrepreneur and a dedicated advocate for the inclusion of people with special needs.",
        "Tal holds a BA in Community Coordination from the Open University and Beit Berl College, and an MA in Mediation and Conflict Resolution from Tel Aviv University."
      ],
      bioJa:[
        "マイルズ・タル氏は、JDC-ELKA（イスラエル・エルカ）において、全国公共システム・ネットワーク・イニシアティブ担当ディレクターを務めています。中央政府、地方自治体、市民社会組織、専門家ネットワークなど、多様な主体との連携を通じて、大規模な協働プロジェクトや分野横断的なパートナーシップを推進し、公共システムの強化と複雑な社会課題の解決に取り組んでいます。",
        "現職に就く以前は、イスラエル・グリーンビルディング協会の最高経営責任者（CEO）を務め、持続可能な都市開発の推進に向けた全国的な取り組みを主導しました。政府機関、自治体、産業界、市民社会との連携を通じて、環境・社会・経済の持続可能性を統合した政策や実践の普及に尽力しました。また、それ以前には同協会において事業運営・研修担当副代表（VP of Operations and Training）などの要職を歴任しています。",
        "職務以外でも、地域社会に根ざしたコミュニティ活動や社会起業に積極的に取り組むとともに、特別な支援を必要とする人々の包摂と社会参加の推進にも力を注いでいます。",
        "オープン大学およびベイト・ベルル・カレッジにてコミュニティ・コーディネーションの学士号を取得し、テルアビブ大学にて調停・紛争解決学の修士号を取得しています。"
      ]
    }
  ];
  var PROGRAM_TEAM_ORDER = ['pt4', 'pt3', 'pt2', 'pt1'];

  var STEERING_BADGE = "Steering Committee";
  var STEERING_PHOTO_VER = 11;

  var STEERING_BIOS = {
    "Yariv_Man": [
      "Yariv Man is Deputy Director General at the Ministry of Welfare and Social Affairs, where he heads the Administration for Senior Citizens. He is committed to promoting reforms aimed at adapting the welfare system to the needs of a continuously growing older population, while delegating planning and budgeting authority to local municipalities.",
      "Previously, he served as Senior Director in the Department for the Socio-Economic Advancement of the Bedouin Society. Yariv holds an M.A. in Political Science, an M.A. in Public Policy, and a B.A. in Geography, all from the Hebrew University. He lives in Jerusalem with his wife and three sons."
    ],
    "Hama_Israeli": [
      "Hama Israeli-Smitzer serves as Director of the Senior Housing Systems Division at the Israeli Ministry of Welfare and Social Affairs, leading national policy, regulation, and development of housing services for older adults, including nursing homes and assisted living facilities. She also serves as Acting Director of the Strategy and Population Aging Preparedness Division, overseeing strategic planning, research, digitization, and cross-government collaborations on aging policy.",
      "In her previous role, she was responsible for the Ministry\u2019s out-of-home care systems, including residential facilities for children and youth and shelters for women affected by domestic violence. Hama is an expert in the development of welfare and housing services, with extensive experience in leading large-scale government programs, regulation, and multidisciplinary partnerships. She holds a Master\u2019s degree in Clinical Social Work from the Hebrew University of Jerusalem."
    ],
    "Oriel_Chazum": [
      "Oriel Chazum serves as Deputy Director General of Subsistence Benefits, Employment, and Senior Citizens Pensions at the National Insurance Institute. He holds an M.A. in Public Policy from the Hebrew University.",
      "He is a partner in formulating and promoting policy for benefit recipients and is responsible for providing services and ensuring access to rights in three main areas:",
      "<strong>Employment Benefits:</strong> Oriel oversees the administration and processing of income-replacement benefits, ensuring financial support for individuals during career transitions or periods of unemployment.",
      "<strong>Subsistence Allowances:</strong> He manages vital welfare programs designed to guarantee basic living conditions for vulnerable populations. This area focuses on reducing socioeconomic gaps and providing a reliable financial foundation for low-income individuals and their families, ensuring that they receive the support they need.",
      "<strong>Senior Citizens:</strong> Oriel leads national initiatives to enhance the holistic well-being and economic security of older adults through two main departments. The first is Counseling for Senior Citizens and Their Families, a nationwide network that provides emotional, social, and community-based support for older adults and their families. The second is Third-Age Dependents Pensions, a vital financial safety net designed to significantly reduce poverty rates among older adults, ensure economic independence, and provide sustainable economic support for a dignified standard of living."
    ],
    "Orit_Shachar": [
      "Orit Shahar is Area Head of Health and Functioning for Older Adults at JDC-Israel, Eshel. She holds an M.A. in Public Policy from the Hebrew University.",
      "She works to advance optimal aging in Israel by initiating large-scale, measurable initiatives designed to help shape healthy aging in the country.",
      "Her work focuses on two main areas:",
      "<strong>Health and Functioning:</strong> This area aims to reduce functional decline and improve self-management and health literacy among pre-frail older adults within Israel\u2019s healthcare system, including hospitals and HMOs. In partnership with the Ministry of Health, Orit operates a program designed to decrease functional decline among hospitalized older adults by integrating age-friendly practices that encourage walking and delirium screening.",
      "<strong>Formal Caregivers:</strong> In partnership with the National Insurance Institute, Orit promotes an active and healthy approach for older adults receiving home care. This includes developing a new skilled caregiver role and a career ladder designed to transform the knowledge and skills of the formal caregiving sector, helping it become more certified and oriented toward healthy aging.",
      "Orit has extensive experience in developing social services, leading multi-partner collaborations, training professionals, and conducting applied research."
    ],
    "Efrat_Gil": [
      "Dr. Efrat Gil is a specialist in internal medicine, geriatrics, and medical management. She currently serves as Head of the Geriatrics Division at the Ministry of Health.",
      "She worked for many years as a specialist in internal medicine and geriatrics at Bnei Zion Hospital, where she established the hospital\u2019s geriatrics unit. Following that, she managed the geriatric department in the Haifa and Western Galilee district of Clalit Health Services and later served as Deputy Director of Emek Hospital.",
      "Throughout her career, Efrat has been deeply involved in education and training. She has served as Head of the Geriatrics Department at the Faculty of Medicine at the Technion and as a member of the Israeli Geriatric Association Committee."
    ],
    "Yafit_Bar": [
      "Yafit Bar serves as Director of the Employment and Rights Utilization Department for Senior Citizens at the Ministry for Social Equality and the Advancement of the Status of Women.",
      "She is a public sector executive with over 10 years of leadership experience, building on a prior background as a small business manager in the private sector. She leads national policy, strategic initiatives, and program development for older adults aged 60 and above across two core areas: senior employment and proactive rights utilization.",
      "<strong>Senior Employment and Adapting to an Aging Labor Market:</strong> Yafit is responsible for driving strategic initiatives, legislation, and efforts to shift employer perceptions in the era of the \u201c100-Year Lifespan.\u201d She oversees national career development, training, and guidance programs, including the flagship \u201cVatikim Ba\u2019avoda\u201d program. She also leads government initiatives to establish dedicated civil service positions for older adults, advance financial readiness for retirement, and develop the \u201cOrganizational Readiness Certification for 100 Years of Life\u201d for employers.",
      "<strong>Rights Utilization:</strong> Yafit leads the national framework for senior citizens\u2019 rights utilization, which includes a dedicated service hotline, community lectures, and professional training. She also directs an innovative healthcare rights initiative in hospitals, powered by senior volunteers who provide vital information and guidance to hospitalized older adults and their families."
    ]
  };

  function steeringBioHtml(key) {
    var paras = STEERING_BIOS[key];
    if (!paras || !paras.length) return '';
    return paras.map(function (t) {
      return '<p style="margin:0 0 10px;font-size:12px;line-height:1.55;opacity:0.95">'+t+'</p>';
    }).join('');
  }

  function cardBioParaHtml(text) {
    return '<p style="margin:0 0 8px;font-size:11px;line-height:1.55;opacity:0.95">'+text+'</p>';
  }

  function buildCardBackBioFlipHtml(flipId, jaTitle, bioJaPars, bioEnPars) {
    var jaHtml = (bioJaPars || []).map(cardBioParaHtml).join('');
    var enHtml = (bioEnPars || []).map(cardBioParaHtml).join('');
    var titleHtml = jaTitle ? '<div style="font-weight:800;font-size:13px;margin:0 0 8px;text-align:center">'+escapeHtml(jaTitle)+'</div>' : '';
    return '<div class="card-bio-flip" id="'+flipId+'" role="group" aria-label="Biography language toggle">' +
      '<div class="card-bio-flip-scroll">' +
        '<div class="card-bio-flip-inner">' +
          '<div class="card-bio-flip-face card-bio-flip-front" lang="ja">'+titleHtml+jaHtml+'</div>' +
          '<div class="card-bio-flip-face card-bio-flip-back" lang="en">'+enHtml+'</div>' +
        '</div>' +
      '</div>' +
      '<button type="button" class="card-bio-flip-hint" data-hint-front="English" data-hint-back="日本語">' +
        '<span class="card-bio-flip-hint-label">English</span><span class="card-bio-flip-hint-arrow" aria-hidden="true">→</span>' +
      '</button>' +
    '</div>';
  }

  function buildStaffCarouselSection(title, members, sectionClass) {
    var boxStyle = 'box-shadow:0 4px 24px rgba(0,0,0,0.12);margin-bottom:32px';
    var cardsHtml = members.map(renderSteeringCard).join('');
    return '<section class="steering-section '+sectionClass+'">' +
      '<h2 class="all-participants-title steering-section-heading">'+title+'</h2>' +
      '<div class="about-box steering-section-box" style="'+boxStyle+'">' +
        '<div class="steering-carousel">' +
          '<button type="button" class="steering-carousel-prev" aria-label="Previous">&lt;</button>' +
          '<button type="button" class="steering-carousel-next" aria-label="Next">&gt;</button>' +
          '<div class="steering-carousel-track">'+cardsHtml+'</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function setCardFlipped(inner, flipped) {
    if (!inner) return;
    inner.classList.toggle('is-card-flipped', flipped);
    inner.style.transform = flipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
  }

  function bindCardBioFlips(container) {
    container.querySelectorAll('.card-bio-flip').forEach(function (flipEl) {
      if (flipEl.getAttribute('data-bound') === '1') return;
      flipEl.setAttribute('data-bound', '1');
      var hint = flipEl.querySelector('.card-bio-flip-hint');
      function updateFlipHint(flipped) {
        if (!hint) return;
        var label = hint.querySelector('.card-bio-flip-hint-label');
        var arrow = hint.querySelector('.card-bio-flip-hint-arrow');
        if (label && arrow) {
          label.textContent = flipped ? hint.getAttribute('data-hint-back') : hint.getAttribute('data-hint-front');
          arrow.textContent = flipped ? '←' : '→';
          hint.classList.toggle('is-flipped', flipped);
        }
      }
      function toggleBioFlip(e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        var flipped = flipEl.classList.toggle('is-flipped');
        updateFlipHint(flipped);
      }
      if (hint) {
        hint.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          toggleBioFlip();
        });
      }
    });
  }

  function bindStaffCardFlips(container) {
    container.querySelectorAll('.steering-card.participant-card').forEach(function (el) {
      if (el.getAttribute('data-flip-bound') === '1') return;
      el.setAttribute('data-flip-bound', '1');
      var inner = el.querySelector('.card-inner');
      var front = el.querySelector('.card-front');
      var back = el.querySelector('.card-back');
      function flipToBack(e) {
        if (e) e.stopPropagation();
        setCardFlipped(inner, true);
      }
      function flipToFront(e) {
        if (e.target.closest('.card-bio-flip, a[href^="mailto:"]')) return;
        if (e) e.stopPropagation();
        setCardFlipped(inner, false);
      }
      if (front) {
        front.addEventListener('click', flipToBack);
      }
      if (back) {
        back.addEventListener('click', flipToFront);
      }
    });
  }

  function bindParticipantCardFlips(container) {
    container.querySelectorAll('#cards-container .participant-card').forEach(function (el) {
      el.onclick = function () {
        var inner = el.querySelector('.card-inner');
        if (!inner) return;
        var flipped = inner.classList.contains('is-card-flipped');
        setCardFlipped(inner, !flipped);
      };
    });
  }

  /** Japanese affiliation/title for card backs (from Members tab). Keys match participant `key`. */
  var MEMBER_JA_BACK = {
    "Yariv_Man": { orgJa:"福祉社会保障省", roleJa:"高齢者行政局 副局長" },
    "Hama_Israeli": { orgJa:"福祉社会保障省", roleJa:"高齢者住宅制度部 上席部長長" },
    "Oriel_Chazum": { orgJa:"国家保険院", roleJa:"生計保障給付・雇用・高齢者年金担当次長" },
    "Orit_Shachar": { orgJa:"JDC-エシェル（イスラエル高齢者支援機関）", roleJa:"高齢者の健康・看護ケア分野責任者" },
    "Efrat_Gil": { orgJa:"保健省", roleJa:"老年医学部門長" },
    "Yafit_Bar": { orgJa:"社会平等・女性の地位向上省", roleJa:"高齢者雇用・権利担当ディレクター" },
    "Avishay_Cohen": { orgJa:"労働省 多世代雇用課", roleJa:"課長" },
    "Avital_Simcha_Shlezinger": { orgJa:"国家保険院 高齢者・家族支援相談部", roleJa:"部長" },
    "Idit_Ayala_Reiss": { orgJa:"司法省 法務・法制室", roleJa:"顧問" },
    "Jasmin_Vulej": { orgJa:"社会福祉保障省 モデル開発室", roleJa:"室長" },
    "Liat_Stark": { orgJa:"司法省 後見人総局", roleJa:"地区部長" },
    "Lior_Zohar": { orgJa:"財務省 戦略・年金相談課", roleJa:"課長" },
    "Rachela_Akuka": { orgJa:"財務省 戦略・税務庁 個人課税課", roleJa:"課長" },
    "Ravit_Nakar_El-Ezra": { orgJa:"福祉社会保障省 高齢者行政局 予算・料金担当", roleJa:"上席課長" },
    "Roei_Rafael_Babai": { orgJa:"財務省 国家社会保険・予算課", roleJa:"担当官" },
    "Ronit_Rozin": { orgJa:"ホロコースト生存者権利機関", roleJa:"所長" },
    "Valentina_Batia_Chai": { orgJa:"国家保険院", roleJa:"支部長" },
    "Yehuda_Arie_Halali": { orgJa:"社会平等・女性地位向上省 高齢者コールセンター課", roleJa:"課長" },
    "Meital_Weissman_Tsabari": { orgJa:"福祉社会保障省 政策企画・戦略部", roleJa:"知識管理分野責任者" },
    "Alon_Kalman": { orgJa:"Gil-Ad高齢者医療センター", roleJa:"CEO" },
    "Eden_Chen": { orgJa:"イェソドット・レツミハ・ドロール（NGO）", roleJa:"ドロール高齢者コミュニティ・ネットワーク ディレクター" },
    "Josef_Kaplan": { orgJa:"レヴ・ガニム・シニアリビング", roleJa:"CEO" },
    "Liat_Sikron_Vazan": { orgJa:"JDC-エシェル（イスラエル高齢者支援機関）", roleJa:"ナレッジ・ラーニングセンター長" },
    "Yael_Barkan_Dolev": { orgJa:"ギル・オズ・オーガニゼーション", roleJa:"CEO" },
    "Adaya_Nissenholtz": { orgJa:"クラリット・ヘルスサービス（国内最大医療保険・医療提供機関）", roleJa:"地域老年科医" },
    "Dalit_Cypel": { orgJa:"クラリット・ヘルスサービス（国内最大医療保険・医療提供機関）", roleJa:"老年医学分野長" },
    "Galit_Segal": { orgJa:"メウヘデットHMO（国内の医療保険組織）", roleJa:"主任老年科医" },
    "Netanel_Levi": { orgJa:"ショハム・メディカルセンター", roleJa:"理学療法部門長" },
    "Suaad_Ektelat": { orgJa:"ビール・ヤアコブ＝ネス・ツィオナ精神医療センター", roleJa:"成人・老年看護ナースプラクティショナー（診療看護師）" },
    "Galit_Groper": { orgJa:"エメク・ヘフェル地域評議会 社会サービス・保健課", roleJa:"課長" },
    "Michal_Schwartz": { orgJa:"リション・レジオン市 高齢者課", roleJa:"課長" },
    "Nes-Ya_Strasburg": { orgJa:"南ソレク・クラスター", roleJa:"最適加齢担当地域ディレクター" },
    "Omer_Ungar": { orgJa:"アシュドッド市 社会サービス部", roleJa:"部長" },
    "Shirli_Reznizky_Kahan": { orgJa:"マイヤーズJDCブルックデール研究所", roleJa:"上席研究員兼高齢化研究チームリーダー" },
    "Shmuel_Springer": { orgJa:"アリエル大学 学術・地域連携部門", roleJa:"統括責任者" }
  };

  function memberJaBack(key) {
    return MEMBER_JA_BACK[key] || { orgJa: '', roleJa: '' };
  }
  function backJaSubHtml(text) {
    if (!text) return '';
    return '<br/><span style="font-size:11px;opacity:0.85;line-height:1.45">'+escapeHtml(text)+'</span>';
  }

  const SECTORS = [
    { key:"all",                 label:"All Sectors",        short:"Total",    icon:"👥" },
    { key:"Civil Society",       label:"Civil Society",      short:"Civil Society",    icon:"🤝" },
    { key:"Healthcare System",   label:"Healthcare System",  short:"Healthcare System", icon:"❤️" },
    { key:"Local Government",    label:"Local Government",   short:"Local Government",   icon:"🏢" },
    { key:"Central Government",  label:"Central Government", short:"Central Government", icon:"🏛" },
    { key:"Academia & Research", label:"Academia & Research", short:"Academia & Research", icon:"🎓" },
  ];

  var P = { dark:'#214F63', hero:'#3E788C', mid:'#4D8796', soft:'#7EA7B5', pale:'#CEDDE2', text:'#214F63', nav:'#214F63' };
  var PRIMARY = P.dark;
  const SC = {
    "all":                 { bg:P.nav, light:P.pale, border:P.nav, text:"#ffffff" },
    "Central Government":  { bg:"#6b6590", light:"#CFCBE1", border:"#8b85a8", text:"#3d3a5c" },
    "Local Government":    { bg:"#8a7572", light:"#DACFCD", border:"#9a9090", text:"#3d3a5c" },
    "Healthcare System":   { bg:"#5783CB", light:"#C0C8D5", border:"#6b9bd4", text:"#3d3a5c" },
    "Civil Society":       { bg:"#5a7a4a", light:"#F0F3DE", border:"#9ba88e", text:"#3d3a5c" },
    "Academia & Research": { bg:"#755EE6", light:"#F3E8FF", border:"#a78bfa", text:"#3d3a5c" },
  };

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function counts() {
    const c = { all: PARTICIPANTS.length };
    PARTICIPANTS.forEach(function (p) { c[p.sector] = (c[p.sector] || 0) + 1; });
    return c;
  }

  var SECTOR_ORDER = ["Civil Society","Healthcare System","Local Government","Central Government","Academia & Research"];
  function filterParticipants(activeSector, search) {
    var list = PARTICIPANTS.filter(function (p) {
      const ms = activeSector === "all" || p.sector === activeSector;
      const q = search.toLowerCase();
      const mq = !q || p.nameEn.toLowerCase().indexOf(q) >= 0 || (p.nameJa || '').indexOf(q) >= 0 || p.nameHe.indexOf(q) >= 0 || p.org.toLowerCase().indexOf(q) >= 0 || (p.orgLine2 || '').toLowerCase().indexOf(q) >= 0 || p.role.toLowerCase().indexOf(q) >= 0;
      return ms && mq;
    });
    return list.sort(function (a, b) {
      var ia = SECTOR_ORDER.indexOf(a.sector);
      var ib = SECTOR_ORDER.indexOf(b.sector);
      if (ia !== ib) return ia - ib;
      return a.id - b.id;
    });
  }

  function renderAboutPage(container, setPage) {
    var partners = ["Prime Minister's Office","Ministry of Welfare & Social Security","Ministry of Health","Ministry for Social Equality","Ministry of Finance","National Insurance Institute","Local Government Bodies","JDC Israel – Eshel","JDC Israel – Elka"];
    var goals = [
      { icon:"💬", titleEn:"Shared Ecosystem Language", titleJa:"共通言語の構築", descEn:"Develop a common professional language across the aging ecosystem.", descJa:"高齢化エコシステムにおける専門用語を確立します。" },
      { icon:"🔭", titleEn:"Shared Future Vision", titleJa:"未来ビジョンの共有", descEn:"Build a collective vision for the future of aging in Israel.", descJa:"高齢化分野における共通の未来像を描きます。" },
      { icon:"🤝", titleEn:"Cross-Sector Collaboration", titleJa:"分野横断の連携", descEn:"Strengthen collaboration between organizations and systems.", descJa:"組織間および制度間の協働を促進します。" },
      { icon:"🚀", titleEn:"Joint Initiatives", titleJa:"共同プロジェクトの推進", descEn:"Develop and lead collaborative initiatives that advance optimal aging in Israel.", descJa:"最適な高齢化を実現するための共同イニシアティブを開発・推進します。" },
    ];

    var bgEn = '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">Preparing for an era in which people may live 100 years is one of the strategic challenges facing the State of Israel in the coming decades. It carries significant implications and opportunities across many fields and constitutes a true national mission.</p><p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">Optimal preparation requires synergistic collaboration between systems and between people who share a common language, professional perspective, and a shared vision for the future. To address this need, <strong>&quot;Future Time&quot; (Zman Atid)</strong> was developed — a multi-system leadership program that brings together leaders who seek to drive change, think together, and act collaboratively around core challenges related to optimal aging, alongside organizational challenges concerning how systems operate and function.</p><p style="margin:0;font-size:14px;line-height:1.85;color:white"><strong>&quot;Future Time&quot;</strong> is part of the national program <strong>&quot;Atudot LeIsrael&quot; (Reserves for Israel)</strong>, a strategic initiative designed to build human capital reserves for Israel\'s public service sector. The program is the result of a collaboration between the Prime Minister\'s Office (Government and Society Division and the Atudot LeIsrael Division), the Ministry of Welfare and Social Security, the Ministry of Health, the Ministry for Social Equality, the Ministry of Finance, the National Insurance Institute, local government, and JDC Israel (Eshel and Elka).</p>';
    var bgJa = '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">100年時代への備えは、今後数十年においてイスラエルが直面する最も重要な戦略的課題の一つである。この課題は、さまざまな分野において大きな意義と機会をもたらし、国家的使命として取り組むべきテーマである。</p><p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">この課題に効果的に対応するためには、制度や組織、そして人々の間での分野横断的な連携が不可欠である。共通の言語、専門的な視点、そして未来に対する共有されたビジョンを持つリーダーたちによる協働が求められている。</p><p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">そのために開発されたのが<strong>「זמן עתיד(Zman Atid / Future Time)」</strong>である。本プログラムは、制度や組織を横断したリーダーシッププログラムであり、変化を生み出すリーダーたちを結びつけ、最適な高齢化(Optimal Aging)に関する主要課題や制度・組織の運営に関わる課題について共に考え、協働して行動することを目的とする。</p><p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">本プログラムは、イスラエルの公共サービス分野における人的資本の育成を目的とする国家戦略プログラムの一環として実施されている。</p><p style="margin:0;font-size:14px;line-height:1.85;color:white">この取り組みは、首相府(政府・社会局および 国家戦略プログラム部門)、社会福祉・社会保障省、保健省、社会的平等省、財務省、国民保険機構、地方自治体、および JDCイスラエル(Eshel・Elka) の協力により推進されている。</p>';

    // Extra text block above the main "OBJECTIVES & GOALS" section.
    // Populated from the text provided in the PDF at the path you shared.
    var delegationEnHtml =
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">The Future Time Delegation is a multidisciplinary study program designed to explore Japan’s advanced and integrated approach to population aging - one of the most pressing global challenges of the 21st century.</p>' +
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">As a global leader in longevity and aging innovation, Japan offers a unique ecosystem where healthcare, welfare, community systems, governance, and technology operate in close integration to support healthy, independent, and dignified aging.</p>' +
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">By examining Japan’s holistic and systemic approach, the delegation seeks to generate actionable insights and strengthen Israel–Japan collaboration in addressing the challenges and opportunities of aging societies.</p>' +
      '<p style="margin:0 0 8px;font-size:14px;line-height:1.85;color:white"><strong>The program is structured around four core pillars:</strong></p>' +
      '<ul style="margin:0 0 16px 18px;padding:0;color:white;font-size:14px;line-height:1.85">' +
        '<li style="margin:0 0 6px">Systemic infrastructure and policy frameworks</li>' +
        '<li style="margin:0 0 6px">Prevention, dependency reduction, and care models</li>' +
        '<li style="margin:0 0 6px">Community and multi-generational living</li>' +
        '<li style="margin:0">Innovation, investment, and technology</li>' +
      '</ul>' +
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">In addition to site visits and professional engagements in Japan, the program will include lectures and presentations from Israeli participants, enabling a two-way exchange of knowledge and experience. This mutual learning framework is designed to foster meaningful dialogue and identify opportunities for collaboration, adaptation, and joint initiatives.</p>' +
      '<p style="margin:0 0 8px;font-size:14px;line-height:1.85;color:white"><strong>The delegation aims to engage with a wide range of institutions across the full continuum of services, including:</strong></p>' +
      '<ul style="margin:0 0 8px 18px;padding:0;color:white;font-size:14px;line-height:1.85">' +
        '<li style="margin:0 0 6px">Public day care and rehabilitation systems</li>' +
        '<li style="margin:0 0 6px">Municipal and regional governance models</li>' +
        '<li style="margin:0 0 6px">Welfare and community-based services</li>' +
        '<li style="margin:0 0 6px">Multi-generational community centers</li>' +
        '<li style="margin:0 0 6px">Government agencies and policy frameworks</li>' +
        '<li style="margin:0">Innovation hubs, investment entities, and gerontechnology initiatives</li>' +
      '</ul>';

    var delegationJaHtml =
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">本視察団は、21世紀における最も重要なグローバル課題の一つである人口高齢化に対し、日本の先進的かつ統合的なアプローチを探求することを目的とした多分野横断型のスタディプログラムである。</p>' +
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">高齢化および長寿に関する分野において世界的リーダーである日本は、医療、福祉、地域社会、ガバナンス、テクノロジーが有機的に連携する独自のエコシステムを有しており、健康で自立した尊厳ある高齢期の実現を支えている。</p>' +
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">本視察団は、日本の包括的かつシステム的な取り組みを検証することにより、実践的な知見の創出と、高齢化社会における課題および機会への対応に向けた日イスラエル間の連携強化を目指すものである。</p>' +
      '<p style="margin:0 0 8px;font-size:14px;line-height:1.85;color:white"><strong>本プログラムは、以下の4つの中核テーマに基づいて構成される：</strong></p>' +
      '<ul style="margin:0 0 16px 18px;padding:0;color:white;font-size:14px;line-height:1.85">' +
        '<li style="margin:0 0 6px">制度基盤および政策フレームワーク</li>' +
        '<li style="margin:0 0 6px">予防・自立支援・ケアモデル</li>' +
        '<li style="margin:0 0 6px">地域社会および多世代共生</li>' +
        '<li style="margin:0">イノベーション・投資・テクノロジー</li>' +
      '</ul>' +
      '<p style="margin:0 0 16px;font-size:14px;line-height:1.85;color:white">本プログラムでは、日本における視察および専門家との交流に加え、イスラエル側参加者による講義・プレゼンテーションを実施し、双方向の知識および経験の共有を行う。この相互学習の枠組みを通じて、実質的な対話の促進と、協働・適応・共同イニシアティブの創出機会の特定を図る。</p>' +
      '<p style="margin:0 0 8px;font-size:14px;line-height:1.85;color:white"><strong>視察団は、サービス提供の全体像を横断する多様な機関との連携を目指しており、主な訪問先は以下を想定している：</strong></p>' +
      '<ul style="margin:0 0 8px 18px;padding:0;color:white;font-size:14px;line-height:1.85">' +
        '<li style="margin:0 0 6px">公的デイケアおよびリハビリテーション制度</li>' +
        '<li style="margin:0 0 6px">地方自治体および広域行政モデル</li>' +
        '<li style="margin:0 0 6px">福祉サービスおよび地域支援体制</li>' +
        '<li style="margin:0 0 6px">多世代共生型コミュニティセンター</li>' +
        '<li style="margin:0 0 6px">政府機関および政策フレームワーク</li>' +
        '<li style="margin:0">イノベーション拠点、投資機関、および高齢化関連テクノロジー分野</li>' +
      '</ul>';
    var goalBoxStyle = 'background:rgba(255,255,255,0.1);border-radius:12px;padding:18px 20px;border-left:4px solid '+P.soft+';margin-bottom:12px';
    var goalsEnHtml = goals.map(function(g){ return '<div style="'+goalBoxStyle+'"><div style="font-weight:800;font-size:15px;color:white;margin-bottom:6px">'+g.titleEn+'</div><div style="font-size:13.5px;color:rgba(255,255,255,0.95);line-height:1.6">'+g.descEn+'</div></div>'; }).join('');
    var goalsJaHtml = goals.map(function(g){ return '<div style="'+goalBoxStyle+'"><div style="font-weight:800;font-size:15px;color:white;margin-bottom:6px">'+g.titleJa+'</div><div style="font-size:13.5px;color:rgba(255,255,255,0.95);line-height:1.6">'+g.descJa+'</div></div>'; }).join('');

    container.innerHTML = '<div style="min-height:100vh;background:'+P.pale+'">' +
      '<div class="about-banner" style="background:'+P.hero+';width:100%;overflow:hidden">' +
        '<div style="padding:48px 24px;text-align:center"><div style="display:flex;align-items:center;justify-content:center;gap:14px"><img src="images/just_the_round_logo.png" alt="Future Time" style="height:54px;width:auto;display:block" /><h1 style="margin:0;color:white;font-size:32px;font-weight:800;letter-spacing:0.02em">Future Time Program</h1></div></div>' +
      '</div>' +
      '<div class="about-content">' +
        '<div class="about-box" style="box-shadow:0 4px 24px rgba(0,0,0,0.15);margin-bottom:24px">' +
          '<div class="about-grid">' +
            '<div style="min-width:0;flex:1"><div style="font-weight:900;font-size:18px;letter-spacing:0.08em;margin-bottom:20px;text-align:center">DELEGATION OVERVIEW</div>'+delegationEnHtml+'</div>' +
            '<div class="about-col-ja" style="min-width:0;flex:1;border-left:1px solid rgba(255,255,255,0.35);padding-left:24px"><div style="font-weight:900;font-size:18px;letter-spacing:0.08em;margin-bottom:20px;text-align:center">視察団概要</div>'+delegationJaHtml+'</div>' +
          '</div>' +
        '</div>' +
        '<div class="about-box" style="box-shadow:0 4px 24px rgba(0,0,0,0.15);margin-bottom:24px">' +
          '<div class="about-grid">' +
            '<div style="min-width:0;flex:1"><div style="font-weight:900;font-size:18px;letter-spacing:0.08em;margin-bottom:20px;text-align:center">BACKGROUND</div>'+bgEn+'</div>' +
            '<div class="about-col-ja" style="min-width:0;flex:1;border-left:1px solid rgba(255,255,255,0.35);padding-left:24px"><div style="font-weight:900;font-size:18px;letter-spacing:0.08em;margin-bottom:20px;text-align:center">背景</div>'+bgJa+'</div>' +
          '</div>' +
        '</div>' +
        '<div class="about-box" style="box-shadow:0 4px 24px rgba(0,0,0,0.15)">' +
          '<div class="about-grid" style="margin-bottom:28px">' +
            '<div style="min-width:0;flex:1"><div style="font-weight:900;font-size:20px;letter-spacing:0.06em;margin-bottom:24px;text-align:center">OBJECTIVES &amp; GOALS</div><div style="font-weight:800;font-size:16px;margin-bottom:10px">Program Objective</div><p style="margin:0;font-size:14px;line-height:1.8;color:rgba(255,255,255,0.95)">To establish a network of <strong>29 senior leaders</strong> from diverse sectors, working together to promote optimal aging in Israel in the era of 100-year lives.</p></div>' +
            '<div class="about-col-ja" style="min-width:0;flex:1;border-left:1px solid rgba(255,255,255,0.35);padding-left:24px"><div style="font-weight:900;font-size:20px;letter-spacing:0.06em;margin-bottom:24px;text-align:center">目的及目標</div><div style="font-weight:800;font-size:16px;margin-bottom:10px">プログラムの目的</div><p style="margin:0;font-size:14px;line-height:1.8;color:rgba(255,255,255,0.95)">多様な分野で活躍する29名のリーダーによるネットワークを形成し、100年時代におけるイスラエルの最適な高齢化(Optimal Aging)の推進を目指します。</p></div>' +
          '</div>' +
          '<div class="about-grid">' +
            '<div style="min-width:0;flex:1"><div style="font-weight:800;font-size:16px;margin-bottom:12px">Program Goals</div>'+goalsEnHtml+'</div>' +
            '<div class="about-col-ja" style="min-width:0;flex:1;border-left:1px solid rgba(255,255,255,0.35);padding-left:24px"><div style="font-weight:800;font-size:16px;margin-bottom:12px">プログラムの目標</div>'+goalsJaHtml+'</div>' +
          '</div>' +
        '</div>' +
        '<section class="about-group-image" style="margin-top:36px">' +
          '<div style="background:'+P.dark+';border-radius:16px;padding:16px;box-shadow:0 4px 24px rgba(0,0,0,0.12)">' +
            '<img src="'+PHOTO_DIR+'Group_image.jpeg" alt="Future Time group" style="width:100%;height:auto;display:block;border-radius:12px;object-fit:cover" loading="lazy" decoding="async"/>' +
          '</div>' +
        '</section>' +
        '<section class="about-cta" style="margin-top:24px;text-align:center">' +
          '<button id="cta-participants" style="background:'+P.pale+';color:'+P.dark+';border:none;border-radius:14px;padding:16px 40px;font-size:16px;font-weight:800;cursor:pointer;font-family:inherit;box-shadow:0 4px 18px rgba(0,0,0,0.2)">👥 Meet the 29 Participants →</button>' +
        '</section>' +
      '</div></div>';

    container.querySelector('#cta-participants').onclick = function () { setPage('participants'); };
  }

  function renderMeetTheTeamPage(container, setPage) {
    var mashaPars = [
      "Masha Robeen is a gerontechnologist and product manager whose work sits at the intersection of aging research, healthcare innovation, and healthcare and long-term care systems integration.",
      "She holds a Master's degree in Gerontology from the University of Haifa and a Master's degree in Innovation Management and Environmental Sciences from the Graduate School of Environment and Information Sciences at Yokohama National University, Japan. She spent five years in Japan researching two interconnected dimensions of long-term care: the coping mechanisms of long-term care recipients, and home and environment adaptations for older adults and their caregivers.",
      "Working alongside major caregiving organizations in both Japan and Israel, she developed a research-grounded understanding of how policy frameworks, formal care systems, and cultural context shape aging outcomes.",
      "Back in Israel, Masha focuses on improving the transition from hospital to community-based rehabilitation. She collaborates with multidisciplinary teams to develop integrated models connecting medical care, rehabilitation services, and community support.",
      "Masha has led multiple healthcare and digital health projects from early concept through implementation and measurable adoption. Her work combines product strategy, multidisciplinary project leadership, implementation planning, and data-driven evaluation to turn healthcare needs into scalable services and practical care models.",
      "Masha brings a cross-disciplinary approach to the complex challenges of rapidly aging societies, translating evidence into policy-relevant, human-centered solutions."
    ];
    var hadasPars = [
      "Dr. Hadas Kushelevich is an educator, researcher, and bridge-builder between Israel and Japan. Originally from Israel, she holds a B.A. in Japanese Studies and an M.A. in Political Science from the Hebrew University of Jerusalem. She moved to Japan in 2012 as a recipient of the prestigious MEXT scholarship and has lived there ever since, developing deep familiarity with Japanese society, institutions, and culture.",
      "Dr. Kushelevich earned her Ph.D. from the Graduate School of Law and Politics at Osaka University, where her research focuses on Japanese political institutions and regulatory governance. Her doctoral work examined the regulation of Japan's pharmaceutical market, exploring the intersection of politics, public policy, and organizational reputation.",
      "She teaches at leading universities in Japan and Israel, including Kyoto University, Doshisha University, Ritsumeikan University, and the University of Haifa. Alongside her academic work, she has led numerous cross-cultural initiatives connecting students, researchers, and professionals from different countries.",
      "In addition to her academic work, Dr. Kushelevich serves as Chairperson of the Israel–Japan Academic and Cultural Relations Association (<a href=\"https://www.japan-israel.org/\" target=\"_blank\" rel=\"noopener noreferrer\">IJAC</a>), a non-profit organization dedicated to strengthening academic, cultural, and professional ties between Israel and Japan. Through IJAC, she promotes international collaboration among universities, researchers, students, policymakers, businesses, and civil society organizations. The association develops initiatives in education, research, policy dialogue, cultural exchange, and innovation, fostering mutual understanding and creating new opportunities for cooperation between the two countries."
    ];
    var pStyle = 'margin:0 0 16px;font-size:15px;line-height:1.75;color:'+P.mid+'';
    var mashaBioHtml = mashaPars.map(function(t){ return '<p style="'+pStyle+'">'+t+'</p>'; }).join('');
    var mashaJaPars = [
      'ルービン・マーシャ氏は、老年学（ジェロントロジー）、ヘルスケア・イノベーション、そして医療・介護システムの統合を専門とするジェロンテクノロジストおよびプロダクトマネージャーです。',
      'イスラエルのハイファ大学にて老年学の修士号を取得し、日本の横浜国立大学大学院環境情報学府にて、イノベーション・マネジメントおよび環境科学分野の修士号を取得しています。日本には5年間滞在し、長期介護を必要とする高齢者の生活適応プロセスや、高齢者および介護者を支える住環境・生活環境の改善に関する研究に従事しました。',
      '日本とイスラエルの主要な介護・福祉関連機関との協働を通じて、政策制度、フォーマルケアの仕組み、そして文化的背景が高齢者の生活の質やケアの成果にどのような影響を与えるのかについて、実践と研究の両面から知見を深めてきました。',
      '現在はイスラエルにおいて、病院から地域リハビリテーションへの円滑な移行を支援する取り組みに注力しています。医師、看護師、リハビリ専門職などの多職種チームと連携しながら、医療、リハビリテーション、地域支援を結ぶ統合的なケアモデルの開発に携わっています。',
      'マーシャ氏は、複数のヘルスケアおよびデジタルヘルス関連プロジェクトを、構想段階から実装、利用促進、成果創出まで主導してきました。その活動は、プロダクト戦略、多職種連携によるプロジェクト推進、実装計画、データに基づく評価を組み合わせ、現場の医療・介護ニーズを拡張可能なサービスや実践的なケアモデルへと転換するものです。',
      '急速に高齢化が進む社会が直面する複雑な課題に対し、マーシャ氏は学際的な視点からアプローチし、研究成果や実証データを政策や実践につながる人間中心のソリューションへと転換することを目指しています。'
    ];
    var hadasBioHtml = hadasPars.map(function(t){ return '<p style="'+pStyle+'">'+t+'</p>'; }).join('');
    var hadasJaPars = [
      'クシェレビチ・ハダス博士は、教育者、研究者として活動するとともに、日本とイスラエルを結ぶ架け橋として、学術・政策・イノベーション分野における国際交流と協力の促進に取り組んでいます。',
      'イスラエル出身。ヘブライ大学にて日本研究の学士号および政治学の修士号を取得しました。2012年、文部科学省（MEXT）国費外国人留学生として来日し、以来10年以上にわたり日本を拠点として研究・教育活動を続けています。',
      '大阪大学大学院法学研究科にて博士号（法学）を取得。専門は日本政治、規制ガバナンス、および公共政策です。博士論文では、日本の医薬品市場における規制の形成と運用を題材に、政治、公共政策、組織レピュテーションの相互作用について研究を行いました。',
      '現在は、京都大学、同志社大学、立命館大学、ハイファ大学など、日本およびイスラエルの高等教育機関において教育・研究活動に従事しています。また、学生、研究者、行政関係者、企業関係者をつなぐ数多くの国際プロジェクトや教育プログラムの企画・運営にも携わっています。',
      '研究者としての活動に加え、日本社会を深く理解するため、地域社会、文化、伝統芸能、芸術、歴史、そして各地の風土に触れながら、日々学びを重ねています。流暢な日本語を活かし、多様な立場の人々との対話を通じて、日本とイスラエルの相互理解と協力関係の発展に尽力しています。',
      'また、クシェレビチ博士は、特定非営利活動法人日本・イスラエル学術文化振興協会（IJAC）の理事長を務めています。IJACは、日本とイスラエルの学術・文化・専門分野における交流と協力の促進を目的として設立された非営利団体です。同協会を通じて、大学、研究者、学生、政策立案者、企業、市民社会組織の連携を支援し、教育、研究、政策対話、文化交流、イノベーションに関するさまざまな事業を推進しています。両国の相互理解を深めるとともに、新たな協力の機会を創出することを目指しています。'
    ];
    var jaPStyle = 'margin:0 0 14px;font-size:14px;line-height:1.8;color:'+P.mid;
    var mashaJaBioHtml = mashaJaPars.map(function(t){ return '<p style="'+jaPStyle+'">'+t+'</p>'; }).join('');
    var hadasJaBioHtml = hadasJaPars.map(function(t){ return '<p style="'+jaPStyle+'">'+t+'</p>'; }).join('');
    function buildTeamBioFlipHtml(flipId, jaTitle, jaBioHtml, enBioHtml) {
      return '<div class="team-bio-flip" id="'+flipId+'" role="button" tabindex="0" aria-label="Toggle English biography">' +
        '<div class="team-bio-flip-inner">' +
          '<div class="team-bio-flip-face team-bio-flip-front team-bio" lang="ja">' +
            '<h3>'+jaTitle+'</h3>'+jaBioHtml+
          '</div>' +
          '<div class="team-bio-flip-face team-bio-flip-back team-bio" lang="en">'+enBioHtml+'</div>' +
        '</div>' +
        '<div class="team-bio-flip-hint" data-hint-front="English" data-hint-back="日本語">' +
          '<span class="team-bio-flip-hint-label">English</span><span class="team-bio-flip-hint-arrow" aria-hidden="true">→</span>' +
        '</div>' +
      '</div>';
    }
    var mashaBioFlipHtml = buildTeamBioFlipHtml('masha-bio-flip', 'ルービン・マーシャ', mashaJaBioHtml, mashaBioHtml);
    var hadasBioFlipHtml = buildTeamBioFlipHtml('hadas-bio-flip', 'クシェレビチ・ハダス博士', hadasJaBioHtml, hadasBioHtml);
    var teamBoxStyle = 'box-shadow:0 4px 24px rgba(0,0,0,0.15);margin-bottom:24px';
    container.innerHTML = '<div style="min-height:100vh;background:'+P.pale+'">' +
      '<div class="about-banner team-banner" style="background:'+P.hero+';width:100%;overflow:hidden">' +
        '<div style="padding:48px 24px;text-align:center"><h1 style="margin:0;color:white;font-size:32px;font-weight:800;letter-spacing:0.02em">Meet the Team</h1></div>' +
      '</div>' +
      '<div class="about-content team-content">' +
        '<div class="about-box team-section-box" style="'+teamBoxStyle+'">' +
          '<h2 class="team-section-title">Delegation Organizers</h2>' +
          '<div class="team-grid team-cards team-cards-main">' +
          '<div class="team-card team-card-masha">' +
            '<div class="team-name"><h2>Masha Robeen</h2></div>' +
            '<div class="team-photo-wrap"><img src="'+PHOTO_DIR+'Masha_Robeen.png?v=4" alt="Masha Robeen"></div>' +
            mashaBioFlipHtml +
            '<div class="team-card-logo"><img src="images/JIAT_logo.png?v=2" alt="Japan Israel Aging Tech Association (JIAT)"></div>' +
          '</div>' +
          '<div class="team-card team-card-hadas">' +
            '<div class="team-name"><h2>Dr. Hadas Kushelevich</h2></div>' +
            '<div class="team-photo-wrap"><img src="'+PHOTO_DIR+'Hadas_Kushelevich.png?v=2" alt="Dr. Hadas Kushelevich"></div>' +
            hadasBioFlipHtml +
            '<div class="team-card-logo"><img src="images/IJAC_logo.png?v=2" alt="International Journal of Arts and Commerce (IJAC)"></div>' +
          '</div>' +
        '</div></div></div></div>';
    var teamCards = container.querySelector('.team-cards-main');
    var mashaCard = container.querySelector('.team-card-masha');
    var hadasCard = container.querySelector('.team-card-hadas');
    if (teamCards && mashaCard && hadasCard && hadasCard.previousElementSibling !== mashaCard) {
      teamCards.insertBefore(mashaCard, hadasCard);
    }
    function bindTeamBioFlip(flipEl) {
      if (!flipEl) return;
      var hint = flipEl.querySelector('.team-bio-flip-hint');
      function updateFlipHint(flipped) {
        if (!hint) return;
        var label = hint.querySelector('.team-bio-flip-hint-label');
        var arrow = hint.querySelector('.team-bio-flip-hint-arrow');
        if (label && arrow) {
          label.textContent = flipped ? hint.getAttribute('data-hint-back') : hint.getAttribute('data-hint-front');
          arrow.textContent = flipped ? '←' : '→';
          hint.classList.toggle('is-flipped', flipped);
        }
      }
      function toggleBioFlip() {
        var flipped = flipEl.classList.toggle('is-flipped');
        updateFlipHint(flipped);
      }
      flipEl.onclick = function (e) {
        if (e.target.closest('.team-bio-flip-face')) return;
        toggleBioFlip();
      };
      if (hint) {
        hint.onclick = function (e) {
          e.stopPropagation();
          toggleBioFlip();
        };
      }
      flipEl.onkeydown = function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleBioFlip();
        }
      };
    }
    bindTeamBioFlip(container.querySelector('#masha-bio-flip'));
    bindTeamBioFlip(container.querySelector('#hadas-bio-flip'));
  }

  function steeringPhotoHtml(m) {
    var nameEn = escapeHtml(m.nameEn);
    if (m.photo) {
      var ver = m.photoVer != null ? m.photoVer : ((m.bioEn && m.bioJa) ? PROGRAM_PHOTO_VER : STEERING_PHOTO_VER);
      var photoSrc = PHOTO_DIR + m.photo + '?v=' + ver;
      return '<img src="'+photoSrc+'" alt="'+nameEn+'" loading="lazy" decoding="async"/>';
    }
    var initials = m.nameEn.split(/\s+/).map(function (w) { return w.charAt(0); }).join('').slice(0, 2).toUpperCase();
    return '<div class="steering-photo-placeholder" aria-hidden="true" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:'+P.pale+';color:'+P.dark+';font-size:42px;font-weight:800">'+initials+'</div>';
  }

  function renderSteeringCard(m) {
    var c = { bg:P.hero, border:P.hero, light:P.pale, text:'#ffffff' };
    var badge = m.badge || STEERING_BADGE;
    var nameEn = escapeHtml(m.nameEn);
    var nameJa = escapeHtml(m.nameJa || '');
    var nameHe = escapeHtml(m.nameHe || '');
    var nameJaHtml = nameJa ? '<div style="font-size:13px;color:'+P.mid+';opacity:0.9">'+nameJa+'</div>' : '';
    var nameJaBackHtml = nameJa ? '<div style="font-size:12px;opacity:0.82">'+nameJa+'</div>' : '';
    var org = escapeHtml(m.org);
    var role = escapeHtml(m.role);
    var jaBack = memberJaBack(m.key);
    var orgJaBackHtml = backJaSubHtml(m.orgJa || jaBack.orgJa);
    var roleJaBackHtml = backJaSubHtml(m.roleJa || jaBack.roleJa);
    var email = escapeHtml(m.email || '');
    var bioHtml = steeringBioHtml(m.key);
    var bioFlipHtml = (m.bioEn && m.bioJa) ? buildCardBackBioFlipHtml('card-bio-'+m.id, m.jaTitle || m.nameJa, m.bioJa, m.bioEn) : '';
    var backContentHtml;
    if (m.bioEn && m.bioJa) {
      backContentHtml =
        '<div class="steering-card-back-meta" style="flex-shrink:0;padding:6px 0 2px;font-size:13px"><div><strong>'+org+'</strong>'+orgJaBackHtml+'</div>' +
        '<div style="margin-top:6px"><strong>'+role+'</strong>'+roleJaBackHtml+'</div>' +
        (m.email ? '<div style="margin-top:6px"><a href="mailto:'+email+'" style="color:'+P.pale+'" onclick="event.stopPropagation()">'+email+'</a></div>' : '') +
        '</div>' +
        '<div class="steering-card-back-bio" style="flex:1;min-height:0;display:flex;flex-direction:column;margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.2)">'+bioFlipHtml+'</div>';
    } else {
      var bioBackHtml = bioHtml ? '<div style="margin-top:12px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.2)">'+bioHtml+'</div>' : '';
      backContentHtml =
        '<div class="steering-card-back-body" style="flex:1;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:12px 0 8px;font-size:13px"><div><strong>'+org+'</strong>'+orgJaBackHtml+'</div>' +
        '<div style="margin-top:8px"><strong>'+role+'</strong>'+roleJaBackHtml+'</div>' +
        (m.email ? '<div style="margin-top:8px"><a href="mailto:'+email+'" style="color:'+P.pale+'" onclick="event.stopPropagation()">'+email+'</a></div>' : '') +
        bioBackHtml + '</div>';
    }
    var cardAttrs = 'class="steering-card participant-card" data-staff-id="'+m.id+'"';
    if (m.id.indexOf('sc') === 0) cardAttrs += ' data-steering-id="'+m.id+'"';
    var photoInner = '<div class="steering-photo-inner">'+steeringPhotoHtml(m)+'</div>';
    return '<div '+cardAttrs+' style="perspective:900px;cursor:pointer">' +
      '<div class="card-inner" style="transition:transform 0.55s">' +
        '<div class="card-front" style="background:white;border-radius:14px;border:2.5px solid '+c.border+';overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08)">' +
          '<div class="card-photo-wrap">'+photoInner+'</div>' +
          '<div class="card-info">' +
            '<div class="card-front-names" style="display:flex;flex-direction:column;gap:4px">' +
              '<div class="card-front-name-block" style="display:flex;flex-direction:column;gap:4px">' +
                '<div style="font-weight:800;font-size:16px;color:'+P.dark+'">'+nameEn+'</div>'+nameJaHtml +
              '</div>' +
              '<div class="card-front-org-block">' +
                '<div class="card-front-org" style="font-weight:600;color:'+P.text+'">'+role+'</div>' +
                '<div class="card-org">'+org+'</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="card-front-footer" style="background:'+P.pale+'"><div class="card-front-label-wrap"><div style="background:'+c.bg+';color:white;font-size:12px;font-weight:700;padding:6px 12px;border-radius:20px">'+badge+'</div></div></div>' +
          '<div class="view-details">View Details</div>' +
        '</div>' +
        '<div class="card-back" style="position:absolute;inset:0;backface-visibility:hidden;transform:rotateY(180deg);background:linear-gradient(160deg,'+c.bg+','+c.bg+'ee);border-radius:14px;padding:18px;color:white;display:flex;flex-direction:column;overflow:hidden">' +
          '<div style="text-align:center;padding:10px 0 6px;flex-shrink:0"><div style="font-weight:800;font-size:17px">'+nameEn+'</div>'+nameJaBackHtml+(nameHe ? '<div style="font-family:Arial;direction:rtl;font-size:13px;opacity:0.88">'+nameHe+'</div>' : '')+'</div>' +
          '<div style="height:1px;background:rgba(255,255,255,0.25);flex-shrink:0"></div>' +
          backContentHtml +
          '<div style="text-align:center;font-size:10px;opacity:0.5;padding-top:4px;flex-shrink:0">TAP TO FLIP BACK</div>' +
        '</div>' +
      '</div></div>';
  }


  function initStaffCarousels(container) {
    container.querySelectorAll('.steering-carousel').forEach(function (carousel) {
      if (carousel.getAttribute('data-ready') === '1') return;
      carousel.setAttribute('data-ready', '1');
      var track = carousel.querySelector('.steering-carousel-track');
      var prev = carousel.querySelector('.steering-carousel-prev');
      var next = carousel.querySelector('.steering-carousel-next');
      if (!track || !prev || !next) return;
      function scrollStep(dir) {
        var card = track.querySelector('.steering-card');
        var amount = card ? card.offsetWidth + 16 : 296;
        track.scrollBy({ left: dir * amount, behavior: 'smooth' });
      }
      prev.addEventListener('click', function (e) { e.stopPropagation(); scrollStep(-1); });
      next.addEventListener('click', function (e) { e.stopPropagation(); scrollStep(1); });
    });
  }

  function initSteeringCarousel(container) {
    initStaffCarousels(container);
  }

  function sectorBadge(sector) {
    var c = SC[sector] || { light:"#f1f5f9", text:"#3d3a5c", border:"#cbd5e1" };
    return '<span style="background:'+c.light+';color:'+c.text+';border:1.5px solid '+c.border+';font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px">'+escapeHtml(sector)+'</span>';
  }
  function renderParticipantCard(p) {
    var c = SC[p.sector] || { bg:"#334155", border:"#64748b", light:"#f1f5f9", text:"#3d3a5c" };
    var initial = p.nameEn.charAt(0);
    var nameEn = escapeHtml(p.nameEn);
    var nameJa = escapeHtml(p.nameJa || '');
    var nameHe = escapeHtml(p.nameHe);
    var nameJaHtml = nameJa ? '<div style="font-size:13px;color:'+(c.text||P.mid)+';opacity:0.9">'+nameJa+'</div>' : '';
    var nameJaBackHtml = nameJa ? '<div style="font-size:12px;opacity:0.82">'+nameJa+'</div>' : '';
    var org = escapeHtml(p.org);
    var orgBack = escapeHtml(p.orgBack || p.org);
    var orgLine2 = (p.orgLine2 && p.orgLine2.trim()) ? '<br/>' + escapeHtml(p.orgLine2) : '';
    var role = escapeHtml(p.role);
    var jaBack = memberJaBack(p.key);
    var orgJaBackHtml = backJaSubHtml(jaBack.orgJa);
    var roleJaBackHtml = backJaSubHtml(jaBack.roleJa);
    var email = escapeHtml(p.email);
    var photoHtml = '<div class="participant-photo-inner">' + participantPictureFront(p.key, nameEn) + '</div>';
    var backImg = participantPictureBack(p.key);
    return '<div class="participant-card" data-id="' + p.id + '" data-sector="' + escapeHtml(p.sector) + '" style="perspective:900px;cursor:pointer;height:460px;min-height:460px;margin:12px">' +
      '<div class="card-inner" style="position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform 0.55s">' +
        '<div class="card-front" style="position:absolute;top:0;left:0;right:0;bottom:0;backface-visibility:hidden;background:white;border-radius:14px;border:2.5px solid '+c.border+';overflow:hidden;display:flex;flex-direction:column;height:100%;min-height:0;box-shadow:0 2px 12px rgba(0,0,0,0.08)">' +
          '<div class="card-photo-wrap">'+photoHtml+'</div>' +
          '<div class="card-front-info" style="background:'+P.pale+';color:'+(c.text||P.text)+'">' +
            '<div class="card-front-names">' +
              '<div class="card-front-name-block">' +
                '<div style="font-weight:800;font-size:16px;color:'+(c.text||P.dark)+'">'+nameEn+'</div>'+nameJaHtml +
              '</div>' +
              '<div class="card-front-org-block">' +
                '<div class="card-front-org" style="font-weight:600;color:'+(c.text||P.text)+'">'+org+orgLine2+'</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="card-front-footer" style="background:'+P.pale+'"><div class="card-front-label-wrap"><div style="background:'+c.bg+';color:white;font-size:14px;font-weight:700;padding:6px 14px;border-radius:20px">'+escapeHtml(p.sector)+'</div></div></div>' +
          '<div class="view-details" style="background:'+c.bg+'">View Details</div>' +
        '</div>' +
        '<div class="card-back" style="position:absolute;top:0;left:0;right:0;bottom:0;backface-visibility:hidden;transform:rotateY(180deg);background:linear-gradient(160deg,'+c.bg+','+c.bg+'ee);border-radius:14px;padding:18px;color:white;display:flex;flex-direction:column;gap:0;overflow:hidden">' +
          '<div class="card-back-upper" style="flex:1 1 33%;min-height:140px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:16px 0 20px;gap:12px"><div class="participant-back-thumb" style="width:140px;height:140px;min-width:140px;min-height:140px;border-radius:50%;overflow:hidden;border:3px solid rgba(255,255,255,0.5);flex-shrink:0;background:rgba(255,255,255,0.1);box-shadow:0 4px 12px rgba(0,0,0,0.2)">'+backImg+'</div><div style="text-align:center;display:flex;flex-direction:column;gap:6px"><div style="font-weight:800;font-size:17px">'+nameEn+'</div>'+nameJaBackHtml+'<div style="font-family:Arial;direction:rtl;font-size:13px;opacity:0.88">'+nameHe+'</div></div></div>' +
          '<div style="height:1px;background:rgba(255,255,255,0.25);flex-shrink:0"></div>' +
          '<div style="flex:1;min-height:0;overflow-y:auto;padding:12px 0 8px"><div style="font-size:13px"><strong>'+orgBack+orgLine2+'</strong>'+orgJaBackHtml+'</div>' +
          '<div style="margin-top:8px;font-size:13px"><strong>'+role+'</strong>'+roleJaBackHtml+'</div>' +
          '<div style="margin-top:8px"><a href="mailto:'+email+'" style="color:'+P.pale+'" onclick="event.stopPropagation()">'+email+'</a></div></div>' +
          '<div style="text-align:center;font-size:10px;opacity:0.5;flex-shrink:0;padding-top:4px">TAP TO FLIP BACK</div>' +
        '</div>' +
      '</div></div>';
  }

  function renderParticipantsPage(container, activeSector, search, setActiveSector, setSearch) {
    var cnt = counts();
    var filtered = filterParticipants(activeSector, search);

    var statsHtml = SECTORS.map(function(s){
      var c = SC[s.key] || { bg:P.nav, border:P.nav, light:P.pale, text:"#ffffff" };
      var isActive = activeSector === s.key;
      var btnBg = isActive ? (s.key === 'all' ? P.nav : c.bg) : 'white';
      var btnColor = isActive ? 'white' : P.text;
      var btnBorder = isActive ? (s.key === 'all' ? 'rgba(255,255,255,0.4)' : c.border) : (c.border || P.soft);
      var btnBorderW = isActive && s.key === 'all' ? '1.5px' : '2px';
      var btnShadow = isActive && s.key === 'all' ? 'box-shadow:0 0 0 1px rgba(255,255,255,0.2);' : '';
      return '<button data-sector="'+s.key+'" class="sector-btn" style="flex:1;min-width:0;background:'+btnBg+';border:'+btnBorderW+' solid '+btnBorder+';color:'+btnColor+';border-radius:999px;padding:8px 10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;overflow:visible;'+btnShadow+'"><span style="display:flex;align-items:center;gap:4px;flex-shrink:0"><span style="font-size:14px">'+s.icon+'</span><span style="font-weight:900;font-size:14px">'+(cnt[s.key]||0)+'</span></span><span style="font-size:10px;font-weight:600;line-height:1.2;text-align:center;word-break:break-word">'+s.short+'</span></button>';
    }).join('');

    var steeringSectionHtml = buildStaffCarouselSection('Steering Committee', STEERING_COMMITTEE, 'steering-section-main');
    var programTeamMembers = PROGRAM_TEAM_ORDER.map(function (id) {
      var member = PROGRAM_TEAM.filter(function (m) { return m.id === id; })[0];
      return Object.assign({}, member, { badge: PROGRAM_TEAM_BADGE });
    });
    var programTeamSectionHtml = buildStaffCarouselSection('Future Time Program Team', programTeamMembers, 'program-team-section');

    var searchRow = container.querySelector('.search-row');
    var cardsContainer = container.querySelector('#cards-container');
    var isEmpty = container.querySelector('.participants-empty');

    if (!searchRow) {
      container.innerHTML = '<div style="min-height:100vh;background:'+P.pale+'">' +
        '<div class="participants-header-wrap" style="background:'+P.hero+';padding:28px 48px 24px;color:white;position:relative">' +
          '<div style="max-width:1204px;margin:0 auto;display:flex;align-items:flex-start;justify-content:flex-start;gap:28px">' +
            '<div style="flex:1;min-width:0;text-align:left;display:flex;flex-direction:column;align-items:flex-start;gap:12px;padding:6px 12px 0 0"><h1 style="margin:0;font-size:28px;font-weight:800;display:flex;align-items:center;gap:10px;justify-content:flex-start;line-height:1.1">Program Participants</h1><p style="margin:0;opacity:0.7;font-size:14px;font-weight:800;line-height:1.35;max-width:580px;text-align:left">Choose participants by affiliation label</p><p style="margin:0;opacity:0.7;font-size:14px;font-weight:800;line-height:1.35;max-width:580px;text-align:left">Search and filter all program participants across sectors</p></div>' +
            '<div class="stats-bar-wrap" id="stats-bar" style="flex:0 1 640px;max-width:640px;width:100%;display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;justify-content:flex-end;margin-left:auto">'+statsHtml+'</div>' +
          '</div>' +
        '</div>' +
        '<div class="participants-content">' +
          '<div class="search-row" dir="ltr" style="display:flex;align-items:center;justify-content:flex-end;gap:8px;flex-wrap:wrap;margin-top:0;margin-bottom:6px;padding:4px 0"><input type="text" id="search-input" dir="ltr" autocomplete="off" placeholder="Search by name, org, role" style="flex:0 1 420px;min-width:200px;max-width:420px;padding:14px 24px 14px 48px;border:1.5px solid '+P.soft+';border-radius:999px;font-size:14px;font-family:inherit;box-sizing:border-box;background:white" /></div>' +
          steeringSectionHtml +
          programTeamSectionHtml +
          '<section class="all-participants-section">' +
          '<h2 class="all-participants-title" style="margin:0 0 16px;font-size:22px;font-weight:800;color:'+P.dark+'">All Participants</h2>' +
          '<div class="cards-grid" style="margin-top:4px;padding:4px 0" id="cards-container">' +
            filtered.map(renderParticipantCard).join('') +
          '</div></section>' +
          '<div class="participants-empty" style="display:none;text-align:center;padding:60px;color:'+P.soft+'"><div style="font-size:44px;margin-bottom:12px">🔍</div><div style="font-size:17px;font-weight:700">No participants found</div></div>' +
        '</div></div>';

      container.querySelectorAll('[data-sector]').forEach(function(btn){
        btn.onclick = function () { setActiveSector(btn.getAttribute('data-sector')); };
      });
      initSteeringCarousel(container);
      bindCardBioFlips(container);
      bindStaffCardFlips(container);
      bindParticipantCardFlips(container);
    } else {
      container.querySelector('#stats-bar').outerHTML = '<div class="stats-bar-wrap" id="stats-bar" style="flex:0 1 640px;max-width:640px;width:100%;display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;justify-content:flex-end;margin-left:auto">'+statsHtml+'</div>';
      cardsContainer = container.querySelector('#cards-container');
      cardsContainer.innerHTML = filtered.map(renderParticipantCard).join('');
      isEmpty = container.querySelector('.participants-empty');
      isEmpty.style.display = filtered.length === 0 ? 'block' : 'none';
    }

    container.querySelectorAll('[data-sector]').forEach(function(btn){
      btn.onclick = function () { setActiveSector(btn.getAttribute('data-sector')); };
    });

    bindSearchInput(container, search, setSearch);

    bindStaffCardFlips(container);
    bindParticipantCardFlips(container);
    initSteeringCarousel(container);
    bindCardBioFlips(container);
  }

  var state = { page: 'about', activeSector: 'all', search: '' };
  var searchScrollTimer = null;

  function isMobileViewport() {
    return window.matchMedia('(max-width: 900px)').matches;
  }

  function participantsScrollOffset() {
    var nav = document.querySelector('nav');
    var offset = nav ? nav.offsetHeight : 0;
    if (isMobileViewport()) {
      var header = document.querySelector('.participants-header-wrap');
      if (header) offset += header.offsetHeight;
    }
    return offset + 8;
  }

  function bindSearchInput(container, search, setSearch) {
    var input = container.querySelector('#search-input');
    if (!input) return;
    input.value = search;
    input.oninput = function () { setSearch(this.value); };
  }

  function scrollToParticipantCard(card) {
    if (!card) return;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var y = card.getBoundingClientRect().top + window.pageYOffset - participantsScrollOffset();
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      });
    });
  }

  function scrollParticipantsAfterSearch(search, filtered) {
    if (searchScrollTimer) {
      clearTimeout(searchScrollTimer);
      searchScrollTimer = null;
    }
    if (state.page !== 'participants') return;
    var q = (search || '').trim();
    if (!q || !filtered.length) return;

    var firstId = String(filtered[0].id);
    searchScrollTimer = setTimeout(function () {
      searchScrollTimer = null;
      var page = document.getElementById('participants-page');
      if (!page) return;
      var card = page.querySelector('#cards-container .participant-card[data-id="' + firstId + '"]');
      scrollToParticipantCard(card);
    }, 1000);
  }

  function scrollParticipantsAfterSector(sector) {
    if (state.page !== 'participants') return;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        if (sector === 'all') {
          scrollToTop();
          return;
        }
        var page = document.getElementById('participants-page');
        if (!page) return;
        var cards = page.querySelectorAll('#cards-container .participant-card');
        var card = null;
        for (var i = 0; i < cards.length; i++) {
          if (cards[i].getAttribute('data-sector') === sector) {
            card = cards[i];
            break;
          }
        }
        if (!card) return;
        scrollToParticipantCard(card);
      });
    });
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  function setPage(page) {
    var pageChanged = state.page !== page;
    state.page = page;
    document.querySelectorAll('.nav-btn').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-page')===page); });
    document.getElementById('about-page').classList.toggle('active', page==='about');
    document.getElementById('participants-page').classList.toggle('active', page==='participants');
    document.getElementById('team-page').classList.toggle('active', page==='team');
    if (page === 'about') renderAboutPage(document.getElementById('about-page'), setPage);
    else if (page === 'participants') renderParticipantsPage(document.getElementById('participants-page'), state.activeSector, state.search, setActiveSector, setSearch);
    else if (page === 'team') renderMeetTheTeamPage(document.getElementById('team-page'), setPage);
    if (pageChanged) {
      scrollToTop();
      requestAnimationFrame(scrollToTop);
    }
  }

  function setActiveSector(s) {
    state.activeSector = s;
    renderParticipantsPage(document.getElementById('participants-page'), state.activeSector, state.search, setActiveSector, setSearch);
    scrollParticipantsAfterSector(s);
  }

  function setSearch(s) {
    state.search = s;
    var filtered = filterParticipants(state.activeSector, state.search);
    renderParticipantsPage(document.getElementById('participants-page'), state.activeSector, state.search, setActiveSector, setSearch);
    scrollParticipantsAfterSearch(s, filtered);
  }

  document.querySelectorAll('.nav-btn').forEach(function(btn){
    btn.onclick = function () { setPage(btn.getAttribute('data-page')); };
  });

  document.querySelector('nav .logo').onclick = function () { setPage('about'); };
  document.querySelector('nav .logo-right').onclick = function () { setPage('about'); };

  setPage('about');
})();
