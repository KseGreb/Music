particlesJS("particles-js", {
    "particles":{
    "number":{
        "value":1000,
        "density":{
            "enable":true,
            "value_area":800
        }
    },
    "color":{
        "value":"#FDFDBD"
    },

    "shape":{
        "type":["image","Star"],
        "stroke": {
            "width": 0,
            "color": "#000000"
        },
            "polygon": {
            "nb_sides": 5
        },
    "image":{
        "src":"https://upload.wikimedia.org/wikipedia/commons/c/c4/Figure_rythmique_deux_double_croches_lien_haut.svg",
        "width":100,
        "height":100
        }
    },
    
    "opacity":{
        "value":7,
        "random":true,
        "anim":{
            "enable":false,
            "speed":1,
            "opacity_min":0.1,
            "sync":false
        }
    },
    "size":{
        "value":6,
        "random":true,
        "anim":{
            "enable":false,
            "speed":2,
            "size_min":0.1,
            "sync":false
        }
    },
    "line_linked":{
        "enable":false,
        "distance":500,
        "color":"#ffffff",
        "opacity":4,
        "width":2
    },
    "move":{
        "enable":true,
        "speed":5,
        "direction":"top",
        "random":true,
        "straight":false,
        "out_mode":"out",
        "bounce":false,
        "attract":{
            "enable":false,
            "rotateX":600,
            "rotateY":1200
        }
    }
},
    "interactivity":{
        "detect_on":"canvas",
        "events":{
            "onhover":{
                "enable":true,
                "mode":"bubble"
            },
            "onclick":{
                "enable":true,
                "mode":"repulse"
            },
            "resize":true
        },
    "modes":{
        "grab":{
            "distance":150,
            "line_linked":{
                "opacity":1
            }
        },
        "bubble":{
            "distance":100,
            "size":10,
            "duration":2,
            "opacity":8,
            "speed":3
        },
        "repulse":{
            "distance":200,
            "duration":0.4
        },
        "push":{
            "particles_nb":4
        },
        "remove":{
            "particles_nb":2
        }
    }
},
    "retina_detect":true
});
    
let count_particles, stats, update; 
    stats = new stats; 
    stats.setMode(0); 
    stats.domElement.style.position = 'absolute'; 
    stats.domElement.style.left = '0px'; 
    stats.domElement.style.top = '0px'; 
    document.body.appendChild(stats.domElement); 
    count_particles = document.querySelector('.js-count-particles'); 
    update = function() { 
        stats.begin(); 
        stats.end(); 
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
        { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } 
        requestAnimationFrame(update); 
    }; 
        requestAnimationFrame(update);