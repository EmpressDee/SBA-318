let species = [
  {
    id: 1,
    name: "Bearded Dragon",
    type: "lizard",
    lifespan_years: 15,
    diet: "omnivore",
    difficulty: "beginner",
    origin: "Australia",
  },
  {
    id: 2,
    name: "Ball Python",
    type: "snake",
    lifespan_years: 30,
    diet: "carnivore",
    difficulty: "beginner",
    origin: "West Africa",
  },
  {
    id: 3,
    name: "Leopard Gecko",
    type: "lizard",
    lifespan_years: 20,
    diet: "insectivore",
    difficulty: "beginner",
    origin: "Pakistan",
  },
  {
    id: 4,
    name: "Blue-Tongued Skink",
    type: "lizard",
    lifespan_years: 20,
    diet: "omnivore",
    difficulty: "intermediate",
    origin: "Australia",
  },
  {
    id: 5,
    name: "Corn Snake",
    type: "snake",
    lifespan_years: 20,
    diet: "carnivore",
    difficulty: "beginner",
    origin: "North America",
  },
  {
    id: 6,
    name: "Red-Eared Slider",
    type: "turtle",
    lifespan_years: 40,
    diet: "omnivore",
    difficulty: "intermediate",
    origin: "North America",
  },
  {
    id: 7,
    name: "Crested Gecko",
    type: "lizard",
    lifespan_years: 15,
    diet: "omnivore",
    difficulty: "beginner",
    origin: "New Caledonia",
  },
  {
    id: 8,
    name: "Russian Tortoise",
    type: "tortoise",
    lifespan_years: 50,
    diet: "herbivore",
    difficulty: "intermediate",
    origin: "Central Asia",
  },
];

let enclosures = [
  {
    id: 1,
    speciesId: 1,
    min_size_gallons: 40,
    humidity_percent: 30,
    temp_basking_f: 100,
    temp_cool_f: 80,
    substrate: "bioactive, 70/30 top soil and play sand mixture",
    lighting: "UVB 10.0 required",
  },
  {
    id: 2,
    speciesId: 2,
    min_size_gallons: 40,
    humidity_percent: 60,
    temp_basking_f: 88,
    temp_cool_f: 76,
    substrate: "aspen shavings or coconut fiber",
    lighting: "low light, no UVB required",
  },
  {
    id: 3,
    speciesId: 3,
    min_size_gallons: 20,
    humidity_percent: 40,
    temp_basking_f: 88,
    temp_cool_f: 72,
    substrate: "reptisoil or 70/30 top soil and play sand mixture",
    lighting: "low UVB, 5.0",
  },
  {
    id: 4,
    speciesId: 4,
    min_size_gallons: 40,
    humidity_percent: 40,
    temp_basking_f: 95,
    temp_cool_f: 75,
    substrate: "coconut fiber or topsoil",
    lighting: "UVB 5.0 or 10.0",
  },
  {
    id: 5,
    speciesId: 5,
    min_size_gallons: 20,
    humidity_percent: 50,
    temp_basking_f: 85,
    temp_cool_f: 72,
    substrate: "aspen shavings",
    lighting: "low light, no UVB required",
  },
  {
    id: 6,
    speciesId: 6,
    min_size_gallons: 75,
    humidity_percent: 70,
    temp_basking_f: 90,
    temp_cool_f: 75,
    substrate: "large river rocks or bare bottom",
    lighting: "UVB 5.0, full-spectrum",
  },
  {
    id: 7,
    speciesId: 7,
    min_size_gallons: 20,
    humidity_percent: 70,
    temp_basking_f: 80,
    temp_cool_f: 72,
    substrate: "coconut fiber",
    lighting: "low UVB or none, keep temps under 80F",
  },
  {
    id: 8,
    speciesId: 8,
    min_size_gallons: 40,
    humidity_percent: 30,
    temp_basking_f: 95,
    temp_cool_f: 70,
    substrate: "topsoil and sand mix",
    lighting: "UVB 10.0 required",
  },
];

let care_tips = [
  {
    id: 1,
    speciesId: 1,
    topic: "feeding",
    detail:
      "Juveniles eat 80% insects (dubia roaches, crickets) and 20% greens daily. Adults flip to 80% greens and 20% insects every other day.",
  },
  {
    id: 2,
    speciesId: 1,
    topic: "handling",
    detail:
      "Very docile once tamed. Start with short 10-minute sessions and build up. Support their whole body — never grab by the tail.",
  },
  {
    id: 3,
    speciesId: 1,
    topic: "health",
    detail:
      "Watch for metabolic bone disease — dust feeders with calcium powder at every feeding and D3 twice a week.",
  },
  {
    id: 4,
    speciesId: 2,
    topic: "feeding",
    detail:
      "Feed pre-killed or frozen-thawed mice/rats. Juveniles eat every 5-7 days, adults every 10-14 days. Size of prey should not exceed the widest part of the snake.",
  },
  {
    id: 5,
    speciesId: 2,
    topic: "handling",
    detail:
      "Wait 48 hours after feeding before handling to prevent regurgitation. Approach from the side, not from above — that triggers a prey response.",
  },
  {
    id: 6,
    speciesId: 3,
    topic: "feeding",
    detail:
      "Strictly insectivorous — do not feed fruit or veggies. Gut-load crickets or dubia roaches before feeding. Dust with calcium at every feeding.",
  },
  {
    id: 7,
    speciesId: 3,
    topic: "health",
    detail:
      "Prone to cryptosporidiosis (crypto). Quarantine any new gecko and watch for extreme weight loss or regurgitation.",
  },
  {
    id: 8,
    speciesId: 4,
    topic: "feeding",
    detail:
      "Omnivores — feed a mix of vegetables (leafy greens, squash), protein (snails, lean meat, eggs), and occasional fruit as a treat.",
  },
  {
    id: 9,
    speciesId: 5,
    topic: "feeding",
    detail:
      "Feed frozen-thawed mice. Hatchlings eat pinky mice every 5-7 days. Adults eat adult mice every 7-10 days.",
  },
  {
    id: 10,
    speciesId: 6,
    topic: "feeding",
    detail:
      "Feed commercial turtle pellets, leafy greens, and occasional feeder fish or earthworms. Juveniles are more carnivorous than adults.",
  },
  {
    id: 11,
    speciesId: 7,
    topic: "feeding",
    detail:
      "Unique among geckos — thrives on commercial crested gecko diet (CGD) like Repashy or Pangea. Supplement with live insects 2x per week.",
  },
  {
    id: 12,
    speciesId: 8,
    topic: "feeding",
    detail:
      "Strictly herbivorous — leafy greens like dandelion, endive, and spring mix. Avoid iceberg lettuce, spinach, and high-oxalate foods.",
  },
];

export { species, enclosures, care_tips };
