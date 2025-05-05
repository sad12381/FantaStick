document.addEventListener('DOMContentLoaded', function() {
    // Preloader animation
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.main-content');
    const loaderProgress = document.querySelector('.loader-progress');
    
    // Simulate loading progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 10;
        loaderProgress.style.width = `${Math.min(progress, 100)}%`;
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    mainContent.style.display = 'block';
                    loadImages();
                }, 500);
            }, 500);
        }
    }, 200);

        });
        function smoothScrollToFilters() {
            const searchContainer = document.querySelector('.controls');
            if (!searchContainer) return;
            
            // Dynamic offset calculation
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const isMobile = window.innerWidth <= 768;
            
            const offset = isMobile ? 
                Math.min(headerHeight * 0.3, 50) : // Mobile: 30% of header height (max 50px)
                Math.min(headerHeight * 0.5, 100); // Desktop: 50% of header height (max 100px)
            
            window.scrollTo({
                top: searchContainer.offsetTop - offset,
                behavior: 'smooth'
            });
        
            }


    // Your existing product data and functions...
    const products = [
        // Your product data here (with optimized image paths)
    ];

    // Rest of your existing JavaScript...
;

document.addEventListener('DOMContentLoaded', function() {
    // Sample product data for Fantastic Stickers
    const products = [
        {
            id: 1,
            title: "coquette Collection Stickers",
            price: 25.99,
            category: "Collections",
            description: "Vibrant coquette-girlie-cute sticker collection with 15 unique designs.",
            rating: 4.8,
            reviews: 26,
            image: "./img/1.jpeg",
            isNew: true,
            inWishlist: false
        },
        {
            id: 2,
            title: "Custom Name Sticker",
            price: 12.99,
            category: "Custom",
            description: "Personalized name sticker with your choice of colors and font.",
            rating: 4.9,
            reviews: 14,
            image: "./img/name.jpeg",
            isNew: true,
            inWishlist: true
        },
        {
            id: 3,
            title: "Danger sleeping Stickers",
            price: 4.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746404430/_Danger__i_m_sleepy__Sticker_for_Sale_by_sofs-52_npgvqt.jpg",
            isNew: true,
            inWishlist: false
        },
        {
            id: 4,
            title: "cartoons Pack",
            price: 19.99,
            category: "Collections",
            description: "cartoons  sticker pack with 10 different caracters designs.",
            rating: 4.0,
            reviews: 34,
            image: "./img/cartoon.jpeg",
            isNew: false,
            inWishlist: false
        },
        {
            id: 5,
            title: "minimalist-retro Pack",
            price: 19.99,
            category: "Collections",
            description: "minimalist cool sticker pack with 10 different  designs.",
            rating: 3.8,
            reviews: 14,
            image: "./img/minimalist.jpeg",
            isNew: false,
            inWishlist: false
        },
        {
            id: 6,
            title: "Custom business logo sticker",
            price: 2.99,
            category: "Custom",
            description: "custom business logo more logos less price.",
            rating: 5.0,
            reviews: 30,
            image: "./img/blogo.jpeg",
            isNew: false,
            inWishlist: false
        },
        {
            id: 7,
            title: "Programmers collection Stickers",
            price: 24.99,
            category: "Collections",
            description: "Programmers collection stickers 10 different designs.",
            rating: 4.5,
            reviews: 28,
            image: "./img/prog.jpeg",
            isNew: true,
            inWishlist: false
        },
        {
            id: 8,
            title: "kawai collection",
            price: 14.99,
            category: "Collections",
            description: "kawai-cute girl  sticker collection with 8 different designs.",
            rating: 4.8,
            reviews: 14,
            image: "./img/kawai.jpeg",
            isNew: false,
            inWishlist: false
        },
        
        {
            id: 9,
            title: "silver collection",
            price: 24.99,
            category: "Collections",
            description: "cool silver lover old money  sticker collection with 10 different designs.",
            rating: 5.0,
            reviews: 27,
            image: "./img/silv2.jpeg",
            isNew: false,
            inWishlist: false
        },
        {
            id: 10,
            title: "gamer pack",
            price: 19.99,
            category: "Collections",
            description: "from gamer to gamer  sticker pack with 10 different designs.",
            rating: 4.0,
            reviews: 20,
            image: "./img/gamer.jpeg",
            isNew: false,
            inWishlist: false
        },
        {
            id: 11,
            title: "quotes pack",
            price: 14.99,
            category: "Collections",
            description: "cool , self express  sticker pack with 10 different designs.",
            rating: 4.0,
            reviews: 83,
            image: "./img/quotes.jpeg",
            isNew: false,
            inWishlist: false
        },
        {
            id: 12,
            title: "naroto-akatuski pack",
            price: 19.99,
            category: "Collections",
            description: "akatuski  sticker pack contains 10 stickers.",
            rating: 5.0,
            reviews: 62,
            image: "./img/akatuski.jpg",
            isNew: false,
            inWishlist: false
        },
        {
            id: 13,
            title: "One piece pack",
            price: 19.99,
            category: "Collections",
            description: "one piece  sticker pack with 10 different designs.",
            rating: 4.9,
            reviews: 120,
            image: "./img/op.jpeg",
            isNew: false,
            inWishlist: false
        },
        {
            id: 14,
            title: "Solo leveling pack",
            price: 19.99,
            category: "Collections",
            description: "Solo leveling  sticker pack with 10 different designs.",
            rating: 5.0,
            reviews: 12,
            image: "./img/2.jpeg",
            isNew: false,
            inWishlist: false
        },
        {
            id: 15,
            title: "Vinland saga pack",
            price: 19.99,
            category: "Collections",
            description: "Vinland sticker pack with 10 different designs.",
            rating: 4.6,
            reviews: 6,
            image: "./img/vinland.jpeg",
            isNew: false,
            inWishlist: false
        },
        {
            id: 16,
            title: "stu(dying) Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 14,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746404430/48c78b24-716b-4bd9-9366-dfae296ee164_ci2ztm.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 17,
            title: "Zeus Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 17,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746405394/zeus_gw2zmo.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 18,
            title: "i'm just a girl Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746405371/im_just_a_girl_kvtnsw.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 19,
            title: "Grove st 4Life Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746405338/Grove_Street_Graffiti_from_GTA_San_Andreas_hicwnf.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 20,
            title: "Mission Passed  Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746405338/t%C3%A9l%C3%A9chargement_3_plz4t6.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 21,
            title: "Spongebob window Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746405290/t%C3%A9l%C3%A9chargement_fbjkry.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 22,
            title: "luffy g5 Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746405311/t%C3%A9l%C3%A9chargement_2_ehbrnx.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 23,
            title: "Dirt block Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746405338/9c2e90c2-b33a-4d30-a892-4836eda1f641_kaanui.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 24,
            title: "Not today Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746404436/fe06205e-5e2b-4337-addd-0f7952769ce6_jjgmqx.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 25,
            title: "i'm not a robot Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746404435/Discover_inspiring_creative_sticker_ideas_to_ojr2ea.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 26,
            title: "fight club Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746406382/t%C3%A9l%C3%A9chargement_5_iznyjt.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 27,
            title: "Spongebob house Stickers",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746406422/Sponge_Bob_Stickers_for_Sale_cvzfsp.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 28,
            title: "shoked sponegbob and patrik Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746406423/Spongebob_n_patrick_vrdmen.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 29,
            title: " 3 Bears Stickers",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746406435/We_Bare_Bears_Stickers_for_Sale_iany0g.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 30,
            title: "it is what it is  Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746404436/Free_Shipping_on_orders_of_35_or_more___PLEASE_jqid09.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 31,
            title: "limited edition Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746404434/Beatrice_Sambucci___Violinist___Composer_h4yexl.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 32,
            title: "Get it done Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746404434/d1c78bee-54d0-438b-91e8-e294b31f74fc_wgycgu.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 33,
            title: "Good vibes  Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746404434/Add_some_positive_vibes_to_your_space_with_these_jioayc.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 34,
            title: "study def Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746404431/Witty_Love_Expressions_Click_the_link_Then_mvvccg.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 35,
            title: "Every thing is under ctrl Stickers",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746404431/84362e82-1c16-4b8e-8289-e6508e9dd46b_pjlulr.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 36,
            title: "where the food Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746404431/WTF-_wheres_the_food__Sticker_nkbg1z.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 37,
            title: "Mental break down Stickers",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746404431/4ffbd311-a261-4d3a-b8b9-96669da2bea0_th9lcm.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 44,
            title: "Remember why you started Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746404430/58eb3b9b-0096-4155-b2cc-932f82087219_yifgsr.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 38,
            title: "my mom said no Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746404430/Stickers_by_iFunnyDesigns___TeePublic_msvp2j.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 39,
            title: "Cutie Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746407134/_Cutie_pink_tumblr_aesthetic_grunge_sticker__Sticker_for_Sale_by_crispcucumber_siytef.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 40,
            title: "Prada Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746407135/86ef6f96-677b-4d02-a7f7-4e5912bad6a9_rugcon.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 41,
            title: "cat on books Stickers",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746407135/13a4359a-7038-4a1e-973d-0bd509bca50c_ntg8tx.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 42,
            title: "i have no enemies Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746407172/I_Have_No_Enemies_Vinland_Saga_Thorfinn_Black_Sticker_o999gm.jpg",
            isNew: true,
            inWishlist: false
        },{
            id: 43,
            title: "Cute cats  Sticker",
            price: 2.99,
            category: "Sticker",
            description: "high quality ",
            rating: 4.7,
            reviews: 12,
            image: "https://res.cloudinary.com/dbkl8vswo/image/upload/v1746407142/28776235-4884-43ce-ad89-b7b0baea943a_w8mcvc.jpg",
            isNew: true,
            inWishlist: false
        },
        {
            id: 44,
            title: "Custom Scan me  sticker",
            price: 2.99,
            category: "Custom",
            description: "custom scan Me moer scans, less price.",
            rating: 5.0,
            reviews: 21,
            image: "./img/qr.jpeg",
            isNew: false,
            inWishlist: false
        },
    ];

    // DOM elements
    const productsContainer = document.getElementById('products-container');
    const categoryFilter = document.getElementById('category-filter');
    const sortBy = document.getElementById('sort-by');
    const searchInput = document.getElementById('search');
    const paginationContainer = document.getElementById('pagination');

    // State variables
    let currentCategory = '';
    let currentSort = 'default';
    let currentSearch = '';
    let currentPage = 1;
    const productsPerPage = 6;

    // Initialize the app
    function init() {
        renderProducts();
        setupEventListeners();
        createBubbles();
    }

    // Create decorative bubbles
    function createBubbles() {
        const header = document.querySelector('header');
        for (let i = 0; i < 5; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            
            // Random size between 40 and 150px
            const size = Math.floor(Math.random() * 110) + 40;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            
            // Random position
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.top = `${Math.random() * 100}%`;
            
            // Random animation duration
            bubble.style.animationDuration = `${Math.floor(Math.random() * 20) + 10}s`;
            
            header.appendChild(bubble);
        }
    }

    // Set up event listeners
    function setupEventListeners() {
        categoryFilter.addEventListener('change', (e) => {
            currentCategory = e.target.value;
            currentPage = 1;
            renderProducts();
        });

        sortBy.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderProducts();
        });

        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase();
            currentPage = 1;
            renderProducts();
        });
    }

    // Filter, sort and paginate products
    function getFilteredProducts() {
        let filtered = [...products];

        // Filter by category
        if (currentCategory) {
            filtered = filtered.filter(product => product.category === currentCategory);
        }

        // Filter by search
        if (currentSearch) {
            filtered = filtered.filter(product => 
                product.title.toLowerCase().includes(currentSearch) || 
                product.description.toLowerCase().includes(currentSearch)
            );
        }

        // Sort products
        switch(currentSort) {
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            default:
                // Default sorting (by ID)
                filtered.sort((a, b) => a.id - b.id);
                break;
        }

        return filtered;
    }

    // Get products for current page
    function getPaginatedProducts(filteredProducts) {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        return filteredProducts.slice(startIndex, endIndex);
    }

    // Render products
    function renderProducts() {
        const filteredProducts = getFilteredProducts();
        const paginatedProducts = getPaginatedProducts(filteredProducts);
        
        // Clear container
        productsContainer.innerHTML = '';

        // Show no results message if no products match filters
        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; color: var(--fanta-orange);"></i>
                    <h3>No stickers found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
            paginationContainer.innerHTML = '';
            return;
        }

        // Render each product
        paginatedProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product-card';
            
            // Generate star rating HTML
            const fullStars = Math.floor(product.rating);
            const hasHalfStar = product.rating % 1 >= 0.5;
            let starsHtml = '';
            
            for (let i = 0; i < 5; i++) {
                if (i < fullStars) {
                    starsHtml += '<i class="fas fa-star"></i>';
                } else if (i === fullStars && hasHalfStar) {
                    starsHtml += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    starsHtml += '<i class="far fa-star"></i>';
                }
            }

            productElement.innerHTML = `
                <div class="image-container">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    ${product.isNew ? '<span class="product-badge">NEW</span>' : ''}
                    <div class="wishlist-btn ${product.inWishlist ? 'active' : ''}" data-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
                <div class="product-content">
                    <div class="product-header">
                        <h3 class="product-title">${product.title}</h3>
                        <span class="product-price">${product.price.toFixed(2)}MAD</span>
                    </div>
                    <span class="product-category">${product.category}</span>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">
                        <div class="stars">${starsHtml}</div>
                        <span class="reviews">(${product.reviews})</span>
                    </div>
                    <div class="product-footer">
                        <a href="https://instagram.com/fantastick.ma" class="btn btn-primary" target="_blank">
                            <i class="fab fa-instagram"></i> Shop Now
                        </a>
                    </div>
                </div>
            `;

            productsContainer.appendChild(productElement);
        });

        // Render pagination
        renderPagination(filteredProducts.length);
        
        // Add event listeners to wishlist buttons
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                product.inWishlist = !product.inWishlist;
                this.classList.toggle('active');
            });
        });
    }

    // Render pagination
    function renderPagination(totalProducts) {
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        
        // Clear pagination container
        paginationContainer.innerHTML = '';
        
        // Don't show pagination if only one page
        if (totalPages <= 1) return;
        
        // Previous button
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderProducts();
                smoothScrollToFilters();
            }
        });
        paginationContainer.appendChild(prevButton);
        
        // Page buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.className = currentPage === i ? 'active' : '';
            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderProducts();
                smoothScrollToFilters();
            });
            paginationContainer.appendChild(pageButton);
        }
        
        // Next button
        const nextButton = document.createElement('button');
        nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderProducts();
                smoothScrollToFilters();
            }
        });
        paginationContainer.appendChild(nextButton);
    }

    // Initialize the app
    init();
});
