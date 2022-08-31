//English
$(function(){
    $(".en").click(function(){
        //Header
        $(".nav").children().eq(0).text("Home");
        $(".nav").children().eq(1).text("Information");
        $(".nav").children().eq(2).text("Preparation");
        $(".nav").children().eq(3).text("Event");
        $(".nav").children().eq(4).text("Hotels");
//        $(".nav").children().eq(5).text("Itinerary");
        $(".selected-language").text("English");
        
        //Home Section
        $("#slide-1").text("Join Us In Our Greatest Adventure Yet!");
        $("#slide-2").text("Join Us In Our Greatest Adventure Yet!");
        $("#slide-3").text("Join Us In Our Greatest Adventure Yet!");
        $("#name-1").text("Elizabeth & Travis");
        $("#name-2").text("Elizabeth & Travis");
        $("#name-3").text("Elizabeth & Travis");
        $("#date-1").text("May 29, 2023");
        $("#date-2").text("May 29, 2023");
        $("#date-3").text("May 29, 2023");
        //Information Section
        $("#information-title").text("Our Wedding");
        $("#information-couple").text("The Bride & Groom");
        $("#story").text("High school sweethearts since May 29, 2013. It is only fitting we celebrate our wedding while celebrating 10 years together! Even after a decade, we are excited to see what the future holds for us and we look forward to having you all celebrate this life event with us!")
        $("#info-prep").text("What to Expect");
        $("#info-guide").text("In the coming months, we'll be planning our wedding. Within those months, we require some planning on your part as well. With that being said, we're sure there may be some questions and concerns you may have. We have created a guide for the months leading up to the grand celebration. The guide provides an outline of the steps to take to be prepared. Please do not worry or stress, think of this as a mini-vacation. Your only responsibility is to be able to make it to our wedding and we want to make it as easy and stress-free as possible for you. The next few sections will be the guide and its outline with recommendations on where you should be in your trip planning in the coming months, along with lodging and excursions you can take part in during your stay.");
        //Preparation Section 1
        $("#preparation-title").text("Guest Preparation");
        $("#time-frame-1").text("11-9 Months to go...");
        //$("#date").text("June-August");
        $("#1st-quarter").text("As you all know by now, we will be having a destination wedding in Mexico! After many days and nights of pondering, we finally decided on Mexico City! There is not much for you to worry about as a guest in this stage of the planning process. The only 2 things are to ensure you have your documentation (i.e passport) ready for traveling AND to start putting some paper in your piggy banks! If you do not already have a valid passport, we strongly recommend for you to begin the process to avoid any issues or delays.");
        //Preparation Section 2
        $("#time-frame-2").text("8-6 Months to go...");
        //$("#date").text("September-November");
        $("#2nd-quarter").text("This month will likely be the busiest month for you. If you haven't gotten your passport or any other documentation ready, that will need to be taken care of NOW. We recommend starting your search for plane tickets and hotel reservations. We have provided our recommended hotel under the 'Hotels' section. If you choose to book somewhere other than the recommended hotel, we have provided a few other hotels near our wedding event under the same section. The number of nights you stay depends on you, but we recommend arriving at least 1 day prior. We will be staying in Mexico City for a couple more days after the wedding participating in activities and expeditions if you would like to join us (itinerary coming soon). The airport you should fly into is the:");
        $("#airport").text("Mexico City International Airport; officially Aeropuerto Internacional Benito Juárez.");
        //Preparation Section 3
        $("#time-frame-3").text("5-3 Months to go...");
        //$("#date").text("December-February");
        $("#3rd-quarter").text("We are now down to 5 to 3 months before the wedding. If you have already booked everything and have all of your important traveling documents, you can sit back and relax. If you have yet to do any of the tasks then don't worry, there is still time. Please don't delay any further booking your hotel, plane ticket and even your passport to prevent any problems.");
        //Preparation Section 4
        $("#time-frame-4").text("2-1 Months to go...");
        //$("#date").text("March-April");
        $("#4th-quarter").text("It is down to the last 2 months before the wedding! Hopefully by now everyone has made their travel arrangements. We recommend double checking and confirming your flight and hotel bookings. We will be talking to everyone about their flight schedules so we can set up transportation for you to your hotel from the airport when you arrive.");
         //Event Section
         $("#event-title").text("The Big Event");
         $("#event-1").text("The Ceremony");
         $("#event-1-1").text("More information coming soon!");
         $("#event-2").text("The Reception");
         $("#event-2-1").text("More information coming soon!");
         //Hotels Section
         $("#hotels-title").text("Hotels");
         $("#main").text("☆ ☆ RECOMMENDED ☆ ☆");
         $("#hotel-1").text("The Hampton Inn Hotel is located in the Historic Center of Mexico City. This hotel is within walking distance of Zócalo Plaza, Metropolitan Cathedral, and many other historical buildings. We recommend this hotel to book for affordability, its close proximity to multiple activities, and the amenities this hotel offers. If you are looking to have a more luxurious stay with a little wiggle room in the budget then I would say go for the Gran Hotel as our second choice.");
         $("#hotel-2").text("Located in the Historic Center of Mexico City. This 4-star hotel is blocks away from Zócalo Plaza. Guests will be within easy walking distance of some of the city's most historic sites. This hotel has stylish guest rooms with a contemporary design.");
         $("#hotel-3").text("This historic, elegant hotel is located in the heart of Mexico City offering a stunning view of the Zócalo Plaza. The Gran Hotel is in walking distance to the Metropolitan Cathedral and the Presidential Palace.");
         $("#hotel-4").text("This gorgeous boutique hotel is located in Roma district in Mexico City. If you are going for a cozy home feel this is the one. It is a bit further than the other hotels but still surrounded by numerous bars, restaurants, cafes, shops, and nighclubs.");
    });
});

//Español
$(function(){
    $(".es").click(function(){
        //Encabezamiento
        $(".nav").children().eq(0).text("Inicio");
        $(".nav").children().eq(1).text("Información");
        $(".nav").children().eq(2).text("Preparación");
        $(".nav").children().eq(3).text("Evento");
        $(".nav").children().eq(4).text("Hoteles");
//        $(".nav").children().eq(5).text("Itinerario");
        $(".selected-language").text("Español");
        
        //Sección de inicio
        $("#slide-1").text("Acompáñanos A Celebrar Este Día Especial");
        $("#slide-2").text("Acompáñanos A Celebrar Este Día Especial");
        $("#slide-3").text("Acompáñanos A Celebrar Este Día Especial");
        $("#name-1").text("Elizabeth Y Travis");
        $("#name-2").text("Elizabeth Y Travis");
        $("#name-3").text("Elizabeth Y Travis");
        $("#date-1").text("29 de Mayo de 2023");
        $("#date-2").text("29 de Mayo de 2023");
        $("#date-3").text("29 de Mayo de 2023");
        //Información
        $("#information-title").text("Nuestra Boda");
        $("#information-couple").text("Los Novios");
        $("#story").text("Nuestra historia comienza el 29 de mayo de 2013. Nos conocimos en la escuela secundaria con un cupcake y desde ese día somos inseparables. Y ahora estamos orgullosos de presentarles para nuestro 10 años aniversario nos vamos a casar.  Incluso después de una década estamos emocionados de ver lo que nos trae la vida.");
        $("#info-prep").text("Qué Esperar");
        $("#info-guide").text("En los próximos meses estaremos preparado la boda. Dentro de esos meses necesitamos planificar de su parte también. Dicho esto, estamos seguros de que puede haber algunas preguntas o preocupación sobre todo esto. Hemos creado una guía para los meses previos a la gran celebración. La guía proporciona un esquema de los pasos para estar preparado. Por favor, no se preocupe ni se estrese, piense en esto como unas mini-vacaciones. Su única responsabilidad es poder a llegar a nuestra boda y queremos que sea lo más fácil y libre de estrés posible para usted. las siguientes secciones serán la guía y su esquema con recomendaciones sobre dónde debe estar en la planificación de su viaje en los próximos meses, junto con alojamiento y excursiones en las que puede participar durante su estancia.");
        //Preparación 1
        $("#preparation-title").text("Preparación De Invitados");
        $("#time-frame-1").text("11-9 Meses Por Delante...");
        //$("#date").text("Junio-Agosto");
        $("#1st-quarter").text("Como todos ustedes ya saben, vamos a tener una boda en México! Después de muchos días y noches de reflexionar, finalmente nos decidimos por la Ciudad de México! No hay mucho de lo que preocuparse como huésped en esta etapa del proceso de planificación. Las únicas 2 cosas son para asegurarse de que tiene su documentación (es decir, pasaporte) listo para viajar Y empezar a poner un poco de papel verde en la alcancía! Si aún no dispone de un pasaporte válido, le recomendamos que inicie el proceso para evitar problemas o retrasos.");
        //Preparación 2
        $("#time-frame-2").text("8-6 Meses Por Delante...");
        //$("#date").text("Septiembre-Noviembre");
        $("#2nd-quarter").text("Este mes será probablemente el mes más ocupado para usted. Si no ha preparado su pasaporte o cualquier otra documentación, eso deberá ser atendido AHORA. Recomendamos comenzar su búsqueda de boletos de avión y reservas de hotel. Hemos proporcionado nuestro hotel recomendado en la sección 'Hoteles'. Si elige reservar en otro lugar que no sea el hotel recomendado, hemos proporcionado algunos otros hoteles cerca de nuestro evento de bodas en la misma sección. El número de noches que te quedes depende de ti, pero te recomendamos llegar al menos 1 día antes. Nos quedaremos en la Ciudad de México por un par de días más después de la boda participando en actividades y expediciones si desea unirse a nosotros (itinerario próximamente).El aeropuerto al que debe volar es el:");
        $("#airport").text("Aeropuerto Internacional de la ciudad de México; oficialmente Aeropuerto Internacional Benito Juárez.");
        //Preparación 3
        $("#time-frame-3").text("5-3 Meses Por Delante...");
        //$("#date").text("Diciembre-Febrero");
        $("#3rd-quarter").text("Ahora hemos bajado a 5 a 3 meses antes de la boda. Si ya ha reservado todo y tiene todos sus documentos de viaje importantes, puede relajarse. Si usted tiene todavía hacer cualquiera de las tareas entonces no se preocupe, todavía hay tiempo. Por favor, no se retrase más en la reserva de su hotel, billete de avión e incluso su pasaporte para evitar cualquier problema.");
        //Preparación 4
        $("#time-frame-4").text("2-1 Meses Por Delante...");
        //$("#date").text("Marzo-Abril");
        $("#4th-quarter").text("Estamos en los ultimos meses y esperamos que todos hayan hecho sus arreglos de viaje. Le recomendamos que revisen y  confirme su boletos y habitación para prevenir problemas. Hablaremos con cada persona sobre sus horarios de vuelo para que podamos configurar el transporte desde el aeropuerto hasta el hotel.");
        //Evento
        $("#event-title").text("El Gran Evento");
        $("#event-1").text("La Ceremonia");
        $("#event-1-1").text("¡Más información próximamente!");
        $("#event-2").text("La Recepción");
        $("#event-2-1").text("¡Más información próximamente!");
        //Hoteles
        $("#hotels-title").text("Hoteles");
        $("#main").text("☆ ☆Recomendado☆ ☆");
        $("#hotel-1").text("El hotel Hampton Inn está situado en el centro histórico de la ciudad de México. Este hotel se encuentra a poca distancia a pie de la plaza Zócalo, la catedral metropolitana y muchos otros edificios históricos. Recomendamos reservar este hotel por su precio asequible, su proximidad a múltiples actividades y las comodidades que ofrece este hotel. Si está buscando tener una estancia más lujosa con un poco de margen de maniobra en el presupuesto, entonces diría que vaya por el Gran Hotel como nuestra segunda opción.");
        $("#hotel-2").text("Ubicado en el Centro Histórico de la Ciudad de México. Este hotel de 4 estrellas se encuentra a pocas cuadras del Zócalo Plaza. Los huéspedes estarán a poca distancia a pie de algunos de los lugares más históricos de la ciudad. Este hotel cuenta con elegantes habitaciones con un diseño contemporáneo.");
        $("#hotel-3").text("Este hotel histórico y elegante está situado en el corazón de la Ciudad de México y ofrece unas vistas impresionantes de la Plaza Zócalo. El Gran Hotel está a poca distancia a pie de la Catedral Metropolitana y del Palacio Presidencial.");
        $("#hotel-4").text("Este precioso hotel boutique está situado en el distrito de Roma en la Ciudad de México. Si vas por un ambiente acogedor, este es el lugar indicado. Está un poco más lejos que los otros hoteles, pero aún así está rodeado de numerosos bares, restaurantes, cafeterías, tiendas y discotecas.");

    });
});

