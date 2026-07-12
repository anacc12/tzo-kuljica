import { getTranslations } from 'next-intl/server'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'
import { FileText } from 'lucide-react'

type Doc = { name: string; url: string }
type Section = { title: string; docs: Doc[] }

const SECTIONS: Section[] = [
  {
    title: 'Dokumenti 2024/2025',
    docs: [
      { name: 'Izvješće o provedbi Zakona o pravu na pristup informacijama za 2024. godinu', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/686c0637a6bb3d2495154985_Izvje%C5%A1%C4%87e-o-provedbi-Zakona-o-pravu-na-pristup-informacijama-za-2024-godinu.pdf' },
      { name: 'Statut Turističke zajednice Općine Kukljica', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866c2ae284637ed06cea1d2_statut%20tzo%20kukljica.pdf' },
      { name: 'Odluka o izvršenju godišnjeg programa rada za 2024.', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/686691e2b9b750e40d23e6b0_Odluka%20o%20izvrs%CC%8Cenju%20godis%CC%8Cnjeg%20programa%20rada%20za%202024.%20final.pdf' },
      { name: 'Izvješće o obavljenom nadzoru skupštine 2024.', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b7be9c860f1bfd46686d_Izvje%C5%A1%C4%87e%20o%20obavljenom%20nadzoru%20skup%C5%A1tine%202024.%20o%C5%BEujak%202025.pdf' },
      { name: 'Izmjene i dopune godišnjeg programa rada za 2024. godinu', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b8075c3bbd2b2befcccd_Izmjene%20i%20dopune%20godis%CC%8Cnjeg%20programa%20rada%20za%202024.%20godinu.pdf' },
      { name: 'Godišnji program rada sa financijskim planom za 2025. godinu', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b80751a4e1295616cda3_Godi%C5%A1nji%20program%20rada%20sa%20financijskim%20planom%20za%20%202025.%20godinu.pdf' },
      { name: 'Odluka o visini turističke pristojbe za 2025. godinu', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b8c475dacb31eb3cebca_Odluka%20o%20visini%20turisti%C4%8Dke%20pristojbe%20za%202025.%20godinu.pdf' },
      { name: 'Odluka o visini turističke pristojbe za 2026. godinu', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b8e35c3bbd2b2bf08676_Odluka%20o%20visini%20turisti%C4%8Dke%20pristojbe%20za%202026.%20godinu.pdf' },
    ],
  },
  {
    title: 'Godišnji programi i odluke',
    docs: [
      { name: 'Odluka o izvršenju godišnjeg programa rada za 2023.', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b8076ed932fe509af8bc_Odluka%20o%20izvr%C5%A1enju%20godi%C5%A1njeg%20programa%20rada%20za%202023.pdf' },
      { name: 'Godišnji program rada sa financijskim planom za 2024. godinu', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b8077fc04cd2d1abd674_Godi%C5%A1nji%20program%20rada%20sa%20financijskim%20planom%20za%20%202024.%20godinu.pdf' },
      { name: 'Odluka o izmjeni Odluke o visini turističke pristojbe za 2024.', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b9a078565214a21e0b57_Odluka%20o%20izmjeni%20Odluke%20o%20visini%20turisti%C4%8Dke%20pristojbe%20za%202024.pdf' },
      { name: 'Objava natječaja za izbor direktora/direktorice TZO Kukljica (2023)', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b9cdfb35afc70a46edf4_Turisti%C4%8Dka%20Zajednica%20Op%C4%87ine%20Kukljica%20Natje%C4%8Daj%202023.pdf' },
      { name: 'Godišnji program rada sa financijskim planom za 2023.', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866bbc6ec83a782bd640dd9_Godi%C5%A1nji%20program%20rada%20sa%20financijskim%20planom%20za%202023..pdf' },
      { name: 'Godišnji program rada sa financijskim planom za 2022.', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866bba951a4e129561a14f4_Godi%C5%A1nji%20programa%20rada%20sa%20financijskim%20planom%20za%202022..pdf' },
      { name: 'Godišnji program rada 2022.', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866bd5cf62e82a0091c361e_Godi%C5%A1nji%20program%20rada%202022..pdf' },
      { name: 'Godišnji program rada sa financijskim planom za 2021. godinu', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866bcf3ee11e5590a6f48e4_Godi%C5%A1nji%20program%20rada%202021.pdf' },
      { name: 'Odluka o izvršenju godišnjeg programa rada za 2021.', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866bcf3ee11e5590a6f48e4_Godi%C5%A1nji%20program%20rada%202021.pdf' },
      { name: 'Izvješće o izvršenju Godišnjeg programa rada sa financijskim planom za 2020. godinu', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866bd9be263cdcc331eae25_Izvje%C5%A1%C4%87e-o-izvr%C5%A1enju-programa-rada-za-2020-godinu.pdf' },
      { name: 'Izvješće o obavljenom nadzoru skupštine 2021.', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866bc7a78565214a2205dd9_Izvje%C5%A1%C4%87e%20o%20obavljenom%20nadzoru%20skup%C5%A1tine..pdf' },
      { name: 'Natječaj za direktora TZO - 2022.', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866bd2618f081471e6fb858_Natjec%CC%8Caj%20za%20direktora%20TZO%20-%202022..pdf' },
      { name: 'Objava natječaja za izbor direktora/direktorice TZO Kukljica (2021)', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866bd7c284637ed06ca4997_Natje%C4%8Daj-za-izbor-direktora-TZO-Kukljica.pdf' },
      { name: 'Natječaj za izbor i imenovanje direktora/ice 2018.', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866c27bf85e09888847eb70_Natje%C4%8Daj-TZO-2018.pdf' },
      { name: 'Safe stay in Croatia - prijava', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866bd694f8d49ff48c45b10_Safe%20stay%20in%20Croatia%20-%20prijava..pdf' },
    ],
  },
  {
    title: 'COVID-19 dokumenti',
    docs: [
      { name: 'Postupak kod pojave bolesti u gosta u turističkom smještajnom objektu', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866be4eb115599ccde3a80d_Postupak_kod_pojave_bolesti_kod_gosta_19_06.pdf' },
      { name: 'Turistička aktivnost u okolnostima bolesti COVID-19 — informacije za privatne iznajmljivače', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866be69ed1c2bd9274fbad2_Turisti%C4%8Dka%20aktivnost%20u%20okolnostima%20bolesti%20COVID-19.pdf' },
      { name: 'Olakšavanje prelaska granice Republike Hrvatske', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866be9739fee7689db44242_EnterCroatia_info.pdf' },
      { name: 'Primjer potvrde rezervacije smještaja/charter usluge', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866bf23dabcf9128fbf3489_Primjer-potvrde-rezervacije-smje%C5%A1taja-.docx' },
      { name: 'Informacije o mogućnostima ulaska stranih državljana u RH', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866bf43ce4eb31b2ad8fd20_Info_o_mogu%C4%87nostima_ulaska_u_RH.pdf' },
      { name: 'Preporuke za rad hotela i iznajmljivača tijekom epidemije COVID-19', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866bfc8b115599ccde4d7cc_Preporuke-za-rad-ugostiteljskih-objekata-1-1.pdf' },
      { name: 'Postupci i mjere zaštite u hotelima i turističkom sektoru', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866bf6046c801abeebdfd56_preporuke-za-hotele28-2-20205e5e491f50df5.pdf' },
      { name: 'Pravilnik o odgodi ili oslobađanju od plaćanja turističke pristojbe', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866c02078769d94822d585a_Pravilnik-o-odgodi-ili-osloba%C4%91anju-od-pla%C4%87anju-turisti%C4%8Dke-pristojbe%20\(1\).pdf' },
      { name: 'Obveza plaćanja turističke pristojbe za pomoćne krevete', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866c1529f19b930bc205147_Obveza-placanja-turisticke-pristojbe-za-pomocne-krevete.pdf' },
      { name: 'Upute za vlasnike kuća za odmor i stanovnike općina i gradova', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866c05069f01b458869d155_Upute-za-vlasnike-ku%C4%87a-za-odmor-i-stanovnike.pdf' },
    ],
  },
  {
    title: 'Odluke i preporuke Stožera civilne zaštite',
    docs: [
      { name: 'Privremena obustava javnog prometa', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b73d609c09cf9bebf4e4_Privremena-obustava-javnog-prometa.pdf' },
      { name: 'Mjere ograničavanja društvenih okupljanja, rada u trgovini, itd.', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b74cce4eb31b2ad23c33_Odluka-mjere-ograni%C4%8Davanja-dru%C5%A1tvenih-okupljanja-rada-trgovina.pdf' },
      { name: 'Privremena zabrana prelaska preko graničnih prijelaza RH', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b75d4841b57039b30419_Odluka-privremena-zabrana-prelaska-preko-grani%C4%8Dnih-prijelaza-RH.pdf' },
      { name: 'Zabranjuje se brodovima u međunarodnoj plovidbi uplovljavanje', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b77e38d973dda43908f5_Odluka-kruzeri_2.pdf' },
      { name: 'Obrazloženje Odluke o mjerama ograničavanja društvenih okupljanja', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866c1195bc1dad301cef47e_MINT_Obrazlo%C5%BEenje-Odluke.pdf' },
      { name: 'Preporuke stožera civilne zaštite Zadarske županije', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866c135c024f5940b860599_Stanovni%C5%A1tvu-Zadarske-%C5%BEupanije-preporuke-sto%C5%BEera-civilne-za%C5%A1tite.pdf' },
    ],
  },
  {
    title: 'Zakon o pravu na pristup informacijama',
    docs: [
      { name: 'Godišnje izvješće (2019)', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b6fd546395fe7e4885db_Godisnje-izvjesce-2019.pdf' },
      { name: 'Obrazac broj 1 — Upisnik', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b6946446d9e4b8ea05a2_Obrazac-1-Upisnik.pdf' },
      { name: 'Obrazac broj 2 — Zahtjev za pristup informacijama', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b687e71341e104ca116e_Obrazac-2-Zahtjev-za-pristup-informacijama.pdf' },
      { name: 'Obrazac broj 3 — Zahtjev za dopunu ili ispravak informacije', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b67c0539dc14dc9523a4_Obrazac-3-Zahtjev-za-dopunu-ili-ispravak-informacije-1.pdf' },
      { name: 'Obrazac broj 4 — Zahtjev za ponovnu uporabu informacija', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b672fe5382e6bf0d551b_Obrazac-4-Zahtjev-za-ponovnu-uporabu-informacija-1.pdf' },
      { name: 'Obrazac za dostavu podataka o tijelu javne vlasti', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b664207ef840718c86e4_PI-Uputa-%C4%8Dl.-13-ZPPI-Prilog-Obrazac-za-dostavu-podataka.pdf' },
      { name: 'Žalba zbog nepostupanja tijela javne vlasti — zahtjev za pristup informaciji', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b5fe4c51e49a3ed84622_Zalba-sutnja-uprave-pristup-informacijama.pdf' },
      { name: 'Žalba protiv rješenja tijela javne vlasti — odbijeni zahtjev za pristup informaciji', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b5cd3c2f7393e8910657_Zalba-protiv-rjesenja-pristup-informacijama.pdf' },
      { name: 'Žalba protiv rješenja tijela javne vlasti — odbijeni zahtjev za ponovnu uporabu', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b5bf189c50ec74d1f692_Zalba-protiv-rjesenja-ponovna-uporaba-informacija.pdf' },
    ],
  },
  {
    title: 'Nagrade i edukacija',
    docs: [
      { name: 'Turistički cvijet – Kvaliteta za Hrvatsku 2019', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866c16fe14b3e47c7a85c08_Prijave-za-Turisti%C4%8Dki-cvijet-Kvaliteta-za-Hrvatsku-2019-Obiteljski%20turizam.pdf' },
      { name: 'Dodjela nagrada za najbolje iznajmljivače', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866c1919324981888c18152_natje%C4%8Daj-welcome.pdf' },
      { name: 'Edukacija za male iznajmljivače', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866c1a818f081471e733fab_poziv-edukacija-za-doma%C4%87ine-2019.pdf' },
      { name: 'Natječaj za najljepšu okućnicu 2019.', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866c25538a4512274974e48_Javni-natje%C4%8Daj-za-najljep%C5%A1u-oku%C4%87nicu-i-balkon-2019..pdf' },
    ],
  },
  {
    title: 'Zadarska županija — Zahtjevi i odjave',
    docs: [
      { name: 'Obavijest — Zadarska županija preuzela poslove Ureda državne uprave', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b4427fc04cd2d1a89b3d_Obavijest-Zadarska-%C5%BEupanija.pdf' },
      { name: 'Zahtjev za izdavanje odobrenja za pružanje ugostiteljskih usluga u domaćinstvu', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b45a88cf1a629c35fa92_ZAHTJEV-gradani.pdf' },
      { name: 'Zahtjev — nastavak', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b4749b852ad3982a7b41_Zahtjev-nastavak.pdf' },
      { name: 'Zahtjev za odobrenja za pružanje ugostiteljskih usluga na OPG', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b4d79c0a0e8deeb85705_Zahtjev-OPG.pdf' },
      { name: 'Odjava dijela kapaciteta iz odobrenja', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b4a6fe5382e6bf0beb18_Odjava-DIJELA-gradani.pdf' },
      { name: 'Zahtjev za razvrstavanje i kategorizaciju smještajnih objekata', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b4874230eb2b5e71c49f_Zahtjev-za-razvrstavanje-i-kategorizaciju-smje%C5%A1tajnih-objekata.pdf' },
    ],
  },
  {
    title: 'WELCOME klub kvalitete',
    docs: [
      { name: 'Poziv za uključenje u projekt standardizacije obiteljskog smještaja', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b4114841b57039b00259_WELCOME-Animacijsko-pismo-s-obrascem-2019.pdf' },
      { name: 'Pravilnik označavanja kvalitete (labelling) u obiteljskom smještaju', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b3d798aac0b97aab2f6c_WELCOME-Pravilnik.pdf' },
      { name: 'Uvjeti za ulazak u podbrendove: CITY, RURAL, FAMILY i BIKE', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b3cc7408bb1cb930f96b_WELCOME-podbrandovi_2017.pdf' },
      { name: 'Knjiga standarda', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b3b232c0158b2ab4a90d_ZADAR-BIKE-MAGIC_Knjiga%20standarda.pdf' },
      { name: 'Izjava o podmirenim dugovanjima', url: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6866b388015a6d84ef82256b_izjava-o-podmirenim-dugovanjima.pdf' },
    ],
  },
]

export default async function OfficialDocsPage() {
  const t = await getTranslations('officialDocs')

  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} label="Dokumenti" />

      <style>{`
        .doc-row { display: flex; align-items: center; gap: 14px; padding: 14px 16px; border-radius: 6px; text-decoration: none; color: var(--dark); transition: background-color 0.15s; }
        .doc-row:hover { background-color: rgba(17,21,46,0.04); }
      `}</style>

      <section style={{ backgroundColor: 'var(--bg)', paddingTop: 100, paddingBottom: 120 }}>
        <div className="tz-container" style={{ maxWidth: 860 }}>

          {SECTIONS.map((section, si) => (
            <FadeIn key={si} delay={si * 0.04}>
              <div style={{ marginBottom: 72 }}>
                {/* Section header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
                  <span
                    style={{
                      fontFamily: 'Roboto Condensed, sans-serif',
                      fontSize: 11,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'rgba(17,21,46,0.35)',
                      fontWeight: 500,
                    }}
                  >
                    0{si + 1}
                  </span>
                  <h2
                    style={{
                      fontFamily: 'Instrument Serif, Georgia, serif',
                      fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                      fontWeight: 400,
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                      color: 'var(--dark)',
                    }}
                  >
                    {section.title}
                  </h2>
                </div>

                <div className="divider" style={{ marginBottom: 24 }} />

                {/* Document list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {section.docs.map((doc, di) => (
                    <a
                      key={di}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doc-row"
                    >
                      <FileText
                        style={{
                          width: 16,
                          height: 16,
                          flexShrink: 0,
                          color: 'rgba(17,21,46,0.3)',
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'Geist, sans-serif',
                          fontSize: 14,
                          lineHeight: 1.5,
                          color: 'var(--dark)',
                        }}
                      >
                        {doc.name}
                      </span>
                      <span
                        style={{
                          marginLeft: 'auto',
                          fontFamily: 'Roboto Condensed, sans-serif',
                          fontSize: 10,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'rgba(17,21,46,0.25)',
                          flexShrink: 0,
                        }}
                      >
                        PDF
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}

        </div>
      </section>
    </>
  )
}
