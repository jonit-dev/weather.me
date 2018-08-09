class AnalyticsHandler {

    static trackClick(source) {

        /* Read total clicks =========================================== */

        frbDb.ref(`weather-me/${source}`).once('value').then(function (snapshot) {

            let clicksData = snapshot.val();

            if (clicksData !== null) {
                let totalClicks = clicksData.n;

                // console.log('Adding one more click');

                /* Add click =========================================== */
                frbDb.ref(`weather-me/${source}`).set({
                    n: totalClicks + 1,
                    action: 'download'
                });
            } else { //if its the first click

                // console.log('Setting first click variable');

                frbDb.ref(`weather-me/${source}`).set({
                    n: 1,
                    action: 'download'
                });
            }

        }, function (error) {
            console.log('An error happened while trying to read your data.');
            console.log(error.code);
        });


    }

} 