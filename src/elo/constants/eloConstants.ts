const eloConstants = {
  // ELO System Constants
  DEFAULT_RATING: 1500,
  DEFAULT_RD: 350,
  DEFAULTVOL: 0.06,
  PROVISIONGAMES: 20,
  BRONZEBASE: 1300,
  SILVERBASE: 1400,
  GOLDBASE: 1550,
  PLATINUMBASE: 1700,
  DIAMONDBASE: 1800,
  CHAMPIONBASE: 1900,
} as const;

export default eloConstants;
