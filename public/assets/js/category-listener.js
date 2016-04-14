function categorylistener() {

var type = [];

console.log("cat listener");
  $("li[rel='0']").click(function() {
    setTimeout(selectFood, 0);
  });

  $("li[rel='1']").click(function() {
    setTimeout(selectHalal, 0);
  });

  $("li[rel='2']").click(function() {
    setTimeout(selectNonHalal, 0);
  });

  $("li[rel='3']").click(function() {
    setTimeout(selectGroceries, 0);
  });

  $("li[rel='4']").click(function() {
    setTimeout(selectSupermarket, 0);
  });

  $("li[rel='5']").click(function() {
    setTimeout(selectConvenienceStore, 0);
  });

  $("li[rel='6']").click(function() {
    setTimeout(selectLeisure, 0);
  });

  $("li[rel='7']").click(function() {
    setTimeout(selectShoppingMall, 0);
  });

  $("li[rel='8']").click(function() {
    setTimeout(selectLanshop, 0);
  });

  $("li[rel='9']").click(function() {
    setTimeout(selectSpa, 0);
  });

  $("li[rel='10']").click(function() {
    setTimeout(selectGym, 0);
  });

  $("li[rel='11']").click(function() {
    setTimeout(selectMedical, 0);
  });

  $("li[rel='12']").click(function() {
    setTimeout(selectPublicHospital, 0);
  });

  $("li[rel='13']").click(function() {
    setTimeout(selectGP, 0);
  });

  $("li[rel='14']").click(function() {
    setTimeout(selectVeterinary, 0);
  });

  $("li[rel='15']").click(function() {
    setTimeout(selectServices, 0);
  });

  $("li[rel='16']").click(function() {
    setTimeout(selectPetrolKiosk, 0);
  });

  $("li[rel='17']").click(function() {
    setTimeout(selectPrinting, 0);
  });

  $("li[rel='18']").click(function() {
    setTimeout(selectLaundromats, 0);
  });


  function selectFood() {
    if ($("li[rel='0']").hasClass("selected")) {
      type.push("halal");
      type.push("non-halal");
      $("li[rel='1']").addClass("selected");
      $("li[rel='2']").addClass("selected");
    } else {
      type.pop("halal");
      type.pop("non-halal");
      $("li[rel='1']").removeClass("selected");
      $("li[rel='2']").removeClass("selected");
    }
  }

  function selectGroceries() {
    if ($("li[rel='3']").hasClass("selected")) {
      type.push("supermarket");
      type.push("convenience_store");
      $("li[rel='4']").addClass("selected");
      $("li[rel='5']").addClass("selected");
    } else {
      type.pop("supermarket");
      type.pop("convenience_store");
      $("li[rel='4']").removeClass("selected");
      $("li[rel='5']").removeClass("selected");
    }
  }

  function selectLeisure() {
    if ($("li[rel='6']").hasClass("selected")) {
      type.push("shopping_mall");
      type.push("lan_shop");
      type.push("spa");
      type.push("gym");
      $("li[rel='7']").addClass("selected");
      $("li[rel='8']").addClass("selected");
      $("li[rel='9']").addClass("selected");
      $("li[rel='10']").addClass("selected");
    } else {
      type.pop("shopping_mall");
      type.pop("lan_shop");
      type.pop("spa");
      type.pop("gym");
      $("li[rel='7']").removeClass("selected");
      $("li[rel='8']").removeClass("selected");
      $("li[rel='9']").removeClass("selected");
      $("li[rel='10']").removeClass("selected");
    }
  }


  function selectMedical() {
    if ($("li[rel='11']").hasClass("selected")) {
      type.push("public_hospital");
      type.push("gp");
      type.push("veterinary_clinic");
      $("li[rel='12']").addClass("selected");
      $("li[rel='13']").addClass("selected");
      $("li[rel='14']").addClass("selected");
    } else {
      type.pop("public_hospital");
      type.pop("gp");
      type.pop("veterinary_clinic");
      $("li[rel='12']").removeClass("selected");
      $("li[rel='13']").removeClass("selected");
      $("li[rel='14']").removeClass("selected");
    }
  }

  function selectServices() {
    if ($("li[rel='15']").hasClass("selected")) {
      type.push("petrol_kiosk");
      type.push("gp");
      type.push("veterinary_clinic");
      $("li[rel='16']").addClass("selected");
      $("li[rel='17']").addClass("selected");
      $("li[rel='18']").addClass("selected");
    } else {
      type.pop("petrol_kiosk");
      type.pop("gp");
      type.pop("veterinary_clinic");
      $("li[rel='16']").removeClass("selected");
      $("li[rel='17']").removeClass("selected");
      $("li[rel='18']").removeClass("selected");
    }
  }

  function selectHalal() {
      if ($("li[rel='1']").hasClass("selected")) {
        type.push("halal");
      }
      else {
        type.pop("halal");
      }
      remap(type)
  }

  function selectNonHalal() {
    if ($("li[rel='2']").hasClass("selected")) {
      type.push("non-halal");
    }
    else {
      type.pop("non-halal");
    }
      remap(type)
  }

  function selectSupermarket() {
    if ($("li[rel='4']").hasClass("selected")) {
      type.push("supermarket");
    }
    else {
      type.pop("supermarket");
    }
      remap(type)
  }

  function selectConvenienceStore() {
    if ($("li[rel='5']").hasClass("selected")) {
      type.push("convenience_store");
    }
    else {
      type.pop("convenience_store");
    }
      remap(type)
  }

  function selectShoppingMall() {
    if ($("li[rel='7']").hasClass("selected")) {
      type.push("shopping_mall");
    }
    else {
      type.pop("shopping_mall");
    }
      remap(type)
  }

  function selectLanshop() {
    if ($("li[rel='8']").hasClass("selected")) {
      type.push("lanshop");
    }
    else {
      type.pop("lanshop");
    }
      remap(type)
  }

  function selectSpa() {
    if ($("li[rel='9']").hasClass("selected")) {
      type.push("spa");
    }
    else {
      type.pop("spa");
    }
      remap(type)
  }

  function selectGym() {
    if ($("li[rel='10']").hasClass("selected")) {
      type.push("gym");
    }
    else {
      type.pop("gym");
    }
      remap(type)
  }

  function selectPublicHospital() {
    if ($("li[rel='12']").hasClass("selected")) {
      type.push("public_hospital");
    }
    else {
      type.pop("public_hospital");
    }
      remap(type)
  }

  function selectGP() {
    if ($("li[rel='13']").hasClass("selected")) {
      type.push("gp");
    }
    else {
      type.pop("gp");
    }
      remap(type)
  }

  function selectVeterinary() {
    if ($("li[rel='14']").hasClass("selected")) {
      type.push("veterinary_clinic");
    }
    else {
      type.pop("veterinary_clinic");
    }
      remap(type)
  }

  function selectPetrolKiosk() {
    if ($("li[rel='16']").hasClass("selected")) {
      type.push("petrol_kiosk");
    }
    else {
      type.pop("petrol_kiosk");
    }
      remap(type)
  }

  function selectPrinting() {
    if ($("li[rel='16']").hasClass("selected")) {
      type.push("printing");
    }
    else {
      type.pop("printing");
    }
      remap(type)
  }

  function selectLaundromats() {
    if ($("li[rel='16']").hasClass("selected")) {
      type.push("laundromats");
    }
    else {
      type.pop("laundromats");
    }
      remap(type)
  }

  function remap(type) {
    if (type.length == 0) {
      var jsonPath = '/api/listings/'
    }
    else {
      var jsonPath = '/api/custom?type=' + type.join(',');
    }
    loadGoogleMap(jsonPath);
  }


}
