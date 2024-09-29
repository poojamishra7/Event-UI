$(document).ready(function() {
    $('.accordion-button').on('click', function() {
        $(this).find('::before').toggleClass('collapsed');
    });
});


$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        mouseDrag:false,
        loop:true,
        margin:2,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    }); 
    
    $('.owl-prev').click(function() {
        $active = $('.owl-item .item.show');
        $('.owl-item .item.show').removeClass('show');
        $('.owl-item .item').removeClass('next');
        $('.owl-item .item').removeClass('prev');
        $active.addClass('next');
        if($active.is('.first')) {
            $('.owl-item .last').addClass('show');
            $('.first').addClass('next');
            $('.owl-item .last').parent().prev().children('.item').addClass('prev');
        }
        else {
            $active.parent().prev().children('.item').addClass('show');
            if($active.parent().prev().children('.item').is('.first')) {
                $('.owl-item .last').addClass('prev');
            }
            else {
                $('.owl-item .show').parent().prev().children('.item').addClass('prev');
            }
        }
    });
    
    $('.owl-next').click(function() {
        $active = $('.owl-item .item.show');
        $('.owl-item .item.show').removeClass('show');
        $('.owl-item .item').removeClass('next');
        $('.owl-item .item').removeClass('prev');
        $active.addClass('prev');
        if($active.is('.last')) {
            $('.owl-item .first').addClass('show');
            $('.owl-item .first').parent().next().children('.item').addClass('prev');
        }
        else {
            $active.parent().next().children('.item').addClass('show');
            if($active.parent().next().children('.item').is('.last')) {
                $('.owl-item .first').addClass('next');
            }
            else {
                $('.owl-item .show').parent().next().children('.item').addClass('next');
            }
        }
    });
    
    });


    document.addEventListener('DOMContentLoaded', function() {
        // Define images for each category
        const categoryImages = {
            weddings: [
                "assets/images/Weddings/Rectangle 14.png",
                "assets/images/Weddings/Rectangle 18.png",
                "assets/images/Weddings/Rectangle 15.png",
                "assets/images/Weddings/Rectangle 19.png",
                "assets/images/Weddings/Rectangle 17.png",
                "assets/images/Weddings/Rectangle 16.png"
            ],
            engagement: [
                "assets/images/Weddings/Rectangle 17.png",
                "assets/images/Weddings/Rectangle 16.png",
               "assets/images/Weddings/Rectangle 14.png",
                "assets/images/Weddings/Rectangle 18.png",
                "assets/images/Weddings/Rectangle 15.png",
                "assets/images/Weddings/Rectangle 19.png"
                
                // Add more images as needed
            ],
            birthday: [
                "assets/images/Weddings/Rectangle 15.png",
                "assets/images/Weddings/Rectangle 19.png",
                "assets/images/Weddings/Rectangle 14.png",
                "assets/images/Weddings/Rectangle 18.png",
                "assets/images/Weddings/Rectangle 17.png",
                "assets/images/Weddings/Rectangle 16.png"
                // Add more images as needed
            ],
            anniversary: [
                "assets/images/Weddings/Rectangle 19.png",
                "assets/images/Weddings/Rectangle 14.png",
                "assets/images/Weddings/Rectangle 18.png",
                "assets/images/Weddings/Rectangle 15.png",
                "assets/images/Weddings/Rectangle 17.png",
                "assets/images/Weddings/Rectangle 16.png"
                // Add more images as needed
            ]
        };
    
        // Handle clicks on category headings
        document.querySelectorAll('.best-selling h4').forEach(function(item) {
            item.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                const categoryImageList = categoryImages[category] || [];
    
                // Update images based on the selected category
                document.querySelectorAll('.gallery-img2').forEach((img, index) => {
                    img.src = categoryImageList[index] || 'assets/images/default.png'; // Use a default image if no images are available
                });
            });
        });
    });
    