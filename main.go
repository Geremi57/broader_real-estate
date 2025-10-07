package main

//i just build an api 🤯🤯🤯🤯

import (
	"encoding/json"
	"net/http"
	"strings"
	// "fmt"
	// "os"
)

type Property struct {
	ID int `json:"id"`
	Category string `json:"category"`
	Image string `json:"image"`
  Slides []string `json:"slides"`
  LocationSlug string  `json:"location_slug"`
	Title	string `json:"title"`
  Slug string `json:"slug"`
	Location	string `json:"location"`
	Type	string `json:"type"`
	Link	string `json:"link"`
	Bedrooms []int `json:"bedrooms"`
  Bathrooms int `json:"bathrooms"`
  Sqrft int `json:"feet"`
	Desciption	string `json:"description"`
	Price int `json:"price"`
  Amenities []string `json:"amenities"`
}

func enableCors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method =="OPTIONS" {
			return
		}
		
		next.ServeHTTP(w, r)
	})
}

func main() {
	properties := []Property{
			{
    ID: 1,
    Category: "featured",
    Image: "../image/house-isolated-field.jpg",
    Slides: []string{
      "image/01-Lounge.jpg", 
      "image/01-Reception.jpg",
      "image/04-Kitchen.jpg", 
      "image/05-Pool.jpg", 
      "image/06-Gym.jpg"},
    Title: "The Beacon",
    Location: "Kileleshwa",
    Type: "apartments",
    Link: "beacon-by-synina",
    Bedrooms: []int{5},
    Bathrooms: 6,
    Sqrft: 3000,
		Desciption: `Beacon by Synina is an architectural masterpiece redefining contentmporary luxury living in the serene, upscale neighbourhood kileleshwa
Offering spacious 3 & 4-bedroom ultra-modern residences with DSQ, along with lavish 5-bedroom duplex and simplex penthouse suites with family rooms, Beacon by Synina blends sophisticated design, exceptional craftsmanship, and world-class amenities.`,
    Price: 5452,
    Amenities: []string{},
  },
  {
    ID: 2,
    Category: "villas",
    Image: "../image/chinese-city.jpg",
    Title: "Villa",
    Location: "westlands",
    Type: "villas",
    Link: "luxury-villa",
    Bedrooms: []int{6},
    Bathrooms: 6,
    Sqrft: 6000,
		Desciption: "luxurious",
    Price: 91452,
    Amenities: []string{},
  },
  {
    ID: 3,
    Category: "cottage",
    Image: "../image/p1.png",
    Title: "Cozy Cottage",
    Location: "Kileleshwa",
    Type: "cottage",
    Link: "cozy-cottage",
    Bedrooms: []int{6},
    Bathrooms: 7,
    Sqrft: 6000,
		Desciption: "luxurious",
    Price: 214522,
    Amenities: []string{},
	},
	{
    ID: 4,
    Category: "apartments",
    Image: "../image/modern-residential-building.jpg",
    Title: "Modern Loft",
    Location: "Dagoretti",
    Type: "apartment",
    Link: "loft",
    Bedrooms: []int{5},
    Bathrooms: 6,
    Sqrft: 6000,
		Desciption: "spacious",
    Price: 5845,
    Amenities: []string{},
	},
	{
    ID: 5,
    Category: "apartments",
    Image: "../image/03-Family-Lounge.jpg",
    Title: "Modern Family Home",
    Location: "Killimani",
    Type: "apartment",
    Link: "killi-apartments",
    Bedrooms: []int{3},
    Bathrooms: 3,
    Sqrft: 3000,
		Desciption: "luxurious",
    Price: 5845,
    Amenities: []string{},
	},
	{
    ID: 6,
    Category: "apartments",
    Image: "../image/04-Aerial.jpg",
    Slides: []string{
      "image/01-Lounge.jpg", 
      "image/01-Reception.jpg",
      "image/04-Kitchen.jpg", 
      "image/05-Pool.jpg", 
      "image/06-Gym.jpg"},
    Title: "The Beacon",
    Location: "Kileleshwa",
    Type: "apartment",
    Link: "killesh-apartments",
    Bedrooms:  []int{3},
    Bathrooms: 7,
    Sqrft: 6000,
		Desciption: `Beacon by Synina is an architectural masterpiece redefining contentmporary
luxury living in the serene, upscale neighbourhood kileleshwa
Offering spacious 3 & 4-bedroom ultra-modern residences with DSQ, along with lavish 5-bedroom duplex and simplex penthouse suites with family rooms, Beacon by Synina blends sophisticated design, exceptional craftsmanship, and world-class amenities.`,
    Price: 214522,
    Amenities: []string{},
	},
	{
    ID: 7,
    Category: "Land",
    Image: "../image/high-angle-shot-farms-with-mountains-background-captured-samburu-kenya.jpg",
    Title: "",
    Location: "Machakos",
    Type: "land",
    Link: "machakos",
    Bedrooms:  []int{},
    Bathrooms: 0,
    Sqrft: 124,
		Desciption: "wide and green",
    Price: 35,
    Amenities: []string{},
	},
	{
		ID: 8,
    Category: "Land",
    Image: "../image/african-nature-scenery-with-road-trees.jpg",
    Title: "",
    Location: "Ruai Nairobi",
    Type: "land",
    Link: "ruai",
    Bedrooms: []int{},
    Bathrooms:  0,
    Sqrft: 13,
		Desciption: "wide and green",
    Price: 35,
    Amenities: []string{},
	},
	{
		ID: 9,
    Category: "Land",
    Image: "../image/view-african-nature-scenery-with-vegetation.jpg",
    Title: "",
    Location: "Thigiri",
    Type: "land",
    Link: "thigiri",
    Bedrooms:  []int{},
    Bathrooms: 0,
    Sqrft: 13,
		Desciption: "wide and green",
    Price: 1,
    Amenities: []string{},
  },
	{
		ID: 10,
    Category: "Land",
    Image: "../image/beautiful-green-landscape-with-marsh-cloudy-sky.jpg",
    Title: "",
    Location: "Kerarapon Nairobi",
    Type: "land",
    Link: "kerarapon",
    Bedrooms: []int{},
    Bathrooms: 0,
    Sqrft: 13,
		Desciption: "wide and green",
    Price: 25,
    Amenities: []string{},
	},
  {
		ID: 11,
    Category: "apartments",
    Image: "../image/Diamod_ivy.jpg",
    Slides: []string{
    "image/Annotation 2025-10-06 203843.png",
    "image/Annotation 2025-10-06 204039.png",
    "image/Annotation 2025-10-06 204110.png",
    "image/Annotation 2025-10-06 204301.png",
    "image/Annotation 2025-10-06 204506.png",
    "image/Annotation 2025-10-06 205057.png",
    },
    Title: "Diamond Ivy",
    Location: "Mandera Road Kileleshwa",
    Type: "apartment",
    Link: "diamond-ivy",
    Bedrooms: []int{1,2,3,4},
    Bathrooms: 0,
    Sqrft: 13,
		Desciption: "The apartment is on Mandera Road Kileleshwa the 1km from westlands shopping centre and Sarit mall and a walking distance to the Quickmart supermarket.",
    Price: 8,
    Amenities: []string{"Gym", "swimming pool", "Club house", "Sky garden", "Ample parking", "High speed lifts", "24 Hours security", "Cctv surveillance"},
  },
}

mux := http.NewServeMux()
		mux.HandleFunc("/api/properties", func(w http.ResponseWriter, r *http.Request){
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(properties)
		})

    mux.HandleFunc("/api/properties/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		link := strings.TrimPrefix(r.URL.Path, "/api/properties/")
		for _, prop := range properties {
			if prop.Link == link {
				json.NewEncoder(w).Encode(prop)
				return
			}
		}
		http.Error(w, "Property not found", http.StatusNotFound)
	})

		http.ListenAndServe(":8080", enableCors(mux))
}
