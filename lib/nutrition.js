const pantryDefaults = [
    "rice",
    "lentils",
    "beans",
    "oats",
    "frozen vegetables",
    "eggs",
    "canned tomatoes",
    "peanut butter",
    "yogurt",
    "whole wheat bread"
];
function pickHas(ingredients, key) {
    return ingredients.some((i) => i.toLowerCase().includes(key));
}
export function buildPlan(input) {
    const ingredients = (input.ingredients.length ? input.ingredients : pantryDefaults)
        .map((x) => x.trim())
        .filter(Boolean);
    const budget = Math.max(1, input.budgetPerDayUsd);
    const meals = [];
    const hasRice = pickHas(ingredients, "rice");
    const hasOats = pickHas(ingredients, "oat");
    const hasEggs = pickHas(ingredients, "egg");
    const hasBeans = pickHas(ingredients, "bean") || pickHas(ingredients, "lentil");
    const hasVeg = pickHas(ingredients, "veg") || pickHas(ingredients, "spinach") || pickHas(ingredients, "broccoli");
    const hasYogurt = pickHas(ingredients, "yogurt");
    const hasPb = pickHas(ingredients, "peanut");
    meals.push({
        name: hasOats ? "Oats bowl (fiber + energy)" : "Whole grain toast bowl",
        ingredients: [
            hasOats ? "oats" : "whole wheat bread",
            hasYogurt ? "yogurt" : "water/milk",
            hasPb ? "peanut butter" : "banana/fruit (optional)"
        ],
        calories: 520,
        proteinGrams: 20,
        costUsd: Math.min(2.2, budget * 0.28)
    });
    meals.push({
        name: hasRice && hasBeans ? "Rice + beans + veg" : "Lentil stew + toast",
        ingredients: [
            hasRice ? "rice" : "whole wheat bread",
            hasBeans ? "beans/lentils" : "lentils",
            hasVeg ? "vegetables" : "canned tomatoes"
        ],
        calories: 740,
        proteinGrams: 28,
        costUsd: Math.min(3.0, budget * 0.38)
    });
    meals.push({
        name: hasEggs ? "Egg scramble + veggies" : "Bean salad + veggies",
        ingredients: [hasEggs ? "eggs" : "beans/lentils", hasVeg ? "vegetables" : "canned tomatoes", "seasoning (optional)"],
        calories: 620,
        proteinGrams: hasEggs ? 26 : 22,
        costUsd: Math.min(2.6, budget * 0.34)
    });
    const totalCostUsd = Number(meals.reduce((a, m) => a + m.costUsd, 0).toFixed(2));
    const scale = totalCostUsd > budget ? budget / totalCostUsd : 1;
    const scaledMeals = meals.map((m) => ({
        ...m,
        costUsd: Number((m.costUsd * scale).toFixed(2))
    }));
    const totals = scaledMeals.reduce((acc, m) => {
        acc.totalCalories += m.calories;
        acc.totalProteinGrams += m.proteinGrams;
        acc.totalCostUsd += m.costUsd;
        return acc;
    }, { totalCalories: 0, totalProteinGrams: 0, totalCostUsd: 0 });
    const notes = [
        "This is a starter plan—swap ingredients based on dietary needs and local availability.",
        "Protein sources: beans/lentils, eggs, yogurt, peanut butter.",
        "Add a fruit/vegetable serving when possible for micronutrients."
    ];
    if (budget < 6)
        notes.unshift("Budget is tight—prioritize pantry staples and bulk items.");
    return {
        totalCalories: totals.totalCalories,
        totalProteinGrams: totals.totalProteinGrams,
        totalCostUsd: Number(totals.totalCostUsd.toFixed(2)),
        meals: scaledMeals,
        notes
    };
}
