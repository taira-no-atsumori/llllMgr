export const ITEM_NONE = '-' as const;
export type ItemNone = typeof ITEM_NONE;

export const SKILL_BOOK = {
  LOW: '技能書(初等)',
  MEDIUM: '技能書(中等)',
  HIGH: '技能書(高等)',
} as const;
export type SkillBook = (typeof SKILL_BOOK)[keyof typeof SKILL_BOOK];

export const PIECE_GARNET = {
  R1: 'ガーネットピース(R1)',
  R2: 'ガーネットピース(R2)',
  R3: 'ガーネットピース(R3)',
  R4: 'ガーネットピース(R4)',
} as const;
export type GarnetPiece = (typeof PIECE_GARNET)[keyof typeof PIECE_GARNET];

export const PIECE_CARNELIAN = {
  R1: 'カーネリアンピース(R1)',
  R2: 'カーネリアンピース(R2)',
  R3: 'カーネリアンピース(R3)',
  R4: 'カーネリアンピース(R4)',
} as const;
export type CarnelianPiece = (typeof PIECE_CARNELIAN)[keyof typeof PIECE_CARNELIAN];

export const PIECE_EMERALD: {
  R1: 'エメラルドピース(R1)',
  R2: 'エメラルドピース(R2)',
  R3: 'エメラルドピース(R3)',
  R4: 'エメラルドピース(R4)',
} as const;
export type EmeraldPiece = (typeof PIECE_EMERALD)[keyof typeof PIECE_EMERALD];

export const PIECE_DIA: {
  R1: 'ダイアピース(R1)',
  R2: 'ダイアピース(R2)',
  R3: 'ダイアピース(R3)',
  R4: 'ダイアピース(R4)',
} as const;
export type DiaPiece = (typeof PIECE_DIA)[keyof typeof PIECE_DIA];

export const PIECE_PERIDOT: {
  R1: 'ペリドットピース(R1)',
  R2: 'ペリドットピース(R2)',
  R3: 'ペリドットピース(R3)',
  R4: 'ペリドットピース(R4)',
} as const;
export type PeridotPiece = (typeof PIECE_PERIDOT)[keyof typeof PIECE_PERIDOT];

export const PIECE_RUBY = {
  R1: 'ルビーピース(R1)',
  R2: 'ルビーピース(R2)',
  R3: 'ルビーピース(R3)',
  R4: 'ルビーピース(R4)',
} as const;
export type RubyPiece = (typeof PIECE_RUBY)[keyof typeof PIECE_RUBY];

export const PIECE_SAPPHIRE = {
  R1: 'サファイアピース(R1)',
  R2: 'サファイアピース(R2)',
  R3: 'サファイアピース(R3)',
  R4: 'サファイアピース(R4)',
} as const;
export type SapphirePiece = (typeof PIECE_SAPPHIRE)[keyof typeof PIECE_SAPPHIRE];

export const PIECE_TOPAZ = {
  R1: 'トパーズピース(R1)',
  R2: 'トパーズピース(R2)',
  R3: 'トパーズピース(R3)',
  R4: 'トパーズピース(R4)',
} as const;
export type TopazPiece = (typeof PIECE_TOPAZ)[keyof typeof PIECE_TOPAZ];

export const PIECE_TURQUOISE = {
  R1: 'ターコイズピース(R1)',
  R2: 'ターコイズピース(R2)',
  R3: 'ターコイズピース(R3)',
  R4: 'ターコイズピース(R4)',
} as const;
export type TurquoisePiece = (typeof PIECE_TURQUOISE)[keyof typeof PIECE_TURQUOISE];

export const PIECE_AMETHYST = {
  R1: 'アメジストピース(R1)',
  R2: 'アメジストピース(R2)',
  R3: 'アメジストピース(R3)',
  R4: 'アメジストピース(R4)',
} as const;
export type AmethystPiece = (typeof PIECE_AMETHYST)[keyof typeof PIECE_AMETHYST];

export const PIECE_SOL = {
  R3: 'ソルピース(R3)',
  R4: 'ソルピース(R4)',
} as const;
export type SolPiece = (typeof PIECE_SOL)[keyof typeof PIECE_SOL];

export const PIECE_MOON = {
  R3: 'ムーンピース(R3)',
  R4: 'ムーンピース(R4)',
} as const;
export type MoonPiece = (typeof PIECE_MOON)[keyof typeof PIECE_MOON];

export const PIECE_STELLA = {
  R3: 'ステラピース(R3)',
  R4: 'ステラピース(R4)',
} as const;
export type StellaPiece = (typeof PIECE_STELLA)[keyof typeof PIECE_STELLA];

export const CHARM_SOL = {
  R3: 'ソルチャーム(R3)',
  R4: 'ソルチャーム(R4)',
} as const;
export type SolCharm = (typeof CHARM_SOL)[keyof typeof CHARM_SOL];

export const CHARM_MOON = {
  R3: 'ムーンチャーム(R3)',
  R4: 'ムーンチャーム(R4)',
} as const;
export type MoonCharm = (typeof CHARM_MOON)[keyof typeof CHARM_MOON];

export const CHARM_STELLA = {
  R3: 'ステラチャーム(R3)',
  R4: 'ステラチャーム(R4)',
} as const;
export type StellaCharm = (typeof CHARM_STELLA)[keyof typeof CHARM_STELLA];

export const CHARM_CRYSTAL = 'クリスタルチャーム' as const;
export type CrystalCharm = typeof CHARM_CRYSTAL;

export const ITEMS = {
  NONE: ITEM_NONE,
  SKILL_BOOK: SKILL_BOOK,
  PIECE: {
    GARNET: PIECE_GARNET,
    CARNELIAN: PIECE_CARNELIAN,
    EMERALD: PIECE_EMERALD,
    DIA: PIECE_DIA,
    PERIDOT: PIECE_PERIDOT,
    RUBY: PIECE_RUBY,
    SAPPHIRE: PIECE_SAPPHIRE,
    TOPAZ: PIECE_TOPAZ,
    TURQUOISE: PIECE_TURQUOISE,
    AMETHYST: PIECE_AMETHYST,
    SOL: PIECE_SOL
    MOON: PIECE_MOON
    STELLA: PIECE_STELLA
  },
  CHARM: {
    SOL: CHARM_SOL,
    MOON: CHARM_MOON,
    STELLA: CHARM_STELLA,
    CRYSTAL: CHARM_CRYSTAL
  },
} as const;

export type Items =
  | ItemNone
  | SkillBook
  | GarnetPiece
  | CarnelianPiece
  | EmeraldPiece
  | DiaPiece
  | PeridotPiece
  | RubyPiece
  | SapphirePiece
  | TopazPiece
  | TurquoisePiece
  | AmethystPiece
  | SolPiece
  | MoonPiece
  | StellaPiece
  | SolCharm
  | MoonCharm
  | StellaCharm
  | CrystalCharm;
