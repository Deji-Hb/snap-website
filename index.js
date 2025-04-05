document.addEventListener("DOMContentLoaded", function() {
    const menubutton = document.querySelector("#menu-btn");
    const icon_close = document.querySelector("#icon-close");
    const navlinks = document.querySelector(".navlinks");
    const company = document.querySelector("#company");
    const company_dd = document.querySelector("#company-dd");
    const features = document.querySelector("#features");
    const features_dd = document.querySelector("#features-dd"); 

    

    menubutton.addEventListener("click", function() {
        menubutton.style.display = "none";
        navlinks.style.display = "block";
    });

    icon_close.addEventListener("click", function() {
        navlinks.style.display = "none";
        menubutton.style.display = "block";
    });

    features.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the default link behavior
        if (features_dd.style.display === "none" || company_dd.style.display === "") {
            features_dd.style.display = "block";
        } else {
            features_dd.style.display = "none";
        }
    });

    company.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the default link behavior
        if (company_dd.style.display === "none" || company_dd.style.display === "") {
            company_dd.style.display = "block";
        } else {
            company_dd.style.display = "none";
        }
    });
 
});
