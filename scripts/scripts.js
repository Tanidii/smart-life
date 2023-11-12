document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Function to toggle dark mode
    function toggleDarkMode() {
        const isDarkMode = body.classList.contains('dark-theme');
        console.log(`Manually toggling dark mode to ${isDarkMode ? 'Light' : 'Dark'}`);
        setTheme(!isDarkMode);
        localStorage.setItem('darkMode', !isDarkMode);
        updateDarkModeButton(!isDarkMode);
    }

    // Check for user preference in local storage
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Set initial theme based on user preference
    setTheme(isDarkMode);
    updateDarkModeButton(isDarkMode);

    darkModeToggle.addEventListener('click', function () {
        // Toggle dark mode
        isDarkMode = !isDarkMode; // Update isDarkMode here
        setTheme(isDarkMode);
        localStorage.setItem('darkMode', isDarkMode);
        updateDarkModeButton(isDarkMode);
    });

    function setTheme(isDarkMode) {
        if (isDarkMode) {
            console.log('Setting theme to Dark');
            body.classList.add('dark-theme');
        } else {
            console.log('Setting theme to Light');
            body.classList.remove('dark-theme');
        }
    }

    function updateDarkModeButton(isDarkMode) {
        const icon = isDarkMode ? 'fa-sun' : 'fa-moon';
        const text = isDarkMode ? ' Light Mode' : ' Dark Mode';

        darkModeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
        darkModeToggle.title = text;
    }



    // ---------------------------------------------------------------------------------------------------------------


    // Banner image rendering

    // Sample data representing image sources
    const carouselImages = [
        "./assets/banner/qedu.jpg",
        "./assets/banner/qedu-hbdg.jpg",
        "./assets/banner/qedu-scl.jpg"
        // Add more image sources as needed
    ];


    // Function to dynamically generate carousel items
    // Function to dynamically generate carousel items
    function generateCarouselItems() {
        const carouselInner = document.getElementById('dynamicCarouselInner');

        if (!carouselInner) {
            console.error('Carousel inner container not found.');
            return;
        }

        carouselImages.forEach((imageSrc, index) => {
            const item = document.createElement('div');
            item.classList.add('carousel-item');

            if (index === 0) {
                item.classList.add('active');
            }

            const img = document.createElement('img');
            img.src = imageSrc;
            img.classList.add('d-block', 'w-100', 'img-fluid', 'banner-img');
            img.alt = `Banner Image ${index + 1}`;

            item.appendChild(img);
            carouselInner.appendChild(item);
        });
    }

    // Call the function to generate dynamic carousel items when the page loads
    generateCarouselItems();


    // ---------------------------------------------------------------------------------------------------------------


    // Sample data representing blog posts
    const blogPostsData = [
        {
            title: 'Post Title 1',
            date: 'January 1, 2023',
            author: 'John Doe',
            excerpt: 'Short excerpt or summary of the blog post content...',
            image: './assets/blog/blog-img-1.jpg',
            link: 'link-to-full-post-1',
            descripsion: 'Velit adipisicing laboris quis excepteur quis cupidatat duis. Ex in anim fugiat id minim non irure incididunt. Consequat non enim laboris consequat esse commodo ut. Excepteur nostrud aliqua veniam dolore excepteur laborum culpa minim nostrud labore minim minim deserunt proident. Adipisicing laboris minim irure culpa voluptate consectetur ipsum exercitation minim excepteur elit aliqua. Aute culpa duis dolore id magna adipisicing dolore et magna dolore ullamco esse aute ullamco.'
        },
        {
            title: 'Post Title 2',
            date: 'January 2, 2023',
            author: 'Jane Smith',
            excerpt: 'Another short excerpt or summary...',
            image: './assets/blog/blog-img-2.jpg',
            link: 'link-to-full-post-2',
            descripsion: 'Velit adipisicing laboris quis excepteur quis cupidatat duis. Ex in anim fugiat id minim non irure incididunt. Consequat non enim laboris consequat esse commodo ut. Excepteur nostrud aliqua veniam dolore excepteur laborum culpa minim nostrud labore minim minim deserunt proident. Adipisicing laboris minim irure culpa voluptate consectetur ipsum exercitation minim excepteur elit aliqua. Aute culpa duis dolore id magna adipisicing dolore et magna dolore ullamco esse aute ullamco.'
        },
        {
            title: 'Post Title 3',
            date: 'January 3, 2023',
            author: 'Bob Johnson',
            excerpt: 'Yet another short excerpt or summary...',
            image: './assets/blog/blog-img-3.jpg',
            link: 'link-to-full-post-3',
            descripsion: 'Velit adipisicing laboris quis excepteur quis cupidatat duis. Ex in anim fugiat id minim non irure incididunt. Consequat non enim laboris consequat esse commodo ut. Excepteur nostrud aliqua veniam dolore excepteur laborum culpa minim nostrud labore minim minim deserunt proident. Adipisicing laboris minim irure culpa voluptate consectetur ipsum exercitation minim excepteur elit aliqua. Aute culpa duis dolore id magna adipisicing dolore et magna dolore ullamco esse aute ullamco.'
        },
        {
            title: 'Post Title 4',
            date: 'January 4, 2023',
            author: 'Alice Williams',
            excerpt: 'One more short excerpt or summary...',
            image: './assets/blog/blog-img-4.png',
            link: 'link-to-full-post-4',
            descripsion: 'Velit adipisicing laboris quis excepteur quis cupidatat duis. Ex in anim fugiat id minim non irure incididunt. Consequat non enim laboris consequat esse commodo ut. Excepteur nostrud aliqua veniam dolore excepteur laborum culpa minim nostrud labore minim minim deserunt proident. Adipisicing laboris minim irure culpa voluptate consectetur ipsum exercitation minim excepteur elit aliqua. Aute culpa duis dolore id magna adipisicing dolore et magna dolore ullamco esse aute ullamco.'
        },
        // Add more blog post data as needed
    ];

    // Function to show the modal with blog post details
    function showBlogModal(title, date, author, image, excerpt, description) {
        document.getElementById('blogModalLabel').textContent = title;
        document.getElementById('modalDate').textContent = `Published on ${date} by ${author}`;
        document.getElementById('modalAuthor').textContent = `Author: ${author}`;
        document.getElementById('modalImage').src = image;
        // document.getElementById('modalExcerpt').textContent = excerpt;
        document.getElementById('modalDescription').innerHTML = `<p>${description}</p>`;

        // Show the modal
        $('#blogModal').modal('show');
    }

    // Function to dynamically generate blog posts
    function generateBlogPosts() {
        const container = document.getElementById('dynamicBlogPosts');

        blogPostsData.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('col-md-4', 'mb-4');

            const card = document.createElement('div');
            card.classList.add('card');
            postElement.appendChild(card);

            const img = document.createElement('img');
            img.classList.add('card-img-top');
            img.src = post.image;
            img.alt = 'Blog Post Image';
            card.appendChild(img);

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            card.appendChild(cardBody);

            const title = document.createElement('h3');
            title.classList.add('card-title');
            title.textContent = post.title;
            cardBody.appendChild(title);

            const postMeta = document.createElement('p');
            postMeta.classList.add('card-text', 'post-meta');
            postMeta.textContent = `Published on ${post.date} by ${post.author}`;
            cardBody.appendChild(postMeta);

            const excerpt = document.createElement('p');
            excerpt.classList.add('card-text');
            excerpt.textContent = post.descripsion.slice(0, 80) + '...';;
            cardBody.appendChild(excerpt);

            const readMoreBtn = document.createElement('a');
            readMoreBtn.classList.add('btn', 'btn-primary');
            readMoreBtn.href = 'javascript:void(0)';
            readMoreBtn.addEventListener('click', () => showBlogModal(post.title, post.date, post.author, post.image, post.excerpt, post.descripsion));
            readMoreBtn.textContent = 'Read More';
            cardBody.appendChild(readMoreBtn);

            // Append each blog card to the container
            container.appendChild(postElement);
        });
    }

    // Call the function to generate dynamic blog posts when the page loads
    generateBlogPosts();

});
