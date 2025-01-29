async function loadSection(containerId, sectionPath) {
    const container = document.getElementById(containerId);
    try {
      const response = await fetch(sectionPath);
      if (!response.ok) {
        throw new Error("Section not found");
      }
      const sectionHtml = await response.text();
      container.innerHTML = sectionHtml;
    } catch (error) {
      console.error(error);
      container.innerHTML = `<p>Failed to Load Section!</p>`;
    }
  }

async function initializeModal(modalPath) {  
    const modalResponse = await fetch(modalPath);
    if(!modalResponse.ok){
      throw new Error("Modal Not Found");
    }
    const modalHtml = await modalResponse.text();
    document.body.insertAdjacentHTML('beforeend',modalHtml);
  }

  async function startCarousel() {
    const swiper = new Swiper('.swiper', {
        effect : "coverflow",
        slidesPerView: 3,
        spaceBetween: 0,
        navigation: false,
        loop: true,  
        autoplay: {
            delay: 2000, 
            disableOnInteraction: false, 
        },
        coverflowEffect: {
          rotate: 10, 
          stretch: 0, 
          depth: 200, 
          modifier: 1, 
      },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
            1280: {
                slidesPerView: 3,
            },
        },
    });

    // Add custom navigation
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.addEventListener('click', () => {
        swiper.slidePrev();
    });

    nextBtn.addEventListener('click', () => {
        swiper.slideNext();
    });
}


async function loadItems() {
  const menuItems = [
    {
      image: "assets/images/unsplash_33GPuoFI7v8.png",
      title: "Home made pizza",
      price: 19,
      ratingStars: "2.12",
      ratingTime: "50-79 min",
    },
    {
      image: "assets/images/unsplash_60nzTP7_hMQ.png",
      title: "Home made pizza",
      price: 25,
      ratingStars: "3",
      ratingTime: "30-45 min",
    },
    {
      image: "assets/images/unsplash_CbNAuxSZTFo-2.png",
      title: "Home made pizza",
      price: 15,
      ratingStars: "4.12",
      ratingTime: "20-35 min",
    },
    {
      image: "assets/images/unsplash_MqT0asuoIcU-2.png",
      title: "Home made pizza",
      price: 25,
      ratingStars: "3",
      ratingTime: "30-45 min",
    },
    {
      image: "assets/images/unsplash_nP11TkjxJ7s.png",
      title: "Home made pizza",
      price: 15,
      ratingStars: "4.12",
      ratingTime: "20-35 min",
    },
    {
      image: "assets/images/unsplash_sejqj6Eaqe8.png",
      title: "Home made pizza",
      price: 12,
      ratingStars: "4.5",
      ratingTime: "15-25 min",
    },
    {
      image: "assets/images/unsplash_UxRhrU8fPHQ-2.png",
      title: "Home made pizza",
      price: 18,
      ratingStars: "4.7",
      ratingTime: "25-40 min",
    },
    {
      image: "assets/images/unsplash_Y6OgisiGBjM.png",
      title: "Home made pizza",
      price: 22,
      ratingStars: "4.9",
      ratingTime: "30-45 min",
    },
    {
      image: "assets/images/unsplash_MqT0asuoIcU-2.png",
      title: "Home made pizza",
      price: 25,
      ratingStars: "3",
      ratingTime: "30-45 min",
    },
    {
      image: "assets/images/unsplash_nP11TkjxJ7s.png",
      title: "Home made pizza",
      price: 15,
      ratingStars: "4.12",
      ratingTime: "20-35 min",
    },
    {
      image: "assets/images/unsplash_sejqj6Eaqe8.png",
      title: "Home made pizza",
      price: 12,
      ratingStars: "4.5",
      ratingTime: "15-25 min",
    },
    {
      image: "assets/images/unsplash_UxRhrU8fPHQ-2.png",
      title: "Home made pizza",
      price: 18,
      ratingStars: "4.7",
      ratingTime: "25-40 min",
    },
  ];
  
  const menuContainer = document.querySelector(".menu-items");
  
  // Dynamically generate menu items
  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    menuItem.innerHTML = `
      <div class="menu-item">
        <img src="${item.image}" alt="Home made pizza">
        <div class="name-price">
        <p>${item.title}</p>
        <p>₹${item.price}</p>
        </div>
        <div class="rating">
          <div class="rating-card">
            <span class="icon">★</span>
            <span class="rating">${item.ratingStars}</span>            
          </div>
          <div class = "rating-card time">
            <span class="time">${item.ratingTime}</span>
          </div>
          <img class ="add-to-cart" src = "assets/images/iconoir_add-to-cart.png"> 
        </div>
      </div>
    `;
  
    menuContainer.appendChild(menuItem);
    // carouselContainer.appendChild(menuItem);
  });
}
async function loadPopularItems(){
  const menuItems = [
    {
      image: "assets/images/unsplash_MqT0asuoIcU.png",
      title: "Home made pizza",
      price: 19,
      ratingStars: "2.12",
      ratingTime: "50-79 min",
    },
    {
      image: "assets/images/Group 6.png",
      title: "Delicious Burger",
      price: 25,
      ratingStars: "3",
      ratingTime: "30-45 min",
    },
    {
      image: "assets/images/pexels-mumma-oyens-8799602 1.png",
      title: "Creamy Pasta",
      price: 15,
      ratingStars: "4.12",
      ratingTime: "20-35 min",
    },
    {
      image: "assets/images/unsplash_33GPuoFI7v8.png",
      title: "Home made pizza",
      price: 19,
      ratingStars: "2.12",
      ratingTime: "50-79 min",
    },
    {
      image: "assets/images/unsplash_60nzTP7_hMQ.png",
      title: "Home made pizza",
      price: 25,
      ratingStars: "3",
      ratingTime: "30-45 min",
    },
    {
      image: "assets/images/unsplash_CbNAuxSZTFo-2.png",
      title: "Home made pizza",
      price: 15,
      ratingStars: "4.12",
      ratingTime: "20-35 min",
    },
    {
      image: "assets/images/unsplash_MqT0asuoIcU-2.png",
      title: "Home made pizza",
      price: 25,
      ratingStars: "3",
      ratingTime: "30-45 min",
    },
    {
      image: "assets/images/unsplash_nP11TkjxJ7s.png",
      title: "Home made pizza",
      price: 15,
      ratingStars: "4.12",
      ratingTime: "20-35 min",
    },
  ];

  const carouselItem = document.querySelector(".swiper-wrapper");
  menuItems.forEach((item) => {
    const popularItem = document.createElement("div");
    popularItem.classList.add("swiper-slide");
    popularItem.innerHTML = `
      <div class="menu-item">
        <img src="${item.image}" alt="Home made pizza">
        <div class="name-price">
          <p>${item.title}</p>
          <p>${item.price}</p>
        </div>
        <div class="rating">
          <div class="rating-card">
            <span class="icon">★</span>
            <span class="rating">${item.ratingStars}</span>
          </div>
          <div class="rating-card time">
            <span class="time">${item.ratingTime}</span>
          </div>
          <img class="add-to-cart" src="assets/images/iconoir_add-to-cart.png">
        </div>
      </div>`;
    carouselItem.appendChild(popularItem);
  });

  console.log(carouselItem);

  startCarousel();
}

async function addToCart() {
  const cartButtons = document.querySelectorAll(".add-to-cart");
  const cartIcon = document.querySelector(".ai-shopping-bag");
  console.log(cartButtons)
  cartButtons.forEach(button =>{
    button.addEventListener('click',() => {
      handleAddToCart();
    })
  })
  cartIcon.addEventListener('click',()=>{
    handleAddToCart();

  })
  
}

function handleAddToCart() {
  console.log("Handling Add To Cart");
  const modal = document.getElementById('cartModal');
  if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
  }
}

async function addModals(){
  const modal = document.getElementById('cartModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
}

async function requestDish(){
  const requestDishbutton  = document.querySelector(".request-dish-button")
  requestDishbutton.addEventListener("click",()=>{
    handleRequestDishClick();
  })
}

async function handleRequestDishClick() {
  console.log("Reqeust Dish Button Clicked")
  const modal = document.getElementById("requestDish");
  if (modal){
    modal.style.display = "flex";
    document.body.style.overflow = 'hidden';
  }
}


document.addEventListener('DOMContentLoaded', async () => {
    await loadSection('header', 'sections/header.html');
    await loadSection('hero',"sections/hero.html");
    await loadSection('menu',"sections/menu.html");
    await loadSection('popular',"sections/popular.html");
    await loadItems();
    await loadPopularItems();
    await loadSection('request',"sections/request.html")
    await loadSection('service',"sections/service.html")
    await loadSection('contact',"sections/contact-us.html");
    await loadSection('footer',"sections/footer.html")
    await addToCart();
    await requestDish();
    await initializeModal("modals/add-to-cart.html")
    await initializeModal("modals/request-dish.html")
  });


  