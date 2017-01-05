
  $('.carousel1').slick({
    infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  $('.carousel2').slick({
    infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  $('.carousel3').slick({
    infinite: true,
    dots: true,
    arrows: false,
    centerMode: true,
    variableWidth: true
  });


  $('.carousel4').slick({
    infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  });
