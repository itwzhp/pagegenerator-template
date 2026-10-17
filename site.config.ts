// Dane jednostki. Plik należy do jednostki: wypełnia go /zhp-zbuduj-strone.
// Schemat: core/lib/site-schema.ts (build zgłosi błąd przy brakach lub złym formacie).
// Poniżej dane przykładowe szablonu: fikcyjny „Hufiec ZHP Przykładowo”.
import type { SiteConfigInput } from './core/lib/site-schema';

const config: SiteConfigInput = {
  nazwa: 'Hufiec ZHP Przykładowo',
  typ: 'hufiec',
  patron: 'im. Szarych Szeregów',
  opis: 'Harcerki i harcerze z Przykładowa i okolic: gromady zuchowe, drużyny harcerskie, starszoharcerskie i wędrownicze.',

  nadrzedna: { nazwa: 'Chorągiew Przykładowa ZHP', url: 'https://zhp.pl' },

  nawigacja: [
    { etykieta: 'Aktualności', href: '/aktualnosci' },
    { etykieta: 'Kalendarz', href: '/wydarzenia' },
    { etykieta: 'O nas', href: '/o-nas' },
    { etykieta: 'Drużyny', href: '/jednostki' },
    { etykieta: 'Komenda', href: '/komenda' },
    { etykieta: 'Dla rodziców', href: '/dla-rodzicow' },
    { etykieta: 'Kontakt', href: '/kontakt' },
  ],
  cta: { etykieta: 'Zapisz dziecko', href: '/dla-rodzicow#zapisy' },
  zapisy: '/dla-rodzicow#zapisy',

  kontakt: {
    email: 'hufiec@przykladowo.zhp.pl',
    telefon: '+48 600 000 000',
    adres: 'ul. Harcerska 1, 00-000 Przykładowo',
    dyzury: 'wtorki 18:00–20:00, po wcześniejszym umówieniu',
  },

  daneFormalne: {
    nip: '[NIP]',
    krs: '[KRS]',
    konta: [{ nazwa: 'Konto hufca', numer: '[numer konta]' }],
  },

  spolecznosci: {
    facebook: 'https://www.facebook.com/',
  },

  jedenProcent: { krs: '0000094699', cel: '[cel szczegółowy hufca]' },

  liczby: {
    stanNa: '2026-09-30',
    pozycje: [
      { wartosc: '[liczba]', etykieta: 'członków hufca' },
      { wartosc: '[liczba]', etykieta: 'drużyn i gromad' },
      { wartosc: '[liczba]', etykieta: 'instruktorów' },
    ],
  },
};

export default config;
