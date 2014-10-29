//= require jquery.cookie
//= require jquery.easing.js
//= require owl.carousel.js

(function($){
  $(document).ready(function() {
    var api_key = "y4g5v9q3ejafxl71fhrjc1o2";
    var etsy_url = "https://openapi.etsy.com/v2";
    var etsy_date = new Date();
    var guest_id = $.cookie('guest_id');
    var listing = $.cookie('listing');
    var checkout_url = $.cookie('checkout_url');
    
    etsy_date.setTime(etsy_date.getTime() + (5 * 60 * 1000));
    
    
   // function getCard() {
   //   url = etsy_url + "/guests/" + guest_id + "/carts/" + :cart_id + ".js?&api_key=" + api_key;
   // }

    //======================================================
    function addToCard(listing_id) {
      console.log("guest_id " + guest_id)
      url = etsy_url + "/guests/" + guest_id + "/carts.js?listing_id=" + listing_id + "&api_key=" + api_key;

      $.ajax({
        url: url,
        type: 'POST',
        dataType: 'jsonp',
        success: function(data) {
          if (data.ok) {
            console.log(data);
          } else {
            alert(data.error);
          }
        }
      });
    }
    
    //======================================================
    function getGuest() {
      if(guest_id) {
        return guest_id;
      }
      else {
        console.log("no guest_id");
        $.ajax({
          url: etsy_url + "/guests/generator.js?api_key=" + api_key,
          dataType: 'jsonp',
          success: function(data) {
            if (data.ok) {
              console.log(data.results[0].guest_id);
              guest_id = data.results[0].guest_id;
              $.cookie('guest_id', data.results[0].guest_id, {
                expires: etsy_date
              });
              
              checkout_url = data.results[0].checkout_url;
              $.cookie('checkout_url', data.results[0].checkout_url, {
                expires: etsy_date
              });
            } else {
              alert(data.error);
            }
          }
        });
      }
    }
    
    function getSections () {
      
      url = etsy_url + "/shops/tresorsdestbarth/sections.js?" +
                "language=fr&api_key=" + api_key;
                
      $.ajax({
        url: url,
        dataType: 'jsonp',
        success: function(data) {
          if (data.ok) {
            console.log(data)
            $('#etsy-sections').empty();
            if (data.count > 0) {
              $.each(data.results, function(i, item) {
                $("<li><a class='shop_section' href='" + item.shop_section_id + "'>" + item.title + "<span class='pull-right'>(" + item.active_listing_count + ")</span></a></li>").appendTo('#etsy-sections');
              });
            } else {
              $('<p>No results.</p>').appendTo('#etsy-sections');
            }
          } else {
            $('#etsy-sections').empty();
            alert(data.error);
          }

          $("a.shop_section").on("click", function(e) {
            e.preventDefault();
            console.log($(this).attr("href"));
          });
        }
      });           
    }
    
    function findListingImage(product_id) {
      
      //url = etsy_url + "/listings/" + product_id + "/images.js?api_key=" + api_key;
      url = etsy_url + "/listings/" + product_id + ".js?api_key=" + api_key;
      console.log(url)
      $.ajax({
        url: url,
        dataType: 'jsonp',
        success: function(data) {
          if (data.ok) {
            if (data.count > 0) {
              $.each(data.results, function(i, item) {
                console.log(item);
                
                //.url_570xN
              });
            } else {
              $('<p>No results.</p>').appendTo('#etsy-sections');
            }
          } else {
            alert(data.error);
          }
        }
      });
    }
    
    //======================================================
    function getListing() {
      console.log("getListing")
      url = etsy_url + "/shops/tresorsdestbarth/listings/active.js?" +
                "language=fr&fields=listing_id,title,price,description,quantity,url,currency_code,shop_section_id&includes=Images,MainImage&api_key=" + api_key;

      $('#etsy-images').empty();

      $.ajax({
        url: url,
        dataType: 'jsonp',
        success: function(data) {
          if (data.ok) {
            //console.log(data.results);
            listing = data.results;
            $.cookie('listing', data.results, {
              expires: etsy_date
            });
            
            $('#etsy-images').empty();
            if (data.count > 0) {
              $.each(data.results, function(i, item) {
               console.log(item)
               $("<div class='col-md-6'><a class='thumbnail' href='"+ item.url + "' data-listing-id='" + item.listing_id + "' data-shop-section-id='" + item.shop_section_id + "'>" + 
               "<div class='background-image-holder'><img src='" + item.MainImage.url_570xN + "'/></div>" +
               "<div class='caption-wrapper'><div class='caption'><h3>" + item.title + "</h3><p>&rarr;</p><p class='th-price'>" + item.currency_code + " " + item.price + "</p></div></div></a></div>").appendTo("#etsy-images")
              });
            } else {
              $('<p>No results.</p>').appendTo('#etsy-images');
            }
          } else {
            $('#etsy-images').empty();
            alert(data.error);
          }
          
          // Append .background-image-holder <img>'s as CSS backgrounds

          $('.background-image-holder').each(function() {
            var imgSrc = $(this).children('img').attr('src');
            $(this).css('background', 'url("' + imgSrc + '")');
            $(this).children('img').hide();
            $(this).css('background-position', '50% 0%');
          });

          $("a.thumbnail").on("click", function(e) {
            e.preventDefault();
            var product;
            var o;
            var listing_id = $(this).data("listing-id");
            console.log(listing_id);
            
            
            for ( var i = 0; i < listing.length; i++ ) {
              o = listing[i];
              if ( o.listing_id == listing_id ) {
                product = o;
                break;
              }
            }
            
            //findListingImage(listing_id);
            setProduct(product);
            //addToCard($(this).data("listing-id"));
          });
        }
      });

    }
    
    function setProduct(data) {
      $('#product-title').html(data.title);
      $('#product-link').attr("href", data.url);
      $('#product-listing-id').html(data.listing_id);
      $('#product-currency-code').html(data.currency_code);
      $('#product-price').html(data.price);
      $('#product-description').html(data.description);
      //
      var carousel = $("#product-images");
      var content = "";
      if(typeof carousel.data('owlCarousel') == "undefined") {
        carousel.empty();
      } else {
        carousel.data('owlCarousel').destroy();
      }

      $.each(data.Images, function(i, item) {
        content += "<img src='" + item.url_fullxfull + "'/>";
      });
      carousel.html(content);
      carousel.owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        autoHeight : true,
        singleItem: true
        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
      });
      $('body, html').animate({ scrollTop: $(".navbar-header").height() }, 1500, 'easeOutExpo' );
    }
    
    //console.log(etsy_date);
    //console.log(guest_id);
    //console.log(checkout_url);
    getListing();
    getSections();
    getGuest();
    

})
})(jQuery);