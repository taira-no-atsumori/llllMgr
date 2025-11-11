export const PIECE_NAME = {
  GARNET: 'ガーネットピース',
  CARNELIAN: 'カーネリアンピース',
  EMERALD: 'エメラルドピース',
  DIA: 'ダイヤピース',
  PERIDOT: 'ペリドットピース',
  RUBY: 'ルビーピース',
  SAPPHIRE: 'サファイアピース',
  TOPAZ: 'トパーズピース',
  TURQUOISE: 'ターコイズピース',
  AMETHYST: 'アメジストピース',
  SOL: 'ソルピース',
  LUNA: 'ルナピース',
  STELLA: 'ステラピース',
  CRYSTAL: 'クリスタル',
} as const;
export type PieceName = (typeof PIECE_NAME)[keyof typeof PIECE_NAME];

export const CHARM_NAME = {
  SOL: 'ソルチャーム',
  LUNA: 'ルナチャーム',
  STELLA: 'ステラチャーム',
  CRYSTAL: 'クリスタルチャーム',
} as const;
export type CharmName = (typeof CHARM_NAME)[keyof typeof CHARM_NAME];

const ITEM_NONE = '-' as const;
// type ItemNone = typeof ITEM_NONE;

const SKILL_BOOK = {
  LOW: '技能書(初等)',
  MEDIUM: '技能書(中等)',
  HIGH: '技能書(高等)',
} as const;
export type SkillBook = (typeof SKILL_BOOK)[keyof typeof SKILL_BOOK];

const PIECE_GARNET = {
  R1: `${PIECE_NAME.GARNET}(R1)`,
  R2: `${PIECE_NAME.GARNET}(R2)`,
  R3: `${PIECE_NAME.GARNET}(R3)`,
  R4: `${PIECE_NAME.GARNET}(R4)`,
} as const;
// type GarnetPiece = (typeof PIECE_GARNET)[keyof typeof PIECE_GARNET];

const PIECE_CARNELIAN = {
  R1: `${PIECE_NAME.CARNELIAN}(R1)`,
  R2: `${PIECE_NAME.CARNELIAN}(R2)`,
  R3: `${PIECE_NAME.CARNELIAN}(R3)`,
  R4: `${PIECE_NAME.CARNELIAN}(R4)`,
} as const;
// type CarnelianPiece = (typeof PIECE_CARNELIAN)[keyof typeof PIECE_CARNELIAN];

const PIECE_EMERALD = {
  R1: `${PIECE_NAME.EMERALD}(R1)`,
  R2: `${PIECE_NAME.EMERALD}(R2)`,
  R3: `${PIECE_NAME.EMERALD}(R3)`,
  R4: `${PIECE_NAME.EMERALD}(R4)`,
} as const;
// type EmeraldPiece = (typeof PIECE_EMERALD)[keyof typeof PIECE_EMERALD];

const PIECE_DIA = {
  R1: `${PIECE_NAME.DIA}(R1)`,
  R2: `${PIECE_NAME.DIA}(R2)`,
  R3: `${PIECE_NAME.DIA}(R3)`,
  R4: `${PIECE_NAME.DIA}(R4)`,
} as const;
// type DiaPiece = (typeof PIECE_DIA)[keyof typeof PIECE_DIA];

const PIECE_PERIDOT = {
  R1: `${PIECE_NAME.PERIDOT}(R1)`,
  R2: `${PIECE_NAME.PERIDOT}(R2)`,
  R3: `${PIECE_NAME.PERIDOT}(R3)`,
  R4: `${PIECE_NAME.PERIDOT}(R4)`,
} as const;
// type PeridotPiece = (typeof PIECE_PERIDOT)[keyof typeof PIECE_PERIDOT];

const PIECE_RUBY = {
  R1: `${PIECE_NAME.RUBY}(R1)`,
  R2: `${PIECE_NAME.RUBY}(R2)`,
  R3: `${PIECE_NAME.RUBY}(R3)`,
  R4: `${PIECE_NAME.RUBY}(R4)`,
} as const;
// type RubyPiece = (typeof PIECE_RUBY)[keyof typeof PIECE_RUBY];

const PIECE_SAPPHIRE = {
  R1: `${PIECE_NAME.SAPPHIRE}(R1)`,
  R2: `${PIECE_NAME.SAPPHIRE}(R2)`,
  R3: `${PIECE_NAME.SAPPHIRE}(R3)`,
  R4: `${PIECE_NAME.SAPPHIRE}(R4)`,
} as const;
// type SapphirePiece = (typeof PIECE_SAPPHIRE)[keyof typeof PIECE_SAPPHIRE];

const PIECE_TOPAZ = {
  R1: `${PIECE_NAME.TOPAZ}(R1)`,
  R2: `${PIECE_NAME.TOPAZ}(R2)`,
  R3: `${PIECE_NAME.TOPAZ}(R3)`,
  R4: `${PIECE_NAME.TOPAZ}(R4)`,
} as const;
// type TopazPiece = (typeof PIECE_TOPAZ)[keyof typeof PIECE_TOPAZ];

const PIECE_TURQUOISE = {
  R1: `${PIECE_NAME.TURQUOISE}(R1)`,
  R2: `${PIECE_NAME.TURQUOISE}(R2)`,
  R3: `${PIECE_NAME.TURQUOISE}(R3)`,
  R4: `${PIECE_NAME.TURQUOISE}(R4)`,
} as const;
// type TurquoisePiece = (typeof PIECE_TURQUOISE)[keyof typeof PIECE_TURQUOISE];

const PIECE_AMETHYST = {
  R1: `${PIECE_NAME.AMETHYST}(R1)`,
  R2: `${PIECE_NAME.AMETHYST}(R2)`,
  R3: `${PIECE_NAME.AMETHYST}(R3)`,
  R4: `${PIECE_NAME.AMETHYST}(R4)`,
} as const;
// type AmethystPiece = (typeof PIECE_AMETHYST)[keyof typeof PIECE_AMETHYST];

const PIECE_SOL = {
  R1: `${PIECE_NAME.SOL}(R1)`,
  R2: `${PIECE_NAME.SOL}(R2)`,
  R3: `${PIECE_NAME.SOL}(R3)`,
  R4: `${PIECE_NAME.SOL}(R4)`,
} as const;
// type SolPiece = (typeof PIECE_SOL)[keyof typeof PIECE_SOL];

const PIECE_LUNA = {
  R1: `${PIECE_NAME.LUNA}(R1)`,
  R2: `${PIECE_NAME.LUNA}(R2)`,
  R3: `${PIECE_NAME.LUNA}(R3)`,
  R4: `${PIECE_NAME.LUNA}(R4)`,
} as const;
// type LunaPiece = (typeof PIECE_LUNA)[keyof typeof PIECE_LUNA];

const PIECE_STELLA = {
  R1: `${PIECE_NAME.STELLA}(R1)`,
  R2: `${PIECE_NAME.STELLA}(R2)`,
  R3: `${PIECE_NAME.STELLA}(R3)`,
  R4: `${PIECE_NAME.STELLA}(R4)`,
} as const;
// type StellaPiece = (typeof PIECE_STELLA)[keyof typeof PIECE_STELLA];

const CHARM_SOL = {
  R3: `${CHARM_NAME.SOL}(R3)`,
  R4: `${CHARM_NAME.SOL}(R4)`,
} as const;
// type SolCharm = (typeof CHARM_SOL)[keyof typeof CHARM_SOL];

const CHARM_LUNA = {
  R3: `${CHARM_NAME.LUNA}(R3)`,
  R4: `${CHARM_NAME.LUNA}(R4)`,
} as const;
// type LunaCharm = (typeof CHARM_LUNA)[keyof typeof CHARM_LUNA];

const CHARM_STELLA = {
  R3: `${CHARM_NAME.STELLA}(R3)`,
  R4: `${CHARM_NAME.STELLA}(R4)`,
} as const;
// type StellaCharm = (typeof CHARM_STELLA)[keyof typeof CHARM_STELLA];

const CHARM_CRYSTAL = `${CHARM_NAME.CRYSTAL}` as const;
// type CrystalCharm = typeof CHARM_CRYSTAL;

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
    SOL: PIECE_SOL,
    LUNA: PIECE_LUNA,
    STELLA: PIECE_STELLA,
  },
  CHARM: {
    SOL: CHARM_SOL,
    LUNA: CHARM_LUNA,
    STELLA: CHARM_STELLA,
    CRYSTAL: CHARM_CRYSTAL,
  },
} as const;
export type Items = typeof ITEMS;
