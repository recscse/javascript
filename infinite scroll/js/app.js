
(function () {

    const quotesEL = document.querySelector('.quotes');
    const loaderEL = document.querySelector('.loader');


    const getQuotes = async (page, limit) => {
        const API_URL = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
        const response = await fetch(API_URL);
    
        if (!response.ok) {
            throw new Error(`An error occured:${response.status}`);
        }
        return await response.json();
    }

    // show the quotes 

    const showQuotes = (quotes) => {
        quotes.forEach(quote => {
            const quoteEL = document.createElement('blockquote');
            quoteEL.classList.add('quote');

            quoteEL.innerHTML = `
            <span>${quote.id}</span>
            ${quote.quote}
            <footer>${quote.author}</footer>
        `;

            quotesEL.appendChild(quoteEL);
        });
    };

    const hideLoader = () => {
        loaderEL.classList.remove('show');
    };

    const showLoader = () => {
        loaderEL.classList.add('show');
    };

    const hasMoreQuotes = (page, limit, total) => {
        const startIndex = (page - 1) * limit + 1;
        return total === 0 || startIndex < total;
    };


    let currentPage = 1;
    const limit = 10;
    let total = 0;

    
    // Load quotes

    const loadQuotes = async (page, limit) => {
        // show the loader

        showLoader();

        // 0.5 second later
        setTimeout(async () => {
            try {
                if (hasMoreQuotes(page, limit, total)) {
                    const response = await getQuotes(page, limit);
                    showQuotes(response.data);
                    total = response.total;
                }
            } catch (error) {
                console.log(error.message)
            } finally {
                hideLoader();
            }
        
        }, 400);
    };

    window.addEventListener('scroll', () => {
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 5 &&
            hasMoreQuotes(currentPage, limit, total)) {
            currentPage++;
            loadQuotes(currentPage, limit);
        }
    }, {
        passive: true
    })

    loadQuotes(currentPage, limit);
})();



