const iconSvg = (inner, { fill = false } = {}) =>
  `<svg class="hi-icon-svg" viewBox="0 0 24 24" aria-hidden="true"${
    fill
      ? ' fill="currentColor"'
      : ' fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"'
  }>${inner}</svg>`;

const ICONS = {
  plane: iconSvg(
    '<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>',
    { fill: true }
  ),
  suitcase: iconSvg(
    '<rect x="4" y="9" width="16" height="11" rx="2"/><path d="M9 9V7a3 3 0 0 1 6 0v2"/><path d="M12 14v3"/>'
  ),
  moon: iconSvg('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'),
  checkIn: iconSvg(
    '<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="m9 12 2 2 4-4"/>'
  ),
  meeting: iconSvg(
    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
  ),
  transfer: iconSvg(
    '<path d="M4 6h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M4 11h16"/><path d="M8 6V4"/><path d="M16 6V4"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>'
  ),
  dinner: iconSvg(
    '<path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6h1v8"/>'
  ),
  building: iconSvg(
    '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>'
  ),
  sports: iconSvg(
    '<circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>'
  ),
  panel: iconSvg(
    '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>'
  ),
  presentation: iconSvg(
    '<path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/>'
  ),
  community: iconSvg(
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
  ),
  medical: iconSvg('<path d="M12 6v12"/><path d="M6 12h12"/><circle cx="12" cy="12" r="10"/>'),
  home: iconSvg(
    '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'
  ),
  leisure: iconSvg(
    '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>'
  ),
  museum: iconSvg(
    '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M10 12v4"/><path d="M14 12v4"/>'
  ),
  train: iconSvg(
    '<rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/>'
  ),
  stroll: iconSvg(
    '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'
  ),
  infrastructure: iconSvg(
    '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>'
  ),
  park: iconSvg(
    '<path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7l3.2-4.3a1 1 0 0 1 1.4 0l1.8 2.4 1.8-2.4a1 1 0 0 1 1.4 0l3.2 4.3a1 1 0 0 1-.7 1.7H17Z"/><path d="M12 22v-8"/>'
  ),
  boat: iconSvg(
    '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.9 5.8 2.38 8"/><path d="M12 2v8"/>'
  ),
  social: iconSvg('<path d="M8 2h8l4 10H4L8 2z"/><path d="M12 12v10"/><path d="M8 22h8"/>'),
  innovation: iconSvg(
    '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>'
  ),
  tech: iconSvg(
    '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2"/><path d="M15 2v2"/><path d="M9 20v2"/><path d="M15 20v2"/><path d="M20 9h2"/><path d="M20 14h2"/><path d="M2 9h2"/><path d="M2 14h2"/>'
  ),
  car: iconSvg(
    '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>'
  ),
  hub: iconSvg(
    '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>'
  ),
  event: iconSvg(
    '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>'
  ),
  embassy: iconSvg(
    '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>'
  ),
  care: iconSvg(
    '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>'
  ),
};

const finalEventInvitation = "./assets/final-event-invitation.png";

const lumaEmbedAspectRatio = 1.05;
const pdfEmbedAspectRatio = 4416 / 1920;

const days = [
  {
    w: "TUE",
    d: "7.7",
    m: "JUL",
    title: "Departure from Israel",
    city: "Ben Gurion Airport → Tokyo",
    theme: "Start of the delegation journey.",
    tip: "Keep passport, insurance and headphones close.",
    items: [
      ["ARRIVAL", "Departure from TLV and group briefing.", ICONS.plane],
      ["CHECK-IN", "Airport check-in and travel setup.", ICONS.checkIn],
      ["WELCOME", "Group alignment before the flight.", ICONS.meeting],
      ["OVERNIGHT", "Overnight flight to Japan.", ICONS.moon],
    ],
    program: [
      ["TBD", "Departure from TLV", "Final flight details TBD"],
      ["TBD", "Travel briefing", "Group communication setup"],
    ],
  },
  {
    w: "WED",
    d: "8.7",
    m: "JUL",
    title: "Arrival in Tokyo",
    city: "Narita → Shinagawa Prince Hotel",
    theme: "Landing in Japan, hotel check-in, and welcome buffet dinner at the hotel.",
    tip: "Stay with the group after landing and keep luggage tagged.",
    items: [
      ["ARRIVAL", "Group meetup at Narita Airport.", ICONS.plane],
      ["CHECK-IN", "Hotel check-in at Shinagawa Prince Hotel.", ICONS.checkIn],
      ["DINNER", "Buffet dinner at LUXE DINING HAPUNA.", ICONS.dinner],
      ["OVERNIGHT", "Overnight in Tokyo.", ICONS.moon],
    ],
    program: [
      ["14:00–14:30", "Arrival", "Narita Airport — group meetup"],
      ["14:30–16:00", "Transfer to hotel", "Narita → Shinagawa Prince Hotel"],
      ["16:00–18:00", "Hotel check-in", "Shinagawa Prince Hotel (品川プリンスホテル)"],
      ["19:00–21:00", "Buffet dinner", "LUXE DINING HAPUNA (Main Tower, 1st Floor)"],
    ],
  },
  {
    w: "THU",
    d: "9.7",
    m: "JUL",
    title: "Minato ward visits",
    city: "Minato, Tokyo",
    theme: "Preventive care, LTC systems, TMG visit, and an evening social event.",
    notesExtra:
      "Please note: Dinner is not included on this day. Participants are kindly asked to make their own dinner arrangements for the evening.",
    tip: "Observe how prevention and long-term care systems connect at the municipal level.",
    items: [
      ["PREVENTIVE CENTER", "Rakuccha — multi-generational community center.", ICONS.medical],
      ["MINATO SPORTS CENTER", "Sports center visit.", ICONS.sports],
      ["LTC DISCUSSION", "LTC and preventive systems.", ICONS.panel],
      ["TMG", "Tokyo Metropolitan Government Building visit.", ICONS.building],
      ["SOCIAL EVENT", "DAWN | Avatar Robot Cafe ver.β.", ICONS.social],
    ],
    program: [
      ["08:00–08:10", "Departure from Hotel", "Shinagawa Prince Hotel"],
      ["09:30–10:00", "Minato — Preventive center", "Multi-generational community center<br>ラクっちゃ（介護予防総合センター）"],
      ["10:00–10:30", "Minato Sports Center", "Sports center visit"],
      ["10:45–11:30", "Minato City — LTC & preventive systems", "Lecture on a Long-Term Care Insurance System and Regional Comprehensive Support Center"],
      ["12:15–13:30", "Lunch", "Marble Lounge — Hilton Tokyo"],
      ["14:00–15:00", "Tokyo Metropolitan Government", "Tokyo Metropolitan Government, Policy Planning Bureau, Foreign Affairs Division, Business Section"],
      ["17:30–19:00", "Social event", "DAWN | Avatar Robot Cafe ver.β"],
    ],
  },
  {
    w: "FRI",
    d: "10.7",
    m: "JUL",
    title: "Saitama community systems",
    city: "Saitama City",
    theme:
      "Prevention, community welfare volunteers, and integrated care — plus Asoka-en elderly living services.",
    notesExtra:
      "Please note: Dinner is not included on this day. Participants are kindly asked to make their own dinner arrangements for the evening.",
    tip: "Arrive prepared with your notebook, questions, and headset.",
    items: [
      ["SAITAMA CITY", "Presentation on regional comprehensive care.", ICONS.presentation],
      ["WELFARE VOLUNTEERS", "Regional welfare volunteers discussion.", ICONS.community],
      ["CARE PREVENTION", "Sessions with municipal care-prevention staff.", ICONS.medical],
      ["ASOKA-EN", "Elderly Living Service Center visit.", ICONS.home],
    ],
    program: [
      ["07:30–07:45", "Departure from Hotel", "Shinagawa Prince Hotel"],
      [
        "09:30–11:00",
        "Saitama City",
        "Presentation / discussion — regional welfare volunteers (地域の民生委員・児童委員協議会) & comprehensive care system (いきいき埼玉市役所, Omiya Ward Office)",
        null,
        "https://www-city-saitama-lg-jp.translate.goog/soshiki/0014300/0014330/0014340/index.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc",
      ],
      ["12:15–13:00", "Lunch", "Obento at Asoka-en Elderly Living Service Center"],
      ["13:00–15:00", "Asoka-en Elderly Living Service Center", "Care management — integrated elderly care facility visit"],
    ],
  },
  {
    w: "SAT",
    d: "11.7",
    m: "JUL",
    title: "Free day in Tokyo",
    city: "Tokyo",
    theme: "A free day at leisure, with an optional evening cultural tour by public transport.",
    notesExtra:
      "Please note: Dinner is not included on this day. Participants are kindly asked to make their own dinner arrangements for the evening.",
    tip: "Evening tour is optional. The group will travel by public transport — wear comfortable shoes and bring water.",
    items: [
      ["FREE DAY", "Day at leisure.", ICONS.leisure],
      ["EVENING TOUR", "Optional cultural tour by public transport.", ICONS.train],
      ["TOKYO STATION", "Observation and urban context.", ICONS.train],
      ["GINZA", "Neighborhood stroll.", ICONS.stroll],
    ],
    program: [
      ["09:00–17:00", "Free day", "At leisure"],
      [
        "18:00–22:00",
        "Optional evening tour",
        "Public transport — participation is optional",
        [
          ["17:00–18:00", "Transfer to Intermediatheque", "Optional evening tour — public transportation"],
          ["18:00–19:00", "Intermediatheque", "Cultural visit"],
          ["19:05–20:00", "Tokyo Station", "Observation"],
          ["20:05–21:00", "Tokyo International Forum", "Cultural visit"],
          ["21:10–22:00", "Ginza stroll", "Cultural walk"],
          ["After 22:00", "Return to hotel", "Self commute back to hotel"],
        ],
      ],
    ],
  },
  {
    w: "SUN",
    d: "12.7",
    m: "JUL",
    title: "Tokyo cultural day",
    city: "Tokyo",
    theme: "East Tokyo museums and gardens, Asakusa, teamLab, and Takanawa Gateway.",
    tip: "Bring layers, charger and flexibility for weather changes.",
    items: [
      ["FUKAGAWA EDO MUSEUM", "Museum visit.", ICONS.museum],
      ["KIYOSUMI GARDENS", "Garden visit.", ICONS.park],
      ["ASAKUSA", "Asakusa District — Senso-ji Temple, street market stroll, free time.", ICONS.stroll],
      ["TEAMLAB", "Immersive art experience.", ICONS.museum],
      ["TAKANAWA GATEWAY", "Cultural visit.", ICONS.hub],
    ],
    program: [
      ["08:15–08:30", "Departure from Hotel", "Shinagawa Prince Hotel"],
      ["09:00–10:00", "Kiyosumi Gardens", "Cultural visit"],
      ["10:30–12:00", "Fukagawa Edo Museum", "Cultural visit"],
      ["12:30–14:00", "Asakusa", "Asakusa District<br>Senso-ji Temple<br>Street market stroll<br>Free time"],
      ["14:30–15:30", "Lunch", "浅草食堂 元松"],
      ["16:00–18:00", "teamLab", "Immersive art experience"],
      ["18:30–20:00", "Takanawa Gateway", "28–29F Garden Observation<br>Community Space"],
    ],
  },
  {
    w: "MON",
    d: "13.7",
    m: "JUL",
    title: "Saitama care visits",
    city: "Saitama City",
    theme: "BABA Lab, dementia-friendly services, community care visits in Saitama, and evening summary at SivanS Lab.",
    tip: "Look for the bridge between institution, home and community.",
    items: [
      ["BABA LAB", "Innovation lab visit (3 groups).", ICONS.innovation],
      ["LUNCH", "Healthy Cafe Nora.", ICONS.dinner],
      ["DEMENTIA CENTER", "Dementia-Friendly Center visit.", ICONS.care],
      ["DAY SERVICE", "Community support discussion & day service.", ICONS.community],
    ],
    program: [
      ["08:15–08:30", "Departure from Hotel", "Shinagawa Prince Hotel"],
      ["10:00–12:00", "BABA Lab (Saitama)", "Institution visit — 3 groups (横地様)", null, "https://www.baba-lab.net/about"],
      ["12:00–13:00", "Lunch", "Healthy Cafe Nora (コミュニティスペースほぼのら)", null, "https://maps.app.goo.gl/oJmotPJrSpEWiDCK7"],
      ["13:15–14:00", "Dementia-Friendly Center", "認知症フレンドリーセンター"],
      ["14:00–15:00", "Community Comprehensive Support Center", "Discussion — welfare volunteers Q&A (地域包括支援センター)"],
      ["15:00–16:00", "Day service facility", "デーサービス — on-site observation"],
      ["16:00–17:30", "Return to Tokyo", ""],
      ["18:00–18:30", "Dinner", "Obento at SivanS Lab"],
      ["18:30–19:30", "Reflection and Discussion", "SivanS Lab"],
      [
        "19:30–21:00",
        "Evening — choose one",
        "",
        [
          ["", "Option 1: Yasukuni Shrine Summer Festival", "Mitama Matsuri (みたままつり)"],
          ["", "Option 2: Free evening", "Time at leisure"],
        ],
      ],
    ],
  },
  {
    w: "TUE",
    d: "14.7",
    m: "JUL",
    title: "Care tech & final event",
    city: "Tokyo / Shibuya",
    theme: "Parliament House dialogue, Zenkou care technology, and the joint closing event at SivanS Lab.",
    tip: "Ask what makes a care technology usable and scalable.",
    items: [
      ["PARLIAMENT HOUSE", "Entry and dialogue with government officials.", ICONS.panel],
      ["LUNCH", "Midday break before afternoon visits.", ICONS.dinner],
      ["ZENKOUKAI", "Zenkou Research Institute — Care Tech Lab.", ICONS.tech],
      ["FINAL EVENT", "Symposium at SivanS Lab.", ICONS.event],
    ],
    program: [
      ["07:15–07:30", "Departure from Hotel", "Shinagawa Prince Hotel"],
      ["08:00–08:30", "Parliament House", "Entry process"],
      [
        "08:30–11:30",
        "Dialogue with government officials",
        "Policy dialogue session",
        [
          ["::", "Policy Dialogue Session Overview", "This session is intended as a platform for comparative policy dialogue and mutual learning between Japanese and Israeli participants on the challenges and opportunities of a super-aging society."],
          ["08:30–08:40", "Opening Remarks and Introduction (10 min)", "Israeli Side:"],
          [
            "08:40–09:10",
            "Keynote lecture (30 min)",
            "Proposed Theme:<br>“Policy Design and Governance Challenges in a Super-Aging Society”",
          ],
          [
            "09:15–09:55",
            "Panel 1: Governance, Policy Coordination, and Workforce Challenges (40 min)",
            "Japan–Israel Comparative Policy Dialogue<br><br>Japanese Side (Proposed):<br>• Council for Measures for a Declining Birthrate and Aging Society / Cabinet Office (TBC)<br>• Ministry of Economy, Trade and Industry (METI) — Commerce and Service Industry Policy Group",
          ],
          ["09:55–10:05", "Coffee Break", "10 min"],
          [
            "10:10–10:45",
            "Panel 2: Prevention, Independence Support, and Care Models (35 min)",
            "Japan–Israel Comparative Policy Dialogue<br><br>Japanese Side (Proposed):<br>• Ministry of Health, Labour and Welfare (MHLW) — Long-Term Care Insurance Bureau<br>• Community Development Promotion Office<br><br>Topics:<br>• Preventive Care<br>• Long-Term Care and Elderly Welfare<br>• Community-Based Support Systems",
          ],
          ["10:50–11:25", "Q&A and a Panel Session", ""],
        ],
      ],
      ["12:00–13:15", "Lunch", "Sushi Tofuro Ginza"],
      ["14:30–16:30", "Zenkou Research Institute (Care Tech Lab)", "Geriatrics, rehabilitation & innovation"],
      [
        "17:45–22:00",
        "Final Event",
        "Resilient Community Care and Wellbeing for Prolonged Crisis in Aging Societies, Vol. 2 — SivanS Lab, Tokyo. Bus extra hours available.",
        [{ embed: finalEventInvitation, title: "Final event invitation" }],
      ],
    ],
  },
  {
    w: "WED",
    d: "15.7",
    m: "JUL",
    title: "Summary + departure",
    city: "Embassy → Narita",
    theme: "Ambassador greetings, summary closing session at the Israeli Embassy, and departure for Israel.",
    tip: "Write one concrete action you will take after returning.",
    items: [
      ["EMBASSY", "Meet the ambassador and closing session.", ICONS.embassy],
      ["CHECKOUT", "Luggage and checkout.", ICONS.suitcase],
      ["DEPARTURE", "Departure for Narita Airport.", ICONS.transfer],
      ["FLIGHT", "Return home.", ICONS.plane],
    ],
    program: [
      ["08:45–09:00", "Departure from Hotel", "Shinagawa Prince Hotel"],
      ["09:30–10:00", "Embassy entry", "Israeli Embassy, Tokyo"],
      ["10:00–10:30", "Meet the ambassador", "Greetings from the ambassador"],
      ["10:30–11:30", "Closing session", "Summary closing session at the embassy"],
      ["11:30–13:00", "Transfer to airport", "Embassy → Narita Airport"],
    ],
  },
];

const delegationHotel = {
  name: "Shinagawa Prince Hotel",
  nameJa: "品川プリンスホテル",
  mapLink: "https://maps.app.goo.gl/i9wZU4pj519VPV3u5",
};

const prep = [
  ["Accommodation", [`Delegation hotel: ${delegationHotel.name} (${delegationHotel.nameJa}).`, "Located in Shinagawa, Tokyo — see the Contact page for directions."]],
  ["Travel Documents", ["Passport, visa, insurance and copies.", "Israeli passports do not need special visa procedures."]],
  ["Arrival & Entry Procedures", ["Complete Visit Japan Web declaration.", "Register flight and personal details.", "Save QR code for airport entry."]],
  ["Currency & Payments", ["Bring 10,000–20,000 JPY cash.", "Cards accepted in large stores.", "Cash needed for small shops and taxis."]],
  ["Packing", ["Formal clothes for official visits.", "Closed shoes and socks.", "Comfortable walking shoes.", "Plug type A, voltage 100V."]],
  ["Order in Advance", ["Portable Wi‑Fi or SIM rental.", "Business cards.", "Recommended items to arrange ahead."]],
  ["General Suggestions", ["Be punctual and arrive early.", "Keep phone silent in public.", "Bring personal medications."]],
];

const prepHe = [
  ["מסמכי נסיעה", [
    "☐ דרכון בתוקף — יש לבדוק את תאריך התפוגה.",
    "☐ ויזה — בעלי דרכון ישראלי אינם נדרשים להליך מיוחד.",
  ]],
  ["הגעה וכניסה ליפן", [
    "☐ מכתב הזמנה — יסופק בהמשך.",
    '☐ יש למלא הצהרה מקוונת באתר Visit Japan Web: <a href="https://services.digital.go.jp/en/visit-japan-web/" target="_blank" rel="noopener noreferrer">services.digital.go.jp/en/visit-japan-web/</a>',
    "::בתוך האתר יש לבצע:",
    "☐ רישום פרטי טיסה ופרטים אישיים.",
    "☐ מילוי טפסי מכס והסגר / בריאות.",
    "☐ שמירת קוד QR לשימוש בכניסה בשדה התעופה.",
  ]],
  ["כסף ותשלומים", [
    "☐ מומלץ להביא מזומן בסכום של 10,000–20,000 ין יפני.",
    "☐ ניתן לבצע המרת מטבע בשדה התעופה — אין הרבה עמדות המרה זמינות בהמשך.",
    "☐ כספומטים זמינים בחנויות נוחות ובתחנות רכבת, אך העמלה גבוהה.",
    "☐ כרטיסי אשראי / דביט מתקבלים בחנויות גדולות — חשוב לזכור את הקוד הסודי ולהביא גם כרטיס פיזי.",
    "☐ מזומן נדרש בחנויות קטנות, בחלק מהמוניות ובחלק מאתרי התיירות.",
    "☐ המטבע המקומי: ין יפני — JPY.",
  ]],
  ["אריזה ולבוש", [
    "☐ קוד לבוש רשמי:<br>גברים — חליפה, ורצוי להחזיק עניבה בהישג יד.<br>נשים — ז׳קט; ללא חולצות ללא שרוולים.",
    "☐ נעליים סגורות.",
    "☐ גרביים בתיק יד.",
    "☐ מזג האוויר חם — כ־32–35 מעלות במהלך היום.",
    "☐ נעלי הליכה נוחות.",
    "☐ מטריית נסיעות או מעיל גשם — אופציונלי.",
    "☐ שקע חשמל מסוג A, מתח 100V.",
  ]],
  ["להזמין מראש", [
    "☐ השכרת Wi-Fi נייד או כרטיס SIM — ניתן לאסוף בשדה התעופה.",
    '::חברה מומלצת: <a href="https://www.japan-wireless.com/" target="_blank" rel="noopener noreferrer">japan-wireless.com</a>',
    "☐ Wi-Fi חינם זמין במלונות, אך מוגבל מאוד במרחבים ציבוריים.",
    "☐ כרטיסי ביקור.",
  ]],
  ["המלצות כלליות", [
    "☐ להקפיד על עמידה בזמנים — להגיע מוקדם.",
    "☐ שימוש בטלפון במרחב הציבורי צריך להיות שקט.",
    "☐ יש להסיר נעליים במקדשים, בכניסה לחדרי מלון מסוימים ובחלק מהמסעדות.",
    "☐ מצופה להתנהגות מנומסת ולשפת גוף מכבדת.",
    "☐ מומלץ להביא מתנות תודה קטנות לביקורים רשמיים.",
  ]],
];

const avoid = [
  ["Formal Visits", ["Do not arrive late.", "Do not use your phone during meetings.", "Do not dress casually.", "Do not forget your name tag."]],
  ["Public Etiquette", ["Do not speak loudly in public.", "Do not eat while walking.", "Smoke only in marked areas.", "Avoid pointing with fingers."]],
  ["Money & Connectivity", ["Do not rely only on credit cards.", "Do not count on free public Wi‑Fi.", "Do not leave tips; it is not customary."]],
  ["Conversation & Gifts", ["Avoid sensitive political topics.", "Avoid being overly direct.", "Do not bring oversized or perishable gifts."]],
];

const avoidHe = [
  ["ביקורים רשמיים", [
    "אל תאחרו — עמידה בזמנים היא חיונית.",
    "אל תשתמשו בטלפון ואל תבדקו אותו במהלך פגישות.",
    "הימנעו מדיבור או משימוש במכשירים במהלך מצגות.",
    "אל תתלבשו באופן יומיומי מדי — ללא גופיות; יש לכפתר את החולצה.",
    "אל תשלבו רגליים ואל תישבו ברישול במהלך פגישות רשמיות.",
    "אל תשכחו לענוד את תג השם בכל עת.",
  ]],
  ["נימוסים במרחב הציבורי", [
    "אל תדברו בקול רם ואל תשתמשו במחוות מוגזמות במרחב הציבורי.",
    "אל תאכלו או תשתו בזמן הליכה במרחב הציבורי.",
    "אל תתעלמו ממרחב אישי ומכללי נימוס במרחב הציבורי.",
    "אל תעשנו ברחוב — רק באזורים המיועדים לעישון.",
    "הימנעו מדיבור בקול רם במרחבים ציבוריים.",
    "הימנעו מהבעת רגשות חזקים או תסכול במרחב הציבורי.",
    "הימנעו מאכילה או שתייה תוך כדי הליכה.",
    "הימנעו מהצבעה באצבע — השתמשו בכף יד פתוחה.",
  ]],
  ["כסף וקישוריות", [
    "אל תסתמכו רק על כרטיסי אשראי — החזיקו מעט ין במזומן.",
    "אל תבנו על Wi-Fi חינמי — היערכו מראש עם SIM או Wi-Fi נייד.",
    "הימנעו מהסתמכות על Wi-Fi ציבורי — הביאו SIM או Wi-Fi נייד.",
    "אל תשאירו טיפ או עודף קטן במסעדות או בקופות — זה לא מקובל.",
  ]],
  ["שיחה ומתנות", [
    "אל תביאו מתנות גדולות מדי, מתכלות או לא רשמיות מדי.",
    "אל תעלו נושאים רגישים, למשל פוליטיקה, ללא הקשר מתאים.",
    "הימנעו מישירות יתר או מעימותים.",
  ]],
];

const dayPhotos = {
  "Departure from Israel": "./images/japan_7.7",
  "Arrival in Tokyo": "./assets/tokyo-tower-evening.png",
  "Summary + departure": "./assets/day-15-7.png",
};

const dayMaps = {
  "Arrival in Tokyo": {
    src: "https://www.google.com/maps/d/embed?mid=1KgNu-E3PTu-8eC-OTNJ8IM7su6szrT8&ehbc=2E312F",
    title: "July 8 Wednesday",
  },
  "Minato ward visits": {
    src: "https://www.google.com/maps/d/embed?mid=1bb008A8_D0OJe2mofNKqRvb-oQ0z26w&ehbc=2E312F",
    title: "July 9 Thursday",
  },
  "Saitama community systems": {
    src: "https://www.google.com/maps/d/embed?mid=1Xg2LNCJBhtA8m4MM0o9tBOX5bm_iqy8&ehbc=2E312F",
    title: "July 10 Friday",
  },
  "Free day in Tokyo": {
    src: "https://www.google.com/maps/d/embed?mid=15FLGVWz9eXqo_ufO6L2nwi7p70sZBww&ehbc=2E312F",
    title: "July 11 Saturday",
  },
  "Tokyo cultural day": {
    src: "https://www.google.com/maps/d/embed?mid=1IUPlzFBabwKk6R7r7fIQqNbHj-Clcs4&ehbc=2E312F",
    title: "July 12 Sunday",
  },
  "Saitama care visits": {
    src: "https://www.google.com/maps/d/embed?mid=1Pezeih-CifGEbfrkqg10sPUi3LHKIOg&ehbc=2E312F",
    title: "July 13 Monday",
  },
  "Care tech & final event": {
    src: "https://www.google.com/maps/d/embed?mid=1uCaE_ygxN8Un5Q-7FOIvGyqLTrFKKl4&ehbc=2E312F",
    title: "July 14 Tuesday",
  },
  "Summary + departure": {
    src: "https://www.google.com/maps/d/embed?mid=1ZgwBBCUWDVOCGlfIPt__LAkWsFGHPU8&ehbc=2E312F",
    title: "July 15 Wednesday",
  },
};

let currentDayIndex = 0;

const byId = (id) => document.getElementById(id);

function runTests() {
  console.assert(days.length === 9, "Expected 9 delegation days");
  console.assert(days[6].title === "Saitama care visits", "Day 7 title should be Saitama care visits");
  console.assert(days[6].city === "Saitama City", "Day 7 city should be Saitama City");
  console.assert(Boolean(dayPhotos[days[0].title]), "Day 7.7 should have a photo");
  console.assert(Boolean(dayPhotos[days[1].title]), "Day 8.7 should have a photo");
  console.assert(Boolean(dayPhotos[days[8].title]), "Day 15.7 should have a photo");
  console.assert(!dayPhotos[days[2].title], "Only days 7.7, 8.7, and 15.7 should have photos");
  console.assert(Boolean(dayMaps[days[2].title]), "Day 9.7 should have a map");
  console.assert(Boolean(dayMaps[days[3].title]), "Day 10.7 should have a map");
  console.assert(Boolean(dayMaps[days[4].title]), "Day 11.7 should have a map");
  console.assert(Boolean(dayMaps[days[5].title]), "Day 12.7 should have a map");
  console.assert(Boolean(dayMaps[days[6].title]), "Day 13.7 should have a map");
  console.assert(Boolean(dayMaps[days[7].title]), "Day 14.7 should have a map");
  console.assert(Boolean(dayMaps[days[8].title]), "Day 15.7 should have a map");
  console.assert(Boolean(dayMaps[days[1].title]), "Day 8.7 should have a map");
  console.assert(prep.length >= 1 && avoid.length >= 1, "Preparation and avoid pages should have content");
  ["overview", "schedule", "location", "notes", "tips"].forEach((name) => {
    console.assert(Boolean(byId(`section-${name}`)), `Missing #section-${name}`);
    console.assert(Boolean(byId(`m-section-${name}`)), `Missing #m-section-${name}`);
  });
}

function scrollDayViewToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const mobileContent = document.querySelector(".m-content");
  if (mobileContent) {
    mobileContent.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function setCurrentDay(index) {
  const nextIndex = Math.max(0, Math.min(days.length - 1, index));
  if (nextIndex === currentDayIndex) return;

  currentDayIndex = nextIndex;
  render();
  scrollDayViewToTop();
}

function renderDateStrip() {
  byId("dateStrip").innerHTML = days
    .map(
      (day, index) => `
        <button class="date-btn ${index === currentDayIndex ? "active" : ""}" data-day="${index}" type="button">
          <span>
            <span class="date-week">${day.w}</span>
            <span class="date-num">${day.d}</span>
          </span>
        </button>
      `
    )
    .join("");

}

function renderDayMap(frameId, day) {
  const frame = byId(frameId);
  const iframe = frame.querySelector("iframe");
  const map = dayMaps[day.title];

  if (map) {
    frame.hidden = false;
    iframe.src = map.src;
    iframe.title = map.title;
  } else {
    frame.hidden = true;
    iframe.removeAttribute("src");
  }
}

function splitSchedulePlan(plan) {
  if (!Array.isArray(plan) || plan.length === 0) {
    return { rows: [], embeds: [] };
  }

  return {
    rows: plan.filter((item) => Array.isArray(item)),
    embeds: plan.filter((item) => item && typeof item === "object" && !Array.isArray(item) && item.embed),
  };
}

function isExternalEmbedUrl(src) {
  return /^https?:\/\//i.test(src);
}

function isImageEmbed(src) {
  return /\.(png|jpe?g|gif|webp|svg)(\?|#|$)/i.test(src);
}

function resolveScheduleEmbedUrl(src) {
  if (!isExternalEmbedUrl(src)) {
    return renderScheduleEmbedUrl(src);
  }

  const lumaPageMatch = src.match(/^https?:\/\/(?:www\.)?luma\.com\/([a-z0-9-]+)\/?$/i);
  if (lumaPageMatch) {
    return `https://luma.com/embed/event/${lumaPageMatch[1]}/simple`;
  }

  return src;
}

function getEmbedAspectRatio(src) {
  return /luma\.com\/embed\//i.test(resolveScheduleEmbedUrl(src))
    ? lumaEmbedAspectRatio
    : pdfEmbedAspectRatio;
}

function renderScheduleEmbedUrl(src) {
  const params = "toolbar=0&navpanes=0&page=1&view=Fit";
  return src.includes("#") ? src : `${src}#${params}`;
}

function resetScheduleEmbedFrame(iframe) {
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.transform = "";
  iframe.style.transformOrigin = "";
}

function resizeScheduleEmbeds() {
  document.querySelectorAll(".timeline-plan-embed").forEach((embed) => {
    const iframe = embed.querySelector("iframe");
    const width = embed.clientWidth;
    if (!width) return;

    const aspectRatio = Number(embed.dataset.embedAspect) || lumaEmbedAspectRatio;
    embed.style.height = `${Math.round(width * aspectRatio)}px`;
    if (iframe) resetScheduleEmbedFrame(iframe);
  });
}

function bindScheduleEmbedResize() {
  document.querySelectorAll('.timeline-plan-embed iframe:not([data-resize-bound="true"])').forEach((iframe) => {
    iframe.dataset.resizeBound = "true";
    iframe.addEventListener("load", resizeScheduleEmbeds);
  });
}

function renderSchedulePlanBlock(plan, { mobile = false } = {}) {
  const { rows, embeds } = splitSchedulePlan(plan);
  if (!rows.length && !embeds.length) return "";

  const rowHtml = rows
    .map((row) => {
      const [time, title, label] = row;

      if (time === "::") {
        return `
          <div class="timeline-plan-subhead">
            <strong>${title}</strong>
            ${label ? `<p>${label}</p>` : ""}
          </div>
        `;
      }

      if (!time) {
        return `
          <div class="timeline-plan-row timeline-plan-row--meta">
            <div class="timeline-plan-body">
              <strong>${title}</strong>
              <p>${label}</p>
            </div>
          </div>
        `;
      }

      return `
        <div class="timeline-plan-row">
          <div class="timeline-plan-time">${time}</div>
          <div class="timeline-plan-body">
            <strong>${title}</strong>
            ${label ? `<p>${label}</p>` : ""}
          </div>
        </div>
      `;
    })
    .join("");

  const embedHtml = embeds
    .map((item) => {
      const title = item.title || "Invitation";

      if (isImageEmbed(item.embed)) {
        return `
          <div class="timeline-plan-image">
            <img src="${item.embed}" alt="${title}" loading="lazy" decoding="async" />
          </div>
        `;
      }

      const embedSrc = resolveScheduleEmbedUrl(item.embed);
      const aspectRatio = getEmbedAspectRatio(item.embed);

      return `
        <div class="timeline-plan-embed" data-embed-aspect="${aspectRatio}">
          <iframe src="${embedSrc}" title="${title}" loading="lazy"></iframe>
        </div>
      `;
    })
    .join("");

  return `<div class="timeline-plan">${rowHtml}${embedHtml}</div>`;
}

function renderScheduleBadge(link) {
  if (!link) return "";

  return `<a class="badge badge-link" href="${link}" target="_blank" rel="noopener noreferrer">Website Link</a>`;
}

function mobileScheduleHasDetails(entry) {
  const [, , label, plan, link] = entry;
  if (link) return true;
  if (label && String(label).trim()) return true;
  if (!Array.isArray(plan) || plan.length === 0) return false;

  const { rows, embeds } = splitSchedulePlan(plan);
  return rows.length > 0 || embeds.length > 0;
}

function renderMobileScheduleEntry(entry) {
  const [time, title, label, plan, link] = entry;
  const hasDetails = mobileScheduleHasDetails(entry);
  const planHtml = hasDetails ? renderSchedulePlanBlock(plan, { mobile: true }) : "";
  const badgeHtml = renderScheduleBadge(link);
  const labelHtml = label && String(label).trim() ? `<p class="m-schedule-item__label">${label}</p>` : "";

  const headContent = `
    <span class="m-schedule-item__head">
      <strong>${title}</strong>
      <small>${time}</small>
    </span>
  `;

  if (!hasDetails) {
    return `
      <div class="m-schedule-item m-schedule-item--static">
        <div class="m-schedule-item__toggle m-schedule-item__toggle--static">
          ${headContent}
        </div>
      </div>
    `;
  }

  return `
    <div class="m-schedule-item">
      <button class="m-schedule-item__toggle" type="button" aria-expanded="false">
        ${headContent}
        <span class="glance-arrow" aria-hidden="true">›</span>
      </button>
      <div class="m-schedule-item__details" hidden>
        ${labelHtml}
        ${planHtml}
        ${badgeHtml ? `<div class="m-schedule-item__actions">${badgeHtml}</div>` : ""}
      </div>
    </div>
  `;
}

function toggleMobileScheduleItem(button) {
  const item = button.closest(".m-schedule-item");
  const details = item?.querySelector(".m-schedule-item__details");
  if (!item || !details) return;

  const isOpen = item.classList.toggle("is-open");
  button.setAttribute("aria-expanded", String(isOpen));
  details.hidden = !isOpen;

  if (isOpen) {
    bindScheduleEmbedResize();
    scheduleEmbedResize();
  }
}

function renderScheduleEntry(entry) {
  const [time, title, label, plan, link] = entry;
  const planHtml = renderSchedulePlanBlock(plan);
  const groupClass = planHtml ? " timeline-row--group" : "";
  const badgeHtml = renderScheduleBadge(link);

  return `
    <div class="timeline-row${groupClass}">
      <div class="time">${time}</div>
      <div>●</div>
      <div>
        <h4>${title}</h4>
        <p>${label}</p>
        ${planHtml}
      </div>
      ${badgeHtml}
    </div>
  `;
}

function getDayNotes(day) {
  return day.notesExtra ? `${day.theme}\n\n${day.notesExtra}` : day.theme;
}

function renderDesktopDay(day) {
  byId("sideDay").textContent = `DAY ${currentDayIndex + 1}`;
  byId("sideDate").textContent = `${formatWeekday(day.w)}, ${day.d}`;
  byId("title").textContent = day.title;
  byId("theme").textContent = day.theme;
  byId("tipText").textContent = day.tip;
  byId("dayLocation").textContent = day.city;
  renderDayMap("dayLocationMap", day);
  byId("dayNotes").textContent = getDayNotes(day);

  const photoEl = byId("dayPhoto");
  const overviewEl = photoEl.closest(".overview");
  const photoUrl = dayPhotos[day.title];

  if (photoUrl) {
    photoEl.hidden = false;
    overviewEl.classList.remove("overview--no-photo");
    photoEl.style.background = `
      linear-gradient(135deg, rgba(33, 79, 99, 0.15), rgba(33, 79, 99, 0.03)),
      url("${photoUrl}") center / cover
    `;
  } else {
    photoEl.hidden = true;
    overviewEl.classList.add("overview--no-photo");
    photoEl.style.background = "";
  }

  const highlightsEl = byId("highlights");
  highlightsEl.classList.toggle("highlights--5", day.items.length === 5);
  highlightsEl.innerHTML = day.items
    .map(
      ([title, text, icon]) => `
        <div class="highlight">
          <div class="hi-icon">${icon}</div>
          <h3>${title}</h3>
          <p>${text}</p>
        </div>
      `
    )
    .join("");

  byId("scheduleList").innerHTML = day.program.map((entry) => renderScheduleEntry(entry)).join("");
  bindScheduleEmbedResize();
  scheduleEmbedResize();
}

function renderMobileDay(day) {
  const dayLabel = `DAY ${currentDayIndex + 1}, ${formatWeekday(day.w)}, ${day.d}`;

  byId("mHeadDay").textContent = dayLabel;
  byId("mDayTitle").textContent = day.title;
  byId("mTheme").textContent = day.theme;

  byId("mDaysRow").innerHTML = days
    .map(
      (entry, index) => `
        <button class="m-date ${index === currentDayIndex ? "active" : ""}" data-day="${index}" type="button" aria-label="${entry.w} ${entry.d}">
          ${entry.w}<br><b>${entry.d}</b>
        </button>
      `
    )
    .join("");

  byId("mSchedule").innerHTML = day.program.map((entry) => renderMobileScheduleEntry(entry)).join("");
  bindScheduleEmbedResize();
  scheduleEmbedResize();

  byId("mLocation").textContent = day.city;
  renderDayMap("mLocationMap", day);
  byId("mNotes").textContent = getDayNotes(day);
  byId("mTip").textContent = day.tip;

  scrollMobileDateIntoView();
}

function scrollMobileDateIntoView() {
  const activeDate = document.querySelector("#mDaysRow .m-date.active");
  if (!activeDate) return;

  activeDate.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}

function renderGuides() {
  byId("prepGrid").innerHTML = prep.map(renderGuideCard).join("");
  byId("prepGridHe").innerHTML = prepHe.map(renderGuideCard).join("");
  byId("avoidGrid").innerHTML = avoid.map(renderGuideCard).join("");
  byId("avoidGridHe").innerHTML = avoidHe.map(renderGuideCard).join("");
}

function renderGuideCard([title, items]) {
  const listItems = items
    .map((item) => {
      if (item.startsWith("::")) {
        return `<li class="guide-subhead">${item.slice(2)}</li>`;
      }
      return `<li>${item}</li>`;
    })
    .join("");

  return `
    <article class="guide-card">
      <h3>${title}</h3>
      <ul>${listItems}</ul>
    </article>
  `;
}

function resetPanelNav() {
  const overviewButton = document.querySelector('.panel .side-menu button[data-section="overview"]');
  if (overviewButton) setPanelActiveButton(overviewButton);

  const mobileOverviewButton = document.querySelector('.mobile-side-menu button[data-section="overview"]');
  if (mobileOverviewButton) setMobileActiveButton(mobileOverviewButton);
}

function scheduleEmbedResize() {
  resizeScheduleEmbeds();
  requestAnimationFrame(resizeScheduleEmbeds);
}

function render() {
  const day = days[currentDayIndex];

  renderDateStrip();
  renderDesktopDay(day);
  renderMobileDay(day);
  resetPanelNav();
}

function formatWeekday(day) {
  return `${day[0]}${day.slice(1).toLowerCase()}`;
}

function showPage(pageName) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("active", page.id === `page-${pageName}`);
  });

  document.querySelectorAll("[data-page]").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === pageName);
  });

  const subpageTitles = {
    prep: "Preparation",
    avoid: "What to Avoid",
    contact: "Contact",
  };
  const subpageHead = document.getElementById("mSubpageHead");
  const subpageTitle = document.getElementById("mSubpageTitle");
  if (subpageHead && subpageTitle) {
    if (subpageTitles[pageName]) {
      subpageTitle.textContent = subpageTitles[pageName];
      subpageHead.hidden = false;
      document.body.classList.add("m-subpage-view");
    } else {
      subpageHead.hidden = true;
      document.body.classList.remove("m-subpage-view");
    }
  }

  window.scrollTo({ top: 0, behavior: "auto" });

  const mobileContent = document.querySelector(".m-content");
  if (mobileContent) {
    mobileContent.scrollTo({ top: 0, behavior: "auto" });
  }
}

function setPanelActiveButton(button) {
  document.querySelectorAll(".panel .side-menu button, .panel .quick-link").forEach((item) => {
    item.classList.remove("active");
  });

  button.classList.add("active");
}

function updateDesktopScrollOffset() {
  const header = document.querySelector("header.desktop-only");
  const dateStrip = document.querySelector(".date-strip");
  if (!header || !dateStrip) return;

  document.documentElement.style.setProperty(
    "--desktop-scroll-offset",
    `${header.offsetHeight + dateStrip.offsetHeight}px`
  );
}

function scrollToDaySection(sectionName) {
  if (sectionName === "overview") {
    scrollDayViewToTop();
    return;
  }

  const section = document.getElementById(`section-${sectionName}`);
  if (!section) return;

  updateDesktopScrollOffset();

  const scrollTarget =
    section.querySelector(".day-section-title") || section.querySelector(".tip") || section;

  requestAnimationFrame(() => {
    scrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function setMobileActiveButton(button) {
  document.querySelectorAll(".mobile-side-menu button").forEach((item) => {
    item.classList.remove("active");
  });

  button.classList.add("active");
}

function getMobileSectionScrollTop(section, mobileContent) {
  return (
    mobileContent.scrollTop +
    section.getBoundingClientRect().top -
    mobileContent.getBoundingClientRect().top
  );
}

function scrollToMobileSection(sectionName) {
  const mobileContent = document.querySelector(".m-content");
  const section = document.getElementById(`m-section-${sectionName}`);
  if (!section) return;

  const runScroll = () => {
    if (!mobileContent) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (sectionName === "overview") {
      mobileContent.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const top = Math.max(0, getMobileSectionScrollTop(section, mobileContent));
    mobileContent.scrollTo({ top, behavior: "smooth" });
  };

  // Wait a frame so layout/maps settle, then scroll
  requestAnimationFrame(() => {
    requestAnimationFrame(runScroll);
  });
}

function goBackToDelegationAbout() {
  try {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: "future-time:go-about" }, "*");
      return;
    }
  } catch (e) {}
  window.location.href = "../index.html";
}

function initEvents() {
  document.addEventListener("click", (event) => {
    const homeButton = event.target.closest(".brand-home");
    if (homeButton) {
      event.preventDefault();
      goBackToDelegationAbout();
      return;
    }

    const pageButton = event.target.closest("[data-page]");
    if (pageButton) {
      showPage(pageButton.dataset.page);
      return;
    }

    const dayButton = event.target.closest("[data-day]");
    if (dayButton) {
      setCurrentDay(Number(dayButton.dataset.day));
      return;
    }

    const panelButton = event.target.closest(".panel .side-menu button");
    if (panelButton?.dataset.section) {
      setPanelActiveButton(panelButton);
      scrollToDaySection(panelButton.dataset.section);
      return;
    }

    const quickLink = event.target.closest(".panel .quick-link");
    if (quickLink) setPanelActiveButton(quickLink);

    const mobileButton = event.target.closest(".mobile-side-menu button");
    if (mobileButton?.dataset.section) {
      setMobileActiveButton(mobileButton);
      scrollToMobileSection(mobileButton.dataset.section);
      return;
    }

    const scheduleToggle = event.target.closest(".m-schedule-item__toggle:not(.m-schedule-item__toggle--static)");
    if (scheduleToggle) {
      toggleMobileScheduleItem(scheduleToggle);
    }
  });

}

runTests();
renderGuides();
render();
updateDesktopScrollOffset();
initEvents();
window.addEventListener("resize", () => {
  updateDesktopScrollOffset();
  resizeScheduleEmbeds();
});
