function categorylistener() {

var type = [];

console.log("cat listener");
  $("li[rel='0']").click(function() {
    setTimeout(selectFood, 0);
  });

  $("li[rel='1']").click(function() {
    setTimeout(selectHalal, 0);
    console.log("sekect halalll");
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
        alert("halal pushed");
      }
      else {
        type.pop("halal");
        alert("halal popped");
      }
      alert("Type: " + type)
      remap(type)
  }

  function selectNonHalal() {
    if ($("li[rel='2']").hasClass("selected")) {
      type.push("non-halal");
      alert("non-halal pushed")
    }
    else {
      type.pop("non-halal");
      alert("non-halal popped");
    }
      alert("Type: " + type)
      remap(type)
  }

  function selectSupermarket() {
    if ($("li[rel='4']").hasClass("selected")) {
      type.push("supermarket");
      alert("supermarket pushed")
    }
    else {
      type.pop("supermarket");
      alert("supermarket pushed popped");
    }
      alert("Type: " + type)
      remap(type)
  }

  function selectConvenienceStore() {
    if ($("li[rel='5']").hasClass("selected")) {
      type.push("convenience_store");
      alert("convenience store pushed")
    }
    else {
      type.pop("convenience_store");
      alert("convenience store popped");
    }
      alert("Type: " + type)
      remap(type)
  }

  function selectShoppingMall() {
    if ($("li[rel='7']").hasClass("selected")) {
      type.push("shopping_mall");
      alert("shopping mall pushed")
    }
    else {
      type.pop("shopping_mall");
      alert("shopping mall popped");
    }
      alert("Type: " + type)
      remap(type)
  }

  function selectLanshop() {
    if ($("li[rel='8']").hasClass("selected")) {
      type.push("lanshop");
      alert("lanshop pushed")
    }
    else {
      type.pop("lanshop");
      alert("lanshop popped");
    }
      alert("Type: " + type)
      remap(type)
  }

  function selectSpa() {
    if ($("li[rel='9']").hasClass("selected")) {
      type.push("spa");
      alert("spa pushed")
    }
    else {
      type.pop("spa");
      alert("spa popped");
    }
      alert("Type: " + type)
      remap(type)
  }

  function selectGym() {
    if ($("li[rel='10']").hasClass("selected")) {
      type.push("gym");
      alert("gym pushed")
    }
    else {
      type.pop("gym");
      alert("gym popped");
    }
      alert("Type: " + type)
      remap(type)
  }

  function selectPublicHospital() {
    if ($("li[rel='12']").hasClass("selected")) {
      type.push("public_hospital");
      alert("public_hospital pushed")
    }
    else {
      type.pop("public_hospital");
      alert("public_hospital popped");
    }
      alert("Type: " + type)
      remap(type)
  }

  function selectGP() {
    if ($("li[rel='13']").hasClass("selected")) {
      type.push("gp");
      alert("gp pushed")
    }
    else {
      type.pop("gp");
      alert("gp popped");
    }
      alert("Type: " + type)
      remap(type)
  }

  function selectVeterinary() {
    if ($("li[rel='14']").hasClass("selected")) {
      type.push("veterinary_clinic");
      alert("veterinary_clinic pushed")
    }
    else {
      type.pop("veterinary_clinic");
      alert("veterinary_clinic popped");
    }
      alert("Type: " + type)
      remap(type)
  }

  function selectPetrolKiosk() {
    if ($("li[rel='16']").hasClass("selected")) {
      type.push("petrol_kiosk");
      alert("petrol_kiosk pushed")
    }
    else {
      type.pop("petrol_kiosk");
      alert("petrol_kiosk popped");
    }
      alert("Type: " + type)
      remap(type)
  }

  function selectPrinting() {
    if ($("li[rel='16']").hasClass("selected")) {
      type.push("printing");
      alert("printing pushed")
    }
    else {
      type.pop("printing");
      alert("printing popped");
    }
      alert("Type: " + type)
      remap(type)
  }

  function selectLaundromats() {
    if ($("li[rel='16']").hasClass("selected")) {
      type.push("laundromats");
      alert("laundromats pushed")
    }
    else {
      type.pop("laundromats");
      alert("laundromats popped");
    }
      alert("Type: " + type)
      remap(type)
  }





  function remap(type) {
    alert("Number of Items" + type.length);
    if (type.length == 0) {
      var jsonPath = '/api/listings/'
    }
    else {
      var jsonPath = '/api/custom?type=' + type.join(',');
    }
    loadGoogleMap(jsonPath);
  }


}
