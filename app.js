/**
 * PUMA India — Official Storefront Clone Script
 * Comprehensive interactive module supporting:
 * - Cart Drawer with live badge, free shipping meter, quantity controls, and checkout
 * - Wishlist Drawer with heart icons on cards, sync across modals, and move-to-bag
 * - Product Quick-View Modal with full UK sizing (UK 6 - UK 11)
 * - User Account Modal with sign-in, join PUMA, and sign-out persistence
 * - Live Header Search with instant visual suggestions
 * - Smooth Carousel Navigation for Fall Favorites, New & Featured, and Trending Now
 * - Cross-page support for index.html, new-season.html, and sports.html
 */

(function () {
  'use strict';

  // Master Catalog across PUMA Storefront
  const CATALOG = [
    {
      id: 'fall-stranger-things',
      name: 'PUMA x STRANGER THINGS MB.06 Basketball Shoes',
      subtitle: "Unisex Basketball & Lifestyle",
      price: 13999,
      mrp: null,
      image: 'assets/puma/fall_stranger_things.jpg',
      tags: ['basketball', 'stranger-things', 'collab', 'new', 'unisex']
    },
    {
      id: 'fall-electrify-nitro',
      name: 'Electrify NITRO™ 5 Running Shoes',
      subtitle: "Men's Road Running Shoes",
      price: 9999,
      mrp: null,
      image: 'assets/puma/fall_electrify_nitro.jpg',
      tags: ['running', 'nitro', 'men', 'road-running', 'new']
    },
    {
      id: 'fall-speedcat-burgundy',
      name: 'Speedcat VTG Burgundy x ROSÉ Sneakers',
      subtitle: "Unisex Motorsport Heritage Sneakers",
      price: 9999,
      mrp: null,
      image: 'assets/puma/fall_speedcat_burgundy.jpg',
      tags: ['speedcat', 'lifestyle', 'motorsport', 'unisex', 'new']
    },
    {
      id: 'fall-speedcat-ballet',
      name: "Speedcat Women's Ballet Shoes",
      subtitle: "Women's Low-Profile Lifestyle",
      price: 6999,
      mrp: 8499,
      image: 'assets/puma/fall_speedcat_ballet.jpg',
      tags: ['speedcat', 'ballet', 'women', 'lifestyle', 'sale']
    },
    {
      id: 'nf-nitro',
      name: 'Velocity NITRO™ 4 Running Shoes',
      subtitle: "Men's & Women's Running Shoes",
      price: 11999,
      mrp: null,
      image: 'assets/puma/nf_nitro.jpg',
      tags: ['running', 'nitro', 'marathon', 'men', 'women']
    },
    {
      id: 'nf-speedcat',
      name: 'PUMA Speedcat OG in Red and Black Suede',
      subtitle: 'Classic Unisex Motorsport Shoes',
      price: 8999,
      mrp: 10999,
      image: 'assets/puma/nf_speedcat.jpg',
      tags: ['speedcat', 'motorsport', 'lifestyle', 'sale']
    },
    {
      id: 'nf-cold-weather',
      name: 'PUMA Cold-Weather Gear Winter Collection',
      subtitle: 'Outdoor & Performance Apparel',
      price: 5999,
      mrp: null,
      image: 'assets/puma/nf_cold_weather.jpg',
      tags: ['clothing', 'winter', 'running', 'lifestyle']
    },
    {
      id: 'nf-containment',
      name: 'Containment Breach PUMA x Stranger Things Shoe',
      subtitle: 'Limited Edition Collaboration',
      price: 14999,
      mrp: null,
      image: 'assets/puma/nf_containment.jpg',
      tags: ['stranger-things', 'basketball', 'limited', 'collab']
    },
    {
      id: 'ns-speedcat-metallic',
      name: "Speedcat Ballet Women's Metallic Shoes",
      subtitle: "Women's Terrace & Ballet Shoes",
      price: 7499,
      mrp: 8999,
      image: 'assets/puma/ns_speedcat_metallic.jpg',
      tags: ['speedcat', 'metallic', 'women', 'sale']
    },
    {
      id: 'life-palermo',
      name: 'PUMA Palermo Suede Sneakers in Espresso Brown',
      subtitle: 'Classic Terrace Sneakers',
      price: 6999,
      mrp: null,
      image: 'assets/puma/life_palermo.jpg',
      tags: ['palermo', 'suede', 'classics', 'lifestyle']
    },
    {
      id: 'life-suede',
      name: 'PUMA Suede Classic Lifestyle Editorial',
      subtitle: 'Iconic Heritage Streetwear',
      price: 6499,
      mrp: null,
      image: 'assets/puma/life_suede.jpg',
      tags: ['suede', 'classics', 'lifestyle']
    },
    {
      id: 'life-bmw',
      name: 'PUMA x BMW M Motorsport Apparel and Footwear',
      subtitle: 'Motorsport Racing Collection',
      price: 8999,
      mrp: null,
      image: 'assets/puma/life_bmw.jpg',
      tags: ['motorsport', 'bmw', 'racing', 'lifestyle']
    },
    {
      id: 'perf-velocity',
      name: 'PUMA Velocity NITRO 3 Performance Shoes',
      subtitle: 'High Cushion Everyday Running',
      price: 10999,
      mrp: null,
      image: 'assets/puma/perf_velocity.jpg',
      tags: ['running', 'nitro', 'performance']
    },
    {
      id: 'perf-marathon',
      name: 'PUMA Fast-R3 & Deviate Elite 4 Marathon Shoes',
      subtitle: 'Carbon-Plated Racing Shoes',
      price: 19999,
      mrp: null,
      image: 'assets/puma/perf_marathon.jpg',
      tags: ['running', 'carbon-plate', 'marathon', 'race-day']
    },
    {
      id: 'perf-hyrox',
      name: 'Athletes Training in PUMA x HYROX Collection',
      subtitle: 'Functional Fitness & Gym Gear',
      price: 7999,
      mrp: null,
      image: 'assets/puma/perf_hyrox.jpg',
      tags: ['training', 'hyrox', 'gym', 'fitness']
    },
    {
      id: 'trend-court-shatter',
      name: 'Court Shatter Low Sneakers',
      subtitle: "Men's Retro Court Shoes",
      price: 4999,
      mrp: 6999,
      image: 'assets/puma/trend_court_shatter.jpg',
      tags: ['sale', 'court', 'sneakers', 'men']
    },
    {
      id: 'trend-profoam',
      name: 'PROFOAM Galactic Running Sneakers',
      subtitle: 'Lightweight Responsive Cushioning',
      price: 4499,
      mrp: 6499,
      image: 'assets/puma/trend_profoam.jpg',
      tags: ['sale', 'running', 'profoam', 'unisex']
    },
    {
      id: 'trend-glidepacer',
      name: 'PUMA Glidepacer Pro Lightweight Running Shoes',
      subtitle: "Men's Road Running Footwear",
      price: 4999,
      mrp: 7999,
      image: 'assets/puma/trend_glidepacer.jpg',
      tags: ['sale', 'running', 'glidepacer']
    },
    {
      id: 'trend-blktop',
      name: 'Blktop Rider Suede Sneakers',
      subtitle: '80s Track & Street Heritage',
      price: 5599,
      mrp: 7999,
      image: 'assets/puma/trend_blktop.jpg',
      tags: ['sale', 'sneakers', 'rider', 'classics']
    },
    {
      id: 'ns-softride',
      name: 'Softride Premier GlideKnit All-Day Comfort Shoes',
      subtitle: "Women's Everyday Running & Walking",
      price: 5499,
      mrp: null,
      image: 'assets/puma/ns_softride.jpg',
      tags: ['running', 'lifestyle', 'women', 'softride']
    },
    {
      id: 'ns-speedcat-black',
      name: 'Speedcat OG Sneakers in Puma Black',
      subtitle: 'Unisex Motorsport Heritage',
      price: 9999,
      mrp: null,
      image: 'assets/puma/ns_speedcat_black.jpg',
      tags: ['speedcat', 'motorsport', 'lifestyle', 'men', 'women']
    },
    {
      id: 'ns-speedcat-red',
      name: 'Speedcat OG Sneakers in For All Time Red',
      subtitle: 'Unisex Motorsport Classic',
      price: 9999,
      mrp: null,
      image: 'assets/puma/ns_speedcat_red.jpg',
      tags: ['speedcat', 'motorsport', 'lifestyle', 'men', 'women']
    },
    {
      id: 'sp-glidepacer',
      name: 'PUMA Glidepacer Pro Lightweight Running Shoes',
      subtitle: "Performance Road Running",
      price: 6999,
      mrp: null,
      image: 'assets/puma/sp_glidepacer.jpg',
      tags: ['sports', 'running', 'men', 'women']
    },
    {
      id: 'sp-fade-pro',
      name: 'Fade Pro High Energy Running Shoes',
      subtitle: "Speed & Interval Training",
      price: 7499,
      mrp: null,
      image: 'assets/puma/sp_fade_pro.jpg',
      tags: ['sports', 'running', 'men', 'women']
    },
    {
      id: 'sp-galaxis',
      name: "Galaxis Pro Men's Running Shoes",
      subtitle: "Men's Performance Cushioning",
      price: 6999,
      mrp: null,
      image: 'assets/puma/sp_galaxis.jpg',
      tags: ['sports', 'running', 'men']
    },
    {
      id: 'sp-softride-freq',
      name: 'Softride Frequence Street All-Day Comfort Shoes',
      subtitle: "Training & Gym Footwear",
      price: 5999,
      mrp: null,
      image: 'assets/puma/sp_softride_freq.jpg',
      tags: ['sports', 'training', 'men', 'women']
    },
    {
      id: 'men-speedcat-red',
      name: 'Speedcat Sneakers',
      subtitle: "Men's Motorsport Heritage Shoes",
      price: 9999,
      mrp: null,
      image: 'assets/puma/ns_speedcat_red.jpg',
      tags: ['speedcat', 'sneakers', 'lifestyle', 'motorsport', 'men']
    },
    {
      id: 'men-speedcat-black',
      name: 'Speedcat Sneakers',
      subtitle: "Men's Motorsport Heritage Shoes",
      price: 9999,
      mrp: null,
      image: 'assets/puma/ns_speedcat_black.jpg',
      tags: ['speedcat', 'sneakers', 'lifestyle', 'motorsport', 'men']
    },
    {
      id: 'men-palermo-white-black',
      name: 'Palermo Leather Sneakers',
      subtitle: "Men's Terrace Classics",
      price: 6999,
      mrp: null,
      image: 'assets/puma/life_palermo.jpg',
      tags: ['palermo', 'sneakers', 'lifestyle', 'men', 'bestseller']
    },
    {
      id: 'men-deviate-nitro',
      name: 'Deviate Pure NITRO™ Men\'s Running Shoes',
      subtitle: "Men's Carbon-Plated Running Shoes",
      price: 14999,
      mrp: null,
      image: 'assets/puma/perf_marathon.jpg',
      tags: ['running', 'nitro', 'marathon', 'men']
    },
    {
      id: 'men-electrify-nitro',
      name: 'Electrify NITRO™ 5 Running Shoes',
      subtitle: "Men's Daily Road Running Shoes",
      price: 9999,
      mrp: null,
      image: 'assets/puma/fall_electrify_nitro.jpg',
      tags: ['running', 'nitro', 'men']
    },
    {
      id: 'men-stranger-things',
      name: 'PUMA x STRANGER THINGS MB.06 Basketball Shoes',
      subtitle: "Men's Limited Edition Basketball Shoes",
      price: 13999,
      mrp: null,
      image: 'assets/puma/fall_stranger_things.jpg',
      tags: ['basketball', 'stranger-things', 'collab', 'men']
    },
    {
      id: 'men-palermo-green',
      name: 'Palermo Leather Sneakers',
      subtitle: "Men's Terrace Heritage Shoes",
      price: 6999,
      mrp: null,
      image: 'assets/puma/life_suede.jpg',
      tags: ['palermo', 'sneakers', 'men']
    },
    {
      id: 'men-club-kayzer',
      name: 'PUMA Club Kayzer Sneakers',
      subtitle: "Men's Retro Court Shoes",
      price: 3119,
      mrp: 5999,
      image: 'assets/puma/trend_court_shatter.jpg',
      tags: ['sale', 'court', 'sneakers', 'men']
    },
    {
      id: 'men-glidepacer-black-blue',
      name: 'PUMA Glidepacer Pro Lightweight Running Shoes',
      subtitle: "Men's Performance Road Running Shoes",
      price: 4949,
      mrp: 8999,
      image: 'assets/puma/trend_glidepacer.jpg',
      tags: ['sale', 'running', 'men']
    },
    {
      id: 'men-profoam-galactic',
      name: 'PROFOAM Galactic Sneakers',
      subtitle: "Men's Responsive Cushioning Shoes",
      price: 3999,
      mrp: 7999,
      image: 'assets/puma/trend_profoam.jpg',
      tags: ['sale', 'running', 'men']
    },
    {
      id: 'men-galaxis-pro',
      name: 'Galaxis Pro Men\'s Running Shoes',
      subtitle: "Men's Performance Running Shoes",
      price: 3759,
      mrp: 7999,
      image: 'assets/puma/sp_galaxis.jpg',
      tags: ['sale', 'running', 'men']
    },
    {
      id: 'men-scend-pro',
      name: 'Scend Pro HeatStride Men\'s Running Shoes',
      subtitle: "Men's Lightweight Breathable Running Shoes",
      price: 3499,
      mrp: 6999,
      image: 'assets/puma/perf_velocity.jpg',
      tags: ['sale', 'running', 'men']
    },
    {
      id: 'men-fade-pro',
      name: 'Fade Pro Running Shoes',
      subtitle: "Men's Speed Training Shoes",
      price: 4399,
      mrp: 7999,
      image: 'assets/puma/sp_fade_pro.jpg',
      tags: ['sale', 'running', 'men']
    },
    {
      id: 'men-blktop-rider',
      name: 'Blktop Rider Suede Sneakers',
      subtitle: "Men's Heritage Streetwear Shoes",
      price: 4679,
      mrp: 8999,
      image: 'assets/puma/trend_blktop.jpg',
      tags: ['sale', 'sneakers', 'men']
    },
    {
      id: 'men-glidepacer-blue',
      name: 'PUMA Glidepacer Pro Lightweight Running Shoes',
      subtitle: "Men's Road Running Shoes",
      price: 4499,
      mrp: 8999,
      image: 'assets/puma/sp_glidepacer.jpg',
      tags: ['sale', 'running', 'men']
    },
    {
      id: 'men-fade-white-cyan',
      name: 'Fade Pro Running Shoes',
      subtitle: "Men's High Energy Running Shoes",
      price: 4399,
      mrp: 7999,
      image: 'assets/puma/sp_running.jpg',
      tags: ['sale', 'running', 'men']
    },
    {
      id: 'men-glidepacer-mint',
      name: 'PUMA Glidepacer Pro Lightweight Running Shoes',
      subtitle: "Men's Breathable Running Shoes",
      price: 4949,
      mrp: 8999,
      image: 'assets/puma/sp_softride_freq.jpg',
      tags: ['new', 'running', 'men', 'sale']
    },
    {
      id: 'men-profoam-grey',
      name: 'PROFOAM Galactic Sneakers',
      subtitle: "Men's Lifestyle & Running Shoes",
      price: 3999,
      mrp: 7999,
      image: 'assets/puma/ns_softride.jpg',
      tags: ['sale', 'running', 'men']
    },
    // ==========================================
    // Women's Catalog (Matches in.puma.com/in/en/womens)
    // ==========================================
    {
      id: 'women-speedcat-metallic',
      name: "Speedcat Ballet Women's Metallic Shoes",
      subtitle: "Women's Metallic Ballet Flat Sneakers",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ns_speedcat_metallic.jpg',
      tags: ['speedcat', 'ballet', 'sneakers', 'lifestyle', 'women', 'trending']
    },
    {
      id: 'women-speedcat-ballet-bw',
      name: "Speedcat Women's Ballet Shoes",
      subtitle: "Women's Ballet Inspired Sneakers - Black/White",
      price: 6999,
      mrp: null,
      image: 'assets/puma/fall_speedcat_ballet.jpg',
      tags: ['speedcat', 'ballet', 'sneakers', 'lifestyle', 'women']
    },
    {
      id: 'women-speedcat-ballet-red',
      name: "Speedcat Women's Ballet Shoes",
      subtitle: "Women's Ballet Inspired Sneakers - Red/White",
      price: 6999,
      mrp: null,
      image: 'assets/puma/fall_speedcat_burgundy.jpg',
      tags: ['speedcat', 'ballet', 'sneakers', 'lifestyle', 'women']
    },
    {
      id: 'women-speedcat-ballet-cream',
      name: "Speedcat Women's Ballet Shoes",
      subtitle: "Women's Ballet Inspired Sneakers - Cream/Beige",
      price: 6999,
      mrp: null,
      image: 'assets/puma/life_suede.jpg',
      tags: ['speedcat', 'ballet', 'sneakers', 'lifestyle', 'women']
    },
    {
      id: 'women-speedcat-croco',
      name: "Speedcat Ballet Croco Texture Women's Sneakers",
      subtitle: "Women's Croco Embossed Ballet Sneakers",
      price: 7499,
      mrp: null,
      image: 'assets/puma/ns_speedcat_metallic.jpg',
      tags: ['speedcat', 'ballet', 'sneakers', 'lifestyle', 'women']
    },
    {
      id: 'women-speedcat-ballet-pink',
      name: "Speedcat Women's Ballet Shoes",
      subtitle: "Women's Ballet Inspired Sneakers - Pink/White",
      price: 6999,
      mrp: null,
      image: 'assets/puma/fall_speedcat_ballet.jpg',
      tags: ['speedcat', 'ballet', 'sneakers', 'lifestyle', 'women']
    },
    {
      id: 'women-speedcat-sneakers-red',
      name: 'Speedcat Sneakers',
      subtitle: "Women's Motorsport Classics - Suede Red",
      price: 9999,
      mrp: null,
      image: 'assets/puma/ns_speedcat_red.jpg',
      tags: ['speedcat', 'sneakers', 'lifestyle', 'motorsport', 'women']
    },
    {
      id: 'women-speedcat-sneakers-black',
      name: 'Speedcat Sneakers',
      subtitle: "Women's Motorsport Classics - Suede Black",
      price: 9999,
      mrp: null,
      image: 'assets/puma/ns_speedcat_black.jpg',
      tags: ['speedcat', 'sneakers', 'lifestyle', 'motorsport', 'women']
    },
    {
      id: 'women-tori-pixie-v1',
      name: "Tori Pixie V1 Women's All-day Comfort Sneakers",
      subtitle: "Women's Everyday Casual Shoes",
      price: 3119,
      mrp: 5999,
      image: 'assets/puma/trend_court_shatter.jpg',
      tags: ['sale', 'sneakers', 'lifestyle', 'women']
    },
    {
      id: 'women-galaxis-plum',
      name: "Galaxis Pro Women's Performance Boost Running Shoes",
      subtitle: "Women's Lightweight Running Shoes - Plum",
      price: 3289,
      mrp: 6999,
      image: 'assets/puma/sp_galaxis.jpg',
      tags: ['sale', 'running', 'women']
    },
    {
      id: 'women-galaxis-black-lime',
      name: "Galaxis Pro Women's Performance Boost Running Shoes",
      subtitle: "Women's Lightweight Running Shoes - Black/Lime",
      price: 3289,
      mrp: 6999,
      image: 'assets/puma/sp_galaxis.jpg',
      tags: ['sale', 'running', 'women']
    },
    {
      id: 'women-galaxis-white-yellow',
      name: "Galaxis Pro Women's Performance Boost Running Shoes",
      subtitle: "Women's Lightweight Running Shoes - White/Yellow",
      price: 3359,
      mrp: 6999,
      image: 'assets/puma/sp_running.jpg',
      tags: ['sale', 'running', 'women']
    },
    {
      id: 'women-tori-pixie-femme',
      name: "Tori Pixie Femme Women's Casual Sneakers",
      subtitle: "Women's Platform Casual Sneakers",
      price: 3599,
      mrp: 5999,
      image: 'assets/puma/trend_blktop.jpg',
      tags: ['sale', 'sneakers', 'lifestyle', 'women']
    },
    {
      id: 'women-maxima-pro-blush',
      name: "Maxima Pro Women's Running Shoes",
      subtitle: "Women's High Cushion Running Shoes - Blush",
      price: 6399,
      mrp: 7999,
      image: 'assets/puma/sp_fade_pro.jpg',
      tags: ['sale', 'running', 'women']
    },
    {
      id: 'women-maxima-pro-black',
      name: "Maxima Pro Women's Running Shoes",
      subtitle: "Women's High Cushion Running Shoes - Black",
      price: 5999,
      mrp: 7999,
      image: 'assets/puma/perf_velocity.jpg',
      tags: ['sale', 'running', 'women']
    },
    {
      id: 'women-softride-frequence',
      name: "Softride Frequence Street Women's All-Day Comfort Shoes",
      subtitle: "Women's Cloud Soft Foam Shoes",
      price: 4199,
      mrp: 6999,
      image: 'assets/puma/sp_softride_freq.jpg',
      tags: ['sale', 'running', 'lifestyle', 'women']
    },
    {
      id: 'women-cell-thrill',
      name: "Cell Thrill Women's Comfort Running and Gym Shoes",
      subtitle: "Women's Training & Gym Shoes",
      price: 4124,
      mrp: 5499,
      image: 'assets/puma/trend_profoam.jpg',
      tags: ['sale', 'running', 'sports', 'training', 'women']
    },
    // Official Motorsport Products (Matches in.puma.com/in/en/motorsport)
    {
      id: 'ms-ferrari-vegas-jacket',
      name: "Scuderia Ferrari HP Replica Las Vegas Men's Coach Jacket",
      subtitle: "Official Team Scuderia Ferrari Outerwear",
      price: 19999,
      mrp: null,
      image: 'assets/puma/ms_ferrari_vegas_jacket.jpg',
      tags: ['motorsport', 'ferrari', 'jacket', 'clothing', 'men', 'f1']
    },
    {
      id: 'ms-mclaren-speedcat-orange',
      name: 'McLAREN RACING Speedcat Sneakers',
      subtitle: "Papaya Orange x Black Motorsport Heritage",
      price: 10999,
      mrp: null,
      image: 'assets/puma/ms_mclaren_speedcat_orange.jpg',
      tags: ['motorsport', 'mclaren', 'speedcat', 'sneakers', 'unisex', 'f1']
    },
    {
      id: 'ms-mclaren-speedcat-burgundy',
      name: 'McLAREN RACING Speedcat Sneakers',
      subtitle: "Cream x Burgundy Motorsport Heritage",
      price: 10999,
      mrp: null,
      image: 'assets/puma/ms_mclaren_speedcat_burgundy.jpg',
      tags: ['motorsport', 'mclaren', 'speedcat', 'sneakers', 'unisex', 'f1']
    },
    {
      id: 'ms-bmw-caven-leather',
      name: 'BMW M Motorsport Caven 2.0 Leather Sneakers',
      subtitle: "Men's Track Heritage Retro Shoes",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ms_bmw_caven_leather.jpg',
      tags: ['motorsport', 'bmw', 'sneakers', 'shoes', 'men']
    },
    {
      id: 'ms-ferrari-palermo',
      name: 'Scuderia Ferrari Palermo Sneakers',
      subtitle: "Terrace Classic Ferrari Shield Edition",
      price: 7999,
      mrp: null,
      image: 'assets/puma/ms_ferrari_palermo.jpg',
      tags: ['motorsport', 'ferrari', 'palermo', 'sneakers', 'unisex']
    },
    {
      id: 'ms-ferrari-hp-speedcat-red',
      name: 'Scuderia Ferrari HP Speedcat Sneakers',
      subtitle: "Limited Edition Rosso Corsa Racing Shoes",
      price: 10999,
      mrp: 19299,
      image: 'assets/puma/ms_ferrari_hp_speedcat_red.jpg',
      tags: ['motorsport', 'ferrari', 'speedcat', 'sneakers', 'limited-edition']
    },
    {
      id: 'ms-porsche-court-classic',
      name: 'Porsche Legacy Court Classic Lux Sneakers',
      subtitle: "Porsche Motorsport Heritage Low-Tops",
      price: 4274,
      mrp: 7499,
      image: 'assets/puma/ms_porsche_court_classic.jpg',
      tags: ['motorsport', 'porsche', 'sneakers', 'sale', 'men']
    },
    {
      id: 'ms-bmw-court-classic-black',
      name: 'BMW M Motorsport Court Classic Lux Sneakers',
      subtitle: "Black Track Heritage Low-Tops",
      price: 4124,
      mrp: 7499,
      image: 'assets/puma/ms_bmw_court_classic_black.jpg',
      tags: ['motorsport', 'bmw', 'sneakers', 'sale', 'men']
    },
    {
      id: 'ms-bmw-court-classic-white',
      name: 'BMW M Motorsport Court Classic Lux Sneakers',
      subtitle: "White Track Heritage Low-Tops",
      price: 4274,
      mrp: 7499,
      image: 'assets/puma/ms_bmw_court_classic_white.jpg',
      tags: ['motorsport', 'bmw', 'sneakers', 'sale', 'men']
    },
    {
      id: 'ms-bmw-hypnotic-black',
      name: 'BMW M Motorsport Hypnotic Sneakers',
      subtitle: "High-Performance Lightweight Track Shoes",
      price: 7199,
      mrp: 8999,
      image: 'assets/puma/ms_bmw_hypnotic_black.jpg',
      tags: ['motorsport', 'bmw', 'running', 'sneakers', 'men']
    },
    {
      id: 'ms-ferrari-4panel-cap',
      name: 'Scuderia Ferrari Lifestyle 4 Panel Cap',
      subtitle: "Official Team Ferrari Cap with Shield Badge",
      price: 1199,
      mrp: 1999,
      image: 'assets/puma/ms_ferrari_4panel_cap.jpg',
      tags: ['motorsport', 'ferrari', 'cap', 'accessories', 'unisex']
    },
    {
      id: 'ms-bmw-neo-cat',
      name: 'BMW M Motorsport Neo Cat Sneakers',
      subtitle: "Low-Profile Driving Performance Shoes",
      price: 3599,
      mrp: 7499,
      image: 'assets/puma/ms_bmw_neo_cat.jpg',
      tags: ['motorsport', 'bmw', 'driving', 'sneakers', 'men']
    },
    {
      id: 'ms-bmw-hypnotic-lightweight',
      name: 'BMW MMS Hypnotic Lightweight Sneakers',
      subtitle: "Motorsport Cushioning Daily Shoes",
      price: 5299,
      mrp: 9999,
      image: 'assets/puma/ms_bmw_hypnotic_lightweight.jpg',
      tags: ['motorsport', 'bmw', 'sneakers', 'running', 'unisex']
    },
    {
      id: 'ms-porsche-capro',
      name: 'Porsche Legacy CA Pro Leather Motorsport Shoes',
      subtitle: "Retro Court Leather Porsche Edition",
      price: 4769,
      mrp: 8999,
      image: 'assets/puma/ms_porsche_capro.jpg',
      tags: ['motorsport', 'porsche', 'ca-pro', 'sneakers', 'men']
    },
    {
      id: 'ms-aston-martin-fade',
      name: 'PUMA x ASTON MARTIN ARAMCO F1® TEAM Fade Sneakers',
      subtitle: "Official Aston Martin F1 Racing Shoes",
      price: 8799,
      mrp: 10999,
      image: 'assets/puma/ms_aston_martin_fade.jpg',
      tags: ['motorsport', 'aston-martin', 'f1', 'sneakers', 'unisex']
    },
    // Official Lifestyle Collections (Matches in.puma.com/in/en/lifestyle)
    {
      id: 'ls-palermo-white-black',
      name: 'Palermo Leather Sneakers',
      subtitle: "Terrace Classic Leather Edition - White/Black",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ls_palermo_white_black.jpg',
      tags: ['lifestyle', 'palermo', 'sneakers', 'unisex', 'bestseller']
    },
    {
      id: 'ls-palermo-white-tan',
      name: 'Palermo Leather Sneakers',
      subtitle: "Terrace Classic Leather Edition - White/Tan",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ls_palermo_white_tan.jpg',
      tags: ['lifestyle', 'palermo', 'sneakers', 'unisex']
    },
    {
      id: 'ls-palermo-white-blue',
      name: 'Palermo Leather Sneakers',
      subtitle: "Terrace Classic Leather Edition - White/Blue",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ls_palermo_white_blue.jpg',
      tags: ['lifestyle', 'palermo', 'sneakers', 'unisex']
    },
    {
      id: 'ls-palermo-black-white',
      name: 'Palermo Leather Sneakers',
      subtitle: "Terrace Classic Leather Edition - Black/White",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ls_palermo_black_white.jpg',
      tags: ['lifestyle', 'palermo', 'sneakers', 'unisex']
    },
    {
      id: 'ls-palermo-all-white',
      name: 'Palermo Leather Sneakers',
      subtitle: "Terrace Classic Leather Edition - All White",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ls_palermo_all_white.jpg',
      tags: ['lifestyle', 'palermo', 'sneakers', 'unisex', 'bestseller']
    },
    {
      id: 'ls-palermo-white-brown',
      name: 'Palermo Leather Sneakers',
      subtitle: "Terrace Classic Leather Edition - White/Brown",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ls_palermo_white_brown.jpg',
      tags: ['lifestyle', 'palermo', 'sneakers', 'unisex']
    },
    {
      id: 'ls-palermo-white-green',
      name: 'Palermo Leather Sneakers',
      subtitle: "Terrace Classic Leather Edition - White/Green",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ls_palermo_white_green.jpg',
      tags: ['lifestyle', 'palermo', 'sneakers', 'unisex']
    },
    {
      id: 'ls-speedcat-brown-suede',
      name: 'Speedcat Sneakers',
      subtitle: "Low-Profile Motorsport Heritage - Brown Suede",
      price: 9999,
      mrp: null,
      image: 'assets/puma/ls_speedcat_brown_suede.jpg',
      tags: ['lifestyle', 'speedcat', 'sneakers', 'unisex']
    },
    {
      id: 'ls-palermo-black-gum',
      name: 'Palermo Leather Sneakers',
      subtitle: "Terrace Classic Leather Edition - Black/Gum",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ls_palermo_black_gum.jpg',
      tags: ['lifestyle', 'palermo', 'sneakers', 'unisex']
    },
    {
      id: 'ls-palermo-white-vibrant-green',
      name: 'Palermo Leather Sneakers',
      subtitle: "Terrace Classic Leather Edition - White/Vibrant Green",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ls_palermo_white_vibrant_green.jpg',
      tags: ['lifestyle', 'palermo', 'sneakers', 'unisex']
    },
    {
      id: 'ls-speedcat-ballet-silver',
      name: "Speedcat Ballet Women's Metallic Shoes",
      subtitle: "Low-Profile Metallic Lifestyle Shoes - Silver",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ls_speedcat_ballet_silver.jpg',
      tags: ['lifestyle', 'speedcat', 'ballet', 'women', 'trending']
    },
    {
      id: 'ls-t7-womens-short-jacket',
      name: "T7 ALWAYS ON Women's Short Track Jacket",
      subtitle: "Iconic Archive Tracksuit Jacket",
      price: 4999,
      mrp: null,
      image: 'assets/puma/ls_t7_womens_short_jacket.jpg',
      tags: ['lifestyle', 't7', 'jacket', 'clothing', 'women']
    },
    {
      id: 'ls-speedcat-ballet-grey',
      name: "Speedcat Women's Ballet Shoes",
      subtitle: "Low-Profile Lifestyle Ballet Shoes - Grey",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ls_speedcat_ballet_grey.jpg',
      tags: ['lifestyle', 'speedcat', 'ballet', 'women']
    },
    {
      id: 'ls-speedcat-ballet-pink',
      name: "Speedcat Women's Ballet Shoes",
      subtitle: "Low-Profile Lifestyle Ballet Shoes - Pink",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ls_speedcat_ballet_pink.jpg',
      tags: ['lifestyle', 'speedcat', 'ballet', 'women']
    },
    {
      id: 'ls-t7-womens-track-pants',
      name: "T7 ALWAYS ON Women's Slim Fit Track Pants",
      subtitle: "Archive Tracksuit Pants with T7 Stripes",
      price: 1980,
      mrp: 4219,
      image: 'assets/puma/ls_t7_womens_track_pants.jpg',
      tags: ['lifestyle', 't7', 'trackpants', 'clothing', 'women', 'sale']
    },
    {
      id: 'ls-t7-mens-track-jacket',
      name: "T7 ALWAYS ON Men's Track Jacket",
      subtitle: "Archive Track Jacket with White Contrast Stripe",
      price: 5499,
      mrp: null,
      image: 'assets/puma/ls_t7_mens_track_jacket.jpg',
      tags: ['lifestyle', 't7', 'jacket', 'clothing', 'men']
    },
    {
      id: 'ls-t7-mens-track-pants',
      name: "T7 ALWAYS ON Men's Track Pants",
      subtitle: "Archive T7 Stripe Sweatpants",
      price: 3374,
      mrp: 4499,
      image: 'assets/puma/ls_t7_mens_track_pants.jpg',
      tags: ['lifestyle', 't7', 'trackpants', 'clothing', 'men', 'sale']
    },
    {
      id: 'ls-future-archive-sweater',
      name: 'FUTURE ARCHIVE Relaxed Fit Crew Sweater',
      subtitle: "Retro Streetwear Graphic Crewneck",
      price: 3960,
      mrp: 8427,
      image: 'assets/puma/ls_future_archive_sweater.jpg',
      tags: ['lifestyle', 'sweater', 'clothing', 'men', 'sale']
    },
    {
      id: 'ls-road-to-unity-skirt',
      name: "Road To Unity Women's Woven Midi Printed Pleated Skirt",
      subtitle: "Plaid Streetwear Midi Skirt",
      price: 2370,
      mrp: 4740,
      image: 'assets/puma/ls_road_to_unity_skirt.jpg',
      tags: ['lifestyle', 'skirt', 'clothing', 'women', 'sale']
    },
    {
      id: 'ls-t7-relaxed-cotton-shorts',
      name: "T7 Family Men's Relaxed Cotton Shorts",
      subtitle: "Everyday Comfortable Cotton Shorts",
      price: 3374,
      mrp: 4499,
      image: 'assets/puma/ls_t7_relaxed_cotton_shorts.jpg',
      tags: ['lifestyle', 't7', 'shorts', 'clothing', 'men', 'sale']
    },
    {
      id: 'ls-speedcat-etoile-yellow',
      name: "Speedcat Etoile Women's Sneakers",
      subtitle: "Retro Low Profile Sneaker - Butter Yellow",
      price: 9999,
      mrp: null,
      image: 'assets/puma/ls_speedcat_etoile_yellow.jpg',
      tags: ['lifestyle', 'speedcat', 'sneakers', 'women']
    },
    {
      id: 'ls-palermo-white-pink',
      name: 'Palermo Leather Sneakers',
      subtitle: "Terrace Classic Leather Edition - White/Pink",
      price: 6999,
      mrp: null,
      image: 'assets/puma/ls_palermo_white_pink.jpg',
      tags: ['lifestyle', 'palermo', 'sneakers', 'unisex']
    },
    {
      id: 'ls-t7-mens-maroon-jacket',
      name: "T7 ALWAYS ON Men's Track Jacket",
      subtitle: "Archive Track Jacket in Rich Maroon",
      price: 4399,
      mrp: 5499,
      image: 'assets/puma/ls_t7_mens_maroon_jacket.jpg',
      tags: ['lifestyle', 't7', 'jacket', 'clothing', 'men', 'sale']
    },
    {
      id: 'ls-t7-womens-green-pants',
      name: "T7 ALWAYS ON Women's Slim Fit Track Pants",
      subtitle: "Archive T7 Stripe Sweatpants in Forest Green",
      price: 2190,
      mrp: 4213,
      image: 'assets/puma/ls_t7_womens_green_pants.jpg',
      tags: ['lifestyle', 't7', 'trackpants', 'clothing', 'women', 'sale']
    },
    // =========================================================================
    // KIDS COLLECTION (20 items from official in.puma.com/in/en/kids)
    // =========================================================================
    {
      id: 'kids-paw-patrol-tee',
      name: "PUMA X PAW PATROL Kids' Graphic Tee",
      subtitle: "Official Nickelodeon Collaboration Everyday Cotton Tee",
      price: 1124,
      mrp: 1499,
      image: 'assets/puma/kids_paw_patrol_tee.jpg',
      tags: ['kids', 'clothing', 'tee', 'paw-patrol', 'sale']
    },
    {
      id: 'kids-paw-patrol-shorts-set',
      name: "PUMA X PAW PATROL Infants' Tee & Shorts Set",
      subtitle: "Two-Piece Graphic Summer Outfit for Toddlers & Infants",
      price: 2799,
      mrp: 3499,
      image: 'assets/puma/kids_paw_patrol_shorts_set.jpg',
      tags: ['kids', 'clothing', 'sets', 'paw-patrol', 'infants', 'sale']
    },
    {
      id: 'kids-paw-patrol-cargo-pants',
      name: "PUMA X PAW PATROL Boys' T7 Cargo Pants",
      subtitle: "Signature T7 Side Stripe Track Pants with Utility Pockets",
      price: 3039,
      mrp: 3799,
      image: 'assets/puma/kids_paw_patrol_cargo_pants.jpg',
      tags: ['kids', 'clothing', 'pants', 't7', 'paw-patrol', 'sale']
    },
    {
      id: 'kids-kitten-mesh-white',
      name: "PUMA Kitten Mesh Toddler's First-Walk Slip-on Sneakers",
      subtitle: "Ultra-Light Breathable First-Step Shoes with Hook-and-Loop Strap",
      price: 2999,
      mrp: 2999,
      image: 'assets/puma/kids_kitten_mesh_white.jpg',
      tags: ['kids', 'shoes', 'sneakers', 'toddler', 'first-walk']
    },
    {
      id: 'kids-future-8-match',
      name: "FUTURE 8 MATCH FOREVER FG/AG Youth Football Boots",
      subtitle: "High-Performance Firm Ground / Artificial Grass Cleats",
      price: 6999,
      mrp: 6999,
      image: 'assets/puma/kids_future_8_match.jpg',
      tags: ['kids', 'shoes', 'football', 'sports', 'cleats']
    },
    {
      id: 'kids-ferrari-drift-cat-black',
      name: "Scuderia Ferrari Drift Cat 11 Youth Everyday Sneakers",
      subtitle: "Official Ferrari F1 Shield Low Profile Motorsport Shoes",
      price: 3249,
      mrp: 4999,
      image: 'assets/puma/kids_ferrari_drift_cat_black.jpg',
      tags: ['kids', 'shoes', 'motorsport', 'ferrari', 'sneakers', 'sale']
    },
    {
      id: 'kids-smash-soft-school',
      name: "Smash Soft Cushioning Youth School Shoes",
      subtitle: "Classic All-Black Durable Everyday Uniform Footwear",
      price: 3299,
      mrp: 3299,
      image: 'assets/puma/kids_smash_soft_school.jpg',
      tags: ['kids', 'shoes', 'school', 'smash', 'sneakers']
    },
    {
      id: 'kids-ferrari-drift-cat-white',
      name: "Scuderia Ferrari Drift Cat 11 Youth Everyday Sneakers",
      subtitle: "White/Red Scuderia Ferrari Racing Heritage Lifestyle Shoes",
      price: 2999,
      mrp: 4999,
      image: 'assets/puma/kids_ferrari_drift_cat_white.jpg',
      tags: ['kids', 'shoes', 'motorsport', 'ferrari', 'sneakers', 'sale']
    },
    {
      id: 'kids-soft-enzo-5-black',
      name: "Soft Enzo 5 Kid's Running Shoes",
      subtitle: "Cushioned Breathable Mesh Athletic Running & Play Shoes",
      price: 3499,
      mrp: 3499,
      image: 'assets/puma/kids_soft_enzo_5_black.jpg',
      tags: ['kids', 'shoes', 'running', 'sports', 'enzo']
    },
    {
      id: 'kids-kitten-mesh-blue',
      name: "PUMA Kitten Mesh Toddler's First-Walk Slip-on Sneakers",
      subtitle: "Cobalt Blue & Mint Soft Step Easy-Wear Toddler Shoes",
      price: 2999,
      mrp: 2999,
      image: 'assets/puma/kids_kitten_mesh_blue.jpg',
      tags: ['kids', 'shoes', 'sneakers', 'toddler', 'first-walk']
    },
    {
      id: 'kids-carina-charm-white',
      name: "Carina 3.0 Youth Charm Sneakers",
      subtitle: "Platform Court Silhouette with Detachable Cat Charm",
      price: 3499,
      mrp: 3499,
      image: 'assets/puma/kids_carina_charm_white.jpg',
      tags: ['kids', 'shoes', 'lifestyle', 'carina', 'sneakers']
    },
    {
      id: 'kids-pounce-lite-mint',
      name: "Pounce Lite 2 Youth Running Shoes",
      subtitle: "Ultra-Responsive Lightweight Foam Everyday Athletic Shoes",
      price: 3999,
      mrp: 3999,
      image: 'assets/puma/kids_pounce_lite_mint.jpg',
      tags: ['kids', 'shoes', 'running', 'sports', 'pounce']
    },
    {
      id: 'kids-softride-echo-black',
      name: "Softride Pro Echo Consonance Youth All-Day Comfort Shoes",
      subtitle: "SOFTRIDE Foam Technology for Maximum Cushioning & Ease",
      price: 2999,
      mrp: 3999,
      image: 'assets/puma/kids_softride_echo_black.jpg',
      tags: ['kids', 'shoes', 'softride', 'comfort', 'sale']
    },
    {
      id: 'kids-storm-backpack-black',
      name: "PUMA Storm Water-Resistant Backpack 27L",
      subtitle: "Multi-Compartment Weatherproof School & Sports Bag",
      price: 1649,
      mrp: 2999,
      image: 'assets/puma/kids_storm_backpack_black.jpg',
      tags: ['kids', 'accessories', 'backpacks', 'bags', 'school', 'sale']
    },
    {
      id: 'kids-running-cap-black',
      name: "Running Cap",
      subtitle: "Lightweight Quick-Drying Performance Athletic Sun Cap",
      price: 639,
      mrp: 799,
      image: 'assets/puma/kids_running_cap_black.jpg',
      tags: ['kids', 'accessories', 'caps', 'running', 'sale']
    },
    {
      id: 'kids-camo-face-mask',
      name: "Camo Face Mask Pack of 2",
      subtitle: "Triple-Layer Breathable Reusable Face Coverings",
      price: 419,
      mrp: 599,
      image: 'assets/puma/kids_camo_face_mask.jpg',
      tags: ['kids', 'accessories', 'masks', 'camo', 'sale']
    },
    {
      id: 'kids-teamgoal-backpack',
      name: "teamGOAL 23 Durable Football Backpack",
      subtitle: "Heavy-Duty Ball & Boot Storage Compartment School Bag",
      price: 753,
      mrp: 1299,
      image: 'assets/puma/kids_teamgoal_backpack.jpg',
      tags: ['kids', 'accessories', 'backpacks', 'football', 'sale']
    },
    {
      id: 'kids-school-backpack-yellow',
      name: "School Backpack",
      subtitle: "High-Capacity Everyday Campus Pack with Bold Logo Print",
      price: 949,
      mrp: 1899,
      image: 'assets/puma/kids_school_backpack_yellow.jpg',
      tags: ['kids', 'accessories', 'backpacks', 'bags', 'school', 'sale']
    },
    {
      id: 'kids-zen-sling-bag',
      name: "PU Zen Sling Bag",
      subtitle: "Premium Faux Leather Compact Crossbody Festival Bag",
      price: 1149,
      mrp: 2299,
      image: 'assets/puma/kids_zen_sling_bag.jpg',
      tags: ['kids', 'accessories', 'bags', 'sling', 'lifestyle', 'sale']
    },
    // ==========================================
    // PUMA SALE COLLECTION (28 Verified Products)
    // ==========================================
    {
      id: 'sale-club-kayzer-white-gum',
      name: "PUMA Club Kayzer Sneakers",
      subtitle: "Men's Low Terrace Casual Sneakers",
      price: 3599,
      mrp: 5999,
      image: 'assets/puma/sale_club_kayzer_white_gum.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'men', 'white', 'casual']
    },
    {
      id: 'sale-club-kayzer-black-gum',
      name: "PUMA Club Kayzer Sneakers",
      subtitle: "Men's Low Terrace Casual Sneakers",
      price: 3119,
      mrp: 5999,
      image: 'assets/puma/sale_club_kayzer_black_gum.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'men', 'black', 'casual']
    },
    {
      id: 'sale-profoam-galactic-black',
      name: "PROFOAM Galactic Sneakers",
      subtitle: "Chunky Cushioning Everyday Runners",
      price: 3999,
      mrp: 7999,
      image: 'assets/puma/sale_profoam_galactic_black.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'running', 'men', 'black']
    },
    {
      id: 'sale-glidepacer-pro-black-blue',
      name: "PUMA Glidepacer Pro Lightweight Running Shoes",
      subtitle: "Performance Distance Road Running Shoes",
      price: 4949,
      mrp: 8999,
      image: 'assets/puma/sale_glidepacer_pro_black_blue.jpg',
      tags: ['sale', 'shoes', 'running', 'men', 'black', 'blue']
    },
    {
      id: 'sale-court-shatter-all-white',
      name: "Court Shatter Low Sneakers",
      subtitle: "Clean Retro Court Leather Sneakers",
      price: 2819,
      mrp: 5999,
      image: 'assets/puma/sale_court_shatter_all_white.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'men', 'white', 'court']
    },
    {
      id: 'sale-club-kayzer-white-black',
      name: "PUMA Club Kayzer Sneakers",
      subtitle: "Classic White & Black Terrace Sneakers",
      price: 3119,
      mrp: 5999,
      image: 'assets/puma/sale_club_kayzer_white_black.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'men', 'white', 'black']
    },
    {
      id: 'sale-galaxis-pro-white-red',
      name: "Galaxis Pro Men's Running Shoes",
      subtitle: "High-Rebound Responsive Running Shoes",
      price: 3289,
      mrp: 6999,
      image: 'assets/puma/sale_galaxis_pro_white_red.jpg',
      tags: ['sale', 'shoes', 'running', 'men', 'white', 'red']
    },
    {
      id: 'sale-fade-pro-navy-cyan',
      name: "Fade Pro Running Shoes",
      subtitle: "Engineered Mesh Breathable Road Runners",
      price: 4399,
      mrp: 7999,
      image: 'assets/puma/sale_fade_pro_navy_cyan.jpg',
      tags: ['sale', 'shoes', 'running', 'men', 'blue', 'cyan']
    },
    {
      id: 'sale-court-shatter-all-black',
      name: "Court Shatter Low Sneakers",
      subtitle: "Monochrome Street Court Sneakers",
      price: 2819,
      mrp: 5999,
      image: 'assets/puma/sale_court_shatter_all_black.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'men', 'black', 'court']
    },
    {
      id: 'sale-blktop-rider-teal-orange',
      name: "Blktop Rider Suede Sneakers",
      subtitle: "Vintage 80s Track & Trail Runner Silhouette",
      price: 4679,
      mrp: 8999,
      image: 'assets/puma/sale_blktop_rider_teal_orange.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'men', 'teal', 'orange']
    },
    {
      id: 'sale-smashic-comfort-white',
      name: "Smashic Comfort Casual Sneakers",
      subtitle: "Minimalist Tennis-Inspired Comfort Sneakers",
      price: 2384,
      mrp: 4499,
      image: 'assets/puma/sale_smashic_comfort_white.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'men', 'white', 'casual']
    },
    {
      id: 'sale-blktop-rider-navy-grey',
      name: "Blktop Rider Suede Sneakers",
      subtitle: "Lugged Outsole Retro Lifestyle Shoes",
      price: 4679,
      mrp: 8999,
      image: 'assets/puma/sale_blktop_rider_navy_grey.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'men', 'blue', 'grey']
    },
    {
      id: 'sale-softride-frequence-black',
      name: "Softride Frequence Street All-Day Comfort Shoes",
      subtitle: "Plush Foam Midsole Everyday Slip-On Runners",
      price: 3499,
      mrp: 6999,
      image: 'assets/puma/sale_softride_frequence_black.jpg',
      tags: ['sale', 'shoes', 'running', 'lifestyle', 'men', 'black']
    },
    {
      id: 'sale-smashic-comfort-brown',
      name: "Smashic Comfort Casual Sneakers",
      subtitle: "Tan Leather Casual Street Shoes",
      price: 2474,
      mrp: 4499,
      image: 'assets/puma/sale_smashic_comfort_brown.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'men', 'brown']
    },
    {
      id: 'sale-cricket-square-white-blue',
      name: "Cricket Square Men's Shoes",
      subtitle: "Pro Turf & Pitch Grip Cricket Spikes",
      price: 2749,
      mrp: 4999,
      image: 'assets/puma/sale_cricket_square_white_blue.jpg',
      tags: ['sale', 'shoes', 'sports', 'cricket', 'men', 'white', 'blue']
    },
    {
      id: 'sale-scend-pro-heatstride-black',
      name: "Scend Pro HeatStride Men's Running Shoes",
      subtitle: "PROFOAMLITE Cushioned Training Runners",
      price: 3499,
      mrp: 6999,
      image: 'assets/puma/sale_scend_pro_heatstride_black.jpg',
      tags: ['sale', 'shoes', 'running', 'men', 'black']
    },
    {
      id: 'sale-profoam-galactic-grey',
      name: "PROFOAM Galactic Sneakers",
      subtitle: "Silver Tech Mesh Lifestyle Sneakers",
      price: 3999,
      mrp: 7999,
      image: 'assets/puma/sale_profoam_galactic_grey.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'running', 'men', 'grey']
    },
    {
      id: 'sale-r78-soft-cushioned-black',
      name: "PUMA R78 Soft Cushioned Sneakers",
      subtitle: "Heritage 70s Running Style Sneakers",
      price: 2849,
      mrp: 4999,
      image: 'assets/puma/sale_r78_soft_cushioned_black.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'men', 'black']
    },
    {
      id: 'sale-smashic-womens-lavender',
      name: "Smashic Women's Comfort Casual Sneakers",
      subtitle: "Clean Tennis Shoes with Pastel Lavender Formstrip",
      price: 2159,
      mrp: 4499,
      image: 'assets/puma/sale_smashic_womens_lavender.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'women', 'white', 'purple']
    },
    {
      id: 'sale-smashic-comfort-black',
      name: "Smashic Comfort Casual Sneakers",
      subtitle: "Durable Full-Black Leather Everyday Shoes",
      price: 2339,
      mrp: 4499,
      image: 'assets/puma/sale_smashic_comfort_black.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'men', 'black']
    },
    {
      id: 'sale-fade-pro-white-turquoise',
      name: "Fade Pro Running Shoes",
      subtitle: "Air Mesh Lightweight Athletic Runners",
      price: 4399,
      mrp: 7999,
      image: 'assets/puma/sale_fade_pro_white_turquoise.jpg',
      tags: ['sale', 'shoes', 'running', 'men', 'white', 'turquoise']
    },
    {
      id: 'sale-blktop-rider-vibrant-pink',
      name: "Blktop Rider Vibrant Women's Sneakers",
      subtitle: "Colorblock Suede & Nylon Lifestyle Sneakers",
      price: 4319,
      mrp: 8999,
      image: 'assets/puma/sale_blktop_rider_vibrant_pink.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'women', 'pink', 'teal']
    },
    {
      id: 'sale-court-shatter-black-white',
      name: "Court Shatter Low Sneakers",
      subtitle: "Black & White Contrast Court Casual Shoes",
      price: 2879,
      mrp: 5999,
      image: 'assets/puma/sale_court_shatter_black_white.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'men', 'black', 'white']
    },
    {
      id: 'sale-rbd-tech-black-white-orange',
      name: "RBD Tech Sneakers",
      subtitle: "Mid-Cut Basketball-Inspired Street Sneakers",
      price: 3999,
      mrp: 7999,
      image: 'assets/puma/sale_rbd_tech_black_white_orange.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'basketball', 'men', 'black', 'orange']
    },
    {
      id: 'sale-softride-frequence-grey',
      name: "Softride Frequence Street All-Day Comfort Shoes",
      subtitle: "Grey Heather Knit Slip-On Comfort Runners",
      price: 3499,
      mrp: 6999,
      image: 'assets/puma/sale_softride_frequence_grey.jpg',
      tags: ['sale', 'shoes', 'running', 'lifestyle', 'men', 'grey']
    },
    {
      id: 'sale-galaxis-pro-neon-yellow',
      name: "Galaxis Pro Men's Running Shoes",
      subtitle: "Electric Yellow Performance Distance Runners",
      price: 3289,
      mrp: 6999,
      image: 'assets/puma/sale_galaxis_pro_neon_yellow.jpg',
      tags: ['sale', 'shoes', 'running', 'men', 'yellow', 'black']
    },
    {
      id: 'sale-galaxis-pro-black-neon',
      name: "Galaxis Pro Men's Running Shoes",
      subtitle: "Triple Black with Neon Volt Accent Road Runners",
      price: 3359,
      mrp: 6999,
      image: 'assets/puma/sale_galaxis_pro_black_neon.jpg',
      tags: ['sale', 'shoes', 'running', 'men', 'black', 'neon']
    },
    {
      id: 'sale-profoam-galactic-beige',
      name: "PROFOAM Galactic Sneakers",
      subtitle: "Neutral Tan & Sand Suede Chunky Sneakers",
      price: 3999,
      mrp: 7999,
      image: 'assets/puma/sale_profoam_galactic_beige.jpg',
      tags: ['sale', 'shoes', 'sneakers', 'lifestyle', 'men', 'beige', 'tan']
    }
  ];

  const MEN_SIZES = ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'];
  const WOMEN_SIZES = ['UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'];
  const KIDS_SHOE_SIZES = ['UK 10C', 'UK 11C', 'UK 12C', 'UK 13C', 'UK 1', 'UK 2', 'UK 3', 'UK 4', 'UK 5'];
  const KIDS_APPAREL_SIZES = ['Age 2-3Y', 'Age 3-4Y', 'Age 5-6Y', 'Age 7-8Y', 'Age 9-10Y', 'Age 11-12Y'];
  const ACCESSORY_SIZES = ['ONE SIZE'];
  const UK_SIZES = MEN_SIZES;
  const FREE_SHIPPING_THRESHOLD = 1999;
  const FALLBACK_IMG = 'assets/puma/fall_electrify_nitro.jpg';

  // Persistence Helpers
  function loadStorage(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function saveStorage(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {}
  }

  function formatINR(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN');
  }

  function escapeHTML(str) {
    return String(str || '').replace(/[&<>"']/g, ch => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[ch]));
  }

  // State
  let cart = loadStorage('puma_cart', []);
  let wishlist = loadStorage('puma_wishlist', []);
  let user = loadStorage('puma_user', null);
  let activeQuickViewProduct = null;
  let selectedQuickViewSize = 'UK 8';
  let toastTimer = null;

  // DOM Elements
  const backdrop = document.getElementById('drawerBackdrop');
  const cartDrawer = document.getElementById('cartDrawer');
  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const productModal = document.getElementById('productModal');
  const accountModal = document.getElementById('accountModal');
  const toastEl = document.getElementById('toast');
  const headerSearchInput = document.querySelector('.search-input');

  // Product Resolver (from catalog or card DOM attributes)
  function findProduct(productId) {
    const fromCatalog = CATALOG.find(p => p.id === productId);
    if (fromCatalog) return fromCatalog;

    // Fallback: extract from DOM card
    const cardEl = document.querySelector(`[data-id="${productId}"]`);
    if (cardEl) {
      const imgEl = cardEl.querySelector('img');
      const titleEl = cardEl.querySelector('.shoe-card-title, .ns-card-title, .editorial-content-title');
      const priceEl = cardEl.querySelector('.price-current, .price-sale, .ns-card-price');
      const mrpEl = cardEl.querySelector('.price-mrp, .price-old');

      const name = titleEl ? titleEl.textContent.trim() : (imgEl ? imgEl.alt : productId);
      const image = imgEl ? imgEl.getAttribute('src') : FALLBACK_IMG;
      let price = 6999;
      if (priceEl) {
        const num = parseInt(priceEl.textContent.replace(/[^0-9]/g, ''), 10);
        if (!isNaN(num)) price = num;
      }
      let mrp = null;
      if (mrpEl) {
        const num = parseInt(mrpEl.textContent.replace(/[^0-9]/g, ''), 10);
        if (!isNaN(num)) mrp = num;
      }

      const generated = {
        id: productId,
        name,
        subtitle: "Unisex Footwear",
        price,
        mrp,
        image,
        tags: ['puma', 'footwear']
      };
      CATALOG.push(generated);
      return generated;
    }

    return null;
  }

  // Toast System
  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toastEl.classList.remove('visible');
    }, 2800);
  }

  // Drawer & Modal Controller
  function closeAllPanels() {
    const curCart = cartDrawer || document.getElementById('cartDrawer');
    const curWish = wishlistDrawer || document.getElementById('wishlistDrawer');
    const curProd = productModal || document.getElementById('productModal');
    const curAcc = accountModal || document.getElementById('accountModal');
    const curBackdrop = backdrop || document.getElementById('drawerBackdrop');

    [curCart, curWish, curProd, curAcc].forEach(el => {
      if (el) {
        el.classList.remove('open');
        el.setAttribute('aria-hidden', 'true');
      }
    });
    if (curBackdrop) curBackdrop.classList.remove('visible');
    document.body.classList.remove('no-scroll');

    const searchDropdown = document.getElementById('searchDropdown');
    if (searchDropdown) searchDropdown.classList.remove('visible');
  }

  function openPanel(panelEl) {
    const el = panelEl || (typeof panelEl === 'string' ? document.getElementById(panelEl) : null);
    if (!el) return;
    closeAllPanels();
    el.classList.add('open');
    el.setAttribute('aria-hidden', 'false');
    const curBackdrop = backdrop || document.getElementById('drawerBackdrop');
    if (curBackdrop) curBackdrop.classList.add('visible');
    document.body.classList.add('no-scroll');
  }

  // Cart Management
  function addToCart(productId, size = 'UK 8', qty = 1) {
    const product = findProduct(productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId && item.size === size);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: productId, size, qty });
    }

    saveStorage('puma_cart', cart);
    renderCart();
    openPanel(cartDrawer);
    showToast(`Added ${product.name} (${size}) to your bag`);
  }

  function updateCartQty(productId, size, delta) {
    const idx = cart.findIndex(item => item.id === productId && item.size === size);
    if (idx === -1) return;

    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) {
      cart.splice(idx, 1);
    }

    saveStorage('puma_cart', cart);
    renderCart();
  }

  function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveStorage('puma_cart', cart);
    renderCart();
    showToast('Item removed from your bag');
  }

  function renderCart() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
      cartCount.textContent = totalQty;
      cartCount.dataset.empty = totalQty === 0 ? 'true' : 'false';
    }

    const drawerCount = document.getElementById('drawerCount');
    if (drawerCount) {
      drawerCount.textContent = `(${totalQty})`;
    }

    const cartBody = document.getElementById('cartBody');
    const cartFooter = document.getElementById('cartFooter');
    if (!cartBody) return;

    if (cart.length === 0) {
      cartBody.innerHTML = `
        <div class="empty-drawer-note">
          <strong>YOUR BAG IS EMPTY</strong>
          Explore our latest NITRO™, Speedcat, and Palermo drops to get started.
        </div>
      `;
      if (cartFooter) cartFooter.hidden = true;
      return;
    }

    let subtotal = 0;
    let totalMrp = 0;

    const rowsHTML = cart.map(entry => {
      const product = findProduct(entry.id);
      if (!product) return '';

      const linePrice = product.price * entry.qty;
      const lineMrp = (product.mrp || product.price) * entry.qty;
      subtotal += linePrice;
      totalMrp += lineMrp;

      return `
        <div class="cart-item-row">
          <img src="${product.image}" alt="${escapeHTML(product.name)}" onerror="this.src='${FALLBACK_IMG}'" />
          <div>
            <div class="cart-item-top">
              <h4>${escapeHTML(product.name)}</h4>
              <strong>${formatINR(linePrice)}</strong>
            </div>
            <div class="cart-item-sub">${escapeHTML(product.subtitle)} · Size ${escapeHTML(entry.size)}</div>
            <div class="cart-item-bottom">
              <div class="qty-control">
                <button type="button" data-qty-minus="${product.id}" data-size="${entry.size}" aria-label="Decrease quantity">−</button>
                <span>${entry.qty}</span>
                <button type="button" data-qty-plus="${product.id}" data-size="${entry.size}" aria-label="Increase quantity">+</button>
              </div>
              <button class="item-remove-btn" type="button" data-remove-cart="${product.id}" data-size="${entry.size}">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    const progressPct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
    const shippingText = remainingForFree === 0
      ? '🎉 You have unlocked FREE Express Delivery!'
      : `Add ${formatINR(remainingForFree)} more to unlock FREE Delivery`;

    cartBody.innerHTML = `
      <div class="shipping-meter">
        <div>${shippingText}</div>
        <div class="shipping-meter-bar">
          <div class="shipping-meter-fill" style="width: ${progressPct}%;"></div>
        </div>
      </div>
      ${rowsHTML}
    `;

    const savings = totalMrp - subtotal;
    const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 199;
    const grandTotal = subtotal + shippingFee;

    if (cartFooter) {
      cartFooter.hidden = false;
      cartFooter.innerHTML = `
        <div class="summary-line">
          <span>Subtotal</span>
          <span>${formatINR(subtotal)}</span>
        </div>
        ${savings > 0 ? `
          <div class="summary-line" style="color: var(--accent-red);">
            <span>You Save</span>
            <span>−${formatINR(savings)}</span>
          </div>
        ` : ''}
        <div class="summary-line">
          <span>Standard Delivery</span>
          <span>${shippingFee === 0 ? 'FREE' : formatINR(shippingFee)}</span>
        </div>
        <div class="summary-line total">
          <span>Estimated Total</span>
          <span>${formatINR(grandTotal)}</span>
        </div>
        <button class="btn-black btn-full" type="button" id="checkoutBtn">CHECKOUT NOW</button>
      `;
    }
  }

  // Wishlist Management
  function toggleWishlist(productId) {
    const product = findProduct(productId);
    if (!product) return;

    const exists = wishlist.includes(productId);
    if (exists) {
      wishlist = wishlist.filter(id => id !== productId);
      showToast(`Removed ${product.name} from wishlist`);
    } else {
      wishlist.push(productId);
      showToast(`Saved ${product.name} to wishlist`);
    }

    saveStorage('puma_wishlist', wishlist);
    syncHeartButtons();
    renderWishlist();
  }

  function syncHeartButtons() {
    const badge = document.getElementById('wishlistCount');
    if (badge) {
      badge.textContent = wishlist.length;
      badge.dataset.empty = wishlist.length === 0 ? 'true' : 'false';
    }

    document.querySelectorAll('.card-wishlist-btn').forEach(btn => {
      const id = btn.dataset.wishlistId;
      const isSaved = wishlist.includes(id);
      btn.classList.toggle('active', isSaved);
      btn.setAttribute('aria-label', `${isSaved ? 'Remove from' : 'Add to'} Wishlist`);
    });

    const modalWishBtn = document.getElementById('modalWishBtn');
    if (modalWishBtn && activeQuickViewProduct) {
      const isSaved = wishlist.includes(activeQuickViewProduct.id);
      modalWishBtn.textContent = isSaved ? 'SAVED IN WISHLIST ♥' : 'ADD TO WISHLIST ♡';
    }
  }

  function renderWishlist() {
    const body = document.getElementById('wishlistBody');
    const countLabel = document.getElementById('wishlistDrawerCount');
    if (countLabel) countLabel.textContent = `(${wishlist.length})`;
    if (!body) return;

    if (wishlist.length === 0) {
      body.innerHTML = `
        <div class="empty-drawer-note">
          <strong>YOUR WISHLIST IS EMPTY</strong>
          Tap the heart on any shoe or apparel to save your favorites here.
        </div>
      `;
      return;
    }

    body.innerHTML = wishlist.map(id => {
      const product = findProduct(id);
      if (!product) return '';
      return `
        <div class="cart-item-row">
          <img src="${product.image}" alt="${escapeHTML(product.name)}" onerror="this.src='${FALLBACK_IMG}'" />
          <div>
            <div class="cart-item-top">
              <h4>${escapeHTML(product.name)}</h4>
              <strong>${formatINR(product.price)}</strong>
            </div>
            <div class="cart-item-sub">${escapeHTML(product.subtitle)}</div>
            <div class="cart-item-bottom" style="margin-top: 10px;">
              <button class="btn-black" style="padding: 6px 14px; min-height: 32px; font-size: 11px;" type="button" data-wishlist-to-cart="${product.id}">
                MOVE TO BAG
              </button>
              <button class="item-remove-btn" type="button" data-remove-wishlist="${product.id}">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Quick-View Modal
  function openQuickView(productId) {
    const product = findProduct(productId);
    const modal = productModal || document.getElementById('productModal');
    if (!product || !modal) return;

    const isKids = product.id.startsWith('kids-') || (product.tags && product.tags.includes('kids'));
    const isAccessory = product.tags && (product.tags.includes('accessories') || product.tags.includes('backpacks') || product.tags.includes('caps') || product.tags.includes('masks') || product.tags.includes('bags'));
    const isWomen = product.id.startsWith('women-') || (product.tags && product.tags.includes('women'));
    
    let sizes = MEN_SIZES;
    let defaultSize = 'UK 8';
    if (isAccessory) {
      sizes = ACCESSORY_SIZES;
      defaultSize = 'ONE SIZE';
    } else if (isKids) {
      const isApparel = product.tags && (product.tags.includes('clothing') || product.tags.includes('tee') || product.tags.includes('pants') || product.tags.includes('sets'));
      sizes = isApparel ? KIDS_APPAREL_SIZES : KIDS_SHOE_SIZES;
      defaultSize = isApparel ? 'Age 5-6Y' : 'UK 1';
    } else if (isWomen) {
      sizes = WOMEN_SIZES;
      defaultSize = 'UK 5';
    }

    activeQuickViewProduct = product;
    selectedQuickViewSize = defaultSize;

    const isSaved = wishlist.includes(product.id);
    const content = document.getElementById('quickViewContent');
    if (!content) return;

    content.innerHTML = `
      <div class="quickview-layout">
        <div class="quickview-media">
          <img src="${product.image}" alt="${escapeHTML(product.name)}" onerror="this.src='${FALLBACK_IMG}'" />
        </div>
        <div class="quickview-info">
          <button class="side-drawer-close" type="button" data-close-drawer aria-label="Close modal">×</button>
          <span class="quickview-sub">${escapeHTML(product.subtitle)}</span>
          <h2>${escapeHTML(product.name)}</h2>
          <div class="quickview-price-tag">
            <span>${formatINR(product.price)}</span>
            ${product.mrp ? `<span class="price-mrp" style="margin-left: 8px;">${formatINR(product.mrp)}</span>` : ''}
          </div>
          <div class="size-select-row">
            <span>SELECT SIZE (UK)</span>
            <span style="color: var(--text-secondary); font-weight: 500;">INCLUSIVE OF ALL TAXES</span>
          </div>
          <div class="size-btn-grid">
            ${sizes.map(sz => `
              <button type="button" class="size-choice ${sz === selectedQuickViewSize ? 'selected' : ''}" data-size-choice="${sz}">${sz}</button>
            `).join('')}
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px; margin-top: auto;">
            <button class="btn-black btn-full" type="button" id="modalAddBtn">ADD TO BAG</button>
            <button class="btn-outline btn-full" type="button" id="modalWishBtn">
              ${isSaved ? 'SAVED IN WISHLIST ♥' : 'ADD TO WISHLIST ♡'}
            </button>
          </div>
        </div>
      </div>
    `;

    openPanel(modal);
  }

  // Account Modal
  function renderAccountModal() {
    const body = document.getElementById('accountBody');
    const dot = document.getElementById('accountDot');
    if (dot) dot.classList.toggle('visible', Boolean(user));
    if (!body) return;

    if (user) {
      body.innerHTML = `
        <div style="text-align: left;">
          <p style="margin: 0 0 4px; font-size: 11px; font-weight: 700; color: var(--text-secondary); letter-spacing: 0.08em; text-transform: uppercase;">WELCOME TO PUMA</p>
          <h3 style="font-family: var(--font-display); font-size: 26px; font-weight: 800; margin: 0 0 4px; text-transform: uppercase;">${escapeHTML(user.name)}</h3>
          <p style="margin: 0 0 20px; font-size: 13.5px; color: var(--text-secondary);">${escapeHTML(user.email)}</p>
          <hr class="footer-divider" style="margin: 16px 0;" />
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <a href="login.html" class="btn-black btn-full" style="text-align: center; text-decoration: none; padding: 10px;">MANAGE PUMA ACCOUNT</a>
            <button class="btn-outline btn-full" type="button" id="signOutBtn" style="padding: 10px;">SIGN OUT</button>
          </div>
        </div>
      `;
    } else {
      body.innerHTML = `
        <form id="pumaAccountForm" style="display: flex; flex-direction: column; gap: 14px;">
          <div class="form-group">
            <label for="accName" style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">Full Name</label>
            <input id="accName" type="text" placeholder="Enter your full name" required style="width: 100%; padding: 10px 12px; border: 1.5px solid #d0d0d0; font-family: inherit; font-size: 13.5px;" />
          </div>
          <div class="form-group">
            <label for="accEmail" style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">Email Address</label>
            <input id="accEmail" type="email" placeholder="you@example.com" required style="width: 100%; padding: 10px 12px; border: 1.5px solid #d0d0d0; font-family: inherit; font-size: 13.5px;" />
          </div>
          <div class="form-group">
            <label for="accPass" style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">Password</label>
            <input id="accPass" type="password" placeholder="At least 6 characters" minlength="6" required style="width: 100%; padding: 10px 12px; border: 1.5px solid #d0d0d0; font-family: inherit; font-size: 13.5px;" />
          </div>
          <button class="btn-black btn-full" type="submit" style="padding: 12px; font-size: 13.5px; margin-top: 4px;">SIGN IN / JOIN PUMA</button>
          <div style="text-align: center; margin-top: 6px;">
            <a href="login.html" style="font-size: 12px; font-weight: 700; color: #181818; text-decoration: underline;">Open Full Login &amp; Register Page &rsaquo;</a>
          </div>
        </form>
      `;
    }
  }

  // Live Search Dropdown Handler
  function initHeaderSearch() {
    if (!headerSearchInput) return;

    // Ensure search dropdown container exists
    let dropdown = document.getElementById('searchDropdown');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.id = 'searchDropdown';
      dropdown.className = 'search-dropdown-results';
      headerSearchInput.parentNode.appendChild(dropdown);
    }

    function renderSuggestions(query) {
      const q = (query || '').trim().toLowerCase();
      if (!q) {
        dropdown.classList.remove('visible');
        dropdown.innerHTML = '';
        return;
      }

      const matches = CATALOG.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q))
      ).slice(0, 6);

      if (matches.length === 0) {
        dropdown.innerHTML = `<div class="search-no-results">No products found for "<strong>${escapeHTML(query)}</strong>". Try searching for NITRO, Speedcat, or Palermo.</div>`;
      } else {
        dropdown.innerHTML = matches.map(item => `
          <div class="search-result-item" data-search-id="${item.id}">
            <img src="${item.image}" alt="${escapeHTML(item.name)}" onerror="this.src='${FALLBACK_IMG}'" />
            <div class="search-result-item-info">
              <h5>${escapeHTML(item.name)}</h5>
              <p>${escapeHTML(item.subtitle)}</p>
            </div>
            <span class="res-price">${formatINR(item.price)}</span>
          </div>
        `).join('');
      }

      dropdown.classList.add('visible');
    }

    headerSearchInput.addEventListener('input', e => renderSuggestions(e.target.value));

    headerSearchInput.addEventListener('focus', () => {
      if (headerSearchInput.value.trim()) renderSuggestions(headerSearchInput.value);
    });

    dropdown.addEventListener('click', e => {
      const itemEl = e.target.closest('[data-search-id]');
      if (itemEl) {
        const id = itemEl.dataset.searchId;
        dropdown.classList.remove('visible');
        headerSearchInput.value = '';
        openQuickView(id);
      }
    });

    // Close on click outside
    document.addEventListener('click', e => {
      if (!headerSearchInput.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('visible');
      }
    });

    const searchForm = headerSearchInput.closest('form');
    if (searchForm) {
      searchForm.addEventListener('submit', e => {
        const q = (headerSearchInput.value || '').trim().toLowerCase();
        if (!q) return;
        const matches = CATALOG.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.tags.some(t => t.includes(q))
        );
        if (matches.length > 0) {
          e.preventDefault();
          dropdown.classList.remove('visible');
          openQuickView(matches[0].id);
        }
      });
    }
  }

  // Smooth Carousel Scroll Integration
  function initCarouselArrows() {
    document.querySelectorAll('.carousel-arrow').forEach(btn => {
      btn.addEventListener('click', e => {
        const targetHref = btn.getAttribute('href');
        if (!targetHref || !targetHref.startsWith('#')) return;

        const targetEl = document.querySelector(targetHref);
        if (!targetEl) return;

        const rail = targetEl.closest('.carousel-row, .shoe-carousel-track');
        if (!rail) return;

        e.preventDefault();
        const isPrev = btn.getAttribute('aria-label') && btn.getAttribute('aria-label').toLowerCase().includes('prev');
        const scrollAmount = rail.clientWidth * 0.75;
        rail.scrollBy({
          left: isPrev ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      });
    });
  }

  // Inject Heart Icons and Quick-Add Buttons onto Cards across all pages
  function initProductCards() {
    const cards = document.querySelectorAll('.shoe-card, .ns-card, .product-card');
    cards.forEach(card => {
      const id = card.dataset.id;
      if (!id) return;

      const media = card.querySelector('.shoe-card-media, .product-image');
      if (media) {
        media.style.position = 'relative';

        // 1. Inject Heart / Wishlist button if not already present
        if (!media.querySelector('.card-wishlist-btn, .heart, [data-wishlist]')) {
          const isSaved = wishlist.includes(id);
          const heartBtn = document.createElement('button');
          heartBtn.type = 'button';
          heartBtn.className = 'heart card-wishlist-btn' + (isSaved ? ' active' : '');
          heartBtn.dataset.wishlist = id;
          heartBtn.dataset.wishlistId = id;
          heartBtn.setAttribute('aria-label', isSaved ? 'Remove from Wishlist' : 'Add to Wishlist');
          heartBtn.setAttribute('aria-pressed', String(isSaved));
          heartBtn.innerHTML = `
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          `;
          media.appendChild(heartBtn);
        }

        // 2. Inject Quick Add button if not already present
        if (!media.querySelector('.quick-add, [data-quick-add]')) {
          const quickBtn = document.createElement('button');
          quickBtn.type = 'button';
          quickBtn.className = 'quick-add';
          quickBtn.dataset.quickAdd = id;
          const isWomen = id.startsWith('women-') || id.includes('women') || id.includes('ballet');
          const defaultSize = isWomen ? 'UK 5' : 'UK 8';
          quickBtn.textContent = `+ QUICK ADD (${defaultSize})`;
          media.appendChild(quickBtn);
        }
      }
    });
  }

  // Document Event Delegation & Init
  function onReady() {
    initProductCards();
    initHeaderSearch();
    initCarouselArrows();
    renderCart();
    syncHeartButtons();
    renderWishlist();
    renderAccountModal();

    // Header Action Triggers
    const cartBtn = document.getElementById('cartButton');
    if (cartBtn) cartBtn.addEventListener('click', () => openPanel(cartDrawer));

    const wishBtn = document.getElementById('wishlistButton');
    if (wishBtn) wishBtn.addEventListener('click', () => {
      renderWishlist();
      openPanel(wishlistDrawer);
    });

    const accBtn = document.getElementById('accountButton');
    if (accBtn) accBtn.addEventListener('click', () => {
      renderAccountModal();
      openPanel(accountModal);
    });

    // Backdrop & Drawer Close Buttons
    const curBackdrop = backdrop || document.getElementById('drawerBackdrop');
    if (curBackdrop) curBackdrop.addEventListener('click', closeAllPanels);

    document.querySelectorAll('[data-close-drawer], [data-close-panel]').forEach(btn => {
      btn.addEventListener('click', closeAllPanels);
    });

    // Escape Key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeAllPanels();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

  // Global Click Delegation
  document.addEventListener('click', e => {
    // 1. Wishlist Heart Click on Card
    const cardHeart = e.target.closest('.card-wishlist-btn, .heart, [data-wishlist], [data-wishlist-id]');
    if (cardHeart) {
      e.preventDefault();
      e.stopPropagation();
      const id = cardHeart.dataset.wishlist || cardHeart.dataset.wishlistId;
      if (id) toggleWishlist(id);
      return;
    }

    // 2. Quick Add Click on Card
    const quickBtn = e.target.closest('.quick-add, [data-quick-add]');
    if (quickBtn) {
      e.preventDefault();
      e.stopPropagation();
      const id = quickBtn.dataset.quickAdd;
      if (id) {
        const isWomen = id.startsWith('women-') || id.includes('women') || id.includes('ballet');
        const defaultSize = isWomen ? 'UK 5' : 'UK 8';
        addToCart(id, defaultSize, 1);
        openPanel(cartDrawer || document.getElementById('cartDrawer'));
      }
      return;
    }

    // 3. Product Card Click -> Quick View Modal
    const card = e.target.closest('.shoe-card, .ns-card, .product-card');
    if (card) {
      const clickedLink = e.target.closest('a');
      const isSamePageAnchor = clickedLink && clickedLink.getAttribute('href') && clickedLink.getAttribute('href').startsWith('#');
      const isExternalNav = clickedLink && clickedLink.getAttribute('href') && !clickedLink.getAttribute('href').startsWith('#');

      if (!isExternalNav || e.target.closest('.shoe-card-media, .shoe-card-title, .ns-card-title, .product-image')) {
        const id = card.dataset.id;
        if (id) {
          e.preventDefault();
          openQuickView(id);
          return;
        }
      }
    }

    // 4. Size Choice in Modal
    const sizeBtn = e.target.closest('[data-size-choice]');
    if (sizeBtn) {
      selectedQuickViewSize = sizeBtn.dataset.sizeChoice;
      const modal = productModal || document.getElementById('productModal');
      if (modal) {
        modal.querySelectorAll('.size-choice').forEach(b => {
          b.classList.toggle('selected', b.dataset.sizeChoice === selectedQuickViewSize);
        });
      }
      return;
    }

    // 5. Add to Bag from Modal
    if ((e.target.id === 'modalAddBtn' || e.target.closest('#modalAddBtn')) && activeQuickViewProduct) {
      addToCart(activeQuickViewProduct.id, selectedQuickViewSize, 1);
      return;
    }

    // 6. Wishlist toggle from Modal
    if ((e.target.id === 'modalWishBtn' || e.target.closest('#modalWishBtn')) && activeQuickViewProduct) {
      toggleWishlist(activeQuickViewProduct.id);
      return;
    }

    // 7. Cart Quantity Minus
    const minusBtn = e.target.closest('[data-qty-minus]');
    if (minusBtn) {
      updateCartQty(minusBtn.dataset.qtyMinus, minusBtn.dataset.size, -1);
      return;
    }

    // 8. Cart Quantity Plus
    const plusBtn = e.target.closest('[data-qty-plus]');
    if (plusBtn) {
      updateCartQty(plusBtn.dataset.qtyPlus, plusBtn.dataset.size, 1);
      return;
    }

    // 9. Cart Item Remove
    const remCart = e.target.closest('[data-remove-cart]');
    if (remCart) {
      removeFromCart(remCart.dataset.removeCart, remCart.dataset.size);
      return;
    }

    // 10. Checkout Button
    if (e.target.id === 'checkoutBtn' || e.target.id === 'checkoutButton' || e.target.closest('#checkoutBtn, #checkoutButton')) {
      const count = cart.reduce((s, i) => s + i.qty, 0);
      cart = [];
      saveStorage('puma_cart', cart);
      renderCart();
      closeAllPanels();
      showToast(`🎉 Order placed for ${count} item(s)! Thank you for shopping with PUMA India.`);
      return;
    }

    // 11. Wishlist Move to Bag
    const moveCart = e.target.closest('[data-wishlist-to-cart], [data-move-to-cart]');
    if (moveCart) {
      const id = moveCart.dataset.wishlistToCart || moveCart.dataset.moveToCart;
      const isWomen = id.startsWith('women-') || id.includes('women') || id.includes('ballet');
      const sz = isWomen ? 'UK 5' : 'UK 8';
      addToCart(id, sz, 1);
      toggleWishlist(id);
      return;
    }

    // 12. Wishlist Item Remove
    const remWish = e.target.closest('[data-remove-wishlist]');
    if (remWish) {
      toggleWishlist(remWish.dataset.removeWishlist);
      return;
    }

    // 13. Sign Out
    if (e.target.id === 'signOutBtn' || e.target.closest('#signOutBtn')) {
      user = null;
      saveStorage('puma_user', null);
      renderAccountModal();
      showToast('Signed out of your PUMA account.');
      return;
    }
  });

  // Account Form Submit
  document.addEventListener('submit', e => {
    if (e.target.id === 'pumaAccountForm' || e.target.id === 'accountForm') {
      e.preventDefault();
      const name = (document.getElementById('accName') ? document.getElementById('accName').value : 'PUMA MEMBER').trim();
      const email = (document.getElementById('accEmail') ? document.getElementById('accEmail').value : '').trim();
      if (!name || !email) return;

      user = { name, email };
      saveStorage('puma_user', user);
      renderAccountModal();
      closeAllPanels();
      showToast(`Welcome to PUMA, ${name}!`);
    }
  });
})();

