$(function () {


    $("#download-google-play").on("click", function () {
        AnalyticsHandler.trackClick('google-play');
    });

    $("#download-app-store").on("click", function () {
        AnalyticsHandler.trackClick('app-store');
    });

    $("#waitlist-form").on("submit",function(e){
        e.preventDefault();

        console.log('Registering to waitlist');


        if(frbDb.ref('weather-me/leads').push({
            email: $("#userEmail").val()
        })) {
            // console.log('Lead captured');
            $("#close-modal").click(); //close modal

        }

        
        







    })


});