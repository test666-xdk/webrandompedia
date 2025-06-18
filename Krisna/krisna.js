const talents = {
    hololive: [
      {
        name: "Kaela Kovalskia",
        image: "../img/gambarkrisna/kalea.jpeg",
        description: "Kaela adalah VTuber dari Hololive ID generasi ketiga bersama Zeta dan Kobo."
      },
      {
        name: "Gigi Murin",
        image: "../img/gambarkrisna/gigi.jpeg",
        description: "Gigi Murin adalah VTuber Hololive EN generasi keempat, debut Juni 2024."
      },
      {
        name: "Ouro Kronii",
        image: "../img/gambarkrisna/kronii.jpeg",
        description: "Kronii adalah bagian dari Hololive English -Council-, generasi kedua."
      },
      {
        name: "Raora Panthera",
        image: "../img/gambarkrisna/raora.jpeg",
        description: "Raora adalah talent Hololive English generasi keempat."
      },
      {
        name: "Airani Iofifteen",
        image: "../img/gambarkrisna/iofi.jpeg",
        description: "Iofi debut di Hololive ID generasi pertama bersama Moona dan Risu."
      }
    ],
    nijisanji: [
      {
        name: "Kuzuha",
        image: "../img/gambarkrisna/kuzuha.png",
        description: "Kuzuha adalah VTuber populer dari Nijisanji Jepang."
      },
      {
        name: "Kanae",
        image: "../img/gambarkrisna/kanae.png",
        description: "Kanae dikenal sebagai VTuber serba bisa di Nijisanji."
      },
      {
        name: "Mika Melatika",
        image: "../img/gambarkrisna/mika.png",
        description: "Mika adalah VTuber asal Indonesia dari cabang Nijisanji ID."
      },
      {
        name: "Hyona Elatiora",
        image: "../img/gambarkrisna/hyona.png",
        description: "Hyona adalah VTuber enerjik dari Nijisanji ID."
      },
      {
        name: "Siska Leontyne",
        image: "../img/gambarkrisna/siska.png",
        description: "Siska adalah salah satu anggota generasi awal Nijisanji ID."
      }
    ],
    vshojo: [
      {
        name: "Ironmouse",
        image: "../img/gambarkrisna/ironmouse.png",
        description: "Ironmouse dikenal karena suaranya yang khas dan energinya yang luar biasa."
      },
      {
        name: "Nyanners",
        image: "../img/gambarkrisna/nyanners.png",
        description: "Nyanners adalah VTuber VShojo dengan humor absurd dan suara imut."
      },
      {
        name: "Michi Mochievee",
        image: "../img/gambarkrisna/michi.jpg",
        description: "Michi adalah VTuber VShojo yang multibahasa dan kreatif."
      },
      {
        name: "Projekt Melody",
        image: "../img/gambarkrisna/melody.png",
        description: "Melody adalah VTuber AI dari VShojo yang populer di berbagai platform."
      },
      {
        name: "Zentreya",
        image: "../img/gambarkrisna/zentreya.png",
        description: "Zentreya adalah VTuber bisu yang menggunakan teknologi teks untuk berbicara."
      }
    ],
    indie: [
      {
        name: "Amano Pikamee",
        image: "../img/gambarkrisna/pikamee.png",
        description: "Pikamee adalah VTuber bilingual yang dulunya bagian dari VOMS Project."
      },
      {
        name: "Koa Kana",
        image: "../img/gambarkrisna/koa.png",
        description: "Koa Kana adalah indie VTuber dengan suara dan desain yang unik."
      },
      {
        name: "Baelz Moon",
        image: "../img/gambarkrisna/baelz.png",
        description: "Baelz adalah VTuber chaos yang sempat dikenal dari konten kreatifnya."
      },
      {
        name: "Yoruno Hikari",
        image: "../img/gambarkrisna/hikari.png",
        description: "Hikari adalah VTuber indie dengan tema malam dan suara lembut."
      },
      {
        name: "Makoto Kisaragi",
        image: "../img/gambarkrisna/makoto.png",
        description: "Makoto adalah VTuber indie dengan latar belakang seni dan musik."
      }
    ]
  };
  
function showTalent(agency) {
  const container = document.getElementById("talent-display");
  const agencyData = talents[agency];

  if (!agencyData) return;

  const cardsHtml = agencyData.map(talent => `
    <div class="talent-card">
      <img src="${talent.image}" alt="${talent.name}" />
      <h4>${talent.name}</h4>
      <p>${talent.description}</p>
    </div>
  `).join("");

  container.innerHTML = `
    <h3>Talent dari ${agency.charAt(0).toUpperCase() + agency.slice(1)}</h3>
    <div class="talent-card-container">
      ${cardsHtml}
    </div>
  `;
}