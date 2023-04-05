$(document).ready(function() {
    $.ajax( {
        url: "https://one-month-jquery.s3.us-west-2.amazonaws.com/apartments.json",
        dataType: "json",
        success: function(response) {
            $.each(response.apartments, function(i, apartment) {
                
                var apartmentClass = apartment.city.toLowerCase().replace(" ", "-");

                var listing = "<a href='#' id=" + apartment.id + " class='list-group-item " + apartmentClass + " listings list-group-item-action' aria-current='true' ><div class='d-flex w-100 justify-content-between'><h5 class='mb-1'>" + apartment.description + " / " + apartment.bedrooms + " BR / " + apartment.price + "</h5><small class='text-body-secondary'>3 days ago</small></div><p class='mb-1'>" + apartment.neighborhood +"</p></a>";

                $(".apartments").append(listing);
            });
        },
        error: function(error) {
            console.log(error);
        }
    });

    $(".filter").click(function() {

        $(".filter").removeClass("active");
        $(this).addClass("active");
        
        $(".listings").show();

        var city = $(this).attr("id");  
        if (city!=="all") {
            $(".listings").not("." + city).css("display", "none");  
        }
    });

    $(document).on("click", ".listings", function() {

        var id = $(this).attr("id");  
        $.ajax( {
            url: "https://one-month-jquery.s3.us-west-2.amazonaws.com/apartments.json",
            dataType: "json",
            success: function(response) {
                var selectedApartment = $.grep(response.apartments, function(apartment) {
                    return apartment.id == id;
                })
                var address = selectedApartment[0].address;

                const myModal = new bootstrap.Modal('#myModal');

                myModal.toggle();

                $( ".btn-primary" ).click(function() {
                    window.open("https://maps.google.com/?q=" + address);
                    $( "div.modal-body" ).replaceWith( "<div class='modal-body'>The location is already opened in the new tab.</div>" );
                });
 
            },
            error: function(error) {
                console.log(error);
            }
        });

    }); 
});


