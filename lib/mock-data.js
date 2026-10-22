export const NGOS = [
    {
        id: "ngo-1",
        name: "City Relief Network",
        cityId: "sf",
        coords: { lat: 37.7802, lng: -122.4098 },
        capacityMealsPerDay: 1800,
        accepting: true,
        tags: ["hot-meals", "fresh", "veg"]
    },
    {
        id: "ngo-2",
        name: "Harbor Hope Pantry",
        cityId: "sf",
        coords: { lat: 37.7649, lng: -122.4312 },
        capacityMealsPerDay: 900,
        accepting: true,
        tags: ["dry-goods", "fresh"]
    },
    {
        id: "ngo-3",
        name: "LA Community Kitchens",
        cityId: "la",
        coords: { lat: 34.0406, lng: -118.2468 },
        capacityMealsPerDay: 2400,
        accepting: true,
        tags: ["hot-meals", "halal"]
    },
    {
        id: "ngo-4",
        name: "NYC Food Justice Coalition",
        cityId: "nyc",
        coords: { lat: 40.7211, lng: -73.9953 },
        capacityMealsPerDay: 3100,
        accepting: false,
        tags: ["fresh", "dry-goods", "veg"]
    }
];
export const FOOD_BANKS = [
    {
        id: "fb-1",
        name: "Mission Food Bank",
        cityId: "sf",
        coords: { lat: 37.7598, lng: -122.4148 },
        availability: "medium",
        mealTypes: ["dry-goods", "fresh"],
        hours: "Mon–Sat · 9am–6pm"
    },
    {
        id: "fb-2",
        name: "Downtown Community Pantry",
        cityId: "la",
        coords: { lat: 34.0566, lng: -118.2365 },
        availability: "high",
        mealTypes: ["dry-goods", "hot-meals"],
        hours: "Daily · 10am–7pm"
    },
    {
        id: "fb-3",
        name: "South Side Food Hub",
        cityId: "chi",
        coords: { lat: 41.8029, lng: -87.5964 },
        availability: "low",
        mealTypes: ["dry-goods", "fresh"],
        hours: "Tue–Sun · 11am–5pm"
    },
    {
        id: "fb-4",
        name: "Queens Community Kitchen",
        cityId: "nyc",
        coords: { lat: 40.7286, lng: -73.7949 },
        availability: "medium",
        mealTypes: ["hot-meals"],
        hours: "Mon–Fri · 8am–4pm"
    }
];
export const DONATIONS_FEED = [
    {
        id: "don-1",
        donorName: "Sunset Bistro",
        cityId: "sf",
        coords: { lat: 37.7726, lng: -122.4271 },
        foodType: "prepared",
        quantityMeals: 120,
        expiresInHours: 5
    },
    {
        id: "don-2",
        donorName: "Green Market Co.",
        cityId: "sf",
        coords: { lat: 37.7922, lng: -122.401 },
        foodType: "produce",
        quantityMeals: 80,
        expiresInHours: 20
    },
    {
        id: "don-3",
        donorName: "Central Bakery",
        cityId: "nyc",
        coords: { lat: 40.741, lng: -73.9897 },
        foodType: "bakery",
        quantityMeals: 60,
        expiresInHours: 8
    }
];
export const RISK_AREAS = [
    {
        id: "risk-sf-1",
        cityId: "sf",
        coords: { lat: 37.7603, lng: -122.4182 },
        riskIndex: 62,
        notes: "High rent burden; increased pantry demand."
    },
    {
        id: "risk-la-1",
        cityId: "la",
        coords: { lat: 34.028, lng: -118.278 },
        riskIndex: 71,
        notes: "Service deserts; limited transport."
    },
    {
        id: "risk-chi-1",
        cityId: "chi",
        coords: { lat: 41.83, lng: -87.62 },
        riskIndex: 68,
        notes: "Seasonal unemployment; variable donations."
    },
    {
        id: "risk-nyc-1",
        cityId: "nyc",
        coords: { lat: 40.733, lng: -73.98 },
        riskIndex: 74,
        notes: "Rising need; schools out impacts meals."
    }
];
