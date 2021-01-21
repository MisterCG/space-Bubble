export interface Asteroid {
    links:              AsteroidLinks;
    near_earth_objects: NearEarthObject[];
    page:               Page;
}

export interface AsteroidLinks {
    next: string;
    self: string;
}

export interface NearEarthObject {
    absolute_magnitude_h:              number;
    close_approach_data:               CloseApproachDatum[];
    designation:                       string;
    estimated_diameter:                EstimatedDiameter;
    id:                                string;
    is_potentially_hazardous_asteroid: boolean;
    is_sentry_object:                  boolean;
    links:                             NearEarthObjectLinks;
    name:                              string;
    name_limited:                      string;
    nasa_jpl_url:                      string;
    neo_reference_id:                  string;
    orbital_data:                      OrbitalData;
}

export interface CloseApproachDatum {
    close_approach_date:       Date;
    close_approach_date_full:  string;
    epoch_date_close_approach: number;
    miss_distance:             MissDistance;
    orbiting_body:             OrbitingBody;
    relative_velocity:         RelativeVelocity;
}

export interface MissDistance {
    astronomical: string;
    kilometers:   string;
    lunar:        string;
    miles:        string;
}

export enum OrbitingBody {
    Earth = "Earth",
    Juptr = "Juptr",
    Mars = "Mars",
    Merc = "Merc",
    Venus = "Venus",
}

export interface RelativeVelocity {
    kilometers_per_hour:   string;
    kilometers_per_second: string;
    miles_per_hour:        string;
}

export interface EstimatedDiameter {
    feet:       Feet;
    kilometers: Feet;
    meters:     Feet;
    miles:      Feet;
}

export interface Feet {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
}

export interface NearEarthObjectLinks {
    self: string;
}

export interface OrbitalData {
    aphelion_distance:           string;
    ascending_node_longitude:    string;
    data_arc_in_days:            number;
    eccentricity:                string;
    epoch_osculation:            string;
    equinox:                     Equinox;
    first_observation_date:      Date;
    inclination:                 string;
    jupiter_tisserand_invariant: string;
    last_observation_date:       Date;
    mean_anomaly:                string;
    mean_motion:                 string;
    minimum_orbit_intersection:  string;
    observations_used:           number;
    orbit_class:                 OrbitClass;
    orbit_determination_date:    Date;
    orbit_id:                    string;
    orbit_uncertainty:           string;
    orbital_period:              string;
    perihelion_argument:         string;
    perihelion_distance:         string;
    perihelion_time:             string;
    semi_major_axis:             string;
}

export enum Equinox {
    J2000 = "J2000",
}

export interface OrbitClass {
    orbit_class_description: string;
    orbit_class_range:       OrbitClassRange;
    orbit_class_type:        OrbitClassType;
}

export enum OrbitClassRange {
    ASemiMajorAxis10AUQPerihelion1017AU = "a (semi-major axis) > 1.0 AU; q (perihelion) < 1.017 AU",
    The1017AUQPerihelion13AU = "1.017 AU < q (perihelion) < 1.3 AU",
}

export enum OrbitClassType {
    Amo = "AMO",
    Apo = "APO",
}

export interface Page {
    number:         number;
    size:           number;
    total_elements: number;
    total_pages:    number;
}
