export interface NasaSearch {
    collection: Collection;
}

export interface Collection {
    metadata: Metadata;
    version:  string;
    href:     string;
    items:    Item[];
    links:    CollectionLink[];
}

export interface Item {
    data:   Datum[];
    href:   string;
    links?: ItemLink[];
}

export interface Datum {
    nasa_id:       string;
    date_created:  Date;
    media_type:    MediaType;
    center:        Center;
    title:         string;
    keywords:      string[];
    description:   string;
    location?:     Location;
    photographer?: Photographer;
    album?:        Album[];
}

export enum Album {
    Apollo = "Apollo",
    The201907_Apollo50ThInDC = "201907_Apollo_50th_in_DC",
}

export enum Center {
    Hq = "HQ",
    Jsc = "JSC",
    Ksc = "KSC",
}

export enum Location {
    GoddardSpaceFlightCenterFL = "Goddard Space Flight Center, FL",
    IMAXTheaterKSCVisitorComple = "IMAX Theater, KSC Visitor Comple",
    KennedySpaceCenterFL = "Kennedy Space Center, FL",
    Ksc = "KSC",
    NasaHq = "NASA HQ",
    NationalAirAndSpaceMuseum = "National Air and Space Museum",
    NationalMall = "National Mall",
    SaturnVBuilding = "Saturn V Building",
}

export enum MediaType {
    Audio = "audio",
    Image = "image",
    Video = "video",
}

export enum Photographer {
    NASAAubreyGemignani = "NASA/Aubrey Gemignani",
    NASABillIngalls = "NASA/Bill Ingalls",
    NASAConnieMoore = "NASA/Connie Moore",
    NASACoryHuston = "NASA/Cory Huston",
    NASAJoelKowsky = "NASA/Joel Kowsky",
    NASAKimShiflett = "NASA/Kim Shiflett",
    Nasa = "NASA",
}

export interface ItemLink {
    rel:     Rel;
    render?: MediaType;
    href:    string;
}

export enum Rel {
    Captions = "captions",
    Preview = "preview",
}

export interface CollectionLink {
    rel:    string;
    href:   string;
    prompt: string;
}

export interface Metadata {
    total_hits: number;
}
