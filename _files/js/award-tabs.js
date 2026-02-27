function openYear(evt, yearName) {
    var i, awardyear_award_tabcontent, award_tabAwardYear;
    awardyear_award_tabcontent = document.getElementsByClassName("awardyear_award_tabcontent");
    for (i = 0; i < awardyear_award_tabcontent.length; i++) {
        awardyear_award_tabcontent[i].style.display = "none";
    }
    award_tabAwardYear = document.getElementsByClassName("award_tabAwardYear");
    for (i = 0; i < awardyear_award_tabcontent.length; i++) {
        award_tabAwardYear[i].className = award_tabAwardYear[i].className.replace(" active", "");
    }
    document.getElementById(yearName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();