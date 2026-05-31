import { Amenity, RoomType, HostelEvent, GuestMemory, LocationSpot, JourneyStep } from "./types";

export const IMAGES = {
  lodgeExterior: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/802747043.jpg?k=a1f3089fbcef0eaaa6e4258bbdc3037aed8165e98d0a6b7d52b279606fef560b&o=",
  dormComfort: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/820941211.jpg?k=01c3609ece7f917727bb55a33fe20239152dfd0b020d04673c708c7db1ebde84&o",
  communityLounge: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/774849617.jpg?k=33018c1ceeccda1a37a94b6fb5fe9ac8db50cce77f346a50b7509598d2e8eee4&o=",
  gardenReception: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/772392795.jpg?k=2c743e46a38cb0e02f5d639f2d10e8102910dbec718bf5fc2b4ff581112ec9f6&o=",
  terraceWorkation: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/802664642.jpg?k=9f88e8c84736568675c5f299a11f9086dbeb0d777dc9b4721412147f9b1a5571&o="
};

export const AMENITIES: Amenity[] = [
  {
    id: "kitchen",
    title: "Communal Kitchen",
    description: "Fully equipped kitchen for preparing your own meals, sharing family recipes, and cooking together.",
    iconName: "Flame"
  },
  {
    id: "wifi",
    title: "High-Speed WiFi",
    description: "Free high-speed internet throughout the property so your creativity never has to buffer.",
    iconName: "Wifi"
  },
  {
    id: "garden",
    title: "Garden & Terrace",
    description: "Beautiful lush outdoor spaces tailored for deep relaxation, sunrise chats, and twilight drinks.",
    iconName: "Leaf"
  },
  {
    id: "bicycle",
    title: "Bicycle Rental",
    description: "Explore the dusty red paths of Auroville and the French quarters of Pondicherry on two wheels.",
    iconName: "Bike"
  },
  {
    id: "reception",
    title: "24/7 Reception",
    description: "Round-the-clock assistance for our guests—friendly faces always ready to help or share a tea.",
    iconName: "Compass"
  },
  {
    id: "lounge",
    title: "Outdoor Lounge",
    description: "Comfortable organic social areas custom-built to sit down, let guard down, and meet fellow travelers.",
    iconName: "Sofa"
  },
  {
    id: "storage",
    title: "Luggage Storage",
    description: "Secure storage for your backpacks, books, and keepsakes before check-in and after check-out.",
    iconName: "Briefcase"
  },
  {
    id: "tea-coffee",
    title: "Tea & Coffee",
    description: "Complimentary, slow-brewed local south Indian tea and coffee available to sustain your late debates.",
    iconName: "Coffee"
  }
];

export const ROOMS: RoomType[] = [
  {
    id: "earthy-dorm-6",
    name: "Aura Shared Dorm — 6 Bed",
    pricing: "₹850 / night",
    tagline: "Sacred Sleeping Quarters for Open Minds",
    description: "Every bunk is a little sanctuary. Styled with reclaimed teakwood, cozy light fixtures, and private curtains to rest your head after a day of cycling high-energy trails.",
    vibe: "Communal yet private, perfect for single travelers wishing to share dreams.",
    image: IMAGES.dormComfort,
    capacity: "6 Travelers Max"
  },
  {
    id: "forest-dorm-8",
    name: "Woodpacker Haven — 8 Bed",
    pricing: "₹750 / night",
    tagline: "The Core of the Backpacker Spirit",
    description: "Our signature high-ceiling dorm designed as an architectural tribute to Auroville's brick and wind dynamics. Built-in underbed lockers and power points for every dreamer.",
    vibe: "Vibrant and social, the birthplace of lifelong friendships.",
    image: IMAGES.lodgeExterior,
    capacity: "8 Travelers Max"
  },
  {
    id: "private-boho-suite",
    name: "The Canopy Private Hideout",
    pricing: "₹2,200 / night",
    tagline: "Solitude Amidst the Canopy",
    description: "A private bohemian attic overlooking the organic garden. Features custom cane swing chairs, premium cotton linen, and vintage decor that inspires writing, drawing, and meditation.",
    vibe: "Calming whisper-quiet oasis, perfect for creative digital nomads.",
    image: IMAGES.gardenReception,
    capacity: "2 Travelers"
  }
];

export const EVENTS: HostelEvent[] = [
  {
    id: "rhy-1",
    title: "Rooftop acoustic sundown",
    time: "5:30 PM — Sunset",
    day: "Every Tuesday & Friday",
    description: "Sunsets arrive slowly here. Someone starts playing guitar, community instruments are passed around, and conversations stretch into the deep night.",
    vibe: "Soulful, unscripted, acoustic",
    iconName: "Music"
  },
  {
    id: "yoga-1",
    title: "Morning flows & meditation",
    time: "7:00 AM — 8:15 AM",
    day: "Daily",
    description: "Morning begins with gentle flow yoga and slow breathing on the timber terrace. Center yourself amidst Auroville's bird chorus before the day begins.",
    vibe: "Reflective, restorative, silent",
    iconName: "Sun"
  },
  {
    id: "din-1",
    title: "One-Pot Communal Dinner",
    time: "8:00 PM — Close",
    day: "Every Thursday",
    description: "We prepare a giant local curry from scratch. You chop, we stir, we sit together around the long timber table and write the best memories over spices.",
    vibe: "Warm, full, authentic",
    iconName: "Utensils"
  },
  {
    id: "art-1",
    title: "Kalabhumi Creative Jam",
    time: "2:00 PM — 5:00 PM",
    day: "Every Saturday",
    description: "A loose, experimental art jam. Grab some sketch-books or clay, paint on driftwood, and share stories with visiting local craftspeople from the commune.",
    vibe: "Bohemian, expressive, dirty hands",
    iconName: "Palette"
  }
];

export const TESTIMONIALS: GuestMemory[] = [
  {
    id: "testi-1",
    name: "Clara Dupont",
    country: "France",
    story: "I planned to stay for two nights at Woodpacker and ended up staying for an entire month. There is a sweet, slow-paced gravity to this place. From the rooftop jam to late-night coffee debate, it redefined what travel means to me.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    image: IMAGES.communityLounge,
    date: "Stayed March 2026"
  },
  {
    id: "testi-2",
    name: "Aravind Iyer",
    country: "Mumbai, India",
    story: "As a remote software developer, Woodpacker is paradise. High-speed fiber connections amongst beautiful hanging vines and clay brick layouts. I met engineers, painters, and surfers in the exact same afternoon. Absolutely magical.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    image: IMAGES.terraceWorkation,
    date: "Stayed May 2026"
  },
  {
    id: "testi-3",
    name: "Sven Jørgensen",
    country: "Norway",
    story: "Arrived as a lonely backpacker carrying heavy baggage, left with an empty head and a heart full of names. 'Nobody arrives here knowing everyone, but that's usually how the story begins' is not just a slogan. It is the absolute raw truth of Woodpacker.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    image: IMAGES.gardenReception,
    date: "Stayed April 2026"
  }
];

export const LOCATION_SPOTS: LocationSpot[] = [
  {
    id: "spot-matri",
    name: "Matrimandir",
    distance: "15-minute cycle ride",
    coordinates: { x: 50, y: 35 }, // Center of Auroville mandala
    description: "The golden soul of Auroville. A silent chamber for mental stillness surrounded by twelve pristine gardens.",
    routeTip: "Pro-tip: Request your free pass 2 days in advance at the Visitor's Centre."
  },
  {
    id: "spot-vis",
    name: "Auroville Visitor Centre",
    distance: "10-minute walk",
    coordinates: { x: 58, y: 48 },
    description: "The gateway to understanding the commune's vision, hosting dynamic local organic stores, libraries, and lovely open-air earthy cafés.",
    routeTip: "Grab their sourdough wood-fired cookies!"
  },
  {
    id: "spot-kala",
    name: "Kalabhumi Art Centre",
    distance: "5-minute walk",
    coordinates: { x: 42, y: 55 },
    description: "A hub of experimental music, clay sculpture, wood workshops, and collaborative studios set deep in the silent forest.",
    routeTip: "Just listen for the sound of steel drums on Saturday afternoons."
  },
  {
    id: "spot-trails",
    name: "Nature Trails & Forest Paths",
    distance: "Direct access",
    coordinates: { x: 40, y: 25 },
    description: "The reddish dirt paths snaking through Auroville's massive afforestation belt. Rich birdsong and peaceful canopy walks.",
    routeTip: "Perfect for early morning runs or reflective solo walks."
  },
  {
    id: "spot-ashram",
    name: "Sri Aurobindo Ashram",
    distance: "25-minute drive",
    coordinates: { x: 75, y: 80 }, // Towards Pondicherry town
    description: "Located in the beautiful French Quarter of Pondicherry. A space for quiet contemplation and spiritual history.",
    routeTip: "Combine this with a walk along the Promenade Beach at sunset."
  }
];

export const SOLO_JOURNEY_STEPS: JourneyStep[] = [
  {
    phase: "Arrival",
    title: "Leaving boundaries at the door",
    story: "You walk down the canopy lane, carrying a heavy backpack and a quiet apprehension. You step onto our brick courtyard, welcomed by soft laughter, warm tea, and the sweet smell of wet earth. You realize you haven't checked in to a hostel—you've arrived home.",
    feeling: "Uncertainty melts into comfort as you are greeted with a smile.",
    iconName: "MapPin",
    bgGradient: "from-amber-50 to-orange-100"
  },
  {
    phase: "Connection",
    title: "One shared dinner, a hundred stories",
    story: "By evening, you are chopping fresh coriander next to an artist from Berlin and a programmer from Bangalore in our communal kitchen. The conversation shifts from 'where are you from?' to 'where do you find peace?' Over a steaming curry, the table becomes one family.",
    feeling: "Strangers slowly morph into companions over shared spices.",
    iconName: "Flame",
    bgGradient: "from-orange-50 to-amber-100"
  },
  {
    phase: "Exploration",
    title: "Chasing red dirt roads on two wheels",
    story: "You rent a vintage bicycle at reception. Side-by-side with your new dorm mates, you cycle the winding red dirt roads surrounding the Matrimandir, passing local potteries, buying organic mangoes, and getting wonderfully lost.",
    feeling: "The boundless joy of absolute freedom in Auroville.",
    iconName: "Bike",
    bgGradient: "from-emerald-50 to-teal-100"
  },
  {
    phase: "Friendship",
    title: "Conversations that bleed into dawn",
    story: "Sitting on the bamboo rooftop under a sea of stars. Someone brings a guitar; another humming a song you forgot. The talk deepens into life, heartbreak, and hopes. You look around and realize these people have known you for three days, yet understand your core.",
    feeling: "Belonging, without expectations or filters.",
    iconName: "Heart",
    bgGradient: "from-rose-50 to-teal-50"
  },
  {
    phase: "Memories",
    title: "A part of you will never check out",
    story: "Your bus is waiting, but your journal is heavier with telephone numbers, sketching, and coffee stains. As you hug everyone goodbye, you know this wasn't an escape from your life. It was an entry into a wider, more deeply connected universe.",
    feeling: "Warm gratitude and the calm knowing that you'll return.",
    iconName: "Compass",
    bgGradient: "from-indigo-50 to-emerald-50"
  }
];
