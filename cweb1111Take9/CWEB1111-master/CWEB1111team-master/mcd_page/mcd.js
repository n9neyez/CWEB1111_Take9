


  //smooth scroll to Top
$("#top").click(function() {
  $('html, body').animate({
    scrollTop: 0
    }, 700);
    return false;
});
  //smooth scroll to Intro
$("#intro-click").click(function() {
  $('html, body').animate({
    scrollTop: 500
    }, 700);
});
  //smooth scroll to Charts
$("#charts-click").click(function() {
  $('html, body').animate({
    scrollTop: 980
    }, 700);
});


<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>

// CHART 1
var ctx = document.getElementById("myDoughnutChart");
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data : {
    labels: [
        'Breakfast',
        'Lunch',
        'Salads',
    'Sides',
    'Desserts',
    'Drinks'
    ],
    datasets: [{
      label: '*Total calories of each group ',
      data: [22120, 22340, 1620, 3195, 6325, 40150],
      backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],	
    }]
    
},

});
// CHART 2
var ctx2 = document.getElementById("myChart2");
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Big Breakfast with Hotcakes (Large Biscuit)', 'Chicken McNuggets (40 piece)', 'Premium Southwest Salad with Crispy Chicken', 'Large French Fries', 'McFlurry with M&M™s Candies (Medium)', 'Chocolate Shake (Large)'],
        datasets: [{
            label: '*Highest Calorie Item For Each Category',
            data: [1150, 1880, 450, 510, 930, 850],
            backgroundColor: [
                'rgba(154, 62, 135, 0.8)',
                'rgba(220, 20, 60, 0.8)',
                'rgba(55, 106, 186, 0.8)',
                'rgba(175, 92, 192, 0.8)',
                'rgba(200, 192, 155, 0.8)',
                'rgba(164, 255, 164, 0.8)'
            ],
            borderColor: [
                'rgba(164,99,132,1)',
                'rgba(154, 62, 135, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(175, 92, 92, 1)',
                'rgba(153, 102, 164, 1)',
                'rgba(164, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
// CHART 3
var ctx3 = document.getElementById("myChart3");
var myChart2 = new Chart(ctx3, {
    type: 'horizontalBar',
    data: {
        labels: ["Hash Brown", "Chicken McNuggets (4 piece)", "Premium Bacon Ranch Salad (without Chicken)", "Apple Slices", "Kids Ice Cream Cone", "Minute Maid 100% Apple Juice Box"],
        datasets: [{
          label: '*Lowest Calorie Item For Each Category',
            data: [150, 190, 140, 15, 45, 80],
            backgroundColor: [
                'rgba(0, 99, 150, 0.8)',
                'rgba(14, 162, 135, 0.8)',
                'rgba(220, 20, 60, 0.8)',
                'rgba(175, 92, 12, 0.8)',
                'rgba(20, 192, 155, 0.8)',
                'rgba(164, 25, 164, 0.8)'
            ],
            borderColor: [
                'rgba(64,99,132,1)',
                'rgba(154, 162, 15, 1)',
                'rgba(55, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(253, 12, 164, 1)',
                'rgba(104, 59, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }

