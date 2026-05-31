export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface RoomType {
  id: string;
  name: string;
  pricing: string;
  tagline: string;
  description: string;
  vibe: string;
  image: string;
  capacity: string;
}

export interface HostelEvent {
  id: string;
  title: string;
  time: string;
  day: string;
  description: string;
  vibe: string;
  iconName: string;
}

export interface GuestMemory {
  id: string;
  name: string;
  country: string;
  story: string;
  avatar: string;
  image: string;
  date: string;
}

export interface LocationSpot {
  id: string;
  name: string;
  distance: string;
  coordinates: { x: number; y: number }; // Percentage offsets for visual custom map
  description: string;
  routeTip: string;
}

export interface JourneyStep {
  phase: string;
  title: string;
  story: string;
  feeling: string;
  iconName: string;
  bgGradient: string;
}
