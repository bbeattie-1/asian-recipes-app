import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRecipeStore = defineStore('recipe', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const recipes = ref([
    {
      id: 3,
      thumbnail: "https://thai-foodie.com/wp-content/uploads/2023/09/rad-na-2.jpg",
      name: "Sweet Thai Chili Tofu",
      origin: "Thailand",
      tags: [
        "Rice",
        "Tofu",
        "Sweet",
        "Vegan",
      ],
      ingredients: [
        "1 Packet Jasmine Rice",
        "1 Packet Extra-Firm Tofu",
        "1 Sweet Onion",
        "1 Spoonful(s) Garlic",
        "Corn Starch",
      ],
    },
    {
      id: 0,
      thumbnail: "https://thai-foodie.com/wp-content/uploads/2023/09/rad-na-2.jpg",
      name: "Rad Na",
      origin: "China / Thailand",
      tags: [
        "Rice",
        "Chicken",
        "Savory",
      ],
      ingredients: [
        "1 Packet Jasmine Rice",
        "1 Chicken Breast",
        "1 Carrot",
        "1 Zucchini",
        "1/2 Cup Chicken Stock",
        "3 Spoonful(s) Soy Sauce",
        "1 Spoonful(s) Garlic",
        "1 Spoonful(s) Oyster Sauce",
        "1 Spoonful(s) Butter",
        "1 Spoonful(s) Corn Starch Slurry",
      ],
    },
    {
      id: 1,
      thumbnail: "https://thai-foodie.com/wp-content/uploads/2023/09/rad-na-2.jpg",
      name: "Pad See Ew",
      origin: "Thailand",
      tags: [
        "Noodle",
        "Chicken",
        "Savory",
        "Umami",
      ],
      ingredients: [
        "1 Packet Rice Sheets",
        "3 Eggs",
        "3 Spoonful(s) Soy Sauce",
        "1 Spoonful(s) Dark Soy Sauce",
        "1 Spoonful(s) Oyster Sauce",
        "1/4 Spoonful(s) Rice Vinegar",
        "1/4 Spoonful(s) Fish Sauce",
      ],
    },
    {
      id: 2,
      thumbnail: "https://thai-foodie.com/wp-content/uploads/2023/09/rad-na-2.jpg",
      name: "Mongolian Beef",
      origin: "Taiwan",
      tags: [
        "Rice",
        "Beef",
        "Sweet",
      ],
      ingredients: [
        "1 Packet Jasmine Rice",
        "1 Top Round Steak",
        "1 Green Onions",
        "1/2 Cup Brown Sugar",
        "3 Spoonful(s) Soy Sauce",
        "1 Spoonful(s) Dark Soy Sauce",
        "1 Spoonful(s) Hoison Sauce",
        "1 Spoonful(s) Garlic",
        "1 Spoonful(s) Ginger",
      ],
    },
  ]);

  return { recipes, doubleCount, increment }
})
